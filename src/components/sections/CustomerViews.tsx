import { Quote, Star } from "lucide-react";
import { reviewPhotoUrls } from "../../assets";
import { MotionSection } from "../motion/MotionSection";
import { SectionHeading } from "../ui/SectionHeading";

const customerStories = [
  {
    quote: "Our billing counter feels more organised now. The team can move from one sale to the next without searching through separate records.",
    name: "Ramesh Kumar",
    role: "Retail business owner",
    location: "Chickpet, Bengaluru",
    focus: "POS & inventory",
    initials: "RK",
  },
  {
    quote: "Keeping stock updated across the store used to take too much attention. BlizBooks gives us a clearer view before we reorder.",
    name: "Manjunath S.",
    role: "Grocery business owner",
    location: "Jayanagar, Bengaluru",
    focus: "Inventory management",
    initials: "MS",
  },
  {
    quote: "Payroll and attendance are easier to keep together. I spend less time checking sheets and more time with the team.",
    name: "Arun Bhat",
    role: "Restaurant manager",
    location: "Indiranagar, Bengaluru",
    focus: "Employee management",
    initials: "AB",
  },
] as const;

export function CustomerViews() {
  return (
    <MotionSection className="section-shell customer-section" id="customer-views">
      <div className="section-container">
        <SectionHeading
          eyebrow="Customer Views"
          title="What businesses say about BlizBooks"
          description="Perspectives from Bengaluru businesses bringing sales, stock and people into one clearer view."
        />
        <div className="customer-review-grid" aria-label="Customer stories from Bengaluru businesses">
          {customerStories.map((story, index) => (
            <article className="customer-review-card" key={story.focus}>
              <div className="customer-review-topline">
                <div className="customer-review-rating" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor" />)}
                </div>
                <Quote aria-hidden="true" className="customer-review-quote-icon h-6 w-6" />
              </div>
              <blockquote>“{story.quote}”</blockquote>
              <footer className="customer-review-footer">
                <div className="customer-review-identity">
                  {reviewPhotoUrls[index] ? (
                    <img src={reviewPhotoUrls[index]} alt={`${story.name} profile`} />
                  ) : (
                    <span className="customer-review-avatar-fallback" aria-hidden="true">{story.initials}</span>
                  )}
                  <div className="customer-review-identity-copy">
                    <strong>{story.name}</strong>
                    <span>{story.role}</span>
                    <span>{story.location}</span>
                  </div>
                </div>
                <span className="customer-review-focus">{story.focus}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
