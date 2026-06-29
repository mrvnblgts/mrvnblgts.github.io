import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}) {
  const reducedMotion = useReducedMotion();

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      whileInView={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0, y: 0 }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
