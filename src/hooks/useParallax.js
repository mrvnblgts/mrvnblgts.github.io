import { useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

export function useParallax(distance = 100) {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1000],
    reducedMotion ? [0, 0] : [0, distance]
  );

  return y;
}
