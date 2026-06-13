import { motion } from "framer-motion";
import { features } from "../../data/landing";
import { fadeUp } from "../motion/motionVariants";
import { MotionSection } from "../motion/MotionSection";
import { IconBubble } from "../ui/IconBubble";

export function FeatureGrid() {
  return (
    <MotionSection className="bg-white py-9" id="features">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <h2 className="text-center text-[27px] font-extrabold text-ink">
          Everything you need to <span className="text-mint">run your business</span>
        </h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              className="feature-card group"
              variants={fadeUp}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <IconBubble icon={Icon} className="h-[50px] w-[50px]" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#learn-more">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
