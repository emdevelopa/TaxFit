import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ArrowRight, BookOpen, Loader2, Scale, Users, Building2, Briefcase } from 'lucide-react'; 
import Button from '@/components/common/Button';
import { formatDate } from '@/utils/helpers'; 
import { useFirsRegulatoryUpdates } from '@/hooks/attorney/use-firs-resources';
import Marquee from "react-fast-marquee"

// Company logos
const trustedCompanies = [
  { name: 'Microsoft', logo: '/assets/images/microsoft.png' },
  { name: 'JPMorgan', logo: '/assets/images/jpmorgan.png' },
  { name: 'Google', logo: '/assets/images/google.png' },
  { name: 'Goldman Sachs', logo: '/assets/images/goldman.png' },
  { name: 'Amazon', logo: '/assets/images/amazon.png' },
  { name: 'BlackRock', logo: '/assets/images/blackrock.png' }
];

const testimonials = [
  {
    quote: "Tax-FIT connected us with the perfect attorney for our complex tax issues. Their expertise saved us time and gave us peace of mind.",
    author: "Jennifer Martinez",
    role: "CFO, Tech Startup",
  },
  {
    quote: "Finding a qualified tax attorney through Tax-FIT was seamless. The platform made it easy to compare expertise and book consultations.",
    author: "David Chen",
    role: "Business Owner",
  },
  {
    quote: "The attorneys on Tax-FIT are top-tier professionals. They handled our audit defense with exceptional skill and professionalism.",
    author: "Amara Okonkwo",
    role: "Managing Director",
  },
];

const services = [
  {
    icon: Scale,
    title: "Tax Planning",
    description: "Get expert help to reduce your tax and save money legally"
  },
  {
    icon: Briefcase,
    title: "Tax Compliance",
    description: "Stay up to date with your tax payments and avoid penalties"
  },
  {
    icon: Building2,
    title: "Tax Problems",
    description: "Resolve tax issues and get professional representation"
  },
];

