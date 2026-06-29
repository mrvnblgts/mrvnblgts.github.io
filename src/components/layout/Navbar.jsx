import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { navLinks } from "../../data/navigation";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.href.replace("#", "")));
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={reducedMotion ? {} : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-root/80 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-xl font-heading font-bold text-text-primary hover:text-accent-primary transition-colors"
          >
            MB
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeId === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent-primary/10 rounded-lg border border-indigo-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-accent-primary hover:bg-indigo-400 rounded-xl transition-colors duration-200 shadow-lg shadow-indigo-500/20"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-root/95 backdrop-blur-xl border-b border-border-subtle"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navLinks.map((link, i) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeId === sectionId;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-accent-primary bg-accent-primary/10"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-surface"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="block mt-2 px-4 py-3 rounded-xl text-sm font-medium text-white bg-accent-primary text-center"
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
