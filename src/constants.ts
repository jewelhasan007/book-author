/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Book {
  id: string;
  title: string;
  genre: string;
  description: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  amazonUrl: string;
  series?: string;
  isBestseller?: boolean;
  newRelease?: boolean;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  isVerified: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'The Silent Echo',
    genre: 'Contemporary Fiction',
    description: 'A hauntingly beautiful tale of family secrets and the power of forgiveness in a small coastal town.',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    reviewCount: 1250,
    amazonUrl: '#',
    isBestseller: true,
  },
  {
    id: '2',
    title: 'Whispers of the Wind',
    genre: 'Mystery & Suspense',
    description: 'When a century-old letter is found behind a wall, it sets off a dangerous chain of events.',
    coverImage: 'https://images.unsplash.com/photo-1543004407-1bc989047721?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviewCount: 3400,
    amazonUrl: '#',
    newRelease: true,
  },
  {
    id: '3',
    title: 'Shadows of the Past',
    genre: 'Historical Thriller',
    description: 'Amidst the chaos of war, a young musician must protect a secret that could change history.',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviewCount: 890,
    amazonUrl: '#',
    series: 'The Echo Trilogy',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    text: "Elena Thorne has a way with words that touches the soul. 'The Silent Echo' stayed with me for weeks.",
    rating: 5,
    isVerified: true,
  },
  {
    id: '2',
    author: 'Michael Reed',
    text: "A masterclass in suspense. I couldn't put it down until the very last page.",
    rating: 5,
    isVerified: true,
  },
  {
    id: '3',
    author: 'Emma Wilson',
    text: "Brilliant storytelling and deep, rich characters. Truly a remarkable read.",
    rating: 4,
    isVerified: true,
  },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'My Writing Journey: From First Draft to Bestseller',
    excerpt: 'The road to publishing is paved with coffee, persistence, and many, many revisions.',
    date: 'May 12, 2026',
    category: 'Writing Tips',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '2',
    title: 'Upcoming Book Signing Event at The Literati',
    excerpt: 'Join me for an evening of discussion, Q&A, and signed copies of my latest release.',
    date: 'June 05, 2026',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400',
  },
];
