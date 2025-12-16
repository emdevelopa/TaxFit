import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ArrowRight, Scale, Briefcase, Building2, Globe, RefreshCw, BookOpen } from 'lucide-react';

// Simplified services with realistic language for everyone
const services = [
  {
    icon: Scale,
    title: 'Tax planning',
    description: 'Get expert help to reduce your tax and save money legally. Our attorneys will create a custom plan that works for your business.',
    features: [
      'Save money on taxes',
      'Plan for the future',
      'Get expert advice',
      'Stay within the law'
    ],
    results: 'Average 15-25% tax savings'
  },
  {
    icon: Briefcase,
    title: 'Tax compliance',
    description: 'Stay up to date with your tax payments and avoid penalties. We help you file correctly and on time, every time.',
    features: [
      'File taxes correctly',
      'Avoid late fees',
      'Stay updated on tax rules',
      'Get reminders for deadlines'
    ],
    results: '100% on-time filing'
  },
  {
    icon: Building2,
    title: 'Tax problems',
    description: 'Resolve tax issues and get professional representation. If you have problems with tax authorities, we connect you with attorneys who can help.',
    features: [
      'Handle tax disputes',
      'Represent you in audits',
      'Negotiate with tax office',
      'Reduce penalties'
    ],
    results: '90%+ successful outcomes'
  },
  {
    icon: Globe,
    title: 'Business tax advice',
    description: 'Get help with business taxes and regulations. Whether you\'re starting or growing, find attorneys who understand your industry.',
    features: [
      'Set up your business properly',
      'Understand VAT and other taxes',
      'Get ongoing support',
      'Industry-specific guidance'
    ],
    results: 'Trusted by 10,000+ businesses'
  },
  {
    icon: RefreshCw,
    title: 'Business restructuring',
    description: 'Reorganize your business to save on taxes. Our attorneys help you restructure legally and efficiently.',
    features: [
      'Optimize business structure',
      'Reduce tax burden',
      'Plan mergers properly',
      'Handle transitions smoothly'
    ],
    results: 'Average ₦1.5M+ savings'
  },
  {
    icon: BookOpen,
    title: 'Tax education',
    description: 'Learn about taxes and stay informed. Get training and updates on tax laws that affect your business.',
    features: [
      'Understand tax basics',
      'Learn new tax rules',
      'Get expert guidance',
      'Access resources anytime'
    ],
    results: '5,000+ trained business owners'
  }
];

const approach = [
  {
    title: 'Find your attorney',
    description: 'Browse verified tax attorneys based on your specific needs and budget. Compare profiles, reviews, and expertise.'
  },
  {
    title: 'Book consultation',
    description: 'Schedule a meeting at your convenience. Most attorneys offer free initial consultations to discuss your case.'
  },
  {
    title: 'Get expert help',
    description: 'Work directly with your attorney to resolve your tax issues or plan your tax strategy effectively.'
  },
  {
    title: 'Stay compliant',
    description: 'Receive ongoing support and guidance to ensure you remain compliant with all tax regulations.'
  }
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 sm:w-16 bg-gray-900"></div>
                  <span className="text-xs text-gray-500 font-medium">
                    Services
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Find the right tax attorney
                  <br />
                  <span className="text-primary-600">for your needs</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                  Connect with verified tax attorneys who specialize in helping businesses 
                  and individuals with all their tax needs.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">2,500+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Attorneys</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Cases solved</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - All in ONE Div */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                How we can help
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Find attorneys who specialize in these areas
              </p>
            </div>

            {/* All Services in ONE Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12 space-y-12 sm:space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-12 sm:pb-16 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    {/* Icon & Title */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 lg:mt-4">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9 space-y-6 sm:space-y-8">
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="h-px w-6 bg-primary-600 mt-3 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="pt-4 sm:pt-6 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <div className="text-xs sm:text-sm text-gray-500 mb-1">Results</div>
                            <div className="text-lg sm:text-xl font-semibold text-primary-600">{service.results}</div>
                          </div>
                          <button
                            onClick={() => navigate('/find-attorney')}
                            className="inline-flex items-center gap-2 text-sm sm:text-base text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
                          >
                            Find attorney
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="h-px w-12 bg-gray-900"></div>
                <span className="text-xs text-gray-500 font-medium">How it works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Simple steps to
                <br />
                <span className="text-primary-600">get expert help</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden">
              {approach.map((step, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 md:p-12 hover:bg-gray-50 transition-colors duration-300">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-100 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to find your
                <br />
                <span className="text-primary-200">tax attorney?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Browse verified attorneys and book your consultation today
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => navigate('/find-attorney')}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-primary-900 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Find attorney
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-transparent text-white rounded-lg border-2 border-white/30 font-bold hover:bg-white/10 transition-all duration-300"
              >
                Create account
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-300">
              Free consultation • Verified attorneys • Secure platform
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}