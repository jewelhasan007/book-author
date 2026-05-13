import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Instagram, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div>
                <h4 className="text-gold font-mono text-sm tracking-widest uppercase font-bold mb-4">Get in Touch</h4>
                <h1 className="text-5xl md:text-6xl font-serif font-bold italic tracking-tight">Let's connect.</h1>
                <p className="text-slate-500 text-lg leading-relaxed mt-6">
                  For reader mail, speaking engagements, or literary inquiries, please use the form or reach out through my official channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6 p-6 border border-slate-100 hover:border-gold transition-colors bg-slate-50">
                   <div className="w-12 h-12 bg-white flex items-center justify-center text-gold shadow-sm">
                      <Mail size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-slate-900">Direct Contact</p>
                      <p className="text-slate-500">hello@elenathorne.com</p>
                   </div>
                </div>

                <div className="flex gap-6 p-6 border border-slate-100 hover:border-gold transition-colors bg-slate-50">
                   <div className="w-12 h-12 bg-white flex items-center justify-center text-gold shadow-sm">
                      <MessageSquare size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-sm uppercase tracking-widest text-slate-900">Literary Agent</p>
                      <p className="text-slate-500 italic">The Literary Collective Agency <br /> smiller@litcollective.com</p>
                   </div>
                </div>
              </div>

              <div className="flex gap-6 pt-6">
                 {[Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:text-gold transition-colors">
                       <Icon size={20} /> Follow Me
                    </a>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 shadow-2xl ring-1 ring-slate-100"
            >
              {status !== 'sent' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Full Name</label>
                       <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:ring-1 focus:ring-gold outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Email Address</label>
                       <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:ring-1 focus:ring-gold outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Subject</label>
                     <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:ring-1 focus:ring-gold outline-none transition-all">
                        <option>Reader Mail</option>
                        <option>Press Inquiry</option>
                        <option>Speaking Engagement</option>
                        <option>Rights & Licensing</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Message</label>
                     <textarea required rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:ring-1 focus:ring-gold outline-none transition-all resize-none"></textarea>
                  </div>

                  <button 
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-gold transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-20 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. Elena will get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-gold font-bold uppercase tracking-widest text-xs border-b border-gold"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
