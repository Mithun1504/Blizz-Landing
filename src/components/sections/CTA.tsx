import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { MotionSection } from "../motion/MotionSection";
import { useDemoModal } from "../lead/demoModalContext";

export function CTA() {
  const { openDemoModal } = useDemoModal();

  return (
    <MotionSection className="cta-section">
      <div className="section-container cta-inner">
        <div>
          <p className="eyebrow">Start with the work in front of you</p>
          <h2>Bring your business into one clearer view.</h2>
          <p>Explore the BlizBooks platform and find the workflows that fit your next step.</p>
        </div>
        <div className="cta-actions">
          <button type="button" className="button button-primary" onClick={openDemoModal}>
            Schedule a Demo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <span><CheckCircle2 aria-hidden="true" className="h-4 w-4" /> Built for Today. Ready for Tomorrow.</span>
        </div>
      </div>
    </MotionSection>
  );
}
