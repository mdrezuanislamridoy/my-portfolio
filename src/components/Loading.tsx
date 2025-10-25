// Loading.tsx
import { motion } from "framer-motion";

const Loading = () => {
  const letters = "LOADING...".split("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <motion.div
        className="flex space-x-1 text-3xl md:text-5xl font-bold text-white tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Loading;
