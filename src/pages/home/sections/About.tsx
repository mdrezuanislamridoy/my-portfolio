import { FaNodeJs } from "react-icons/fa";
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
      className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6 md:px-10 overflow-hidden"
      id="about"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaNodeJs className="text-blue-400 text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
              About Me
            </h2>
          </div>
          <div className="h-1 w-16 bg-blue-400 rounded-full my-3 mx-auto md:mx-0"></div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            I'm a{" "}
            <span className="text-blue-300 font-semibold">
              full stack web developer{" "}
            </span>
            specializing in backends. I like to develop dependable, efficient
            systems that serve as the foundation for incredible digital
            experiences. While I enjoy designing straightforward, uncluttered
            front-ends with the most recent technologies, my real ability lies
            in developing secure APIs to manage the flow of data and enhance
            back-end performance.
          </p>

          <p className="text-gray-400 mt-3 text-sm md:text-base">
            The technologies I use most for building scalable, easy to maintain
            and extend backends:{" "}
            <span className="text-blue-300 font-semibold">Node.js</span>,{" "}
            <span className="text-blue-300 font-semibold">Express</span>,{" "}
            <span className="text-blue-300 font-semibold">NestJS</span>,{" "}
            <span className="text-blue-300 font-semibold">MongoDB</span>,{" "}
            <span className="text-blue-300 font-semibold">PostgreSQL</span>, and{" "}
            <span className="text-blue-300 font-semibold">TypeScript</span>. I'm
            passionate about writing compatible, well organised code and
            converting complex ideas into reliable solutions that work in
            production.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6 text-4xl text-blue-400">
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

        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[350px] rounded-3xl overflow-hidden shadow-xl shadow-blue-900/30 bg-white/5 backdrop-blur-md border border-white/10">
            <img
              src="/me.jpg"
              alt="MD Ridoy Babu"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-[280px] h-[350px] rounded-3xl bg-gradient-to-r from-blue-400/20 to-emerald-400/20 blur-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
