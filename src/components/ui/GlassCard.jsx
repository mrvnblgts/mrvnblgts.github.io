import { motion } from "motion/react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative bg-bg-card border border-border-subtle rounded-2xl overflow-hidden
        hover:border-border-muted transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
