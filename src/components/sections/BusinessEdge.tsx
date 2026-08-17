import { ArrowUpRight } from "lucide-react";
import { businessEdge } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";
import { SectionHeading } from "../ui/SectionHeading";

export function BusinessEdge() {
  return (
    <MotionSection className="section-shell edge-section" id="business-edge">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Business Edge"
          title="One operating view for the work behind the counter"
          description="BlizBooks connects the practical parts of running a business, from daily operations to the decisions that shape growth."
        />
        <div className="edge-grid">
          {businessEdge.map(({ icon: Icon, title, text }, index) => (
            <article
              className="edge-card"
              id={`edge-${title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              key={title}
            >
              <span className="edge-number">0{index + 1}</span>
              <IconBubble icon={Icon} className="edge-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <div className="edge-centerpiece">
            <div>
              <p className="eyebrow">Business, in one connected rhythm</p>
              <h3>Make the next decision with the whole picture in view.</h3>
            </div>
            <a href="#contact" className="button button-light">
              Explore BlizBooks <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
