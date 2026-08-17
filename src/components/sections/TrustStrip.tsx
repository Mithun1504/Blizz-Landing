import { ArrowRight, BarChart3, Cloud, ReceiptText } from "lucide-react";
import { MotionSection } from "../motion/MotionSection";

const valuePoints = [
  { icon: ReceiptText, label: "Organized billing" },
  { icon: BarChart3, label: "Decision-ready reports" },
  { icon: Cloud, label: "Connected access" },
];

export function TrustStrip() {
  return (
    <MotionSection className="promise-strip">
      <div className="section-container promise-inner">
        <div>
          <p className="eyebrow">The BlizBooks promise</p>
          <h2>Built for Businesses. Designed for Growth.</h2>
        </div>
        <div className="promise-points">
          {valuePoints.map(({ icon: Icon, label }) => (
            <span key={label}>
              <Icon aria-hidden="true" className="h-5 w-5" />
              {label}
            </span>
          ))}
        </div>
        <ArrowRight aria-hidden="true" className="promise-arrow h-5 w-5" />
      </div>
    </MotionSection>
  );
}
