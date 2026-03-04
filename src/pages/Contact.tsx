import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white border-b border-divider">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            We're here to help you bring your vision to life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="vertical-divider"
            >
              <h2 className="text-3xl font-serif mb-8 tracking-tight">Visit Our Studio</h2>
              <p className="text-gray-500 mb-12 leading-relaxed font-light text-lg">
                Our design studio is a space of inspiration and creativity.
              </p>

              <div className="space-y-12">
                <div className="flex gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-tight">Our Location</h4>
                    <p className="text-gray-400 font-light">123 Design Avenue, Creative District, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-tight">Call Us</h4>
                    <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-1 tracking-tight">Email Us</h4>
                    <p className="text-gray-400 font-light">hello@decorvista.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 border border-divider"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-gray-400">Full Name</label>
                    <input type="text" className="w-full bg-white border-b border-divider py-4 focus:outline-none focus:border-accent transition-all font-light" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-gray-400">Email Address</label>
                    <input type="email" className="w-full bg-white border-b border-divider py-4 focus:outline-none focus:border-accent transition-all font-light" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-3 text-gray-400">Your Message</label>
                  <textarea rows={6} className="w-full bg-white border-b border-divider py-4 focus:outline-none focus:border-accent transition-all font-light" placeholder="Tell us about your dream project..."></textarea>
                </div>
                <button className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
