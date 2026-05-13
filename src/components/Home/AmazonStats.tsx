import { motion } from 'motion/react';
import { ExternalLink, Star, Users, TrendingUp, Award } from 'lucide-react';

const STATS = [
  { icon: Users, label: "Total Readers", value: "2.4M+", sub: "Verified Purchases" },
  { icon: Star, label: "Amazon Rating", value: "4.9/5", sub: "15,000+ Reviews" },
  { icon: TrendingUp, label: "Top Ranking", value: "#1", sub: "Historical Romance Top 100" },
  { icon: Award, label: "Best Seller", value: "NYT", sub: "36 Weeks on List" },
];

export function AmazonStats() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full border-x border-slate-700">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-slate-700 h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-gold/30 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full mb-6"
          >
            Global Book Presence
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Available on Amazon</h2>
          <p className="text-slate-400 text-lg">
            Join a global community of readers. My Amazon Author presence is defined by verified readers and genuine stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-gold transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
                <item.icon size={24} className="text-gold" />
              </div>
              <p className="text-4xl font-serif font-bold mb-2 group-hover:text-gold transition-colors">{item.value}</p>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-1">{item.label}</p>
              <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10">
          <a
            href="#"
            className="flex items-center gap-3 px-10 py-5 bg-gold text-white font-bold uppercase tracking-widest hover:bg-accent-dark transition-all rounded-none ring-offset-4 ring-offset-slate-900 hover:ring-2 ring-gold"
          >
            Visit Amazon Author Page <ExternalLink size={18} />
          </a>
          <p className="text-slate-400 text-sm max-w-xs text-center md:text-left italic">
            "One of the most captivating voices in modern fiction today." <span className="block not-italic text-xs font-bold text-slate-500 mt-2 mt:0">— Amazon Editor's Pick</span>
          </p>
        </div>
      </div>
    </section>
  );
}
