import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp, 
  Heart, 
  Star,
  Zap,
  Sparkles,
  ArrowRight,
  Quote,
  Globe,
  BookOpen,
  Briefcase,
  Code,
  Scale
} from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

const milestones = [
  {
    year: '2024',
    title: 'Platform launched',
    description: 'Tax-FIT launched to connect Nigerians with verified tax attorneys',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    year: '2024',
    title: '500+ attorneys',
    description: 'Built Nigeria\'s largest network of verified tax attorneys',
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: '2024',
    title: 'Nationwide coverage',
    description: 'Expanded services to all 36 states and FCT',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: '2024',
    title: 'Growing fast',
    description: 'Becoming Nigeria\'s most trusted tax attorney platform',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const values = [
  {
    icon: <Award className="w-12 h-12" />,
    title: 'Excellence',
    description: 'We connect you with the best tax attorneys who deliver quality service every time.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Trust',
    description: 'Every attorney is verified and reviewed. Your trust is our priority.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Accessibility',
    description: 'Professional tax help should be available to everyone, not just big companies.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Simplicity',
    description: 'Finding and booking a tax attorney should be easy. We make it simple.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
];

const stats = [
  { number: '2,500+', label: 'Verified attorneys', icon: <Users className="w-8 h-8" /> },
  { number: '50K+', label: 'Cases handled', icon: <TrendingUp className="w-8 h-8" /> },
  { number: '36', label: 'States covered', icon: <Globe className="w-8 h-8" /> },
  { number: '98%', label: 'Client satisfaction', icon: <Star className="w-8 h-8" /> },
];

const team = [
  {
    name: 'Peter Orji',
    role: 'Co-founder & CEO',
    bio: 'Technology entrepreneur passionate about making legal services accessible to all Nigerians.',
    gradient: 'from-blue-500 to-cyan-500',
    expertise: 'Strategy & Vision',
  },
  {
    name: 'Daniel Obuh',
    role: 'Co-founder & CTO',
    bio: 'Software engineer building the technology that connects people with the right attorneys.',
    gradient: 'from-purple-500 to-pink-500',
    expertise: 'Technology',
  },
  {
    name: 'Jaiyeola Akinjide',
    role: 'Co-founder & Lead Developer',
    bio: 'Full-stack developer creating seamless experiences for clients and attorneys.',
    gradient: 'from-green-500 to-emerald-500',
    expertise: 'Product Development',
  },
];

const testimonials = [
  {
    quote: 'Tax-FIT helped me find an attorney who saved my business from serious tax problems. Very grateful!',
    author: 'Tunde Bakare',
    role: 'Business owner',
    rating: 5,
  },
  {
    quote: 'Finally, an easy way to find a good tax attorney. The process was simple and the attorney was excellent.',
    author: 'Ada Obi',
    role: 'Entrepreneur',
    rating: 5,
  },
  {
    quote: 'Professional attorneys at my fingertips. Tax-FIT made it so easy to get the help I needed.',
    author: 'Chidi Nnamani',
    role: 'Company director',
    rating: 5,
  },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full mb-6 border border-primary-500/30">
              <Sparkles className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">About Tax-FIT</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connecting Nigerians with
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                trusted tax attorneys
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We believe everyone deserves access to professional tax help. Our platform makes it 
              easy to find and book verified tax attorneys across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <div className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-primary-500/30">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Mission */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="p-6 sm:p-8 md:p-10 relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary-500/30">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our mission</h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                  To make professional tax services accessible to every Nigerian by connecting 
                  people with verified, experienced tax attorneys.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We believe quality legal help shouldn't only be for the wealthy. Through our 
                  platform, anyone can find and book the right tax attorney for their needs.
                </p>
              </div>
            </Card>

            {/* Vision */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="p-6 sm:p-8 md:p-10 relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-secondary-500/30">
                  <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our vision</h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                  To become Nigeria's most trusted platform for connecting people with tax 
                  attorneys, making legal services simple and accessible.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  We see a future where finding professional tax help is as easy as a few clicks, 
                  and where every Nigerian business can thrive with proper tax guidance.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">Our story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                How Tax-FIT began
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 md:p-10 border-l-4 border-primary-500">
                <div className="flex gap-4 mb-4">
                  <Quote className="w-8 h-8 text-primary-500 flex-shrink-0" />
                  <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed">
                    "We saw too many people struggling to find good tax attorneys. Either they 
                    couldn't afford it, or they didn't know where to start. We knew we had to 
                    build something to help."
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">PO</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Peter Orji</div>
                    <div className="text-sm text-gray-600">Co-founder & CEO</div>
                  </div>
                </div>
              </Card>

              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base sm:text-lg">
                  In 2024, three tech entrepreneurs came together with a simple idea: make it 
                  easy for anyone to find and book a qualified tax attorney.
                </p>
                <p className="text-base sm:text-lg">
                  We built Tax-FIT to solve a real problem. Small businesses needed tax help but 
                  didn't know where to find trustworthy attorneys. Individuals had tax questions 
                  but couldn't afford expensive consultations.
                </p>
                <p className="text-base sm:text-lg">
                  Today, we're proud to connect thousands of Nigerians with verified tax attorneys 
                  across all 36 states. Our platform makes it simple to compare attorneys, read 
                  reviews, and book consultations.
                </p>
                <p className="text-base sm:text-lg font-semibold text-gray-900">
                  We're just getting started. Our goal is to become the go-to platform for anyone 
                  who needs tax help in Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our journey
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              From idea to reality
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-primary-600 font-bold text-base sm:text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <Heart className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">Our values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What drives us
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              The principles behind everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="p-6 sm:p-8 text-center relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${value.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={value.textColor}>{value.icon}</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full mb-4 border border-primary-500/30">
              <Briefcase className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Our team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet the founders
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              The team building Nigeria's leading attorney platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all group">
                <div className="p-6 text-center">
                  <div className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-105 transition-transform`}>
                    <span className="text-white text-2xl sm:text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${member.gradient} rounded-full text-xs font-semibold text-white mb-3`}>
                      {member.expertise}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What our clients say
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Real feedback from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <div className="p-6 sm:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary-200 mb-4" />
                  <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to find your tax attorney?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-100">
              Join thousands of satisfied clients. Expert attorneys, simple booking, great results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => navigate('/find-attorney')}
                className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-primary-600 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
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
            <p className="text-xs sm:text-sm text-gray-200 mt-6">
              Free consultation • Verified attorneys • Secure platform
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}