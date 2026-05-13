import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Home/Hero';
import { FeaturedBooks } from '@/components/Home/FeaturedBooks';
import { AboutAuthor } from '@/components/Home/AboutAuthor';
import { AmazonStats } from '@/components/Home/AmazonStats';
import { Testimonials } from '@/components/Home/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <AboutAuthor />
      <AmazonStats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </motion.main>
  );
}
