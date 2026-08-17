import { ArrowUpRight } from "lucide-react";
import type { LegalDocument } from "../../data/legal";
import { SiteLink } from "../ui/SiteLink";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <div className="min-h-screen bg-surface text-ink antialiased">
      <main>
        <section className="legal-page-hero">
          <div className="section-container legal-page-hero-inner">
            <h1>{document.title}</h1>
          </div>
        </section>
        <section className="legal-page-content">
          <div className="section-container legal-content-layout">
            <article className="legal-document">
              {document.sections.map((section) => {
                const sectionId = section.heading.split(". ")[0];
                return (
                  <section key={section.heading} id={sectionId}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                  </section>
                );
              })}
              <SiteLink className="legal-contact-link" href="#contact">
                Need help? Contact BlizBooks <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </SiteLink>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
