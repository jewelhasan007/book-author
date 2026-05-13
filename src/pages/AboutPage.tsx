import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import { Calendar, MapPin, Award, BookOpen, Clock } from 'lucide-react';

const TIMELINE = [
  { year: '2015', event: 'First short story published in The Paris Review.', icon: BookOpen },
  { year: '2018', event: "Debut novel 'The Silent Echo' released.", icon: Award },
  { year: '2020', event: 'Winner of the Golden Quill Award for Literary Fiction.', icon: Award },
  { year: '2022', event: 'Reached NYT Bestseller list for 10 consecutive weeks.', icon: Award },
  { year: '2024', event: 'The Echo Trilogy concludes with global fanfare.', icon: Globe },
];

import { Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-slate-100 overflow-hidden shadow-2xl overflow-hidden group">
                <img
                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
                   alt="Elena Thorne"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold flex flex-col items-center justify-center text-white p-6 shadow-xl">
                 <span className="text-4xl font-serif font-bold">10+</span>
                 <span className="text-[10px] uppercase font-bold tracking-widest text-center mt-2">Years of Storytelling</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h4 className="text-gold font-mono text-sm tracking-widest uppercase font-bold">The Author's Journey</h4>
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">Elena <span className="italic">Thorne</span></h1>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Elena Thorne is an award-winning novelist whose work explores the profound intersections of memory, place, and identity. With a background in classical literature and a penchant for atmospheric mysteries, she has captivated millions of readers worldwide.
                </p>
                <p>
                  Her writing process is deeply rooted in her surroundings—from the mist-shrouded forests of the Pacific Northwest to the vibrant, historic streets of London. She believes that every setting is a character unto itself, whispering secrets to those who listen closely enough.
                </p>
                <p>
                  When she is not writing, Elena can be found wandering through independent bookstores, tending to her heirloom roses, or mentoring aspiring writers through her "First Chapter" scholarship program.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold">Milestones & Achievements</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          
          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  {idx !== TIMELINE.length - 1 && <div className="w-px h-16 bg-slate-200 mt-4" />}
                </div>
                <div className="flex-1 pt-2">
                  <span className="text-sm font-mono font-bold text-gold">{item.year}</span>
                  <p className="text-lg text-slate-700 font-serif mt-2">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
