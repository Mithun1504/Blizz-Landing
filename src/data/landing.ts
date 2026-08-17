import {
  Activity,
  BarChart3,
  BadgeIndianRupee,
  Boxes,
  BriefcaseBusiness,
  Calculator,
  Cloud,
  Landmark,
  QrCode,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
  WalletCards,
} from "lucide-react";
import {
  employeePhotoUrls,
  inventoryPhotoUrls,
  photoAssets,
  posPhotoUrls,
  videoFinanceUrl,
  videoInventoryUrl,
  videoOverviewUrl,
} from "../assets";
import type {
  FooterGroup,
  IconTextItem,
  NavItem,
  PhotoCollection,
  PhotoItem,
  Product,
  VideoItem,
} from "../types/landing";

export const products: Product[] = [
  {
    icon: Store,
    title: "POS",
    text: "Streamline everyday sales with an efficient Point of Sale system that simplifies billing, payment tracking and transaction management.",
    accent: "mint",
  },
  {
    icon: Boxes,
    title: "Inventory",
    text: "Manage products, purchases and stock efficiently with organized inventory tracking and improved stock control.",
    accent: "blue",
  },
  {
    icon: UsersRound,
    title: "Payroll",
    text: "Simplify employee salary management with attendance, advances, employee information and salary reporting.",
    accent: "violet",
  },
  {
    icon: ReceiptText,
    title: "GST Invoicing",
    text: "Create accurate GST invoices while simplifying billing, calculations, payment tracking and transaction records.",
    accent: "amber",
  },
  {
    icon: ScanLine,
    title: "Bar Code Scanner",
    text: "Quickly identify products through barcode scanning to make product selection and billing faster and more efficient.",
    accent: "teal",
  },
  {
    icon: Store,
    title: "Retail Billing",
    text: "Simplify retail transactions with fast, accurate and organized billing for efficient day-to-day sales management.",
    accent: "coral",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Our Products",
    href: "#products",
    dropdown: true,
    children: products.map(({ title }) => ({
      label: title,
      href: `#product-${title.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  { label: "Features", href: "#features" },
  { label: "Our Business Edge", href: "#business-edge" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Photos", href: "#photos" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact" },
];

export const features: IconTextItem[] = [
  {
    icon: Calculator,
    title: "Accounting",
    text: "Automate accounting processes, organize financial transactions and expenses, and maintain accurate financial records and reports.",
  },
  {
    icon: UsersRound,
    title: "Payroll",
    text: "Manage employee attendance, advances, salaries and payroll information through an organized payroll process.",
  },
  {
    icon: Boxes,
    title: "Inventory",
    text: "Track items, purchases and stock efficiently with categorized inventory management and better stock control.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    text: "Access real-time business insights through sales, purchase, inventory, financial and staff reports for smarter decision-making.",
  },
  {
    icon: Landmark,
    title: "Banking",
    text: "Connect payment and accounting activities to help maintain organized financial transactions and improve financial management.",
  },
  {
    icon: UserRoundCheck,
    title: "Multi-User Access",
    text: "Enable multiple users with role-based access, allowing each user to access functions relevant to their responsibilities.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    text: "Access essential business operations and information through mobile, web and Windows platforms for convenient business management.",
  },
  {
    icon: QrCode,
    title: "QR Table Ordering",
    text: "Enable restaurant customers to scan a QR code, view the digital menu and place orders directly from their mobile devices for faster and more convenient table ordering.",
  },
  {
    icon: WalletCards,
    title: "Digital Cash Booking",
    text: "Digitally record and monitor cash receipts, payments, expenses and daily cash movements for better financial control.",
  },
];

export const businessEdge: IconTextItem[] = [
  {
    icon: Activity,
    title: "Smart Operations",
    text: "Simplify daily business processes, reduce manual work and manage essential operations efficiently from one platform.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    text: "Turn business data into meaningful insights that support faster and smarter business decisions.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion",
    text: "Build a strong digital foundation that helps businesses improve performance, manage growth and prepare for expansion.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Workforce Excellence",
    text: "Manage employees, attendance, advances, payroll and workforce information to improve productivity and operational efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Finance & Compliance",
    text: "Keep billing, accounting, GST-related processes and financial records accurate, organized and easier to manage.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Procurement & Cost Optimization",
    text: "Monitor purchases, inventory and expenses to improve cost visibility, reduce unnecessary spending and support better margins.",
  },
  {
    icon: UsersRound,
    title: "Customer Experience & Retention",
    text: "Improve service efficiency and customer interactions through organized billing, ordering and business operations.",
  },
  {
    icon: Cloud,
    title: "Connected Cloud Management",
    text: "Manage your business anytime, anywhere through a connected cloud platform with access across supported devices.",
  },
];

export const reasons: IconTextItem[] = [
  { icon: Activity, title: "Smart Operations", text: "Keep everyday work moving with fewer manual steps." },
  { icon: ShieldCheck, title: "Secure & Reliable", text: "Keep business information organized and protected." },
  { icon: TrendingUp, title: "Ready for Growth", text: "Build a stronger operating base as the business grows." },
  { icon: UsersRound, title: "Team Access", text: "Give people the right access for their responsibilities." },
  { icon: WalletCards, title: "Clear Finances", text: "See the numbers that guide your next decision." },
];

export const photos: PhotoItem[] = photoAssets.map((src, index) => ({
  src,
  alt: [
    "Business dashboard",
    "Retail billing",
    "Inventory management",
    "Restaurant ordering",
    "Business team",
    "POS counter",
    "Finance reporting",
    "Cloud business management",
    "Workforce management",
    "Barcode scanning",
    "Business growth",
    "Customer service",
  ][index],
  category: [
    "Business management",
    "Retail",
    "Inventory",
    "Restaurants",
    "Workforce",
    "POS",
    "Analytics",
    "Cloud technology",
    "Employees",
    "Billing",
    "Growth",
    "Customer experience",
  ][index],
}));

function collectionPhotos(title: string, urls: string[], fallback: PhotoItem[]): PhotoItem[] {
  if (urls.length === 0) return fallback;

  return urls.map((src, index) => ({
    src,
    alt: `${title} screen ${index + 1}`,
    category: title,
  }));
}

export const photoCollections: PhotoCollection[] = [
  {
    title: "POS",
    description: "Fast, clear billing for every sale and customer interaction.",
    photos: collectionPhotos("POS", posPhotoUrls, [photos[1], photos[5], photos[9], photos[3]]),
  },
  {
    title: "Inventory",
    description: "Keep products, stock and movement visible across the business.",
    photos: collectionPhotos("Inventory", inventoryPhotoUrls, [photos[2], photos[0], photos[7], photos[10]]),
  },
  {
    title: "Employee Management",
    description: "Keep employees, attendance and workforce information organized in one place.",
    photos: collectionPhotos("Employee Management", employeePhotoUrls, [photos[8], photos[4], photos[7], photos[0]]),
  },
];

export const videos: VideoItem[] = [
  {
    title: "See the BlizBooks overview",
    category: "Product introduction",
    description: "A short introduction to the platform and the work it brings together.",
    thumbnail: videoOverviewUrl,
  },
  {
    title: "Keep inventory in view",
    category: "Feature explanation",
    description: "Show how organized stock information supports day-to-day decisions.",
    thumbnail: videoInventoryUrl,
  },
  {
    title: "Follow the numbers",
    category: "Business management",
    description: "Explain how reporting and financial visibility fit into the daily workflow.",
    thumbnail: videoFinanceUrl,
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Navigation",
    links: navItems.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Products",
    links: products.map(({ title }) => ({
      label: title,
      href: `#product-${title.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  },
  {
    title: "Features",
    links: features.map(({ title }) => ({
      label: title,
      href: `#feature-${title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`,
    })),
  },
  {
    title: "Our Business Edge",
    links: businessEdge.map(({ title }) => ({
      label: title,
      href: `#edge-${title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`,
    })),
  },
];

export const officialSocialLinks: Array<{ label: string; shortLabel: string; href: string }> = [];

export const storeLinks = {
  googlePlay: "",
  appStore: "",
};
