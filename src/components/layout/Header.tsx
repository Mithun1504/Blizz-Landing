import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { logoUrl } from "../../assets";
import { navItems } from "../../data/landing";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1680px] items-center justify-between px-5 lg:px-10">
        <a className="flex items-center" href="#" aria-label="Blizbooks home" onClick={closeMenu}>
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
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-borderSoft bg-white px-5 pb-5 pt-3 shadow-card transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none hidden -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1680px] flex-col gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-[16px] font-bold text-ink transition-colors hover:bg-emeraldSoft hover:text-mint"
              onClick={closeMenu}
            >
              {item.label}
              {item.dropdown ? <ChevronDown className="h-4 w-4" /> : null}
            </a>
          ))}
        </nav>

        <div className="mx-auto mt-4 grid max-w-[1680px] gap-3 sm:grid-cols-2">
          <a
            className="btn-secondary h-[50px] w-full text-[16px]"
            href="#login"
            onClick={closeMenu}
          >
            Login
          </a>
          <a
            className="btn-primary h-[50px] w-full text-[16px]"
            href="#get-started"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
