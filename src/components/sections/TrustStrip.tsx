import { motion } from "framer-motion";
import { trustStats } from "../../data/landing";
import { fadeUp } from "../motion/motionVariants";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";

export function TrustStrip() {
  return (
    <MotionSection className="border-y border-borderSoft bg-white py-9">
      <div className="mx-auto max-w-[1500px] px-5 text-center lg:px-10">
        <h2 className="text-[19px] font-bold text-ink">
          Trusted by 10,000+ businesses across India
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              className="flex items-center justify-center gap-5"
              variants={fadeUp}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <IconBubble icon={Icon} className="h-14 w-14" />
              <div className="text-left">
                <strong className="block text-[27px] font-extrabold leading-none text-ink">
                  {value}
                </strong>
                <span className="mt-1 block text-[12px] text-slate-600">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
