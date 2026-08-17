import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroDashboard } from "./HeroDashboard";

type HeroScreenCarouselProps = {
  images: string[];
};

const AUTOPLAY_DELAY = 6_400;
const TRANSITION_DURATION = 0.85;

export function HeroScreenCarousel({ images }: HeroScreenCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length < 2 || reduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(intervalId);
  }, [images.length, reduceMotion]);

  useEffect(() => {
    setActiveIndex((currentIndex) => (currentIndex < images.length ? currentIndex : 0));
  }, [images.length]);

  if (images.length === 0) return <HeroDashboard />;

  const activeImage = images[activeIndex];

  return (
    <div
      className="hero-screen-carousel"
      aria-label="BlizBooks product screen previews"
      tabIndex={0}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={activeImage}
          className="hero-screen-image"
          src={activeImage}
          alt={`BlizBooks product screen ${activeIndex + 1}`}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 44 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -44 }}
          transition={{ duration: reduceMotion ? 0.01 : TRANSITION_DURATION, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}
