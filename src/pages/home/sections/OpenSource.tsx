import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi";

const contributions = [
  {
    repo: "nestjs/nest",
    repoUrl: "https://github.com/nestjs/nest",
    prNumber: 17818,
    prUrl: "https://github.com/nestjs/nest/pull/17818",
    title: "fix(platform-express): merge global and route-level Multer limits",
    description:
      "Fixed a bug where MulterModule.register() (global) options and per-route FileInterceptor(...) (local) options were merged with a flat object spread, so a route overriding one limit silently lost every other global limit.",
    highlights: [
      "Added a shared mergeMulterOptions() helper that merges limits key-by-key",
      "Handled function-valued limits (multer ≥ 2.4.0) while preserving prior behavior",
      "Replaced the duplicated spread logic across all 5 upload interceptors",
      "Added unit tests plus a .limits assertion in each interceptor spec",
    ],
    statusBadge:
      "https://img.shields.io/github/pulls/detail/state/nestjs/nest/17818",
  },
  {
    repo: "nestjs/nest",
    repoUrl: "https://github.com/nestjs/nest",
    prNumber: 17798,
    prUrl: "https://github.com/nestjs/nest/pull/17798",
    title: "test(testing): add e2e tests for HTTP QUERY method lifecycle",
    description:
      "Audited NestJS's support for the HTTP QUERY method (RFC 10008) and added test coverage proving @QueryMethod() works through the full request lifecycle.",
    highlights: [
      "Added a @QueryMethod(':id') route combining params, query, body, guards & interceptors",
      "Added matching E2E coverage for both Express and Fastify platforms",
      "Fixed the Express E2E httpRequest() helper to preserve query strings",
      "808 integration tests and 1971 package tests passing, no breaking changes",
    ],
    statusBadge:
      "https://img.shields.io/github/pulls/detail/state/nestjs/nest/17798",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OpenSource() {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100"
      id="open-source"
    >
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
        >
          Community Impact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Open Source{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Contributions
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
          I contribute to the NestJS framework — fixing bugs, hardening tests, and
          shipping changes that ship to production for thousands of developers.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {contributions.map((pr) => (
          <motion.a
            key={pr.prNumber}
            href={pr.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group block bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-500 cursor-none"
          >
            {/* Repo + status */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-[#E0234E]/15 flex items-center justify-center text-[#E0234E] text-lg">
                  <SiNestjs />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-slate-200 text-sm font-semibold">{pr.repo}</span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <FaCodeBranch className="text-[10px]" /> PR #{pr.prNumber}
                  </span>
                </div>
              </div>
              <img
                src={pr.statusBadge}
                alt="PR status"
                className="h-5 rounded"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {pr.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {pr.description}
            </p>

            <div className="space-y-2 mb-5">
              {pr.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <HiCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{h}</span>
                </div>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
              View Pull Request
              <FaExternalLinkAlt className="text-xs" />
            </span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/mdrezuanislamridoy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 text-white py-3 px-6 rounded-xl font-semibold hover:border-blue-400 transition-all duration-300 cursor-none"
        >
          <FaGithub className="text-xl" />
          See More on GitHub
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </motion.div>
    </section>
  );
}
