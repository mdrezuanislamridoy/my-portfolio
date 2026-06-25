import { motion } from "framer-motion";
import { HiServer, HiDatabase, HiShieldCheck, HiCloud, HiCode, HiLightBulb } from "react-icons/hi";

const services = [
  {
    icon: <HiServer />,
    title: "Backend API Development",
    description:
      "Building robust, scalable RESTful & GraphQL APIs using NestJS, Express, and Node.js with clean architecture patterns.",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "#3b82f620",
    iconColor: "#60a5fa",
  },
  {
    icon: <HiDatabase />,
    title: "Database Architecture",
    description:
      "Designing optimized database schemas with PostgreSQL, MongoDB, Prisma ORM, and TypeORM for high-performance data layers.",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "#10b98120",
    iconColor: "#34d399",
  },
  {
    icon: <HiShieldCheck />,
    title: "Auth & Security",
    description:
      "Implementing JWT authentication, OAuth2, role-based access control (RBAC), OTP verification, and API security best practices.",
    gradient: "from-purple-500 to-violet-500",
    iconBg: "#8b5cf620",
    iconColor: "#a78bfa",
  },
  {
    icon: <HiCloud />,
    title: "DevOps & Deployment",
    description:
      "Containerizing applications with Docker, setting up CI/CD pipelines, and deploying to cloud platforms for production readiness.",
    gradient: "from-orange-500 to-amber-500",
    iconBg: "#f59e0b20",
    iconColor: "#fbbf24",
  },
  {
    icon: <HiCode />,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end web application development with React/Next.js frontends and Node.js backends, delivering complete solutions.",
    gradient: "from-pink-500 to-rose-500",
    iconBg: "#ec489920",
    iconColor: "#f472b6",
  },
  {
    icon: <HiLightBulb />,
    title: "Technical Consultation",
    description:
      "Architecture review, code auditing, performance optimization, and mentoring teams to adopt best development practices.",
    gradient: "from-indigo-500 to-blue-500",
    iconBg: "#6366f120",
    iconColor: "#818cf8",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100"
      id="services"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
        >
          What I Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
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
          I deliver end-to-end solutions with a focus on performance, security, and scalability.
          Here's how I can help bring your vision to life.
        </motion.p>
      </div>

      {/* Service Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group cursor-default"
          >
            {/* Gradient border on hover */}
            <div
              className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
            />

            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-slate-700/50 group-hover:border-transparent transition-all duration-500">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: service.iconBg, color: service.iconColor }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
