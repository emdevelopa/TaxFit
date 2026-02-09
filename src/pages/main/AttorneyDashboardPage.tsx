import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/auth-store';
import { useProfile } from '@/hooks/auth/use-auth';
import { useVerificationStatus } from '@/hooks/attorney/use-verification';
import { 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Loader2, 
  Users,
  Clock,
  BarChart3,
  CheckCircle,
  UserCheck,
  ArrowRight,
  Shield,
  XCircle,

} from 'lucide-react';
import Card from '@/components/common/Card';
import Avatar from '@/components/common/Avatar';
import { formatCurrency } from '@/utils/helpers';
import Layout from '@/components/layout/Layout';

// --- MOCK DATA ---
interface AttorneyMetrics {
    billableHours: number;
    activeClients: number;
    totalRevenue: number;
    pendingTasks: number;
}

const mockAttorneyMetrics: AttorneyMetrics = {
    billableHours: 125.5,
    activeClients: 12,
    totalRevenue: 5_250_000,
    pendingTasks: 5,
};

// --- VERIFICATION BANNER COMPONENT ---
function VerificationBanner({ status, rejectionReason }: { status: string; rejectionReason?: string }) {
  if (status === 'approved') return null; // Don't show banner if already verified

  const configs: Record<string, {
    bg: string;
    border: string;
    iconBg: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    ctaColor: string;
  }> = {
    draft: {
      bg: 'bg-gradient-to-r from-amber-50 to-orange-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100',
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: 'Get Verified to Start Accepting Clients',
      description: 'Submit your professional credentials and documents to get verified. Verified attorneys appear in search results and can accept bookings.',
      ctaText: 'Start Verification',
      ctaLink: '/attorney/verification',
      ctaColor: 'bg-amber-600 hover:bg-amber-700',
    },
    pending: {
      bg: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Verification Under Review',
      description: 'Your submission is being reviewed by our admin team. This typically takes 1-3 business days. We\'ll notify you once the review is complete.',
      ctaText: 'View Status',
      ctaLink: '/attorney/verification',
      ctaColor: 'bg-blue-600 hover:bg-blue-700',
    },
    rejected: {
      bg: 'bg-gradient-to-r from-red-50 to-rose-50',
      border: 'border-red-200',
      iconBg: 'bg-red-100',
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      title: 'Verification Needs Attention',
      description: rejectionReason || 'Your verification was not approved. Please review the feedback and resubmit your application.',
      ctaText: 'Fix & Resubmit',
      ctaLink: '/attorney/verification',
      ctaColor: 'bg-red-600 hover:bg-red-700',
    },
  };

  const config = configs[status] || configs.draft;

  return (
    <div className={`${config.bg} ${config.border} border rounded-xl p-6 mb-8`}>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className={`${config.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg">{config.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{config.description}</p>
        </div>
        <Link
          to={config.ctaLink}
          className={`${config.ctaColor} text-white px-5 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors flex-shrink-0 mt-2 sm:mt-0`}
        >
          {config.ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// --- MAIN DASHBOARD COMPONENT ---
export default function AttorneyDashboardContent() {
  const { user } = useAuthStore();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: verificationData, isLoading: verificationLoading } = useVerificationStatus();

  if (profileLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      </Layout>
    );
  }

  const userData = profile?.user || user;
  const attorneyProfile = profile?.attorney;
  const firstName = userData?.fullName?.split(' ')[0] || 'Attorney';
  const firmName = attorneyProfile?.firmName;
  const hourlyRate = attorneyProfile?.hourlyRate;
  const isVerified = attorneyProfile?.isVerifiedAttorney;
  const verificationStatus = verificationData?.verificationStatus || (isVerified ? 'approved' : 'draft');
  
  const metrics = mockAttorneyMetrics;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Avatar
                src={userData?.avatarUrl || undefined}
                name={userData?.fullName || 'Attorney'}
                size="lg"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Welcome, {firstName}!
                  </h1>
                  {isVerified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                      <CheckCircle className="w-3.5 h-3.5" /> Verified
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {firmName ? `Managing Dashboard for ${firmName}` : "Attorney Practice Overview"}
                </p>
              </div>
            </div>
          </div>

          {/* ✅ VERIFICATION STATUS BANNER */}
          {!verificationLoading && (
            <VerificationBanner 
              status={verificationStatus} 
              rejectionReason={verificationData?.rejectionReason}
            />
          )}

          {/* Practice Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-600 text-sm mb-2">Active Clients</div>
                  <div className="text-3xl font-bold text-secondary-600">
                    {metrics.activeClients}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Ready for consultation</div>
                </div>
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-600 text-sm mb-2">Billable Hours (MTD)</div>
                  <div className="text-3xl font-bold text-primary-600">
                    {metrics.billableHours} hrs
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Potential: {formatCurrency(metrics.billableHours * (hourlyRate || 50000))}
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </Card>

            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-600 text-sm mb-2">Total Revenue (YTD)</div>
                  <div className="text-3xl font-bold text-green-600">
                    {formatCurrency(metrics.totalRevenue)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Based on closed cases</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </Card>
            
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-600 text-sm mb-2">Pending Tasks</div>
                  <div className="text-3xl font-bold text-red-600">
                    {metrics.pendingTasks}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Unread messages & approvals</div>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions & Activity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <h2 className="text-xl font-semibold mb-4">Practice Management</h2>
              <div className="space-y-3">
                {/* Verification Link (shown when not verified) */}
                {!isVerified && (
                  <Link
                    to="/attorney/verification"
                    className="block px-4 py-3 border-2 border-amber-300 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-amber-900">🛡️ Complete Verification</div>
                        <div className="text-sm text-amber-700">Get verified to appear in search results and accept clients.</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )}

                <Link
                  to="/attorney/clients"
                  className="block px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Client & Case Portal</div>
                      <div className="text-sm text-gray-600">Manage all open cases and client communications.</div>
                    </div>
                    <Users className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </Link>

                <Link
                  to="/attorney/billing"
                  className="block px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Billing & Invoicing</div>
                      <div className="text-sm text-gray-600">Generate invoices, track payments, and set rates.</div>
                    </div>
                    <DollarSign className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </Link>

                <Link
                  to="/attorney/resources"
                  className="block px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Tax Law Updates</div>
                      <div className="text-sm text-gray-600">Access the latest Nigerian tax legislation and news.</div>
                    </div>
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </Link>

                <Link
                  to="/profile/settings"
                  className="block px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Update Profile Visibility</div>
                      <div className="text-sm text-gray-600">Control your listing status and public information.</div>
                    </div>
                    <UserCheck className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </Link>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold mb-4">Recent Client Activity</h2>
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <p className="text-gray-600">No new client messages today</p>
                <p className="text-sm text-gray-500 mt-1">
                  You have {metrics.pendingTasks} unread tasks in the client portal.
                </p>
              </div>
            </Card>
          </div>

          {/* Profile Completion Banner */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <UserCheck className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Increase Your Visibility</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Complete your bio and add specializations to attract more high-value clients.
                </p>
                <Link
                  to="/profile/settings"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors group"
                >
                  <span>Complete Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-green-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}