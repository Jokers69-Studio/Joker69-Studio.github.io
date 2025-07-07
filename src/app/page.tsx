import { AppLayout } from "@/components/Layout";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-24">
        <About />
        <Projects />
        <Skills />
      </div>
    </AppLayout>
  );
}
