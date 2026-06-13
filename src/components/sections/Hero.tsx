import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroBgUrl } from "../../assets";
import { heroBenefits } from "../../data/landing";
import { HeroDashboard } from "../visuals/HeroDashboard";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-section relative overflow-hidden bg-white pb-7"
      style={{ backgroundImage: `url(${heroBgUrl})` }}
    >
      <div className="hero-grid mx-auto max-w-[1680px] px-5 pt-12 lg:px-10 lg:pt-10">
        <motion.div
          className="hero-copy relative z-10 max-w-[700px] pt-2"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h1 className="text-[46px] font-extrabold leading-[1.08] text-ink sm:text-[58px] lg:text-[52px] xl:text-[68px]">
            <span className="text-mint">Smart</span> Books.
            <br />
            <span className="sm:whitespace-nowrap">
              <span className="text-mint">Strong</span> Business.
            </span>
          </h1>
          <p className="mt-7 max-w-[455px] text-[18px] leading-[1.65] text-slate-700">
            Blizbooks is the all-in-one accounting and business management platform for modern
            businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <a href="#get-started" className="btn-primary h-[55px] min-w-[166px] text-base">
              Get Started Free
            </a>
            <a href="#book-demo" className="btn-outline h-[55px] min-w-[166px] text-base">
              Book a Demo
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-medium text-slate-600">
            {heroBenefits.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-dashboard-shell relative z-10"
          animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 5.5, ease: "easeInOut", repeat: Infinity }
          }
        >
          <div className="hero-dashboard-scale">
            <HeroDashboard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
