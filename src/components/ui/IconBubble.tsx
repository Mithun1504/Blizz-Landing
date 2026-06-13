import type { IconType } from "../../types/landing";

type IconBubbleProps = {
  icon: IconType;
  className?: string;
};

export function IconBubble({ icon: Icon, className = "" }: IconBubbleProps) {
  return (
    <span
      className={`grid h-16 w-16 shrink-0 place-items-center rounded-full border border-emerald-100 bg-emeraldSoft text-mint ${className}`}
    >
      <Icon className="h-8 w-8" strokeWidth={1.8} />
    </span>
  );
}
