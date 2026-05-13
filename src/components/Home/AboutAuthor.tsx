import { motion } from 'motion/react';
import { Award, Book, Heart, Globe } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Award, label: "2024 Author of the Year", text: "Honored by the International Literary Association." },
  { icon: Book, label: "12 Published Works", text: "Including the critically acclaimed Echo Trilogy." },
  { icon: Heart, label: "Reader Choice Award", text: "Voted #1 most relatable storyteller since 2021." },
  { icon: Globe, label: "Translated into 24 Languages", text: "Bringing stories to readers all across the globe." },
];

export function AboutAuthor() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-50 border border-slate-100 hover:border-gold transition-colors group"
                >
                  <item.icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{item.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold font-mono text-sm tracking-widest uppercase font-bold mb-4">The Story Behind the Stories</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic tracking-tight">
                Crafting worlds with <br /> <span className="text-slate-400 not-italic">ink & emotion.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Elena's writing journey didn't start in a library, but in the quiet moments between morning shifts at a local bookstore. It was there, surrounded by the voices of the greats, that she discovered her own.
                </p>
                <p>
                  Specializing in contemporary fiction with a touch of lyrical realism, her novels explore the intricate threads that bind us—family secrets, forgotten history, and the enduring power of redemption.
                </p>
                <p>
                  Today, Elena lives in the Pacific Northwest, where the mist through the pines provides the perfect backdrop for her next atmospheric mystery.
                </p>
              </div>
              
              <div className="pt-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                    alt="Signature"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-serif italic text-xl">Elena Thorne</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Award-Winning Novelist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
