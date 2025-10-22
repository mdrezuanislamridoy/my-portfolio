import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import {
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

export default function About() {
  return (
    <section
      className="relative w-full bg-gray-900/20 backdrop-blur-sm py-16 px-6 md:px-10 overflow-hidden"
      id="about"
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
              About Me
            </h2>
          </div>
          <div className="h-1 w-16 bg-blue-400 rounded-full my-3 mx-auto md:mx-0"></div>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            I'm working with the
            <span className="text-blue-400 font-semibold"> MERN stack </span>
            and focused on{" "}
            <span className="text-blue-400 font-semibold">
              backend development.
            </span>{" "}
            I'm skilled in {""}
            <span className="text-blue-300 font-semibold">Node.js</span>,{" "}
            <span className="text-blue-300 font-semibold">Express</span>,{" "}
            <span className="text-blue-300 font-semibold">TypeScript</span>,{" "}
            <span className="text-blue-300 font-semibold">MongoDB</span>, and .
            I'm also exploring new technologies like{" "}
            <span className="text-blue-300 font-semibold">NestJS</span>,{" "}
            <span className="text-blue-300 font-semibold">PostgreSQL</span> ,{" "}
            <span className="text-blue-300 font-semibold">Socket.io</span>, and
            other modern tools. I've also worked on frontend development with{" "}
            <span className="text-blue-300 font-semibold">React.js</span> and{" "}
            {""}
            <span className="text-blue-300 font-semibold">Zustand</span> for
            state management
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6 text-4xl text-blue-400">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <SiExpress title="Express.js" />
            <SiNestjs title="NestJS" />
            <SiMongodb title="MongoDB" />
            <SiPostgresql title="PostgreSQL" />
            <SiTypescript title="TypeScript" />
          </div>

          <a
            href="#projects"
            className="inline-block mt-8 px-5 py-2.5 bg-blue-500/10 text-blue-300 border border-blue-400 rounded-xl hover:bg-blue-500/20 transition duration-300 cursor-none"
          >
            View My Projects →
          </a>
        </div>

        <div className="relative w-full md:w-1/2 m-auto flex justify-center">
          <div className="relative w-[280px] h-[350px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/80 backdrop-blur-md border ">
            <img
              src="/me.png"
              alt="MD Ridoy Babu"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-[280px] h-[350px] rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
