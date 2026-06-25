import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaFire, FaExternalLinkAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNestjs, SiPostgresql } from "react-icons/si";

const stats = [
  { icon: <FaCodeBranch />, value: "30+", label: "Repositories" },
  { icon: <FaFire />, value: "500+", label: "Contributions" },
];

const topLanguages = [
  { name: "NestJS", icon: <SiTypescript />, color: "#3178c6", percent: 65 },
  { name: "TypeScript", icon: <SiJavascript />, color: "#f7df1e", percent: 25 },
  { name: "SQL", icon: <SiPostgresql />, color: "#336791", percent: 10 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function GitHubActivity() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100" id="github">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
        >
          Open Source
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          GitHub{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Activity</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-4"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* GitHub Contribution Graph */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaGithub className="text-2xl text-white" />
            <h3 className="text-xl font-bold text-white">Contribution Graph</h3>
          </div>

          <div className="bg-slate-900/60 rounded-xl p-4 overflow-hidden">
            <img
              src="https://ghchart.rshah.org/60a5fa/mdrezuanislamridoy"
              alt="GitHub Contribution Graph"
              className="w-full rounded-lg opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900/40 rounded-xl p-4 text-center border border-slate-700/30"
              >
                <div className="text-blue-400 text-xl mx-auto mb-2 flex justify-center">{stat.icon}</div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-400 text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Profile */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-6">Top Languages</h3>

          <div className="space-y-5 flex-1">
            {topLanguages.map((lang) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span style={{ color: lang.color }} className="text-lg">{lang.icon}</span>
                    <span className="text-slate-300 text-sm font-medium">{lang.name}</span>
                  </div>
                  <span className="text-slate-400 text-sm">{lang.percent}%</span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.a
            href="https://github.com/mdrezuanislamridoy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 text-white py-3 px-6 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 cursor-none"
          >
            <FaGithub className="text-xl" />
            View Full GitHub Profile
            <FaExternalLinkAlt className="text-xs" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
