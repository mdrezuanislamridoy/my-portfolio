import Footer from "../../components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function HomePage() {
  return (
    <div className=" text-white ">
      <HeroSection />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  );
}
