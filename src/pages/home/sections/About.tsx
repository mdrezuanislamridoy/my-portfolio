import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiExpress, SiTypescript, SiNestjs, SiPostgresql, SiDocker, SiPrisma, SiNextdotjs, SiMongodb, SiRedis } from "react-icons/si";
import { motion, useAnimation, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import ButtonComponent from "../../../components/ui/ButtonComponent";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-slate-900/20 backdrop-blur-sm py-20 px-6 md:px-10 overflow-hidden"
      id="about"
    >
      <motion.div
        className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={itemVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Who I Am
          </motion.p>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-3"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
              About Me
            </h2>
          </motion.div>

          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full my-4 mx-auto md:mx-0"
            variants={itemVariants}
          />

          <motion.p
            className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed"
            variants={itemVariants}
          >
            I'm a <span className="text-blue-400 font-semibold">Full Stack Developer & Backend Specialist</span> with production experience at{" "}
            <span className="text-cyan-400 font-semibold">Softvence Agency</span>. 
            I design and maintain scalable RESTful APIs, microservices, and responsive front-ends using{" "}
            <span className="text-blue-400 font-semibold">Node.js</span>,{" "}
            <span className="text-blue-400 font-semibold">NestJS</span>,{" "}
            <span className="text-blue-400 font-semibold">TypeScript</span>,{" "}
            <span className="text-blue-400 font-semibold">React.js</span>, and{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>.
          </motion.p>

          <motion.p
            className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed"
            variants={itemVariants}
          >
            Skilled in <span className="text-blue-300 font-semibold">PostgreSQL</span>, <span className="text-blue-300 font-semibold">Prisma</span>, <span className="text-blue-300 font-semibold">TypeORM</span>, and <span className="text-blue-300 font-semibold">MongoDB</span>, with hands-on experience delivering distributed healthcare microservice platforms (11 services, 9 isolated DBs) and feature-rich EdTech SaaS platforms with Stripe/Selcom billing and AI integrations.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-3xl text-blue-400"
            variants={itemVariants}
          >
            {[
              { icon: <SiNestjs />, name: "NestJS" },
              { icon: <SiTypescript />, name: "TypeScript" },
              { icon: <SiPostgresql />, name: "PostgreSQL" },
              { icon: <SiPrisma />, name: "Prisma" },
              { icon: <SiDocker />, name: "Docker" },
              { icon: <FaReact />, name: "React.js" },
              { icon: <SiNextdotjs />, name: "Next.js" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express" },
              { icon: <SiMongodb />, name: "MongoDB" },
              { icon: <SiRedis />, name: "Redis" },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.2, y: -5 }}
                className="cursor-default"
                title={tech.name}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <ButtonComponent link={"#projects"}>
              View My Projects →
            </ButtonComponent>
            <ButtonComponent link={"#experience"}>
              See Experience →
            </ButtonComponent>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full md:w-1/2 m-auto flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-[280px] h-[350px] rounded-3xl backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/me.png"
              alt="MD RIDOY BABU - Full Stack & Backend Developer"
              className="object-cover w-full h-full filter drop-shadow-[0_0_25px_#14b8a6] transition-all hover:drop-shadow-[0_0_35px_#14b8a6]"
            />
          </motion.div>
          <div className="absolute -bottom-4 -right-4 w-[280px] h-[350px] rounded-3xl -z-10"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
