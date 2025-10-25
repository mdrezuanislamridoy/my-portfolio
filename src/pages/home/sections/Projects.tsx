import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LMS Backend",
    description:
      "A TypeScript & Express-based Learning Management System with JWT authentication and media uploads.",
    tech: ["Node.js", "Express", "TypeScript", "MongoDB"],
    image: "/projects/rrlms.png",
    github: "https://github.com/mdrezuanislamridoy/LMS_BACKEND",
    live: "#",
  },
  {
    title: "MyNextTrip",
    description:
      "A travel web app with user, agency, and admin panels featuring authentication, booking, and chat system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/mynexttrip.png",
    github: "https://github.com/mdrezuanislamridoy/MyNextTrip",
    live: "#",
  },
  {
    title: "RR-Commerce",
    description:
      "Full-featured e-commerce platform with product, review, and payment management using SSLCommerz.",
    tech: ["React", "TypeScript", "Express", "MongoDB"],
    image: "/projects/ecobazar.png",
    github: "https://github.com/ridoybabu781/TS_BAC/tree/main/RR-Commerce",
    live: "#",
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FeaturedProjects() {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100"
      id="projects"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <hr className="border-blue-400 border-2 w-36 my-2 rounded-3xl mx-auto mb-6" />
        <p className="text-gray-400 mt-3 text-base">
          Here are some of my recent projects. Each one was built with a focus
          on performance, scalability, and real-world functionality.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800/60 rounded-2xl border border-gray-700 shadow-lg overflow-hidden cursor-pointer group"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            {/* IMAGE */}
            <div className="relative rounded-xl overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-blue-400 transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm flex-grow">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
