import type { AnchorHTMLAttributes, MouseEvent } from "react";

function navigate(href: string) {
  const destination = href.startsWith("#") && window.location.pathname !== "/" ? `/${href}` : href;
  window.history.pushState({}, "", destination);
  window.dispatchEvent(new Event("blizbooks:navigate"));

  const hash = href.startsWith("#") ? href : destination.startsWith("/#") ? destination.slice(1) : null;
  if (hash) {
    window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 0);
  } else if (destination.startsWith("/")) {
    window.setTimeout(() => window.scrollTo(0, 0), 0);
  }
}

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function SiteLink({ onClick, href = "#", ...props }: SiteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      event.preventDefault();
      navigate(href);
    }
    onClick?.(event);
  };

  return <a {...props} href={href} onClick={handleClick} />;
}
