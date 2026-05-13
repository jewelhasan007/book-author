import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              ELENA <span className="text-gold">THORNE</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting stories of resilience, mystery, and human connection for a global audience of dedicated readers.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'Books', 'About Elena', 'Blog', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-1" />
                <span>hello@elenathorne.com</span>
              </li>
              <li className="opacity-70 italic mt-6">
                Represented by Sarah Miller at <br />
                The Literary Collective Agency
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Mailing List</h4>
            <p className="text-sm mb-6">Receive exclusive chapters and early release alerts directly to your inbox.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-slate-800 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-gold outline-none w-full"
              />
              <button className="bg-gold px-4 py-3 text-white hover:bg-accent-dark transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs opacity-50 font-mono">
            © {new Date().getFullYear()} ELENA THORNE. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
