import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export const vp = { once: true, margin: "-90px" } as const;

/** Heading: blur + lift — signature effect */
export const fadeBlurUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(14px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

/** Body text: gentle lift */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: EASE } },
};

/** Overline/label: fast fade */
export const fadePop: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: EASE } },
};

/** Card: scale + lift + soft blur */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.92, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  scale: 1,    filter: "blur(0px)", transition: { duration: 0.65, ease: EASE } },
};

/** Image: subtle zoom-out reveal */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.95, ease: EASE } },
};

/** Slide from left + blur */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -52, filter: "blur(10px)" },
  show:   { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

/** Slide from right + blur */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 52, filter: "blur(10px)" },
  show:   { opacity: 1, x: 0,  filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

/** Stagger container — cards / grids */
export const staggerGrid: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Stagger container — section header cascade */
export const staggerHeader: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0 } },
};

/** Decorative line that expands from center */
export const lineExpand: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show:   { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};
