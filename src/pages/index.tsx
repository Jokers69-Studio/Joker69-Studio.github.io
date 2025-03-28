import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

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