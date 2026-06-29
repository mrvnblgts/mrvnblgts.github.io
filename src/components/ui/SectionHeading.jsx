import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function SectionHeading({ children, className = "" }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? {} : { filter: "blur(10px)", opacity: 0, y: 20 }}
      whileInView={reducedMotion ? {} : { filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
        {children}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
    </motion.div>
  );
}
