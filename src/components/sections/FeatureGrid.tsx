import { features } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";
import { SectionHeading } from "../ui/SectionHeading";

export function FeatureGrid() {
  return (
    <MotionSection className="section-shell" id="features">
      <div className="section-container">
        <SectionHeading
          eyebrow="Features"
          title="A clearer way to run the details"
          description="Nine connected capabilities help your team stay on top of money, stock, people and the customer experience."
        />
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              className="feature-card"
              id={`feature-${title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
              key={title}
            >
              <IconBubble icon={Icon} className="feature-icon" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
