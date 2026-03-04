import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md border-b border-divider py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`font-serif text-2xl tracking-tight text-primary`}>Decor Vista</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70 hover:text-accent transition-all duration-300`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`px-6 py-2 border border-primary text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300`}
          >
            Consultation
          </Link>
        </div>
        <button className="md:hidden text-primary">
          <ChevronDown size={24} />
        </button>
      </div>
    </nav>
  );
};
