import Container from "./Container";
import { socialLinks } from "../../data/social";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-heading font-bold text-text-primary">
              MB
            </span>
            <span className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Marvin Balagtas
            </span>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-text-muted text-sm">
            Built with React <span className="text-accent-primary">&amp;</span>{" "}
            Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
