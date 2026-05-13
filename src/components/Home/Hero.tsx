import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 text-accent-bright font-sans text-[10px] tracking-[0.3em] uppercase font-bold"
            >
              <div className="w-12 h-[2px] bg-accent-bright" />
              Award Winning Novelist
            </motion.div>
            
            <h1 className="text-7xl md:text-[9rem] font-serif font-bold leading-[0.85] tracking-tighter text-brand-text">
              SHADOWS <br />
              <span className="text-accent italic font-medium">in the Mist.</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-500 font-sans leading-relaxed max-w-sm italic">
            "A masterclass in tension and profound human emotion. Elena Vance continues to redefine modern mystery."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Link
              to="/books"
              className="group relative px-10 py-5 bg-brand-text text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden shadow-2xl transition-all hover:bg-accent-bright hover:-translate-y-1"
            >
              Explore Collection
            </Link>
            
            <Link
              to="/about"
              className="px-10 py-5 border border-brand-border text-brand-text text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
            >
              The Author's Journey
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            <div>
              <p className="text-3xl font-serif font-bold">12+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Publications</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold">2.5M</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Copies Sold</p>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-3xl font-serif font-bold">4.9</p>
                <Star size={16} className="fill-gold text-gold mb-1" />
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">Avg Rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Portrait Image Placeholder/Frame */}
          <div className="relative z-10 aspect-[4/5] bg-neutral-200 rounded-3xl overflow-hidden shadow-2xl translate-y-8 lg:translate-x-12 border-[12px] border-white">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
              alt="Elena Thorne Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-full h-full border border-accent/20 rounded-3xl -translate-x-4 -translate-y-4 hidden lg:block" />
          <div className="absolute -bottom-10 -right-10 bg-accent-bright text-white p-6 rounded-2xl shadow-2xl hidden lg:block z-20">
            <p className="font-serif italic text-lg leading-tight">"A mystery that <br /> refuses to stay buried."</p>
            <p className="text-[9px] uppercase tracking-widest text-white/70 mt-4 font-bold">New Release 2024</p>
          </div>
          
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
