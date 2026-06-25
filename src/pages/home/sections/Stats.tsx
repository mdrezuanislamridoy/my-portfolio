import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaBriefcase, FaProjectDiagram, FaUsers, FaCode } from "react-icons/fa";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  color: string;
}

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <motion.span className="text-5xl md:text-6xl font-extrabold">
      {useTransform(rounded, (v) => `${v}${suffix}`).get() ? (
        <motion.span>{useTransform(rounded, (v) => `${v}${suffix}`)}</motion.span>
      ) : null}
    </motion.span>
  );
}

function StatCard({ icon, value, suffix, label, delay, color }: StatItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${color}40, transparent)` }}
      />

      <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-all duration-500">
        {/* Icon */}
        <div
          className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>

        {/* Counter */}
        <motion.div
          className="text-4xl md:text-5xl font-extrabold text-white mb-2"
          style={{ color }}
        >
          {rounded}
        </motion.div>

        {/* Label */}
        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  );
}

const stats = [
  { icon: <FaBriefcase />, value: 1, suffix: "+", label: "Years Experience", color: "#60a5fa" },
  { icon: <FaProjectDiagram />, value: 10, suffix: "+", label: "Projects Delivered", color: "#34d399" },
  { icon: <FaUsers />, value: 8, suffix: "+", label: "Happy Clients", color: "#a78bfa" },
  { icon: <FaCode />, value: 14, suffix: "+", label: "Technologies", color: "#f472b6" },
];

export default function Stats() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-6 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 0.15} />
        ))}
      </div>
    </section>
  );
}
