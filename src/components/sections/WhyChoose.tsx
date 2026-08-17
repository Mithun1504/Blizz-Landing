import { ArrowUpRight, Radio, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { reasons } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";
import { SectionHeading } from "../ui/SectionHeading";

const realtimeDetails = [
  "Monitor current-day sales",
  "Track business transactions",
  "View updated reports",
  "Monitor inventory information",
  "Access workforce information",
  "Understand business performance",
  "Make faster business decisions",
];

export function WhyChoose() {
  const [isRealtimeOpen, setIsRealtimeOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isRealtimeOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsRealtimeOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRealtimeOpen]);

  return (
    <MotionSection className="section-shell why-section" id="why-choose-us">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A steadier view of the business"
          description="Give owners and managers the context to act on the day in front of them, while keeping the bigger picture close."
        />
        <div className="reason-grid">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article className="reason-card" key={title}>
              <IconBubble icon={Icon} className="reason-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <article className="reason-card realtime-reason-card">
            <IconBubble icon={Radio} className="reason-icon" />
            <h3>Real-Time</h3>
            <p>Get real-time business visibility and actionable information from one connected platform.</p>
            <button
              type="button"
              className="text-link realtime-open-button"
              aria-haspopup="dialog"
              onClick={() => setIsRealtimeOpen(true)}
            >
              Explore Real-Time <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </article>
        </div>
      </div>

      {isRealtimeOpen ? (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsRealtimeOpen(false);
          }}
        >
          <div
            className="realtime-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="realtime-modal-title"
            aria-describedby="realtime-modal-description"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="realtime-modal-header">
              <div className="realtime-modal-icon">
                <Radio aria-hidden="true" className="h-5 w-5" />
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="modal-close"
                aria-label="Close Real-Time details"
                onClick={() => setIsRealtimeOpen(false)}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <p className="eyebrow">Real-Time</p>
            <h2 id="realtime-modal-title">Real-Time Business Visibility</h2>
            <p id="realtime-modal-description" className="realtime-modal-lede">
              Stay connected with your business through real-time access to important sales, transaction, reporting and operational information.
            </p>
            <p className="realtime-modal-intro">BlizBooks helps business owners and managers:</p>
            <ul className="realtime-modal-list">
              {realtimeDetails.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <p className="realtime-modal-note">
              The pitch deck specifically identifies real-time data analytics, business graphs and current-date sales displayed through the dashboard.
            </p>
          </div>
        </div>
      ) : null}
    </MotionSection>
  );
}
