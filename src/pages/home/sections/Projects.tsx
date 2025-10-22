import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ButtonComponent from "../../../components/ui/ButtonComponent";

const projects = [
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
  {
    title: "LMS Backend",
    description:
      "A TypeScript & Express-based Learning Management System with JWT authentication and media uploads.",
    tech: ["Node.js", "Express", "TypeScript", "MongoDB"],
    image: "/projects/rrlms.png",
    github: "https://github.com/mdrezuanislamridoy/LMS_BACKEND",
    live: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="w-full max-w-7xl mx-auto  py-20 px-6 md:px-10  text-gray-100"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-blue-400 transition p-4 shadow-lg flex flex-col"
          >
            <div className="relative rounded-xl overflow-hidden h-48 mb-5">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm flex-grow">
              {project.description}
            </p>

            <div className="flex justify-start gap-5 mt-5 text-blue-400 text-lg">
              {/* {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition cursor-none"
                >
                  <FaExternalLinkAlt />
                </a>
              )} */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition cursor-none"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-14">
        <ButtonComponent
          link="https://github.com/mdrezuanislamridoy"
          target="_blank"
        >
          Check My Github →
        </ButtonComponent>
      </div>
    </section>
  );
}
