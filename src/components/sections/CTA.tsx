import { MotionSection } from "../motion/MotionSection";
import { DevicePreview } from "../visuals/DevicePreview";
import { ReceiptIllustration } from "../visuals/ReceiptIllustration";

export function CTA() {
  return (
    <MotionSection className="overflow-hidden bg-navy py-9 text-white">
      <div className="mx-auto grid max-w-[1680px] items-center gap-6 px-5 lg:grid-cols-[220px_1fr_360px] lg:px-10">
        <ReceiptIllustration />
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] font-extrabold leading-tight sm:text-[32px] lg:text-[27px] xl:text-[34px]">
            Ready to build a <span className="text-emerald-400">stronger business?</span>
          </h2>
          <p className="mt-4 text-[16px] text-white/88 xl:text-[18px]">
            Join thousands of businesses growing with Blizbooks.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#get-started" className="btn-primary h-[54px] min-w-[170px] text-base">
              Get Started Free
            </a>
            <a href="#book-demo" className="btn-dark-outline h-[54px] min-w-[154px] text-base">
              Book a Demo
            </a>
          </div>
        </div>
        <DevicePreview />
      </div>
    </MotionSection>
  );
}
