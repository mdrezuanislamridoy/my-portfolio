import Footer from "../../components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import GitHubActivity from "./sections/GitHubActivity";
import HeroSection from "./sections/HeroSection";
import FeaturedProjects from "./sections/Projects";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

export default function HomePage() {
  return (
    <div className=" text-white ">
      <HeroSection />
      <Stats />
      <About />
      <Experience />
      <Services />
      <Skills />
      <FeaturedProjects />
      <Testimonials />
      <GitHubActivity />
      <Contact />
      <Footer />
    </div>
  );
}
