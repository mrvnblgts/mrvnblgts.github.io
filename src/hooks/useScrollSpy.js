import { useState, useEffect, useCallback } from "react";

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  const handleScroll = useCallback(() => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveId(sectionIds[i]);
        return;
      }
    }
    setActiveId(sectionIds[0] || "");
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeId;
}
