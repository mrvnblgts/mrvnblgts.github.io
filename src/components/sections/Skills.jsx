import { motion } from "motion/react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import SkillBar from "../ui/SkillBar";
import ScrollReveal from "../effects/ScrollReveal";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <Container>
        <SectionHeading>Skills &amp; Expertise</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.label} delay={catIndex * 0.1}>
              <div className="p-6 rounded-2xl bg-bg-surface border border-border-subtle">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-text-primary">
                    {category.label}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      index={catIndex * 5 + skillIndex}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
