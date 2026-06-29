import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function TextReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}
