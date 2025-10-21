import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);

  const cursorX = useSpring(useMotionValue(-100), {
    stiffness: 1000,
    damping: 40,
  });
  const cursorY = useSpring(useMotionValue(-100), {
    stiffness: 1000,
    damping: 40,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleHover = () => setHovered(true);
    const handleLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .hoverable").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border-2 border-blue-400 bg-transparent mix-blend-difference transition-transform duration-150 ease-out`}
      style={{
        x: cursorX,
        y: cursorY,
        width: hovered ? 40 : 35,
        height: hovered ? 40 : 35,
        scale: hovered ? 1.2 : 1,
      }}
    />
  );
}
