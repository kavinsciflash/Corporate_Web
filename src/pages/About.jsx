import SectionHeader from '../components/SectionHeader';
import { Target, Eye, Users, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="About Vertex Solutions"
            subtitle="Bridging the gap between ambitious business goals and technological excellence since 2009."
          />
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Founded in the heart of Silicon Valley, Vertex Solutions began with a simple mission: to help enterprises navigate the complex landscape of digital transformation. Over the past 15 years, we have grown from a small team of consultants to a global IT powerhouse.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We believe that technology should be an enabler, not a hurdle. Our approach combines deep technical expertise with a thorough understanding of business strategy, ensuring that every solution we deliver creates tangible value.
              </p>
              <div className="space-y-4">
                {[
                  'ISO 27001 Certified for Security',
                  'Premier Cloud Partnership status',
                  'Global team of 200+ certified experts',
                  'Consistent 5-star client satisfaction rating'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-600" size={24} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:w-28 group-hover:h-28"></div>
                <Target className="text-primary-600 mb-6 relative z-10" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  To empower organizations with innovative technology solutions that drive efficiency, enhance security, and enable sustainable growth in a rapidly evolving digital world.
                </p>
              </div>
              <div className="bg-gray-900 p-10 rounded-2xl shadow-xl relative overflow-hidden group text-white">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-900 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:w-28 group-hover:h-28"></div>
                <Eye className="text-primary-400 mb-6 relative z-10" size={48} />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  To be the world's most trusted partner for enterprise digital transformation, recognized for our technical excellence and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships every day."
            centered
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We act with transparency and honesty in every interaction.' },
              { title: 'Innovation', desc: 'We constantly push the boundaries of what is possible.' },
              { title: 'Excellence', desc: 'We set high standards and strive to exceed them.' },
              { title: 'Collaboration', desc: 'We believe in the power of working together as one team.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="text-primary-600 font-bold text-4xl mb-4">0{idx + 1}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the visionaries behind Vertex Solutions."
            centered
          />
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Sarah Jenkins', role: 'CEO & Founder', bio: 'Former Tech Exec with 20+ years of industry experience.' },
              { name: 'Michael Chen', role: 'CTO', bio: 'Expert in cloud architecture and scalable systems.' },
              { name: 'David Rodriguez', role: 'COO', bio: 'Specialist in operational excellence and global strategy.' }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:border-primary-100 transition-all duration-300">
                  {/* Placeholder for images */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Users size={64} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
