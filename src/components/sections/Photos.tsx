import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { photoCollections } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { SectionHeading } from "../ui/SectionHeading";

const slideDuration = 4800;

export function Photos() {
  const reduceMotion = useReducedMotion();
  const [indexes, setIndexes] = useState(() => photoCollections.map(() => 0));
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setIndexes((current) => current.map((index, collectionIndex) => {
        const photoCount = photoCollections[collectionIndex].photos.length;
        return (index + 1) % photoCount;
      }));
    }, slideDuration);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  const move = (direction: -1 | 1) => {
    setIndexes((current) => current.map((index, collectionIndex) => {
      const photoCount = photoCollections[collectionIndex].photos.length;
      return direction === 1 ? (index + 1) % photoCount : (index - 1 + photoCount) % photoCount;
    }));
  };

  return (
    <MotionSection className="section-shell photo-section" id="photos">
      <div className="section-container">
        <div className="photo-heading-row">
          <SectionHeading
            eyebrow="Photos"
            title="A closer look at the work"
            description="Explore the work behind sales, inventory, billing and everyday business operations."
          />
          <div className="carousel-controls" aria-label="Photo carousel controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous app photos">
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next app photos">
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
            {!reduceMotion ? (
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={isPaused ? "Play app photos" : "Pause app photos"}
              >
                {isPaused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
              </button>
            ) : null}
          </div>
        </div>

        <div className="photo-card-grid" aria-label="BlizBooks app photos">
          {photoCollections.map(({ title, description, photos }, collectionIndex) => {
            const photo = photos[indexes[collectionIndex]];
            return (
              <article className="photo-app-card" key={title}>
                <div className="photo-app-visual">
                  <motion.img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <span className="photo-app-count">{String(indexes[collectionIndex] + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
                </div>
                <div className="photo-app-copy">
                  <div>
                    <p className="eyebrow">{title}</p>
                    <p>{description}</p>
                  </div>
                  <div className="photo-app-dots" aria-label={`${title} photo ${indexes[collectionIndex] + 1} of ${photos.length}`}>
                    {photos.map((item, photoIndex) => (
                      <span className={photoIndex === indexes[collectionIndex] ? "is-active" : ""} key={item.src} />
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="carousel-progress" aria-hidden="true">
          <span style={{ width: `${((indexes[0] + 1) / photoCollections[0].photos.length) * 100}%` }} />
        </div>
      </div>
    </MotionSection>
  );
}
