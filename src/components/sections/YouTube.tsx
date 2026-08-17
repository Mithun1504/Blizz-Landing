import { ArrowUpRight, Play } from "lucide-react";
import { videos } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { SectionHeading } from "../ui/SectionHeading";

export function YouTube() {
  return (
    <MotionSection className="section-shell video-section" id="youtube">
      <div className="section-container">
        <SectionHeading
          eyebrow="YouTube"
          title="Platform Overview"
          description="Watch how the platform handles bookings, billing, and stock — from check-in to checkout, straight from a working property."
        />
        <div className="video-grid">
          {videos.map(({ title, category, description, thumbnail, youtubeUrl }) => (
            <article className="video-card" key={title}>
              <div className="video-thumbnail">
                <img src={thumbnail} alt={title} />
                <span className="video-play" aria-hidden="true">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </div>
              <div className="video-copy">
                <p className="eyebrow">{category}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                {youtubeUrl ? (
                  <a className="text-link" href={youtubeUrl} target="_blank" rel="noreferrer">
                    Watch on YouTube <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
