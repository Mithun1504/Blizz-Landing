import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  dropdown?: boolean;
};

export type IconTextItem = {
  icon: IconType;
  title: string;
  text: string;
};

export type TrustStat = {
  icon: IconType;
  value: string;
  label: string;
};

export type FooterGroup = {
  title: string;
  links: string[];
};
