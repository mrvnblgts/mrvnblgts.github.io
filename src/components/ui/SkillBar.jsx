import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function SkillBar({ name, level, icon, index = 0 }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
      whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center text-xs font-semibold text-text-muted group-hover:text-accent-primary transition-colors duration-200 font-heading">
            {icon}
          </span>
          <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
            {name}
          </span>
        </div>
        <span className="text-xs text-text-muted tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
        <motion.div
          initial={reducedMotion ? { width: `${level}%` } : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.08 + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
        />
      </div>
    </motion.div>
  );
}
