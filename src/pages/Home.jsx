import { ArrowRight, Shield, Zap, BarChart, Globe, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
                Leading Enterprise IT Partner
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Next-Gen Solutions for <span className="text-primary-600">Modern Enterprises</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Vertex Solutions provides the strategic technological foundation for companies to scale, innovate, and lead in the digital era.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-md font-bold text-center hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                  Book a Consultation <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link to="/services" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-md font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center">
                  Our Services
                </Link>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                      JS
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="block font-bold text-gray-900">Trusted by 500+ Companies</span>
                  <span className="text-gray-500">Global enterprise partners</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-600 absolute -top-4 -left-4 w-72 h-72 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
              <div className="bg-blue-600 absolute -bottom-4 -right-4 w-72 h-72 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
              <div className="relative bg-gray-50 rounded-2xl border border-gray-100 p-8 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <BarChart className="text-primary-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900">Data Analytics</h4>
                      <p className="text-xs text-gray-500 mt-2">Real-time insights for better decisions.</p>
                    </div>
                    <div className="bg-primary-600 p-6 rounded-xl shadow-sm text-white">
                      <Shield className="text-white mb-4" size={32} />
                      <h4 className="font-bold">Cybersecurity</h4>
                      <p className="text-xs text-primary-100 mt-2">Enterprise-grade protection systems.</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <Globe className="text-primary-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900">Cloud Infra</h4>
                      <p className="text-xs text-gray-500 mt-2">Scalable and secure cloud architecture.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <Zap className="text-primary-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900">Digital Transformation</h4>
                      <p className="text-xs text-gray-500 mt-2">Modernizing your legacy systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {['GlobalTech', 'InnovateCorp', 'DataSys', 'CloudNine', 'NexusIT'].map((name) => (
              <span key={name} className="text-2xl font-bold text-gray-900">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Partner with Vertex?"
            subtitle="We don't just provide services; we build long-term technological partnerships that drive measurable business growth."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-primary-600" size={40} />,
                title: 'Uncompromised Security',
                description: 'Security is at the heart of everything we build, ensuring your enterprise and customer data remain protected.'
              },
              {
                icon: <Zap className="text-primary-600" size={40} />,
                title: 'Rapid Deployment',
                description: 'Our agile methodologies allow us to deliver high-quality solutions faster, giving you a competitive edge.'
              },
              {
                icon: <Users className="text-primary-600" size={40} />,
                title: 'Expert Consulting',
                description: 'Access a team of seasoned architects and consultants with deep industry-specific expertise.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-gray-100 hover:border-primary-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-300 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-300 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-300 font-medium">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-300 font-medium">Support Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of enterprises that trust Vertex Solutions for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="bg-white text-primary-600 px-10 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
                  Contact Us Today
                </Link>
                <Link to="/services" className="bg-transparent border-2 border-primary-400 text-white px-10 py-4 rounded-md font-bold hover:bg-primary-500 transition-colors">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
