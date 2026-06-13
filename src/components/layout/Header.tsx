import { ChevronDown, Menu } from "lucide-react";
import { logoUrl } from "../../assets";
import { navItems } from "../../data/landing";

export function Header() {
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
          <a className="btn-secondary h-[52px] min-w-[150px] text-[18px]" href="#login">
            Login
          </a>
          <a className="btn-primary h-[52px] min-w-[160px] text-[18px]" href="#get-started">
            Get Started
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-ink lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
