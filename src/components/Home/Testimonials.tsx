import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '@/constants';

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h4 className="text-gold font-mono text-sm tracking-widest uppercase font-bold mb-4">Reader Feedback</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight italic">What the readers <br /> <span className="text-slate-400 not-italic">are saying.</span></h2>
            <p className="text-slate-500 mt-6 leading-relaxed">
              Every story I write is a conversation with you. Thank you for being a part of this journey.
            </p>
            <div className="mt-8 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
              <span className="ml-2 font-bold text-sm">4.9 Average Rating</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-50 border border-slate-100 flex flex-col justify-between"
              >
                <Quote size={40} className="text-gold/20 mb-6" />
                <p className="text-lg italic text-slate-700 leading-relaxed mb-8">"{review.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gold flex items-center gap-2">
                    Verified Purchase
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
