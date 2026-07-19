import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingSteps from "./components/ui/BookingSteps";
import SubBrands from "./components/SubBrands";
import ProgramDetail from "./components/ProgramDetail";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import InlineSoftware from "./components/InlineSoftware";
import InlineEducation from "./components/InlineEducation";
import InlineGadgets from "./components/InlineGadgets";
import CollegeMarquee from "./components/CollegeMarquee";
import { CursorGlow } from "./components/ui/cursor-glow";
import CoreValues from "./components/CoreValues";

export default function App() {
  const [page, setPage] = useState<"home" | "details">("home");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showSplash, setShowSplash] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeBrand, setActiveBrand] = useState<"software" | "education" | "gadgets">("software");

  const brandSectionRef = useRef<HTMLDivElement>(null);

  // scroll to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Listen for brand-select events dispatched by the Navbar mega menu
  useEffect(() => {
    const handler = (e: Event) => {
      const brand = (e as CustomEvent).detail as "software" | "education" | "gadgets";
      setActiveBrand(brand);
      setPage("home"); // Reset back to home page so section is rendered
    };
    window.addEventListener("kelvornex-brand-select", handler);
    return () => window.removeEventListener("kelvornex-brand-select", handler);
  }, []);

  const handleBrandSelect = (id: string) => {
    setActiveBrand(id as "software" | "education" | "gadgets");
    // Small delay so React re-renders the new section before we scroll
    setTimeout(() => {
      brandSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  if (page === "details" && selectedItem) {
    return (
      <ProgramDetail
        item={selectedItem}
        onBack={() => {
          setPage("home");
          setTimeout(() => {
            document.getElementById("education-section")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        onNavigate={(program: any) => {
          setSelectedItem(program);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  return (
    <>
      <CursorGlow />
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8faff] text-slate-900"}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          onToggleTheme={() => setIsDarkMode((prev) => !prev)} 
          onHomeClick={() => setPage("home")}
        />
        <main className="space-y-4">
          {/* Hero */}
          <Hero />

          <BookingSteps showOnlyHireTalents={true} />

          <CoreValues />

          {/* Our Brands — tab strip */}
          <div id="our-brands-strip" className="hover-lift">
            <SubBrands activeBrand={activeBrand} onBrandSelect={handleBrandSelect} />
          </div>

          {/* Brand content panel — only the active brand section is shown */}
          <div ref={brandSectionRef}>
            {activeBrand === "software" && <InlineSoftware />}

            {activeBrand === "education" && (
              <>
                <InlineEducation
                  onProgramClick={(program: any) => {
                    setSelectedItem(program);
                    setPage("details");
                  }}
                />
                <CollegeMarquee />
              </>
            )}

            {activeBrand === "gadgets" && <InlineGadgets />}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
