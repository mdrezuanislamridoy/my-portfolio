import { FaFacebook } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { BiDownload } from "react-icons/bi";

import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { useEffect, useRef } from "react";
import "./custom-prism.css";
import Typed from "typed.js";
import { motion } from "framer-motion";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  const socialLinks = [
    { icon: <GrGithub />, path: "https://github.com/mdrezuanislamridoy" },
    {
      icon: <LiaLinkedin />,
      path: "https://www.linkedin.com/in/rr-md-ridoy-babu/",
    },
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/RidoyBabu.FutureDeveloper/",
    },
    { icon: <MdEmail />, path: "mailto:mdrezuanislamridoy@gmail.com" },
  ];

  useEffect(() => {
    Prism.highlightAll();

    const typed = new Typed(typedRef.current, {
      strings: ["TypeScript", "React.js", "Node.js", "MongoDB", "Express.js"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  const code = `
const coder = {
  name: 'Md.Ridoy Babu',
  skills: ["TypeScript","React","NodeJS","MongoDB","ExpressJS"],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
`;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start gap-6 w-full md:w-1/2"
      >
        <div>
          <h2 className="text-xl md:text-2xl text-blue-400 font-semibold tracking-wide animate-pulse">
            👋 Hello there,
          </h2>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-snug mt-2"
          >
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Ridoy Babu
            </span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl font-medium text-slate-300 mt-2"
          >
            a <span className="text-cyan-400">Backend Developer</span> who
            builds fast, scalable apps 🚀
          </motion.h3>

          {/* Typed.js Animation */}
          <p className="text-cyan-400 text-lg mt-4">
            <span className="font-semibold">Expert in: </span>
            <span ref={typedRef} className="typed-text"></span>
          </p>
        </div>

        <p className="text-slate-400 max-w-md">
          Passionate about creating efficient server-side applications with
          Node.js, TypeScript, and modern frameworks. Always eager to learn and
          craft elegant code.
        </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex gap-5 text-2xl mt-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 cursor-none"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 cursor-none inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform duration-300"
          href="Resume.pdf"
          target="_blank"
        >
          Download Resume <BiDownload className="text-xl" />
        </motion.a>
      </motion.div>

      {/* RIGHT SECTION (CODE BOX) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#0f172a]/30 backdrop-blur-sm text-gray-100 rounded-2xl shadow-lg p-4 w-full md:w-1/2 max-h-[500px] mx-auto font-mono"
      >
        <div className="flex gap-2 mb-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <hr className="border-cyan-900 border-2 rounded-2xl mb-3" />
        <pre className="language-js text-sm whitespace-pre-wrap break-words overflow-x-hidden overflow-y-auto">
          <code>{code}</code>
        </pre>
      </motion.div>
    </div>
  );
}
