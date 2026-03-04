import { motion } from 'motion/react';
import { ChefHat, Home, Hammer, Armchair } from 'lucide-react';

const SERVICES_DETAIL = [
  {
    title: 'Modular Kitchens',
    icon: ChefHat,
    content: 'Our modular kitchens are engineered for the modern chef. We combine ergonomic efficiency with high-end aesthetics, using premium hardware from brands like Hafele and Blum. Whether you prefer a minimalist handle-less look or a classic shaker style, we ensure your kitchen is the functional heart of your home.'
  },
  {
    title: 'Full Home Interiors',
    icon: Home,
    content: 'We take a holistic approach to full home interiors, ensuring a seamless flow between spaces. Our designers curate everything from lighting and flooring to wall treatments and furniture, creating a cohesive narrative that reflects your personality and enhances your daily comfort.'
  },
  {
    title: 'Renovation Projects',
    icon: Hammer,
    content: 'Transforming an existing space requires a delicate balance of structural integrity and aesthetic vision. Our renovation team handles the complexities of civil work, plumbing, and electrical updates, breathing new life into old structures while modernizing them for today\'s lifestyle.'
  },
  {
    title: 'Custom Design Items',
    icon: Armchair,
    content: 'True luxury lies in the details. Our bespoke furniture and custom wooden items are handcrafted in our state-of-the-art workshop. From grand entrance doors to artisanal wardrobes and unique coffee tables, we create one-of-a-kind pieces that are built to last for generations.'
  }
];

export const ServicesPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding bg-white border-b border-divider">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6"
          >
            Our Expertise
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-8 tracking-tight"
          >
            Design Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            At Decor Vista, we offer a comprehensive suite of services designed to elevate your living experience.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES_DETAIL.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-white border border-divider hover:border-accent transition-all duration-500 vertical-divider"
              >
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="text-2xl font-serif">{service.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed font-light">
                  {service.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-16 bg-white text-center border border-divider vertical-divider mx-auto w-fit">
            <h2 className="text-3xl font-serif mb-8 tracking-tight">The Decor Vista Process</h2>
            <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed text-lg font-light">
              Our process is built around your comfort. We begin with a deep-dive consultation to understand your needs, followed by a detailed 3D design phase where you can visualize every corner of your new space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
