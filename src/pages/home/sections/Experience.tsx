import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    title: "Backend Developer",
    company: "Betopia Limited",
    agency: "Softvence Agency",
    period: "Aug 2025 – Present",
    duration: "~1 Year",
    type: "Full-Time",
    icon: <FaBriefcase />,
    color: "#3b82f6",
    description:
      "Leading backend development for production-grade applications serving thousands of users, driving architectural decisions and ensuring scalable, maintainable codebases.",
    highlights: [
      "Architected & built RESTful APIs with NestJS, Prisma ORM, and PostgreSQL",
      "Designed complex database schemas and optimized queries for large-scale data",
      "Implemented JWT authentication, RBAC, and OTP-based verification systems",
      "Containerized microservices with Docker & Docker Compose for deployment",
      "Built real-time features including WebSocket-based messaging and video calls",
      "Integrated third-party services: payment gateways, SMS APIs, cloud storage",
      "Collaborated with frontend, mobile, and QA teams in Agile sprints",
      "Conducted code reviews and mentored junior developers on best practices",
    ],
    tech: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Docker", "WebSocket", "Redis"],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    agency: "",
    period: "Jan 2025 – Aug 2025",
    duration: "8 Months",
    type: "Freelance",
    icon: <FaLaptopCode />,
    color: "#10b981",
    description:
      "Delivered end-to-end web applications for multiple clients, handling everything from database design to frontend deployment.",
    highlights: [
      "Built complete web applications with React, Node.js, and MongoDB",
      "Developed e-commerce platforms with secure checkout & inventory management",
      "Created a cloud storage solution (RR-Vault) with SDK for developer integration",
      "Deployed applications on Vercel, Railway, and DigitalOcean",
      "Managed client relationships and delivered projects on tight deadlines",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
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