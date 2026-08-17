import { MotionSection } from "../motion/MotionSection";
import { SectionHeading } from "../ui/SectionHeading";

export function CustomerViews() {
  return (
    <MotionSection className="section-shell customer-section" id="customer-views">
      <div className="section-container">
        <SectionHeading
          eyebrow="Customer Views"
          title="What businesses say about BlizBooks"
          description="Feedback from businesses using BlizBooks in their daily operations."
        />
      </div>
    </MotionSection>
  );
}
