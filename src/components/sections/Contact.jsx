import { motion } from "motion/react";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../effects/ScrollReveal";
import { socialLinks } from "../../data/social";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          <SectionHeading centered>Get In Touch</SectionHeading>
        </div>

        <div className="max-w-lg mx-auto text-center space-y-8">
          <ScrollReveal>
            <p className="text-text-secondary leading-relaxed text-base lg:text-lg">
              I&apos;m currently open to freelance opportunities and full-time roles.
              If you have a project or position that matches my skills, I&apos;d love
              to hear about it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                href="mailto:balagtasmarvin27@gmail.com"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-primary/30 hover:bg-bg-elevated transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-primary">
                    Email Me
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    balagtasmarvin27@gmail.com
                  </p>
                </div>
                <span className="text-xs text-accent-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Send message <ArrowUpRight size={12} />
                </span>
              </motion.a>

              <motion.a
                href="cv/marvin-balagtas-cv.pdf"
                download
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-primary/30 hover:bg-bg-elevated transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-accent-secondary/10 text-accent-secondary group-hover:bg-accent-secondary group-hover:text-bg-root transition-all duration-300">
                  <Download size={24} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-primary">
                    Download CV
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    PDF &middot; View my resume
                  </p>
                </div>
                <span className="text-xs text-accent-secondary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Download <ArrowUpRight size={12} />
                </span>
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center gap-2 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ y: -2 }}
                  className="p-3 rounded-xl text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 transition-all duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
