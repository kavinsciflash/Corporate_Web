import SectionHeader from '../components/SectionHeader';
import { Cloud, Shield, Database, Cpu, Globe, BarChart2, MessageSquare, Code, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cloud className="text-primary-600" size={40} />,
      title: 'Cloud Infrastructure',
      description: 'Design, migration, and management of scalable cloud environments using AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'Hybrid Cloud Setup', 'Serverless Architecture', 'Cost Optimization']
    },
    {
      icon: <Shield className="text-primary-600" size={40} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security assessments and implementation of robust protection for your digital assets.',
      features: ['Threat Detection', 'Identity Management', 'Compliance Audits', 'Endpoint Protection']
    },
    {
      icon: <BarChart2 className="text-primary-600" size={40} />,
      title: 'Data & Analytics',
      description: 'Transforming raw data into actionable insights through advanced analytics and business intelligence.',
      features: ['Big Data Strategy', 'Predictive Modeling', 'Data Visualization', 'Warehouse Design']
    },
    {
      icon: <Code className="text-primary-600" size={40} />,
      title: 'Custom Software Development',
      description: 'Building bespoke applications tailored to your specific business processes and user needs.',
      features: ['Web Applications', 'Mobile Development', 'API Integration', 'Legacy Modernization']
    },
    {
      icon: <Cpu className="text-primary-600" size={40} />,
      title: 'IT Strategy & Consulting',
      description: 'Strategic guidance to align your technology investments with your long-term business objectives.',
      features: ['Digital Roadmap', 'IT Governance', 'Vendor Selection', 'BPM Optimization']
    },
    {
      icon: <Layout className="text-primary-600" size={40} />,
      title: 'Managed IT Services',
      description: 'Full-spectrum IT support and management, allowing you to focus on your core business operations.',
      features: ['24/7 Help Desk', 'Network Monitoring', 'Disaster Recovery', 'Asset Management']
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive technology solutions designed to solve complex business challenges and drive growth."
            dark
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-primary-600 font-bold flex items-center group/btn">
                  Learn More <Globe className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-primary-600 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
              <p className="text-primary-100 mb-10 text-lg leading-relaxed">
                We follow a rigorous, proven approach to ensure every project is delivered on time, within budget, and to the highest quality standards.
              </p>
              <div className="space-y-8">
                {[
                  { n: '01', t: 'Discovery', d: 'In-depth analysis of your current state and future goals.' },
                  { n: '02', t: 'Strategy', d: 'Developing a comprehensive roadmap and solution architecture.' },
                  { n: '03', t: 'Implementation', d: 'Agile development and seamless deployment of solutions.' },
                  { n: '04', t: 'Optimization', d: 'Continuous monitoring and refinement for peak performance.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-6">
                    <div className="text-2xl font-bold opacity-50">{step.n}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{step.t}</h4>
                      <p className="text-primary-100 text-sm">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-100 rounded-full scale-110 opacity-20 blur-2xl"></div>
                <div className="relative text-center">
                  <div className="bg-white p-8 rounded-full shadow-2xl inline-block mb-8 border border-gray-100">
                    <MessageSquare size={80} className="text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Project</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                    Ready to discuss how our services can benefit your business? Schedule a free 30-minute consultation with our experts.
                  </p>
                  <button className="bg-primary-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-primary-700 transition-colors">
                    Consult with an Expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
