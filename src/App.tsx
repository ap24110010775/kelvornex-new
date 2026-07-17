import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import Destinations from "./components/Destinations";
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
  const [blinkEdu, setBlinkEdu] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showSplash, setShowSplash] = useState(true);


  // scroll to top when switching pages
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const handleViewMoreClick = () => {
    // Scroll down to the sub-brands section
    const target = document.getElementById("our-brands-strip");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight - 1000, behavior: "smooth" });
    }

    // Trigger blinking border highlight on the Education sub-brand
    setBlinkEdu(true);
    setTimeout(() => {
      setBlinkEdu(false);
    }, 4500); // Blink for 4.5 seconds
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
      <div className="min-h-screen">
        <Navbar />
        <main className="space-y-4">
          {/* Hero is visible instantly at top */}
          <Hero />

          <BookingSteps showOnlyHireTalents={true} />

          <WhySection />

          <CoreValues />

          <Destinations
            onCourseClick={() => {
              document.getElementById("education-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            onViewMoreClick={handleViewMoreClick}
          />

          <BookingSteps showOnlyHireTalents={false} />

          <div id="our-brands-strip" className="hover-lift">
            <SubBrands highlightEducation={blinkEdu} />
          </div>

          {/* New inline sections for the 3 sub-brands */}
          <InlineSoftware />

          <InlineEducation
            onProgramClick={(program: any) => {
              setSelectedItem(program);
              setPage("details");
            }}
          />

          <CollegeMarquee />

          <InlineGadgets />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
