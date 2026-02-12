import SectionHeader from '../components/SectionHeader';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      company: 'FinTech Global',
      title: 'Cloud-Native Banking Platform',
      category: 'Digital Transformation',
      description: 'Modernized a legacy banking system into a scalable, secure cloud-native platform serving 2M+ active users.',
      results: ['40% reduction in infra costs', '99.99% uptime achieved', '3x faster feature deployment']
    },
    {
      company: 'HealthLink Systems',
      title: 'AI-Driven Patient Data Analytics',
      category: 'Data & Analytics',
      description: 'Implemented a predictive analytics engine that identifies at-risk patients with 85% accuracy.',
      results: ['15% improvement in patient outcomes', 'Automated reporting saving 200+ hours/month', 'HIPAA compliant infrastructure']
    },
    {
      company: 'Logistics Pro',
      title: 'Smart Supply Chain Management',
      category: 'Custom Software',
      description: 'Built an end-to-end IoT-integrated logistics platform for real-time fleet tracking and optimization.',
      results: ['22% fuel efficiency increase', 'Real-time visibility for 10k+ vehicles', 'Integrated warehouse management']
    },
    {
      company: 'Retail Giant',
      title: 'Enterprise Security Overhaul',
      category: 'Cybersecurity',
      description: 'Secured a global retail network against sophisticated threats through Zero Trust architecture implementation.',
      results: ['Zero security breaches since launch', 'Unified identity management for 50k employees', 'Compliance across 12 countries']
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Success Stories"
            subtitle="Explore how we've helped leading organizations overcome challenges and achieve their digital objectives."
          />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {cases.map((study, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 group">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-4xl uppercase tracking-widest opacity-20 group-hover:scale-110 transition-transform duration-700">
                    {study.company}
                  </div>
                  <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-primary-600 shadow-sm uppercase tracking-wider">
                    {study.category}
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h4 className="text-sm font-bold text-primary-600 mb-2">{study.company}</h4>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Results:</h5>
                    <ul className="space-y-3">
                      {study.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start text-sm text-gray-700 font-medium">
                          <ArrowRight className="text-primary-600 mr-2 shrink-0" size={16} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-auto flex items-center font-bold text-gray-900 hover:text-primary-600 transition-colors group/btn">
                    Read Full Case Study <ExternalLink className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Callout */}
      <section className="py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Ready to achieve similar results?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold mb-2">$500M+</span>
              <span className="text-primary-100 uppercase tracking-widest text-sm font-medium">Client Value Created</span>
            </div>
            <div className="w-12 h-0.5 bg-primary-400 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold mb-2">95%</span>
              <span className="text-primary-100 uppercase tracking-widest text-sm font-medium">Efficiency Improvement</span>
            </div>
            <div className="w-12 h-0.5 bg-primary-400 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold mb-2">150+</span>
              <span className="text-primary-100 uppercase tracking-widest text-sm font-medium">Enterprise Successes</span>
            </div>
          </div>
          <div className="mt-16">
            <button className="bg-white text-primary-600 px-12 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Let's Build Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
