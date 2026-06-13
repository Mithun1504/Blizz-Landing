import { reasons } from "../../data/landing";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";

export function WhyChoose() {
  return (
    <MotionSection className="border-y border-borderSoft bg-[#fbfcfc] py-8">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <h2 className="text-center text-[27px] font-extrabold text-ink">
          Why businesses choose <span className="text-mint">Blizbooks</span>
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="reason-item">
              <IconBubble icon={Icon} className="h-[62px] w-[62px]" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
