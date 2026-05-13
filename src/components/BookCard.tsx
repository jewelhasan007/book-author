import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, BookOpen } from 'lucide-react';
import { Book } from '@/constants';
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
  compact?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({ book, compact = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className={cn(
        "relative overflow-hidden bg-brand-bg rounded-2xl border border-brand-border shadow-sm group-hover:shadow-xl transition-shadow duration-500",
        compact ? "aspect-[2/3]" : "aspect-[2/3]"
      )}>
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {book.isBestseller && (
            <span className="bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-xl">
              Bestseller
            </span>
          )}
          {book.newRelease && (
            <span className="bg-accent-bright text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-xl">
              New Release
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-brand-text/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-text hover:bg-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
            <BookOpen size={20} />
          </button>
        </div>
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-accent mb-2">{book.genre}</p>
        <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-accent-bright transition-colors tracking-tight italic">{book.title}</h3>
        
        {!compact && (
          <>
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={cn(i < Math.floor(book.rating) ? "fill-accent-bright text-accent-bright" : "text-brand-border")}
                />
              ))}
              <span className="text-[10px] font-bold ml-2 text-neutral-400">({book.reviewCount})</span>
            </div>
          </>
        )}

        <div className="pt-2">
          <a
            href={book.amazonUrl}
            className="block w-full py-3 border border-brand-text text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand-text hover:text-white"
          >
            Shop on Amazon
          </a>
        </div>
      </div>
    </motion.div>
  );
}
