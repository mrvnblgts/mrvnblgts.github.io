import { motion } from "motion/react";

export default function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
    default: "bg-bg-elevated text-text-secondary border border-border-muted",
    accent:
      "bg-indigo-500/10 text-accent-primary border border-indigo-500/20",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
