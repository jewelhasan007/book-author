import React from 'react';
import { motion } from 'motion/react';
import { BookCard } from '@/components/BookCard';
import { BOOKS } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedBooks() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="text-gold font-mono text-sm tracking-widest uppercase font-bold mb-4">Latest Releases</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
              Discover the <span className="italic">Collection</span>
            </h2>
          </div>
          <Link
            to="/books"
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-gold transition-colors pb-1 border-b border-slate-100 hover:border-gold"
          >
            Show All Books <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {BOOKS.slice(0, 3).map((book, idx) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
