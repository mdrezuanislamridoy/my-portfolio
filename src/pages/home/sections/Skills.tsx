import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "NodeJS", image: "/skills/nodejs.png" },
  { name: "ExpressJS", image: "/skills/expressjs.png" },
  { name: "MongoDB", image: "/skills/mongodb.png" },
  { name: "PostgreSQL", image: "/skills/postgresql.png" },
  { name: "Git", image: "/skills/git.png" },
  { name: "TailwindCSS", image: "/skills/tailwindcss.png" },
];

export default function Skills() {
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (val) => `${val}%`);
  const [isHovered, setIsHovered] = useState(false);

  const speed = 20; // seconds for one loop

  useEffect(() => {
    let animation: any;

    if (!isHovered) {
      animation = animate(x, -50, {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
      animation?.stop();
    }

    return () => animation?.stop();
  }, [isHovered, x]);

  return (
    <div
      className="overflow-hidden relative w-full max-w-7xl mx-auto"
      id="skills"
    >
      <h2 className="text-2xl font-bold text-center mt-6">Skills</h2>
      <hr className="border-blue-400 border-2 w-26 my-2 rounded-3xl mx-auto " />

      <motion.div
        style={{ x: xPercent }}
        className="flex gap-10 px-10 py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...skills, ...skills].map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex group flex-col items-center justify-center min-w-[130px] bg-slate-800/40 backdrop-blur-lg p-4 rounded-md hover:bg-slate-700/40 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <motion.img
              className="w-16 h-16 object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-110"
              src={skill.image}
              alt={skill.name}
            />
            <span className="text-lg font-semibold pt-4">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
