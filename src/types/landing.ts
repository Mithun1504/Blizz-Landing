import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
  children?: Array<{ label: string; href: string }>;
};

export type IconTextItem = {
  icon: IconType;
  title: string;
  text: string;
};

export type Product = IconTextItem & {
  accent: string;
};

export type PhotoItem = {
  src: string;
  alt: string;
  category: string;
};

export type PhotoCollection = {
  title: string;
  description: string;
  photos: PhotoItem[];
};

export type VideoItem = {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  youtubeUrl?: string;
};

export type FooterGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
};
