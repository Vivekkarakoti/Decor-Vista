import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = Array.from(new Set(FAQS.map(f => f.category)));

  return (
    <div className="pt-24">
      <section className="section-padding bg-white border-b border-divider">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">Help Center</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            At Decor Vista, we understand that embarking on an interior design or renovation journey can feel like a significant undertaking, often accompanied by many questions and considerations. Whether you are looking to install a state-of-the-art modular kitchen, planning a complete home transformation, or seeking the perfect piece of custom-crafted furniture, our goal is to make the entire process as transparent, approachable, and enjoyable as possible. We believe that clear communication is the foundation of every successful project, which is why we have compiled this comprehensive list of frequently asked questions. Here, you will find detailed insights into our collaborative design philosophy, our meticulous project management timelines, and our commitment to using only the finest sustainable materials. We also cover essential topics such as budget planning, our step-by-step renovation process, and the long-term after-sales support we provide to ensure your home remains a sanctuary of comfort and style for years to come. If you find that your specific question isn't addressed here, please don't hesitate to reach out to our dedicated team of experts. We are always here to provide the guidance and clarity you need to turn your unique vision into a beautiful reality.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-10 border-b border-divider pb-4">{cat}</h3>
                <div className="space-y-4">
                  {FAQS.filter(f => f.category === cat).map((faq) => {
                    const globalIndex = FAQS.indexOf(faq);
                    const isOpen = openIndex === globalIndex;
                    return (
                      <div key={globalIndex} className={`overflow-hidden border-b border-divider transition-all duration-300`}>
                        <button 
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full py-6 flex justify-between items-center text-left transition-colors"
                        >
                          <span className={`font-serif text-xl pr-8 tracking-tight ${isOpen ? 'text-accent' : 'text-primary'}`}>{faq.question}</span>
                          {isOpen ? <Minus size={18} className="text-accent shrink-0" /> : <Plus size={18} className="text-gray-300 shrink-0" />}
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pb-8 text-gray-500 leading-relaxed font-light"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
