import { motion } from 'motion/react';

export const PrivacyPage = () => {
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
            Privacy Policy
          </motion.h1>
          
          <div className="space-y-12 text-gray-500 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">1. Introduction</h2>
              <p>At Decor Vista, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: where we need to perform the contract we are about to enter into or have entered into with you, or where it is necessary for our legitimate interests.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
