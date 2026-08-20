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
    { icon: <LiaLinkedin />, path: "https://www.linkedin.com/in/rr-md-ridoy-babu/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/RidoyBabu.FutureDeveloper/" },
    { icon: <MdEmail />, path: "mailto:ridoy.babu.781@gmail.com" },
  ];

  useEffect(() => {
    Prism.highlightAll();

    const typed = new Typed(typedRef.current, {
      strings: [
        "NestJS & PostgreSQL",
        "React.js & Next.js",
        "Microservices & Kafka",
        "TypeScript & Node.js",
        "Prisma & Docker CI/CD",
        "Scalable REST & gRPC",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  const code = `
const engineer = {
  name: 'MD RIDOY BABU',
  role: 'Full Stack & Backend Developer',
  experience: '1+ Years',
  stack: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "NestJS", "Express.js", "REST / gRPC"],
    database: ["PostgreSQL", "Prisma", "TypeORM", "MongoDB", "Redis"],
    devops: ["Docker", "CI/CD", "AWS", "Kafka", "Linux"],
  },
  currentlyAt: 'Softvence Agency',
  openToWork: true,
  hireable() {
    return this.openToWork && 
      Object.values(this.stack).flat().length >= 8;
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
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-emerald-400 text-sm font-medium">Available for Hire</span>
        </motion.div>

        <div>
          <h2 className="text-xl md:text-2xl text-blue-400 font-semibold tracking-wide">
            👋 Hello there,
          </h2>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mt-2"
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Ridoy Babu
            </span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl font-medium text-slate-300 mt-2"
          >
            a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Full Stack & Backend Developer
            </span>{" "}
            who builds
            <br />
            fast, scalable systems 🚀
          </motion.h3>

          <p className="text-cyan-400 text-lg mt-4">
            <span className="font-semibold">Specialized in: </span>
            <span ref={typedRef} className="typed-text" />
          </p>
        </div>

        <p className="text-slate-400 max-w-md text-base leading-relaxed">
          Full Stack Developer with production experience designing scalable RESTful APIs, 
          microservices, and responsive front-ends at <span className="text-blue-400 font-medium">Softvence Agency</span>. 
          I turn complex business logic into clean, maintainable, and scalable code.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex gap-5 text-2xl mt-2"
        >
          {socialLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300 cursor-none hover:scale-125 hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <div className="flex flex-wrap gap-4 mt-2">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-none inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-semibold"
            href="Resume.pdf"
            target="_blank"
            download
          >
            Download Resume <BiDownload className="text-xl" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-none inline-flex items-center gap-2 border border-blue-400/50 text-blue-400 px-7 py-3 rounded-full hover:bg-blue-500/10 transition-all duration-300 font-semibold"
            href="#contact"
          >
            Let's Talk →
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-900/40 backdrop-blur-md text-gray-100 rounded-2xl shadow-2xl shadow-blue-500/5 border border-slate-700/30 p-5 w-full md:w-1/2 max-h-[500px] mx-auto font-mono"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="ml-auto text-slate-500 text-xs font-sans">ridoy-babu.ts</span>
        </div>
        <hr className="border-slate-700 border rounded-2xl mb-3" />
        <pre className="language-js text-sm whitespace-pre-wrap break-words overflow-x-hidden overflow-y-auto">
          <code>{code}</code>
        </pre>
      </motion.div>
    </div>
  );
}
