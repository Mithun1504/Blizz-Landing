import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroBgUrl, heroScreenUrls } from "../../assets";
import { HeroScreenCarousel } from "../visuals/HeroScreenCarousel";
import { useDemoModal } from "../lead/demoModalContext";

const heroPillars = ["Sales", "Stock", "People", "Finance"];

export function Hero() {
  const { openDemoModal } = useDemoModal();
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-section relative overflow-hidden"
      id="home"
      style={{ backgroundImage: `url(${heroBgUrl})` }}
    >
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[46px] font-extrabold leading-[1.08] text-ink sm:text-[58px] lg:text-[52px] xl:text-[68px]">
            <span className="text-mint">Smart</span> Books.
            <br />
            <span className="sm:whitespace-nowrap">
              <span className="text-mint">Strong</span> Business.
            </span>
          </h1>
          <p className="hero-lede">
            Future-ready technology that simplifies operations, strengthens performance, and empowers sustainable business growth.
          </p>
          <div className="hero-actions">
            <a href="#products" className="button button-primary">
              Explore Our Products <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <button type="button" className="button button-quiet" onClick={openDemoModal}>
              Get Started <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <div className="hero-tagline">
            <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
            Built for Today. Ready for Tomorrow.
          </div>
          <div className="hero-pillar-list" aria-label="Business areas covered">
            {heroPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-dashboard-shell"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={reduceMotion ? undefined : { duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <div className="hero-dashboard-scale">
            <HeroScreenCarousel images={heroScreenUrls} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
