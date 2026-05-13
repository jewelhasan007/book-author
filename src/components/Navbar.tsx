import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, Mail, Calendar, BookCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/', icon: BookOpen },
  { name: 'Books', path: '/books', icon: BookCheck },
  { name: 'About', path: '/about', icon: User },
  { name: 'Blog', path: '/blog', icon: Mail },
  { name: 'Events', path: '/events', icon: Calendar },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-8 py-5',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-brand-border py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-bold tracking-tight italic text-accent">ET</span>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text">Elena</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Thorne</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.filter(l => l.name !== 'Contact').map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[10px] font-bold uppercase tracking-[0.15em] transition-all hover:text-accent-bright',
                location.pathname === link.path ? 'text-accent-bright' : 'text-brand-text/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/books"
            className="bg-brand-text text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-bright transition-all shadow-md"
          >
            Reader Club
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-8 flex flex-col gap-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-serif transition-colors flex items-center gap-4',
                  location.pathname === link.path ? 'text-gold' : 'text-slate-900'
                )}
              >
                <link.icon size={20} className="text-gold" />
                {link.name}
              </Link>
            ))}
            <Link
              to="/books"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-4 bg-gold text-white text-center font-bold uppercase tracking-widest"
            >
              Buy My Books
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
