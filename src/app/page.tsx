import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-950/20 text-gray-900 dark:text-white overflow-x-hidden">
      <Header />

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 flex-1">
        <div className="container mx-auto max-w-7xl">
          <About />
          <Projects />
          <Skills />
        </div>
      </main>

      <Footer />
    </div>
  );
}
