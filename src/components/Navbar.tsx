import { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Services", path: "#services" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-90 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-slate-700/30"
          : "bg-slate-900 shadow-2xl shadow-slate-900"
      }`}
    >
      <div className="flex max-w-7xl m-auto justify-between items-center p-3 relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold"
        >
          {"<RB />"}
        </motion.h2>

        <ul className="hidden md:flex gap-6 text-slate-400 items-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                className="hover:text-white transition-colors duration-200 text-sm font-medium relative group"
                href={link.path}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-none"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-2xl text-slate-200 z-50"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <IoCloseCircleOutline /> : <FaBarsStaggered />}
        </button>

        <div
          className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-slate-800/95 backdrop-blur-xl p-6 rounded-l-2xl shadow-2xl border-l border-slate-700/30 transition-all duration-300 ease-in-out transform ${
            visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 text-slate-200 mt-14">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  className="block py-2.5 px-4 rounded-xl hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-200 font-medium"
                  href={link.path}
                  onClick={() => setVisible(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setVisible(false)}
                className="block text-center py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
