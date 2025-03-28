import Header from '@/components/Navigation/Header';
import About from '@/components/Navigation/About';
import Projects from '@/components/Navigation/Projects';
import Skills from '@/components/Navigation/Skills';
import Footer from '@/components/Navigation/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 space-y-16 max-w-5xl mx-auto">
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}