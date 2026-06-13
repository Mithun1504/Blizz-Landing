import {
  BarChart3,
  Box,
  Building2,
  Calculator,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileSpreadsheet,
  Headphones,
  Home,
  LockKeyhole,
  Menu,
  PackageCheck,
  ReceiptText,
  Settings,
  ShieldCheck,
  Smartphone,
  Sprout,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import logoUrl from "../logo.png";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const navItems = [
  { label: "Features" },
  { label: "Solutions", dropdown: true },
  { label: "Pricing" },
  { label: "Resources", dropdown: true },
  { label: "About Us" },
];

const trustStats = [
  { icon: UsersRound, value: "10K+", label: "Happy Businesses" },
  { icon: FileSpreadsheet, value: "50L+", label: "Invoices Generated" },
  { icon: Building2, value: "100Cr+", label: "Transactions Processed" },
  { icon: ShieldCheck, value: "99.9%", label: "Data Security" },
];

const features = [
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

const reasons = [
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

const footerGroups = [
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

const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  show: { opacity: 1, y: 0 },
};

function MotionSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={fadeUp}
      id={id}
    >
      {children}
    </motion.section>
  );
}

function IconBubble({
  icon: Icon,
  className = "",
}: {
  icon: IconType;
  className?: string;
}) {
  return (
    <span
      className={`grid h-16 w-16 shrink-0 place-items-center rounded-full border border-emerald-100 bg-emeraldSoft text-mint ${className}`}
    >
      <Icon className="h-8 w-8" strokeWidth={1.8} />
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1680px] items-center justify-between px-5 lg:px-10">
        <a className="flex items-center" href="#" aria-label="Blizbooks home">
          <img
            src={logoUrl}
            alt="Blizbooks"
            className="h-[46px] w-[182px] object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-[42px] text-[15px] font-semibold text-black lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center gap-1 transition-colors hover:text-mint"
            >
              {item.label}
              {item.dropdown ? <ChevronDown className="h-3.5 w-3.5" /> : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="btn-secondary min-w-[94px]" href="#login">
            Login
          </a>
          <a className="btn-primary min-w-[108px]" href="#get-started">
            Get Started
          </a>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-ink lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function HeroDashboard() {
  const transactions = [
    ["Invoice #INV-1012", "Customer Payment", "₹45,000", "20 May 2024", "Paid"],
    ["Bill #BILL-2054", "Office Supplies", "₹12,500", "19 May 2024", "Paid"],
    ["Invoice #INV-1011", "Customer Payment", "₹32,000", "18 May 2024", "Paid"],
    ["Expense #EXP-008", "Electricity Bill", "₹8,750", "18 May 2024", "Paid"],
  ];

  return (
    <motion.div
      className="dashboard-card"
      initial={{ opacity: 0, x: 40, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
    >
      <div className="dashboard-top">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="" className="h-[24px] w-[98px] object-contain object-left" />
        </div>
        <h2>Dashboard</h2>
        <div className="ml-auto flex items-center gap-2 text-[10px] font-semibold text-ink">
          Acme Pvt. Ltd.
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
          {[Home, ReceiptText, CalendarCheck2, BarChart3, PackageCheck, UsersRound, UsersRound, Settings].map(
            (Icon, index) => (
              <span key={index} className={index === 0 ? "active" : ""}>
                <Icon className="h-[19px] w-[19px]" strokeWidth={1.8} />
              </span>
            ),
          )}
        </aside>

        <main className="dashboard-main">
          <div className="metric-grid">
            {[
              ["Total Sales", "₹12,45,000", "+12.5%"],
              ["Total Expenses", "₹6,20,000", "-8.4%"],
              ["Net Profit", "₹6,25,000", "+18.7%"],
              ["Bank Balance", "₹8,35,000", "Updated today"],
            ].map(([label, value, change], index) => (
              <div className="metric-card" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <em className={index === 1 ? "negative" : ""}>{change}</em>
              </div>
            ))}
          </div>

          <div className="dashboard-panels">
            <div className="panel panel-sales">
              <div className="panel-heading">
                <strong>Sales Overview</strong>
                <button>This Month</button>
              </div>
              <svg viewBox="0 0 360 174" role="img" aria-label="Sales overview line chart">
                <g className="chart-grid">
                  <line x1="28" y1="24" x2="340" y2="24" />
                  <line x1="28" y1="70" x2="340" y2="70" />
                  <line x1="28" y1="116" x2="340" y2="116" />
                  <line x1="28" y1="150" x2="340" y2="150" />
                </g>
                <text x="0" y="28">15L</text>
                <text x="0" y="74">10L</text>
                <text x="6" y="120">5L</text>
                <text x="10" y="154">0</text>
                <path
                  className="chart-fill"
                  d="M38 132 C72 92 92 120 122 80 S172 60 194 50 S236 134 266 86 S310 70 334 36 L334 150 L38 150 Z"
                />
                <path
                  className="chart-line"
                  d="M38 132 C72 92 92 120 122 80 S172 60 194 50 S236 134 266 86 S310 70 334 36"
                />
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
                  <text key={month} x={42 + index * 56} y="170">
                    {month}
                  </text>
                ))}
              </svg>
            </div>

            <div className="panel panel-expenses">
              <strong>Expenses by Category</strong>
              <div className="donut-wrap">
                <div className="donut">
                  <span>
                    ₹6,20,000
                    <small>Total</small>
                  </span>
                </div>
                <ul>
                  {[
                    ["Purchases", "40%"],
                    ["Payroll", "25%"],
                    ["Rent", "15%"],
                    ["Utilities", "10%"],
                    ["Others", "10%"],
                  ].map(([name, amount]) => (
                    <li key={name}>
                      <span />
                      {name}
                      <b>{amount}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="panel panel-table">
              <div className="panel-heading">
                <strong>Recent Transactions</strong>
                <button>All</button>
              </div>
              <table>
                <tbody>
                  {transactions.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${cell}`} className={index === 4 ? "paid" : ""}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="panel panel-cash">
              <div className="panel-heading">
                <strong>Cash Flow</strong>
                <button>This Month</button>
              </div>
              <div className="bar-chart" aria-label="Cash flow bar chart">
                {[35, 60, 28, 70, 38, 58, 26, 78].map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}%` }}
                    className={index % 2 === 0 ? "inflow" : "outflow"}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}

function Skyline() {
  return (
    <div className="skyline" aria-hidden="true">
      {Array.from({ length: 34 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-7">
      <div className="hero-grid mx-auto max-w-[1680px] px-5 pt-12 lg:px-10 lg:pt-10">
        <motion.div
          className="hero-copy relative z-10 max-w-[700px] pt-2"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h1 className="text-[46px] font-extrabold leading-[1.08] text-ink sm:text-[58px] lg:text-[52px] xl:text-[68px]">
            <span className="text-mint">Smart</span> Books.
            <br />
            <span className="sm:whitespace-nowrap">
              <span className="text-mint">Strong</span> Business.
            </span>
          </h1>
          <p className="mt-7 max-w-[455px] text-[18px] leading-[1.65] text-slate-700">
            Blizbooks is the all-in-one accounting and business management
            platform for modern businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <a href="#get-started" className="btn-primary h-[55px] min-w-[166px] text-base">
              Get Started Free
            </a>
            <a href="#book-demo" className="btn-outline h-[55px] min-w-[166px] text-base">
              Book a Demo
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-medium text-slate-600">
            {["Free 14-day trial", "No credit card required", "Cancel anytime"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="hero-dashboard-shell relative z-10">
          <div className="hero-dashboard-scale">
            <HeroDashboard />
          </div>
        </div>
      </div>
      <Skyline />
    </section>
  );
}

function TrustStrip() {
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

function FeatureGrid() {
  return (
    <MotionSection className="bg-white py-9" id="features">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <h2 className="text-center text-[27px] font-extrabold text-ink">
          Everything you need to{" "}
          <span className="text-mint">run your business</span>
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

function WhyChoose() {
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

function Integrations() {
  return (
    <MotionSection className="bg-white py-7">
      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
        <h2 className="text-[27px] font-extrabold text-ink">Seamless Integrations</h2>
        <div className="mt-7 grid grid-cols-2 items-center gap-x-9 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          <div className="brand-tally">Tally<small>POWER OF SIMPLICITY</small></div>
          <div className="brand-razorpay">Razorpay</div>
          <div className="brand-gsuite"><span>G</span> Suite</div>
          <div className="brand-shopify">shopify</div>
          <div className="brand-amazon">amazon</div>
          <div className="brand-zoho">ZOHO</div>
        </div>
      </div>
    </MotionSection>
  );
}

function ReceiptIllustration() {
  return (
    <div className="receipt-illustration" aria-hidden="true">
      <span className="bar one" />
      <span className="bar two" />
      <span className="bar three" />
      <div className="receipt">
        <i />
        <i />
        <i />
      </div>
      <div className="calculator">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="coin">₹</div>
    </div>
  );
}

function DevicePreview() {
  return (
    <div className="device-preview" aria-hidden="true">
      <div className="laptop">
        <div className="laptop-screen">
          <div className="device-dashboard-scale">
            <HeroDashboard />
          </div>
        </div>
      </div>
      <div className="phone">
        <div className="phone-bar" />
        <strong>₹12,45,000</strong>
        <small>Total Sales</small>
        <div className="mini-donut" />
      </div>
    </div>
  );
}

function CTA() {
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

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1680px] gap-9 px-5 py-8 lg:grid-cols-[280px_repeat(5,1fr)] lg:px-10">
        <div>
          <img src={logoUrl} alt="Blizbooks" className="h-[49px] w-[185px] object-contain object-left" />
          <p className="mt-4 max-w-[220px] text-[13px] leading-6 text-slate-600">
            Smart accounting and business management software for modern businesses.
          </p>
          <div className="mt-4 flex gap-3">
            {["f", "in", "t", "▶"].map((item) => (
              <a key={item} href="#social" className="social-link" aria-label={`Blizbooks social ${item}`}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="footer-title">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a className="footer-link" href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="footer-title">Download the App</h3>
          <div className="mt-4 space-y-3">
            <a href="#google-play" className="store-badge">
              <span className="play-icon" />
              <small>GET IT ON</small>
              Google Play
            </a>
            <a href="#app-store" className="store-badge">
              <span className="apple-icon" />
              <small>Download on the</small>
              App Store
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-borderSoft py-4 text-center text-[12px] text-slate-500">
        © 2024 Blizbooks. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <FeatureGrid />
        <WhyChoose />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
