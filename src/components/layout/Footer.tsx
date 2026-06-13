import { logoUrl } from "../../assets";
import { footerGroups } from "../../data/landing";

const socialLinks = ["f", "in", "t", "▶"];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1680px] gap-9 px-5 py-8 lg:grid-cols-[280px_repeat(5,1fr)] lg:px-10">
        <div>
          <img
            src={logoUrl}
            alt="Blizbooks"
            className="h-[49px] w-[185px] object-contain object-left"
          />
          <p className="mt-4 max-w-[220px] text-[13px] leading-6 text-slate-600">
            Smart accounting and business management software for modern businesses.
          </p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item}
                href="#social"
                className="social-link"
                aria-label={`Blizbooks social ${item}`}
              >
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
