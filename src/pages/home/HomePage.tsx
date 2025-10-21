import Footer from "../../components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ">
      <HeroSection />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  );
}
