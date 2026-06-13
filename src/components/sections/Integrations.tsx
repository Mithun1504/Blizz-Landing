import { MotionSection } from "../motion/MotionSection";

export function Integrations() {
  return (
    <MotionSection className="bg-white py-7">
      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
        <h2 className="text-[27px] font-extrabold text-ink">Seamless Integrations</h2>
        <div className="mt-7 grid grid-cols-2 items-center gap-x-9 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="brand-tally">
            Tally<small>POWER OF SIMPLICITY</small>
          </div>
          <div className="brand-razorpay">Razorpay</div>
          <div className="brand-gsuite">
            <span>G</span> Suite
          </div>
          <div className="brand-shopify">shopify</div>
          <div className="brand-amazon">amazon</div>
          <div className="brand-zoho">ZOHO</div>
        </div>
      </div>
    </MotionSection>
  );
}
