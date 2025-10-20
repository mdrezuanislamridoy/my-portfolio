import About from "./sections/About";
import HeroSection from "./sections/HeroSection";
import Skills from "./sections/Skills";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ">
      <HeroSection />
      <About />
      <Skills />
    </div>
  );
}
