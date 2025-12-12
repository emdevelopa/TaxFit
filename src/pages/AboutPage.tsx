import React from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp, 
  Heart, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  Quote,
  Globe,
  BookOpen,
  Briefcase
} from 'lucide-react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Tax-FIT was established with a vision to democratize tax services in Nigeria',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    year: '2021',
    title: '1,000 Clients',
    description: 'Reached our first major milestone serving individuals and SMEs',
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: '2022',
    title: 'National Expansion',
    description: 'Expanded services to all 36 states and FCT',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: '2023',
    title: '10,000+ Clients',
    description: 'Became Nigeria\'s fastest-growing tax platform',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as the most trusted tax management platform in Nigeria',
    icon: <Award className="w-6 h-6" />,
  },
];

const values = [
  {
    icon: <Award className="w-12 h-12" />,
    title: 'Excellence',
    description: 'We pursue excellence in every interaction, delivering world-class tax solutions that exceed expectations.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Integrity',
    description: 'Complete transparency and honesty in all dealings. Your trust is our most valuable asset.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Client-First',
    description: 'Your success drives everything we do. We tailor our services to meet your unique needs.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology to make tax management simple, efficient, and accessible.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
];

const stats = [
  { number: '10,000+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
  { number: '₦5B+', label: 'Tax Savings Generated', icon: <TrendingUp className="w-8 h-8" /> },
  { number: '500+', label: 'Tax Experts', icon: <Award className="w-8 h-8" /> },
  { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> },
];

const team = [
  {
    name: 'Adebayo Johnson',
    role: 'Founder & CEO',
    bio: 'Harvard MBA, 15+ years in tax law. Former FIRS senior adviser with passion for democratizing tax services.',
    gradient: 'from-blue-500 to-cyan-500',
    expertise: 'Tax Strategy',
  },
  {
    name: 'Chioma Okafor',
    role: 'Chief Tax Officer',
    bio: 'ICAN Fellow, 12+ years leading corporate tax teams. Expert in complex business structures and compliance.',
    gradient: 'from-purple-500 to-pink-500',
    expertise: 'Corporate Tax',
  },
  {
    name: 'Ibrahim Mohammed',
    role: 'Chief Technology Officer',
    bio: 'MIT graduate, former fintech CTO. Leading our AI-powered tax optimization platform.',
    gradient: 'from-green-500 to-emerald-500',
    expertise: 'Technology',
  },
  {
    name: 'Funmilayo Adeyemi',
    role: 'Head of Client Success',
    bio: 'Stanford MBA, 10+ years in customer excellence. Ensuring every client achieves their tax goals.',
    gradient: 'from-yellow-500 to-orange-500',
    expertise: 'Client Relations',
  },
];

const testimonials = [
  {
    quote: 'Tax-FIT saved our company over ₦15M in the first year alone. Their expertise is unmatched.',
    author: 'Tunde Bakare',
    role: 'CEO, TechVentures Ltd',
    rating: 5,
  },
  {
    quote: 'Finally, a tax service that speaks my language. Simple, transparent, and incredibly effective.',
    author: 'Ada Obi',
    role: 'Entrepreneur',
    rating: 5,
  },
  {
    quote: 'The audit defense team was phenomenal. They handled everything professionally and got us great results.',
    author: 'Chidi Nnamani',
    role: 'CFO, Manufacturing Co.',
    rating: 5,
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full mb-6 border border-primary-500/30">
              <Sparkles className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">About Tax-FIT</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Simplifying Tax Management,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600"> One Client at a Time</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to make professional tax services accessible to every Nigerian individual 
              and business, regardless of size or complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-secondary-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="p-10 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary-500/30">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-900">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  To democratize professional tax services in Nigeria by making expert guidance accessible, 
                  affordable, and stress-free for everyone.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that every Nigerian deserves access to world-class tax advisory, regardless 
                  of their business size or personal wealth. Through technology and expert human guidance, 
                  we're making this vision a reality.
                </p>
              </div>
            </Card>

            {/* Vision */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="p-10 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-secondary-500/30">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-900">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  To become Africa's most trusted and innovative tax management platform, setting the 
                  standard for excellence in tax services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where tax compliance is seamless, tax planning is proactive, 
                  and every business owner can focus on growth while we handle their tax obligations 
                  with precision and care.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900">
                How Tax-FIT Was Born
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <Card className="p-10 mb-8 border-l-4 border-primary-500">
                <div className="flex gap-4 mb-4">
                  <Quote className="w-8 h-8 text-primary-500 flex-shrink-0" />
                  <p className="text-xl text-gray-700 italic leading-relaxed">
                    "I watched too many hardworking entrepreneurs struggle with tax compliance, not 
                    because they didn't want to comply, but because professional help was either too 
                    expensive or too complicated. That's when I knew something had to change."
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Adebayo Johnson</div>
                    <div className="text-sm text-gray-600">Founder & CEO</div>
                  </div>
                </div>
              </Card>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  In 2020, amid a global pandemic, we saw an opportunity to transform how Nigerians 
                  approach their taxes. Small businesses were struggling, individuals were confused 
                  about their obligations, and the traditional tax advisory model was failing the 
                  majority of people who needed help.
                </p>
                <p className="text-lg">
                  Our founders—a team of experienced tax attorneys, technologists, and entrepreneurs—came 
                  together with a shared vision: to build a platform that combines expert human guidance 
                  with smart technology to make tax services accessible to everyone.
                </p>
                <p className="text-lg">
                  From our first 10 clients to over 10,000 today, every success story reinforces our 
                  commitment to excellence. We've helped businesses save billions, individuals gain 
                  peace of mind, and the tax system become more accessible for all Nigerians.
                </p>
                <p className="text-lg font-semibold text-secondary-900">
                  But we're just getting started. Our vision is to become Africa's most trusted tax 
                  platform, and we're building it one satisfied client at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900">
              Our Milestones
            </h2>
            <p className="text-gray-600 text-lg">
              The journey from startup to industry leader
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <div className="text-white">{milestone.icon}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-primary-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-2 text-secondary-900">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
              <Heart className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide every decision and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="p-8 text-center relative">
                  <div className={`w-20 h-20 ${value.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={value.textColor}>{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-900 to-secondary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full mb-4 border border-primary-500/30">
              <Briefcase className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the Minds Behind Tax-FIT
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A diverse team of experts united by a common mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all group">
                <div className="p-6 text-center">
                  <div className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-105 transition-transform`}>
                    <span className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${member.gradient} rounded-full text-xs font-semibold text-white mb-3`}>
                      {member.expertise}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real feedback from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-primary-200 mb-4" />
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join 10,000+ Satisfied Clients
            </h2>
            <p className="text-xl mb-10 text-gray-100">
              Experience the Tax-FIT difference. Expert guidance, innovative technology, exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
            <p className="text-sm text-gray-200 mt-6">
              ✓ Free consultation  ✓ No credit card required  ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}