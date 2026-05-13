import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-brand-text p-12 md:p-20 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="grid grid-cols-6 h-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-r border-white h-full" />
              ))}
            </div>
          </div>

          <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
            <Mail size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight text-white relative z-10">
            The Reader's <span className="text-accent italic">Club</span>
          </h2>
          
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Join 45,000+ readers for exclusive chapters and early release alerts.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
              <input
                required
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-4 bg-neutral-900 text-white border-none rounded-2xl outline-none focus:ring-1 focus:ring-accent transition-all text-sm"
              />
              <button className="bg-accent-bright text-white font-bold uppercase tracking-widest px-10 py-4 rounded-2xl hover:bg-accent transition-all shadow-xl">
                Subscribe
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-4 py-4 relative z-10"
            >
              <CheckCircle2 size={48} className="text-accent" />
              <p className="text-xl font-serif font-bold text-white">Welcome to the Club!</p>
              <p className="text-neutral-400 text-sm">Check your inbox for your free chapter.</p>
            </motion.div>
          )}

          <p className="mt-8 text-[9px] text-neutral-500 uppercase tracking-[0.3em] font-bold relative z-10">
            PURE STORIES. NO SPAM. UNSUBSCRIBE ANYTIME.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
