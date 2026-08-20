import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed Rahman",
    role: "Project Manager",
    company: "Softvence Agency",
    text: "Ridoy is an exceptional backend and full-stack developer. His ability to architect scalable APIs, microservices, and manage complex database schemas is remarkable. He consistently delivers production-ready code ahead of deadlines.",
    rating: 5,
    initials: "AR",
    color: "#3b82f6",
  },
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    company: "TechVenture Inc.",
    text: "Working with Ridoy on our MVP was a game-changer. He built our entire backend infrastructure from scratch — authentication, payment integration, real-time features — all within a tight timeline.",
    rating: 5,
    initials: "SC",
    color: "#10b981",
  },
  {
    name: "Michael Torres",
    role: "Frontend Developer",
    company: "Freelance Collaboration",
    text: "Ridoy's backend APIs are some of the cleanest I've ever integrated with. Well-documented, properly typed with TypeScript, and incredibly reliable. He understands the full stack which makes collaboration seamless.",
    rating: 5,
    initials: "MT",
    color: "#8b5cf6",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-10 text-gray-100" id="testimonials">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3"
        >
          Client Feedback
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          What People{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Say</span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mt-4"
        />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden relative min-h-[320px] md:min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-10 h-full">
                <FaQuoteLeft className="text-blue-400/20 text-4xl mb-4" />
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: testimonials[current].color }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{testimonials[current].name}</h4>
                    <p className="text-slate-400 text-sm">
                      {testimonials[current].role} · {testimonials[current].company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); }}
            className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 transition-all duration-300 cursor-none"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-none ${
                  i === current ? "bg-blue-400 w-8" : "bg-slate-600 hover:bg-slate-500 w-2.5"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => { setDirection(1); setCurrent((c) => (c + 1) % testimonials.length); }}
            className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 transition-all duration-300 cursor-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
