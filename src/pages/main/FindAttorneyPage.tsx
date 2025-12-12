import React from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Filter, MapPin, Star, Briefcase, ArrowRight } from 'lucide-react';
import SearchBar from '@/components/common/SearchBar';
import Button from '@/components/common/Button';
import Layout from '@/components/layout/Layout';
import { useAuthStore } from '@/store/auth-store';

// Mock attorney data - replace with actual API call
const mockAttorneys = [
  {
    id: '1',
    fullName: 'Adebayo Johnson',
    firmName: 'Johnson Tax Associates',
    location: 'Lagos, Nigeria',
    yearsOfExperience: 15,
    hourlyRate: 50000,
    rating: 4.8,
    reviewCount: 124,
    specializations: ['Corporate Tax', 'International Tax', 'Tax Planning'],
    bio: 'Experienced tax attorney specializing in corporate and international tax law.',
  },
  {
    id: '2',
    fullName: 'Chioma Okafor',
    firmName: 'Okafor & Partners',
    location: 'Abuja, Nigeria',
    yearsOfExperience: 12,
    hourlyRate: 45000,
    rating: 4.9,
    reviewCount: 98,
    specializations: ['Tax Litigation', 'Estate Planning', 'VAT Compliance'],
    bio: 'Skilled in tax dispute resolution and estate planning strategies.',
  },
  {
    id: '3',
    fullName: 'Ibrahim Musa',
    firmName: 'Musa Legal Advisors',
    location: 'Port Harcourt, Nigeria',
    yearsOfExperience: 10,
    hourlyRate: 40000,
    rating: 4.7,
    reviewCount: 76,
    specializations: ['Business Tax', 'Transfer Pricing', 'Tax Advisory'],
    bio: 'Expert in business taxation and transfer pricing compliance.',
  },
  {
    id: '4',
    fullName: 'Folake Adeyemi',
    firmName: 'Adeyemi Tax Solutions',
    location: 'Lagos, Nigeria',
    yearsOfExperience: 18,
    hourlyRate: 55000,
    rating: 5.0,
    reviewCount: 142,
    specializations: ['High Net Worth', 'International Tax', 'Wealth Management'],
    bio: 'Specialized in tax planning for high net worth individuals and families.',
  },
];

function AttorneyCard({ attorney }: { attorney: typeof mockAttorneys[0] }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleHireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAuthenticated) {
      navigate(`/attorney/${attorney.id}/hire`);
    } else {
      navigate(`/login?redirect=/attorney/${attorney.id}`);
    }
  };

  return (
    <div className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 group">
      {/* Content - Clickable to view profile */}
      <Link to={`/attorney/${attorney.id}`} className="block p-8">
        {/* Header */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            {attorney.fullName}
          </h3>
          <p className="text-sm text-primary-600 font-light mb-4">
            {attorney.firmName}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-gray-900">{attorney.rating}</span>
              <span className="text-gray-500">({attorney.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{attorney.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>{attorney.yearsOfExperience} years</span>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {attorney.specializations.map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs text-gray-700 font-light"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
          {attorney.bio}
        </p>

        {/* Hourly Rate */}
        <div className="mb-6">
          <div className="text-2xl font-light text-gray-900">
            ₦{attorney.hourlyRate.toLocaleString()}
            <span className="text-sm text-gray-500 font-light">/hour</span>
          </div>
        </div>
      </Link>

      {/* Footer - Hire Button (requires login) */}
      <div className="px-8 pb-8 pt-4 border-t border-gray-100">
        {!isAuthenticated && (
          <div className="mb-3 p-2 bg-blue-50 text-xs text-blue-800 font-light text-center">
            Sign in required to hire
          </div>
        )}
        
        <Button
          onClick={handleHireClick}
          className="w-full bg-secondary-900 hover:bg-secondary-800 text-white group/btn"
          size="lg"
        >
          <span className="flex items-center justify-center gap-2">
            {isAuthenticated ? 'Hire Attorney' : 'Sign in to Hire'}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default function FindAttorneyPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = React.useState(initialQuery);
  const [showMobileFilters, setShowMobileFilters] = React.useState(false);

  // Filter attorneys based on search
  const filteredAttorneys = mockAttorneys.filter(attorney => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      attorney.fullName.toLowerCase().includes(query) ||
      attorney.firmName.toLowerCase().includes(query) ||
      attorney.location.toLowerCase().includes(query) ||
      attorney.specializations.some(spec => spec.toLowerCase().includes(query))
    );
  });

  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-24 border-b border-gray-200">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-primary-500"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-light">
                    Attorney Directory
                  </span>
                </div>

                <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 tracking-tight leading-[0.95]">
                  Connect with
                  <br />
                  <span className="italic font-light text-primary-600">expert advisors</span>
                </h1>

                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
                  Browse our network of qualified tax attorneys. View profiles, check credentials, 
                  and find the perfect partner for your tax strategy.
                </p>

                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 text-sm text-blue-800 font-light">
                  <strong>Note:</strong> You can browse attorneys freely. Sign in required to hire.
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  onSearch={() => {}}
                  placeholder="Search by name, specialization, or location..."
                  size="lg"
                  className="max-w-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200">
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">
                  {filteredAttorneys.length}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">
                  {filteredAttorneys.length === 1 ? 'Attorney' : 'Attorneys'} found
                </div>
              </div>
              <div className="md:hidden">
                <Button
                  variant="outline"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Attorney Grid */}
            {filteredAttorneys.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAttorneys.map((attorney) => (
                  <AttorneyCard key={attorney.id} attorney={attorney} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 font-light">
                  No attorneys found matching your search.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Try adjusting your search terms.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}