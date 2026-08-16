import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header sits inside the lavender hero band */}
      <div className="bg-lavender-hero">
        <Header />
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <BottomSection />
      <Footer />
    </main>
  );
}
