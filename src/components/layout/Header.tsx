import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { logoGif } from "../../assets";
import { useDemoModal } from "../lead/demoModalContext";
import { navItems } from "../../data/landing";
import { SiteLink } from "../ui/SiteLink";

export function Header() {
  const { openDemoModal } = useDemoModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <SiteLink className="brand-lockup" href="#home" aria-label="BlizBooks home" onClick={closeMenu}>
          <img src={logoGif} alt="BlizBooks"/>
        </SiteLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className="nav-item-wrap" key={item.label}>
              {item.dropdown && item.children ? (
                <>
                  <button
                    type="button"
                    className="nav-link nav-dropdown-trigger"
                    aria-expanded={isProductsOpen}
                    onClick={() => setIsProductsOpen((open) => !open)}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 ${isProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`nav-dropdown ${isProductsOpen ? "nav-dropdown-open" : ""}`}>
                    {item.children.map((child) => (
                      <SiteLink key={child.label} href={child.href} onClick={closeMenu}>
                        {child.label}
                      </SiteLink>
                    ))}
                  </div>
                </>
              ) : (
                <SiteLink className="nav-link" href={item.href} onClick={closeMenu}>{item.label}</SiteLink>
              )}
            </div>
          ))}
        </nav>

        <button className="button button-primary header-cta" type="button" onClick={openDemoModal}>Get Started</button>
        <button
          className="menu-toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-navigation ${isMenuOpen ? "mobile-navigation-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown && item.children ? (
                <>
                  <button
                    type="button"
                    className="mobile-nav-link mobile-product-toggle"
                    aria-expanded={isProductsOpen}
                    onClick={() => setIsProductsOpen((open) => !open)}
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 ${isProductsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`mobile-product-list ${isProductsOpen ? "mobile-product-list-open" : ""}`}>
                    <div>
                      {item.children.map((child) => (
                        <SiteLink key={child.label} href={child.href} onClick={closeMenu}>{child.label}</SiteLink>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <SiteLink className="mobile-nav-link" href={item.href} onClick={closeMenu}>{item.label}</SiteLink>
              )}
            </div>
          ))}
        </nav>
        <button className="button button-primary mobile-cta" type="button" onClick={() => { closeMenu(); openDemoModal(); }}>Get Started</button>
      </div>
    </header>
  );
}
