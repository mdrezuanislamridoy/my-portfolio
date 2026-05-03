import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Backend Developer",
    company: "Softvence Agency",
    period: "Nov 2025 - Present",
    description: `Backend development with NestJS and modern backend technologies. API design, authentication, and database integration. Team collaboration and production-level backend systems.`,
  },
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100"
      id="experience"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Experience <span className="text-blue-400"></span>
        </h2>
        <hr className="border-blue-400 border-2 w-36 my-2 rounded-3xl mx-auto mb-6" />
        <p className="text-gray-400 mt-3 text-base">
          My professional journey and key milestones.
        </p>
      </div>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/60 rounded-2xl border border-gray-700 shadow-lg p-6"
            variants={itemVariants}
          >
            <div className="flex items-start gap-4">
              <div className="text-blue-400 text-2xl mt-1">
                <FaBriefcase />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}