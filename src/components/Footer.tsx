import { FaGithub, FaLinkedin, FaFacebook, FaHeart, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const serviceLinks = [
  "Backend API Development",
  "Database Architecture",
  "Auth & Security",
  "DevOps & Deployment",
  "Full-Stack Web Apps",
  "Technical Consultation",
];

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mdrezuanislamridoy", label: "GitHub" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/rr-md-ridoy-babu/", label: "LinkedIn" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/RidoyBabu.FutureDeveloper/", label: "Facebook" },
  { icon: <MdEmail />, path: "mailto:ridoy.babu.781@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
      {/* Back to Top */}
      <div className="flex justify-center -mt-5">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 cursor-none"
        >
          <FaArrowUp className="text-sm" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
              {"<RB />"}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full Stack & Backend Developer crafting scalable, production-grade 
              systems. Currently building at Softvence Agency.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 border border-slate-700 transition-all duration-300 cursor-none"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block cursor-none"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-200 cursor-none"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center">
            © 2026{" "}
            <span className="text-blue-400 font-semibold">Ridoy Babu</span>. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Designed & Built with <FaHeart className="text-red-400 text-xs" /> by Ridoy Babu
          </p>
        </div>
      </div>
    </footer>
  );
}
