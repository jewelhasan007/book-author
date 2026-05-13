import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookCard } from '@/components/BookCard';
import { BOOKS } from '@/constants';
import { motion } from 'motion/react';
import { Search, Filter } from 'lucide-react';

export default function BooksPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['All', 'Contemporary', 'Mystery', 'Historical', 'Thriller'];

  const filteredBooks = BOOKS.filter(book => {
    const matchesFilter = activeFilter === 'All' || book.genre.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         book.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h4 className="text-gold font-mono text-sm tracking-widest uppercase font-bold mb-4">Complete Bibliography</h4>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 italic">The Stories</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore the complete collection of work by Elena Thorne. From coastal mysteries to heart-wrenching contemporary tales.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-3xl rounded-full -mr-48 -mt-48" />
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pb-8 border-b border-slate-100">
            <div className="flex gap-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all whitespace-nowrap ${
                    activeFilter === cat ? 'border-gold text-gold' : 'border-transparent text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto bg-slate-50 px-4 py-2 ring-1 ring-slate-200 focus-within:ring-gold transition-all text-brand-text">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full md:w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 italic font-serif text-xl">No books found matching your criteria.</p>
              <button 
                onClick={() => { setActiveFilter('All'); setSearchTerm(''); }}
                className="mt-6 text-accent font-bold uppercase tracking-widest text-[10px] border-b border-accent"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
