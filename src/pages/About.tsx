import { motion } from 'motion/react';

export const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white border-b border-divider">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-8 tracking-tight"
          >
            Designing for Your <br />
            <span className="text-accent italic">Comfort & Style.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            We believe that professional interior design should be an approachable, warm, and collaborative experience.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="vertical-divider"
          >
            <h2 className="text-3xl font-serif mb-8 tracking-tight">A Legacy of Design Excellence</h2>
            <div className="space-y-8 text-gray-500 leading-relaxed text-lg font-light">
              <p>
                Founded on the principle that "Where Your Vision Meets the Comfort of Home," Decor Vista has evolved from a boutique design studio into a premier interior design firm.
              </p>
              <p>
                Our team is a diverse collective of architects, interior designers, and master craftsmen, all united by a single goal: to exceed our clients' expectations.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Team" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
