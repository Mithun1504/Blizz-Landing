import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { CTA } from "./components/sections/CTA";
import { FeatureGrid } from "./components/sections/FeatureGrid";
import { Hero } from "./components/sections/Hero";
import { Integrations } from "./components/sections/Integrations";
import { TrustStrip } from "./components/sections/TrustStrip";
import { WhyChoose } from "./components/sections/WhyChoose";

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
