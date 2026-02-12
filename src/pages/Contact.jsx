import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact Us"
            subtitle="Get in touch with our team of experts to discuss your project or learn more about our services."
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Reach Out</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email Us</h4>
                      <p className="text-gray-600 text-sm mt-1">Our team typically responds within 2 hours.</p>
                      <a href="mailto:info@vertexsolutions.com" className="text-primary-600 font-medium mt-2 inline-block">info@vertexsolutions.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Call Us</h4>
                      <p className="text-gray-600 text-sm mt-1">Mon-Fri from 8am to 6pm PST.</p>
                      <a href="tel:+15551234567" className="text-primary-600 font-medium mt-2 inline-block">+1 (555) 123-4567</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Visit Us</h4>
                      <p className="text-gray-600 text-sm mt-1">Headquarters in the Innovation District.</p>
                      <address className="not-italic text-gray-600 mt-2 text-sm leading-relaxed">
                        123 Tech Plaza, Suite 500<br />
                        San Francisco, CA 94105
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="text-primary-400" size={24} />
                  <h4 className="font-bold">Global Support</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Our emergency support team is available 24/7 for clients with platinum-level service agreements.
                </p>
                <button className="text-primary-400 font-bold text-sm flex items-center">
                  Support Portal <Send className="ml-2" size={14} />
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600 mb-10">Fill out the form below and we'll get back to you shortly.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-bold text-gray-700">First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-bold text-gray-700">Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-gray-700">Interested Service</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="security">Cybersecurity</option>
                      <option value="data">Data & Analytics</option>
                      <option value="dev">Software Development</option>
                      <option value="strategy">IT Strategy</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Tell us about your project goals..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-primary-600 underline">Privacy Policy</a> and consent to being contacted.
                    </label>
                  </div>

                  <button className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors shadow-lg flex items-center justify-center">
                    Send Message <Send className="ml-2" size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative grayscale opacity-70">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="text-primary-600 mx-auto mb-4" size={48} />
            <h4 className="text-2xl font-bold text-gray-900">Find us in San Francisco</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
