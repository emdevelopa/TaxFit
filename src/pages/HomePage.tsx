import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ArrowRight, BookOpen, Loader2, Scale, Users, Building2, Briefcase } from 'lucide-react'; 
import Button from '@/components/common/Button';
import { formatDate } from '@/utils/helpers'; 
import { useFirsRegulatoryUpdates } from '@/hooks/attorney/use-firs-resources';
import Marquee from "react-fast-marquee";
import Card from '@/components/home/cards';

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
      <section className="relative min-h-[130vh] flex items-center text-white overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(public/images/hero-bg.png)' }}>
  
          <img 
  key={currentIndex} 
  src={imageMap[currentIndex].src} 
  alt={`Professional tax attorney ${currentIndex + 1}`} 
  className="absolute inset-0 w-full h-full object-cover bg-cover bg-opacity-20 transition-all duration-1000 ease-in-out" 
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
      <section className="py-12 sm:py-16 border -mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 bg-gray-300  ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-12 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <img 
                  src="public/images/image-copy.png"
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
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
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

      <Card/>
    </Layout>
  );
}