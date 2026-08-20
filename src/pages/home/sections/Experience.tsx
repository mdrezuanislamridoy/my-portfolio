import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    title: "Backend Developer",
    company: "Softvence Agency",
    agency: "",
    location: "Mohakhali, Dhaka, Bangladesh",
    period: "Nov 2025 – Aug 2026",
    duration: "Full-Time",
    type: "Full-Time",
    icon: <FaBriefcase />,
    color: "#3b82f6",
    description:
      "Engineered production-grade RESTful APIs and modular backend microservices, supporting high request volume, schema optimization, and CI/CD pipelines in Agile sprints.",
    highlights: [
      "Built & maintained production-grade RESTful APIs using NestJS, TypeScript, Prisma ORM, and PostgreSQL, supporting 1.5M+ requests/day with 99.9% API uptime",
      "Designed relational database schemas & optimized SQL queries via composite indexing, reducing average query time by 55% across high-traffic modules",
      "Implemented authentication, authorization, input validation, centralized exception handling, automated unit tests, and structured logging",
      "Standardized Docker-based CI/CD environments and collaborated cross-functionally with product, frontend, and QA teams to deliver sprint features",
    ],
    tech: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL", "Docker", "CI/CD", "Jest", "Agile/Scrum", "Redis"],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    agency: "",
    location: "Dhaka, Bangladesh",
    period: "Jan 2025 – Nov 2025",
    duration: "Freelance",
    type: "Freelance",
    icon: <FaLaptopCode />,
    color: "#10b981",
    description:
      "Delivered scalable full-stack web applications, custom platforms, and developer tooling using modern React, Next.js, Node.js, and database ecosystems.",
    highlights: [
      "Built complete web applications with React, Next.js, Node.js, Express, and MongoDB",
      "Engineered cloud storage solutions (RR-Vault) with developer SDK integration and multi-database architectures",
      "Integrated third-party payment gateways (Stripe/Selcom), real-time WebSockets, and cloud storage",
      "Deployed containerized applications on cloud platforms with reliable CI/CD pipelines",
    ],
    tech: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "Tailwind CSS"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100"
      id="experience"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
        >
          Career Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Experience
          </span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 mt-4 max-w-2xl mx-auto"
        >
          My professional journey building production-grade systems and delivering impactful solutions.
        </motion.p>
      </div>

      {/* Timeline */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 md:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg border-4 border-slate-900"
                style={{ backgroundColor: exp.color }}
              >
                {exp.icon}
              </motion.div>
            </div>

            {/* Card */}
            <div
              className={`ml-20 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                  >
                    {exp.type}
                  </span>
                  <span className="text-slate-500 text-xs">{exp.duration}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="font-semibold mb-1" style={{ color: exp.color }}>
                  {exp.company}
                  {exp.agency && (
                    <span className="text-slate-400 font-normal"> ({exp.agency})</span>
                  )}
                </p>
                <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{exp.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <HiCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-400 text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-700/60 text-slate-300 text-xs rounded-full border border-slate-600/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}