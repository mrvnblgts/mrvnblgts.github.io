import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Building2,
} from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../effects/ScrollReveal";
import { timelineItems } from "../../data/timeline";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Timeline() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0, 1]
  );

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <Container>
        <SectionHeading>Experience &amp; Education</SectionHeading>

        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border-subtle">
            <motion.div
              style={{
                scaleY: pathLength,
                originY: 0,
              }}
              className="w-full h-full bg-gradient-to-b from-accent-primary to-accent-secondary"
            />
          </div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.type === "education" ? GraduationCap : Award;

              return (
                <ScrollReveal key={index} delay={index * 0.15} direction={isEven ? "left" : "right"}>
                  <div
                    className={`flex flex-col md:flex-row gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="flex items-center justify-center md:w-0">
                      <div
                        className={`relative z-10 p-2 rounded-xl ${
                          item.type === "education"
                            ? "bg-accent-primary/10 text-accent-primary"
                            : "bg-accent-warm/10 text-accent-warm"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 ${
                        isEven ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-muted transition-colors duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-heading font-semibold text-text-primary text-base">
                              {item.title}
                            </h3>
                            <p className="text-accent-primary text-sm font-medium mt-0.5">
                              {item.organization}
                            </p>
                          </div>
                          {item.highlight && (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                              {item.highlight}
                            </span>
                          )}
                        </div>

                        <p className="text-text-secondary text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-text-muted">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} />
                            {item.date}
                          </span>
                          {item.type === "education" && (
                            <span className="flex items-center gap-1.5">
                              <Building2 size={13} />
                              Tacloban City
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
