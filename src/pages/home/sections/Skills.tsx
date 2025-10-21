import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", image: "/skills/html.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "JavaScript", image: "/skills/javascript.png" },
  { name: "TypeScript", image: "/skills/typescript.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "NodeJS", image: "/skills/nodejs.png" },
  { name: "ExpressJS", image: "/skills/expressjs.png" },
  { name: "NestJS", image: "/skills/nestjs.png" },
  { name: "NextJS", image: "/skills/nextjs.png" },
  { name: "MongoDB", image: "/skills/mongodb.png" },
  { name: "PostgreSQL", image: "/skills/postgresql.png" },
  { name: "Git", image: "/skills/git.png" },
  { name: "TailwindCSS", image: "/skills/tailwindcss.png" },
];

export default function Skills() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div
      className="overflow-hidden relative w-full max-w-7xl mx-auto"
      id="skills"
    >
      <h2 className="text-2xl font-bold text-center mt-6">Skills</h2>
      <hr className="border-blue-400 border-2 w-26 my-2 rounded-3xl mx-auto " />

      <div
        ref={containerRef}
        className="relative flex overflow-hidden whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex gap-10 px-10 py-10"
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex group  flex-col items-center justify-center min-w-[130px] bg-slate-800 p-4 rounded-md hover:bg-slate-700 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <motion.img
                  className={`w-16 h-16 object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-110`}
                  src={skill.image}
                  alt={skill.name}
                />
                <span className="text-lg font-semibold pt-4">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
