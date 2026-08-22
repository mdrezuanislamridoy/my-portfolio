import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MedCare - Telemedicine Microservices",
    description:
      "Database-per-Service microservices system with 11 isolated services, 9 PostgreSQL DBs, NestJS/Caddy API Gateway, live token-queue SSE, and WebSocket teleconsultation.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma 7", "Redis", "Docker", "WebSockets", "Jest"],
    image: "/projects/medcare.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mdrezuanislamridoy/MedCare-Backend",
      },
    ],
    live: "",
  },
  {
    title: "Nodmac - EdTech & Career SaaS",
    description:
      "EdTech SaaS with AI-powered hybrid chatbot fallback, MCQ engine, multi-tier Stripe/Selcom subscription engine with monthly usage throttling, and dynamic CV builder.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Stripe/Selcom", "Socket.io", "AWS S3"],
    image: "/projects/nodmac.png",

    live: "",
  },
  {
    title: "RR-Vault - Cloud Storage & SDK",
    description:
      "A secure cloud storage platform for teams with NestJS backend, a React frontend, and an SDK for developer integration.",
    tech: ["NestJS", "PostgreSQL", "TypeScript", "React", "Docker"],
    image: "/projects/rr-vault.png",
    links: [
      {
        label: "Frontend",
        href: "https://github.com/mdrezuanislamridoy/my_cloud_client",
      },
      {
        label: "Backend",
        href: "https://github.com/mdrezuanislamridoy/RR-Vault",
      },
      {
        label: "SDK",
        href: "https://github.com/mdrezuanislamridoy/rr-vault-sdk",
      },
    ],
    live: "https://rr-vault.vercel.app/",
  },
  {
    title: "YourTutor",
    description:
      "A Learning Management System with frontend and backend, featuring JWT authentication, media uploads, and user management.",
    tech: ["Node.js", "Express", "TypeScript", "MongoDB", "React"],
    image: "/projects/rrlms.png",
    links: [
      {
        label: "Frontend",
        href: "https://github.com/mdrezuanislamridoy/YourTutor-Frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/mdrezuanislamridoy/LMS_BACKEND",
      },
    ],
    live: "https://your-tutor-theta.vercel.app/",
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

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4">
                <div className="flex flex-wrap justify-center gap-3">
                  {project.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full hover:bg-blue-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  {project.live !== "#" && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full hover:bg-blue-500 transition-colors flex items-center gap-2"
                    >
                      Live
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 p-4">
              {project.tech?.map((tech, i) => (
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
