import { Apple, Facebook, Instagram, Linkedin, Play, Youtube } from "lucide-react";
import { logoUrl } from "../../assets";
import { footerGroups, officialSocialLinks, storeLinks } from "../../data/landing";
import { legalDocuments } from "../../data/legal";
import { SiteLink } from "../ui/SiteLink";

const socialIcons = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
];

export function Footer() {
  const activeSocialLabels = new Set(officialSocialLinks.map(({ label }) => label));

  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <img src={logoUrl} alt="BlizBooks" />
          <p>Innovation Made Simple. Performance Made Powerful.</p>
          {officialSocialLinks.length > 0 ? (
            <div className="social-links" aria-label="Official BlizBooks social media">
              {socialIcons.filter(({ label }) => activeSocialLabels.has(label)).map(({ label, icon: Icon }) => {
                const officialLink = officialSocialLinks.find((link) => link.label === label);
                return officialLink ? (
                  <a href={officialLink.href} aria-label={label} key={label}>
                    <Icon className="h-4 w-4" />
                  </a>
                ) : null;
              })}
            </div>
          ) : null}
        </div>

        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-group">
          <h3>Legal</h3>
          <ul>
            {legalDocuments.map(({ slug, title }) => (
              <li key={title}>
                <SiteLink className="footer-link-button" href={`/${slug}`}>
                  {title}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        {storeLinks.googlePlay || storeLinks.appStore ? (
          <div className="footer-group footer-downloads">
            <h3>Mobile Applications</h3>
            <div className="store-badges">
              {storeLinks.googlePlay ? <a href={storeLinks.googlePlay} className="store-badge"><Play className="h-5 w-5 fill-current" /> Google Play</a> : null}
              {storeLinks.appStore ? <a href={storeLinks.appStore} className="store-badge"><Apple className="h-5 w-5 fill-current" /> App Store</a> : null}
            </div>
          </div>
        ) : null}
      </div>
      <div className="footer-bottom">
        <div className="section-container">
          <span>© 2026 BlizBooks. All rights reserved.</span>
          <span>Built for Today. Ready for Tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}
