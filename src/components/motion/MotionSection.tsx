import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "./motionVariants";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function MotionSection({ children, className = "", id }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={fadeUp}
      id={id}
    >
      {children}
    </motion.section>
  );
}
