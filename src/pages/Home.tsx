import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Star, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Plus, Minus } from 'lucide-react';
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10 py-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold">Designing Spaces, Creating Comfort</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight text-primary">
            Crafting Your <br /> Dream Home
          </h1>
          <p className="text-gray-500 mb-10 max-w-md leading-relaxed font-light text-lg">
            Our mission is to transform your vision into a reality, blending artistic innovation with meticulous craftsmanship to create spaces that truly feel like home.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="/contact" className="btn-outline">
              Get Free Consultation
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[70vh] md:h-[80vh] shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-accent text-white p-8 hidden lg:block">
            <p className="text-sm font-bold uppercase tracking-widest mb-2">Est. 2012</p>
            <p className="font-serif text-2xl">Decor Vista Studio</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Brands = () => {
  const brands = ['LAVENDER AGENCY', 'Creater Fav', 'VIOLET', 'VIN-TAGE', 'CEATHES'];
  return (
    <section className="py-16 border-b border-divider bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:opacity-60 transition-opacity duration-700">
        {brands.map((brand, i) => (
          <span key={i} className="text-[10px] font-bold tracking-[0.4em] uppercase">{brand}</span>
        ))}
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000" 
            alt="Our Story" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="vertical-divider"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Our Story</h2>
          <p className="text-accent italic mb-10 text-lg">"Where Your Vision Meets the Comfort of Home"</p>
          <div className="space-y-8 text-gray-500 font-light leading-relaxed text-lg">
            <p>
              Decor Vista is a premier interior design firm dedicated to creating beautiful, functional, and comfortable living spaces. With a focus on modular kitchens and complete home renovations, we bring artistic innovation and technical precision to every project.
            </p>
            <p>
              Our team of expert designers and craftsmen work closely with you to understand your unique lifestyle and translate it into a space that feels truly yours.
            </p>
          </div>
          <button className="btn-outline mt-12">Learn More About Us</button>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSnapshot = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="vertical-divider"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Our Services</h2>
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-bold mb-10">Crafting Solutions For Your Living Spaces</p>
          <div className="space-y-8 text-gray-500 font-light leading-relaxed text-lg mb-12">
            <p>
              We provide a comprehensive range of design services, from initial concept to final execution. Our goal is to create spaces that are not only aesthetically pleasing but also highly functional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 text-xs font-bold uppercase tracking-widest text-primary/60">
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span>01. Modular Kitchens</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span>02. Full Home Interiors</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span>03. Renovation</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              <span>04. Custom Furniture</span>
            </div>
          </div>
          <button className="btn-outline mt-16">Explore All Services</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200" 
            alt="Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-1 h-12 bg-accent mx-auto mb-6"></div>
          <h2 className="text-4xl font-serif mb-4">My Portfolios</h2>
          <p className="text-gray-400 font-light italic">Designed With My Knowledge, Skills And Passion</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-serif mb-1">{project.title}</h4>
              <p className="text-accent text-[10px] uppercase tracking-widest font-bold">{project.category}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="btn-outline">View All Works</button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="vertical-divider mx-auto w-fit mb-12">
          <h2 className="text-4xl font-serif">Testimonials</h2>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">What My Clients Says</p>
        </div>

        <div className="relative">
          <p className="text-xl md:text-2xl font-light italic text-gray-500 leading-relaxed mb-12">
            "A pellentesque pretium feugiat vel morbi sagittis cursus habitant fusce cursus. Suspendisse viverra elementum est in neque, elit habitant mattis."
          </p>
          <div>
            <p className="font-bold text-sm uppercase tracking-widest">Keith Garcia</p>
            <p className="text-accent text-[10px] uppercase tracking-widest mt-1">HQ Interiors</p>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="w-2 h-2 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="aspect-video overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Newsletter" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="vertical-divider">
          <h2 className="text-4xl font-serif mb-6">Newsletter</h2>
          <p className="text-gray-500 font-light leading-relaxed mb-10">
            Subscribe to my newsletter for all offers & latest news. A pellentesque pretium feugiat vel morbi sagittis cursus habitant cursus. Suspendisse viverra elementum est in neque, elit mattis ventura vitae eget. Viverra suspendisse felis sollicitudin neque cursus.
          </p>
          <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-grow border-b border-divider py-3 focus:outline-none focus:border-accent font-light text-sm"
            />
            <button className="btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const BlogArticles = () => {
  const blogs = [
    { date: '16 Feb, 2021', title: 'Minimalism Is Always Good For Interior Design', image: 'https://picsum.photos/seed/blog1/800/600' },
    { date: '16 Feb, 2021', title: 'Minimalism Is Always Good For Interior Design', image: 'https://picsum.photos/seed/blog2/800/600' },
    { date: '16 Feb, 2021', title: 'Minimalism Is Always Good For Interior Design', image: 'https://picsum.photos/seed/blog3/800/600' },
  ];
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-1 h-12 bg-accent mx-auto mb-6"></div>
          <h2 className="text-4xl font-serif mb-4">Blog Articles</h2>
          <p className="text-gray-400 font-light italic">Read Some Latest Blog Articles Posts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">{blog.date}</p>
              <h4 className="text-lg font-serif mb-6 leading-tight group-hover:text-accent transition-colors">{blog.title}</h4>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-outline">Read Articles</button>
        </div>
      </div>
    </section>
  );
};

const ContactBanner = () => {
  return (
    <section className="py-24 bg-beige text-primary">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-4xl font-serif mb-4">Feel Free To Contact Me</h2>
          <p className="text-primary/70 font-light">If you have any projects in mind tap here at contact@example.com or just call me at +111 1234 2344 1232</p>
        </div>
        <button className="btn-primary bg-primary text-white hover:bg-white hover:text-primary">Contact Me</button>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="antialiased">
      <Hero />
      <Brands />
      <AboutMe />
      <ServicesSnapshot />
      <PortfolioGrid />
      <Testimonials />
      <Newsletter />
      <BlogArticles />
      <ContactBanner />
    </div>
  );
};
