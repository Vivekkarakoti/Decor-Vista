import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-divider py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="vertical-divider mb-6">
              <span className="font-serif text-2xl tracking-tight text-primary">Decor Vista</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Where Your Vision Meets the Comfort of Home. Professional interior design tailored to your lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/faq" className="text-gray-400 text-sm hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-primary">Services</h4>
            <ul className="space-y-4">
              <li><span className="text-gray-400 text-sm">Residential</span></li>
              <li><span className="text-gray-400 text-sm">Commercial & Hospitality</span></li>
              <li><span className="text-gray-400 text-sm">Multi-Family</span></li>
              <li><span className="text-gray-400 text-sm">All Services</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-primary">Get In Touch</h4>
            <ul className="space-y-4">
              <li><span className="text-gray-400 text-sm">info@yourcompany.com</span></li>
              <li><span className="text-gray-400 text-sm">1578 Street Avenue, New York, USA</span></li>
              <li><span className="text-gray-400 text-sm">011 1234 6789 654</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-divider gap-8">
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-300">
            &copy; {new Date().getFullYear()} Decor Vista. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={16} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={16} /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
