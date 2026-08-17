import { ArrowUpRight } from "lucide-react";
import { MotionSection } from "../motion/MotionSection";
import { useDemoModal } from "../lead/demoModalContext";

const officeAddress = "BLIZBOOKS PRIVATE LIMITED ARELEPET COTTONPET BANGALORE SOUTH 237 CHICKPET BANGALORE-560053 KARNATAKA";
const encodedOfficeAddress = encodeURIComponent(officeAddress);
const mapEmbedUrl = `https://www.google.com/maps?q=${encodedOfficeAddress}&output=embed`;
const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedOfficeAddress}`;

export function Contact() {
  const { openDemoModal } = useDemoModal();

  return (
    <MotionSection className="contact-section" id="contact">
      <div className="section-container contact-grid">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2>Ready to see what fits your business?</h2>
          <p>Talk with the BlizBooks team about the products, workflows and access your business needs.</p>
          <button type="button" className="button button-primary" onClick={openDemoModal}>
            Schedule a Demo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <div className="map-card">
          <iframe
            title="BlizBooks office location on Google Maps"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-card-footer">
            <p>{officeAddress}</p>
            <a className="button button-light" href={mapDirectionsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
