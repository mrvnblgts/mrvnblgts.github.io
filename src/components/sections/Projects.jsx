import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import ScrollReveal from "../effects/ScrollReveal";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeading>Featured Work</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.12}>
              <GlassCard className="h-full flex flex-col">
                {/* Thumbnail */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute top-3 left-4 flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  </div>
                  <div className="text-center">
                    <span
                      className="text-3xl font-heading font-extrabold opacity-30"
                      style={{ color: project.accent }}
                    >
                      {project.title.split(" ")[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-bg-elevated border border-border-subtle text-xs font-medium text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-1">{project.subtitle}</p>
                  <p className="text-xs font-medium text-accent-primary mb-3 uppercase tracking-wide">
                    {project.role}
                  </p>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {project.achievements.length > 0 && (
                    <ul className="space-y-2 mb-5 flex-1">
                      {project.achievements.slice(0, 2).map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: project.accent }}
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border-subtle">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-primary hover:text-indigo-300 transition-colors"
                      >
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
                      >
                        <Github size={14} /> Source
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
