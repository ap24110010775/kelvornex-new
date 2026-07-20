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
import CareersPage from "./components/CareersPage";
import ApplyPage from "./components/ApplyPage";
import ContactPage from "./components/ContactPage";
import SoftwareServicePage, { softwareServices } from "./components/SoftwareServicePage";
import type { Job } from "./components/CareersPage";

export default function App() {
  const [page, setPage] = useState<"home" | "details" | "careers" | "apply" | "contact" | "softwareService">("home");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
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
      setPage("home");
    };
    window.addEventListener("kelvornex-brand-select", handler);
    return () => window.removeEventListener("kelvornex-brand-select", handler);
  }, []);

  // Listen for careers-open event dispatched by Navbar Apply button
  useEffect(() => {
    const handler = () => {
      setPage("careers");
    };
    window.addEventListener("kelvornex-open-careers", handler);
    return () => window.removeEventListener("kelvornex-open-careers", handler);
  }, []);

  // Listen for contact-open event dispatched by Navbar Contact Us button
  useEffect(() => {
    const handler = () => setPage("contact");
    window.addEventListener("kelvornex-open-contact", handler);
    return () => window.removeEventListener("kelvornex-open-contact", handler);
  }, []);

  const handleBrandSelect = (id: string) => {
    setActiveBrand(id as "software" | "education" | "gadgets");
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

  if (page === "careers") {
    return (
      <>
        <CursorGlow />
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8faff] text-slate-900"}`}>
          <Navbar
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode((prev) => !prev)}
            onHomeClick={() => setPage("home")}
          />
          <CareersPage
            isDarkMode={isDarkMode}
            onApplyNow={(job: Job) => {
              setSelectedJob(job);
              setPage("apply");
            }}
          />
          <Footer />
        </div>
      </>
    );
  }

  if (page === "apply" && selectedJob) {
    return (
      <>
        <CursorGlow />
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8faff] text-slate-900"}`}>
          <Navbar
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode((prev) => !prev)}
            onHomeClick={() => setPage("home")}
          />
          <ApplyPage
            job={selectedJob}
            isDarkMode={isDarkMode}
            onBack={() => setPage("careers")}
          />
          <Footer />
        </div>
      </>
    );
  }

  if (page === "contact") {
    return (
      <>
        <CursorGlow />
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8faff] text-slate-900"}`}>
          <Navbar
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode((prev) => !prev)}
            onHomeClick={() => setPage("home")}
          />
          <ContactPage isDarkMode={isDarkMode} />
          <Footer />
        </div>
      </>
    );
  }

  if (page === "softwareService" && selectedServiceId) {
    const svc = softwareServices.find((s) => s.id === selectedServiceId);
    if (svc) return (
      <>
        <CursorGlow />
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8faff] text-slate-900"}`}>
          <Navbar
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode((prev) => !prev)}
            onHomeClick={() => setPage("home")}
          />
          <SoftwareServicePage
            service={svc}
            isDarkMode={isDarkMode}
            onBack={() => {
              setPage("home");
              setTimeout(() => {
                document.getElementById("software-section")?.scrollIntoView({ behavior: "smooth" });
              }, 120);
            }}
          />
          <Footer />
        </div>
      </>
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
            {activeBrand === "software" && <InlineSoftware onServiceClick={(id) => { setSelectedServiceId(id); setPage("softwareService"); }} />}

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
