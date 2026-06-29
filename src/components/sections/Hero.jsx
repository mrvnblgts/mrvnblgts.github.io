import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Download, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import BackgroundGrid from "../effects/BackgroundGrid";
import { socialLinks } from "../../data/social";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <BackgroundGrid />

      {/* Ambient orbs */}
      <motion.div
        style={{
          y: orbY,
          scale: orbScale,
          opacity,
          background:
            "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -150]),
          opacity,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
      />

      <Container className="relative z-10 py-32 lg:pt-24 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-h-screen">
          {/* Left column */}
          <motion.div
            variants={container}
            initial={reducedMotion ? "visible" : "hidden"}
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={item}>
              <Badge variant="success">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </Badge>
            </motion.div>

            <div className="space-y-3">
              <motion.p
                variants={item}
                className="text-text-secondary text-lg font-medium"
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1 variants={item} className="space-y-1">
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-text-primary leading-[1.05] tracking-tight">
                  Marvin
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight bg-gradient-to-r from-accent-primary via-indigo-300 to-accent-secondary bg-clip-text text-transparent">
                  Balagtas
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={item}
              className="text-xl lg:text-2xl font-heading font-semibold text-text-secondary"
            >
              Full-Stack Web Developer
            </motion.p>

            <motion.p
              variants={item}
              className="text-text-secondary leading-relaxed max-w-lg text-base lg:text-lg"
            >
              Building polished, production-ready web applications with Vue.js,
              Quasar, PHP &amp; MySQL. Passionate about clean architecture,
              blockchain integration, and delivering exceptional user
              experiences.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3"
            >
              <Button href="#projects">
                View My Work <ArrowRight size={16} />
              </Button>
              <Button href="cv/marvin-balagtas-cv.pdf" variant="secondary">
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-2 pt-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2.5 rounded-xl text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-6 pt-2 text-sm text-text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="text-2xl font-heading font-bold text-text-primary">
                  2+
                </span>
                Years coding
              </span>
              <span className="w-px h-8 bg-border-muted" />
              <span className="flex items-center gap-2">
                <span className="text-2xl font-heading font-bold text-text-primary">
                  3
                </span>
                Projects shipped
              </span>
            </motion.div>
          </motion.div>

          {/* Right column — profile area */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96 flex items-center justify-center">
              <div
                className="absolute inset-0 z-10 pointer-events-none overflow-visible"
                style={reducedMotion ? {} : { animation: "ring-spin 25s linear infinite" }}
              >
                {[
                  { label: "Vue", offset: 0 },
                  { label: "PHP", offset: 72 },
                  { label: "Web3", offset: 144 },
                  { label: "MySQL", offset: 216 },
                  { label: "React", offset: 288 },
                ].map((tech) => (
                  <div
                    key={tech.label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${tech.offset}deg) translateY(-160px)`,
                    }}
                  >
                    <span
                      style={
                        reducedMotion
                          ? {}
                          : {
                              display: "inline-block",
                              animation: "ring-spin-reverse 25s linear infinite",
                              animationDelay: `${-(tech.offset / 360) * 25}s`,
                            }
                      }
                      className="block px-3 py-1.5 rounded-lg bg-bg-card border border-border-subtle text-xs font-semibold text-accent-primary font-heading shadow-sm whitespace-nowrap"
                    >
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Profile placeholder */}
              <motion.div
                animate={{ y: reducedMotion ? 0 : [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-72 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-border-subtle overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                    <span className="text-3xl font-heading font-bold text-white">
                      MB
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-card/90 to-transparent">
                  <p className="text-center text-xs text-text-muted">
                    Tacloban City, Philippines
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-sm"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
