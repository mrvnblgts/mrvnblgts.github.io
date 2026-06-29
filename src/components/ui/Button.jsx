import { motion } from "motion/react";

const variants = {
  primary:
    "bg-accent-primary text-white hover:bg-indigo-400 shadow-lg shadow-indigo-500/20",
  secondary:
    "bg-bg-elevated text-text-secondary hover:bg-bg-card hover:text-text-primary border border-border-muted",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-bg-elevated",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
