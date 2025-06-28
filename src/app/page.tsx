import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Features from '@/components/Features';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  );
}
