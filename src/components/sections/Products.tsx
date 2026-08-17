import { products } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";
import { SectionHeading } from "../ui/SectionHeading";

export function Products() {
  return (
    <MotionSection className="section-shell section-tint" id="products">
      <div className="section-container">
        <SectionHeading
          eyebrow="Our Products"
          title="The tools your business uses every day"
          description="Choose the workflows that matter most, then bring them together in one connected business platform."
        />
        <div className="product-grid">
          {products.map(({ icon: Icon, title, text, accent }, index) => (
            <article
              className={`product-card product-card-${accent}`}
              id={`product-${title.toLowerCase().replace(/\s+/g, "-")}`}
              key={title}
            >
              <div className="product-card-topline">
                <IconBubble icon={Icon} className="product-icon" />
                <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
