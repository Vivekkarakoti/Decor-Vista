import { motion } from 'motion/react';

export const TermsPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white divider">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6"
          >
            Legal
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-12 tracking-tight"
          >
            Terms of Service
          </motion.h1>
          
          <div className="space-y-12 text-gray-500 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">1. Terms</h2>
              <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Decor Vista's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">3. Disclaimer</h2>
              <p>The materials on Decor Vista's website are provided "as is". Decor Vista makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
