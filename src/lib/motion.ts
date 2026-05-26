import type { Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export const vp = { once: true, amount: 0.12 } as const;

/** Heading signature — dramatic blur lift */
export const fadeBlurUp: Variants = {
  hidden: { opacity: 0, y: 64,  filter: "blur(22px)" },
  show:   { opacity: 1, y: 0,   filter: "blur(0px)",
            transition: { duration: 1, ease: EASE } },
};

/** Body text — strong lift */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 52 },
  show:   { opacity: 1, y: 0,
            transition: { duration: 0.8, ease: EASE } },
};

/** Overline label — scale + slide pop */
export const fadePop: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.86 },
  show:   { opacity: 1, y: 0,  scale: 1,
            transition: { duration: 0.55, ease: EASE } },
};

/** Card — spring physics, feels alive */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.84, filter: "blur(14px)" },
  show:   { opacity: 1, y: 0,  scale: 1,    filter: "blur(0px)",
            transition: { type: "spring", stiffness: 52, damping: 17 } },
};

/** Image — zoom-out reveal */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.12 },
  show:   { opacity: 1, scale: 1,
            transition: { duration: 1.2, ease: EASE } },
};

/** Slide in from left — heavy blur */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -88, filter: "blur(18px)" },
  show:   { opacity: 1, x: 0,   filter: "blur(0px)",
            transition: { duration: 0.95, ease: EASE } },
};

/** Slide in from right — heavy blur */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 88, filter: "blur(18px)" },
  show:   { opacity: 1, x: 0,  filter: "blur(0px)",
            transition: { duration: 0.95, ease: EASE } },
};

/** Rise up — big impact section entries */
export const riseUp: Variants = {
  hidden: { opacity: 0, y: 110, filter: "blur(18px)" },
  show:   { opacity: 1, y: 0,   filter: "blur(0px)",
            transition: { duration: 1.05, ease: EASE } },
};

/** Scale pop — badges, stats, icons */
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.68, filter: "blur(12px)" },
  show:   { opacity: 1, scale: 1,    filter: "blur(0px)",
            transition: { type: "spring", stiffness: 75, damping: 18 } },
};

/** Stagger container — cards / grids */
export const staggerGrid: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

/** Stagger container — section header cascade */
export const staggerHeader: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.16, delayChildren: 0 } },
};

/** Decorative line expand from left */
export const lineExpand: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show:   { scaleX: 1, opacity: 1,
            transition: { duration: 0.85, ease: EASE } },
};
