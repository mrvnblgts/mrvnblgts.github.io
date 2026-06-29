import { motion } from "motion/react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../effects/ScrollReveal";
import { allTechnologies } from "../../data/skills";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 lg:py-32 bg-bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(30%, -50%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-5">
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
                I&apos;m a full-stack web developer specializing in building complete,
                production-ready applications — from database design to polished
                user interfaces. I bring together frontend craftsmanship and
                backend reliability to deliver software that works.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
                My work focuses on the Vue.js ecosystem with Quasar Framework for
                cross-platform UI, PHP &amp; MySQL for robust backends, and Web3
                technologies for blockchain integration. I care deeply about clean
                code, responsive design, and creating software that solves real
                problems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
                When I&apos;m not coding, I&apos;m exploring emerging technologies in the
                Web3 space and continuously expanding my skillset. I&apos;m currently
                seeking opportunities where I can contribute to meaningful
                projects and grow as a developer.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal delay={0.15}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
                  Stats
                </h3>
                <div className="space-y-5">
                  {[
                    { label: "Years Coding", value: "2+" },
                    { label: "Projects Shipped", value: "3" },
                    { label: "Certifications", value: "1" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={
                        reducedMotion ? {} : { opacity: 0, x: 20 }
                      }
                      whileInView={
                        reducedMotion ? {} : { opacity: 1, x: 0 }
                      }
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-text-secondary text-sm">
                        {stat.label}
                      </span>
                      <span className="text-2xl font-heading font-bold text-accent-primary">
                        {stat.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-6">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-bg-elevated border border-border-subtle text-xs font-medium text-text-secondary hover:text-accent-primary hover:border-indigo-500/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Tech marquee */}
        <ScrollReveal delay={0.35} className="mt-16">
          <div className="overflow-hidden py-4">
            <motion.div
              animate={reducedMotion ? {} : { x: ["0%", "-50%"] }}
              transition={
                reducedMotion
                  ? {}
                  : { duration: 25, repeat: Infinity, ease: "linear" }
              }
              className="flex gap-8 whitespace-nowrap w-max"
            >
              {[...allTechnologies, ...allTechnologies].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-4xl font-heading font-bold text-text-muted/20 hover:text-accent-primary/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
