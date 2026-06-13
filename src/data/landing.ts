import {
  BarChart3,
  Box,
  Building2,
  Calculator,
  Clock3,
  FileSpreadsheet,
  Headphones,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sprout,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { FooterGroup, IconTextItem, NavItem, TrustStat } from "../types/landing";

export const navItems: NavItem[] = [
  { label: "Features" },
  { label: "Solutions", dropdown: true },
  { label: "Pricing" },
  { label: "Resources", dropdown: true },
  { label: "About Us" },
];

export const trustStats: TrustStat[] = [
  { icon: UsersRound, value: "10K+", label: "Happy Businesses" },
  { icon: FileSpreadsheet, value: "50L+", label: "Invoices Generated" },
  { icon: Building2, value: "100Cr+", label: "Transactions Processed" },
  { icon: ShieldCheck, value: "99.9%", label: "Data Security" },
];

export const features: IconTextItem[] = [
  {
    icon: Calculator,
    title: "Accounting",
    text: "Manage invoices, bills, bank transactions and more.",
  },
  {
    icon: Box,
    title: "Inventory",
    text: "Track stock in real-time and manage your inventory.",
  },
  {
    icon: ReceiptText,
    title: "GST Compliance",
    text: "Stay GST compliant with ease and accuracy.",
  },
  {
    icon: UsersRound,
    title: "Payroll",
    text: "Manage employee salaries, attendance and payslips.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    text: "Get powerful insights and make data-driven decisions.",
  },
  {
    icon: Building2,
    title: "Banking",
    text: "Reconcile bank transactions and stay on top of cash flow.",
  },
  {
    icon: UsersRound,
    title: "Multi-User Access",
    text: "Collaborate with your team securely in real-time.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    text: "Manage your business on the go, anytime, anywhere.",
  },
];

export const reasons: IconTextItem[] = [
  {
    icon: Sprout,
    title: "Easy to Use",
    text: "Simple and intuitive interface",
  },
  {
    icon: LockKeyhole,
    title: "Secure & Reliable",
    text: "Bank-grade security for your data",
  },
  {
    icon: Clock3,
    title: "Save Time",
    text: "Automate tasks and focus on growth",
  },
  {
    icon: WalletCards,
    title: "Affordable",
    text: "Flexible pricing for businesses of all sizes",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text: "Dedicated support whenever you need",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Security"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Guides", "Webinars", "Downloads"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy"],
  },
];

export const heroBenefits = [
  "Free 14-day trial",
  "No credit card required",
  "Cancel anytime",
];