// More realistic case studies for hackathon
const caseStudies = [
  {
    title: "Small Business Tax Optimization",
    industry: "E-commerce",
    challenge: "Managing VAT compliance and optimizing tax structure",
    result: "15% reduction in tax liability, saved ₦2.5M annually",
    metric: "₦2.5M",
    label: "Annual Savings"
  },
  {
    title: "Startup Tax Advisory",
    industry: "Technology",
    challenge: "Setting up proper tax structure from inception",
    result: "Zero compliance issues, proper structure established",
    metric: "100%",
    label: "Compliance"
  },
  {
    title: "Professional Services Firm",
    industry: "Consulting",
    challenge: "Complex multi-state tax obligations",
    result: "Streamlined processes, saved ₦1.8M in the first year",
    metric: "₦1.8M",
    label: "Cost Savings"
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFirsIndex, setActiveFirsIndex] = useState(0);
  const [currentIndex,setCurrentIndex]=useState(0);
  const [herotext, setHeroText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageMap.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();

  const { data: firsUpdates, isLoading: isFirsLoading } = useFirsRegulatoryUpdates({ search: '', source: 'all' });
  const slideshowUpdates = React.useMemo(() => (firsUpdates || []).slice(0, 4), [firsUpdates]);
  const activeUpdate = slideshowUpdates[activeFirsIndex];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 1000);

    let firsInterval: number | undefined;
    
    if (slideshowUpdates.length > 1) {
      firsInterval = setInterval(() => {
        setActiveFirsIndex((prev) => (prev + 1) % slideshowUpdates.length);
      }, 10000) as unknown as number;
    }

    return () => {
      clearInterval(testimonialInterval);
      if (firsInterval !== undefined) {
        clearInterval(firsInterval);
      }
    };
  }, [slideshowUpdates.length]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroText('Access Nigerias largest Network of tax attorneys whether your needs are planning,auditing, compliance, etc from the perfect group of tax attorneys. Our attorneys are the best of the best with various attorneys from the Nigerian Barrister Association.')
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  const imageMap = [
    {id:1, src: "public/images/attorney.png"},
    {id:2, src: "public/images/image-14.png"},
  ] 

  return (
    <Layout>
      <Marquee>
        Access Nigerias largest Network of tax attorneys whether your needs are planning,auditing, compliance, etc from the perfect group of tax attorneys.         ||         Our attorneys are the best of the best with various attorneys from the Nigerian Barrister Association.
      </Marquee>
      {/* Hero Section - Dark Blue Background */}
      <section className="relative min-h-[130vh] flex items-center text-white overflow-hidden bg-black">
  
          <img 
  key={currentIndex} 
  src={imageMap[currentIndex].src} 
  alt={`Professional tax attorney ${currentIndex + 1}`} 
  className="absolute inset-0 w-full h-full object-cover opacity-20 transition-5" 
/>
  

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 py-12 ">
          <div className="max-w-4xl text-left">
            {/* Main Heading */}
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
                Connect with Attorneys
                <span className="block mt-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  from over 36 states
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light max-w-3xl leading-relaxed px-4">
                Get expert help and Optimize your taxes,
                Here at Tax-FIT
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-left mb-12 sm:mb-16 px-4">
              <button 
                onClick={() => navigate('/find-attorney')}
                className="group px-8 sm:px-12 py-4 sm:py-5 bg-black bg-opacity-10 border hover:bg-opacity-20 text-white text-primary-900 rounded-lg font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
              >
                Look Through our Attorney
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Image Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <img 
                  src="../../public/images/attorney-consultation.jpg"
                  alt="Professional tax attorney consultation"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    // Fallback - show gradient placeholder
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-100 rounded-2xl shadow-2xl flex items-center justify-center">
                  <Scale className="w-16 h-16 sm:w-20 sm:h-20 text-primary-400" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">2,500+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Expert Attorneys</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-primary-50 rounded-full">
                  <Scale className="w-4 h-4 text-primary-600" />
                  <span className="text-xs sm:text-sm font-semibold text-primary-700">Verified Professionals</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Expert Legal Guidance, Just a Click Away
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Access Nigeria's largest network of verified tax attorneys. Whether you need tax planning, 
                  compliance advisory, or audit defense, find the perfect legal expert for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <button 
                    onClick={() => navigate('/find-attorney')}
                    className="px-5 py-3 sm:px-6 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 w-full sm:w-auto"
                  >
                    Look Through our Attorney
                  </button>
                  <button 
                    onClick={() => navigate('/about')}
                    className="px-5 py-3 sm:px-6 bg-white text-gray-900 rounded-lg border-2 border-gray-200 font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-300 w-full sm:w-auto"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By - Logo Images */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs sm:text-sm text-gray-400 mb-8 sm:mb-12 font-medium">
              Trusted by leading organizations
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
              {trustedCompanies.map((company, index) => (
                <div key={index} className="text-center flex items-center justify-center">
                  <img 
                    src={company.logo}
                    alt={company.name}
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-sm sm:text-base md:text-lg font-semibold text-gray-300 hover:text-primary-600 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Intelligence */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {isFirsLoading ? (
              <div className="text-center p-12 sm:p-16 bg-gray-50 rounded-2xl">
                <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-primary-600 mx-auto mb-4" />
                <p className="text-base sm:text-lg text-gray-600">Loading updates...</p>
              </div>
            ) : slideshowUpdates.length > 0 ? (
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-yellow-50 rounded-full">
                        <BookOpen className="w-4 h-4 text-yellow-600" />
                        <span className="text-xs sm:text-sm font-semibold text-yellow-700">
                          Important Update
                        </span>
                      </div>

                      {activeUpdate && (
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            {activeUpdate.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <span>{activeUpdate.source}</span>
                            <span>•</span>
                            <span>{formatDate(activeUpdate.date)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4 pt-6 sm:pt-8">
                      <a 
                        href={activeUpdate?.url?.startsWith('http') ? activeUpdate.url : 'https://www.firs.gov.ng/latest-updates'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 bg-transparent text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {slideshowUpdates.map((_, index) => (
                            <Button
                              key={index}
                              onClick={() => setActiveFirsIndex(index)}
                              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                                index === activeFirsIndex 
                                  ? 'w-6 sm:w-8 bg-primary-600' 
                                  : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => navigate('/firs-news-feed')}
                          className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-primary-600 flex items-center gap-1"
                        >
                          View All
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
                    {activeUpdate?.imageUrl ? (
                      <img 
                        src={activeUpdate.imageUrl}
                        alt={activeUpdate.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-primary-400" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Services - Short Header, Services in One Div */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Short Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Explore Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Connect with specialized attorneys for your specific tax needs
              </p>
            </div>

            {/* Services in ONE Div - No Numbers */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={index} 
                      className="space-y-4 sm:space-y-6 p-4 sm:p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <Link 
                        to="/find-attorney"
                        className="inline-flex items-center gap-2 text-sm sm:text-base text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
                      >
                        Find attorney
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Realistic Numbers */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Success Stories
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Real results from businesses we've helped
              </p>
            </div>

            {/* Case Studies in ONE Div */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12 space-y-8 sm:space-y-12">
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-gray-200 last:border-0 last:pb-0"
                >
                  <div className="md:col-span-4">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-400">{study.industry}</div>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600">{study.metric}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{study.label}</div>
                    </div>
                  </div>
                  <div className="md:col-span-8 space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{study.title}</h3>
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                      <p>
                        <span className="text-gray-900 font-semibold">Challenge: </span>
                        {study.challenge}
                      </p>
                      <p>
                        <span className="text-gray-900 font-semibold">Result: </span>
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - All Same Style in ONE Div */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                What Our Clients Say
              </h2>
            </div>

            {/* All Reviews in ONE Div - Same Style */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12">
              <blockquote className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white text-center mb-8 sm:mb-12">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <div className="flex flex-col items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white mb-1">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'w-6 sm:w-8 bg-primary-400' 
                        : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight px-4">
              Ready to Find Your
              <span className="block mt-2 text-primary-600">Tax Attorney?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Browse our network of verified tax attorneys and book your consultation today
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 px-4">
              <button 
                onClick={() => navigate('/find-attorney')}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-primary-600 text-white rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Find Attorney Now
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => navigate('/register')}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-gray-900 rounded-lg border-2 border-gray-200 font-bold hover:border-primary-600 hover:text-primary-600 transition-all duration-300 w-full sm:w-auto"
              >
                Create Account
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 pt-4">
              Free consultation • Verified attorneys • Secure platform
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}