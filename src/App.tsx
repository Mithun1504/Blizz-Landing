import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { LegalPage } from "./components/pages/LegalPage";
import { ScheduleDemoProvider } from "./components/lead/ScheduleDemoModal";
import { BusinessEdge } from "./components/sections/BusinessEdge";
import { CTA } from "./components/sections/CTA";
import { Contact } from "./components/sections/Contact";
import { CustomerViews } from "./components/sections/CustomerViews";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { Hero } from "./components/sections/Hero";
import { Photos } from "./components/sections/Photos";
import { Products } from "./components/sections/Products";
import { TrustStrip } from "./components/sections/TrustStrip";
import { WhyChoose } from "./components/sections/WhyChoose";
import { YouTube } from "./components/sections/YouTube";
import { getLegalDocument } from "./data/legal";
import { useEffect, useState } from "react";

function useCurrentPath() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", updatePath);
    window.addEventListener("blizbooks:navigate", updatePath);
    return () => {
      window.removeEventListener("popstate", updatePath);
      window.removeEventListener("blizbooks:navigate", updatePath);
    };
  }, []);

  return path;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <FeatureGrid />
        <BusinessEdge />
        <WhyChoose />
        <Photos />
        {/* <YouTube /> */}
        <CustomerViews />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const path = useCurrentPath();
  const documentSlug = path.replace(/^\/+|\/+$/g, "");
  const legalDocument = getLegalDocument(documentSlug);

  return (
    <ScheduleDemoProvider>
      {legalDocument ? <><Header /><LegalPage document={legalDocument} /><Footer /></> : <LandingPage />}
    </ScheduleDemoProvider>
  );
}
