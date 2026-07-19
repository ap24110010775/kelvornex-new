import { useEffect, useState } from "react";
import { Marquee } from "@/components/ui/marquee";

const colleges = [
  { name: "RISE Krishna Sai Gandhi", domain: "risekrishnasaigandhi.edu.in" },
  { name: "St. Ann's College", domain: "sacet.ac.in" },
  { name: "KITS Guntur", domain: "kitsguntur.ac.in" },
  { name: "Hindu College", domain: "hinduengg.com" },
  { name: "SRK Institute", domain: "srkit.edu.in" },
  { name: "SRM University AP", domain: "srmap.edu.in" },
  { name: "Bapatla Engineering College", domain: "becbapatla.ac.in" },
  { name: "JNTU Kakinada", domain: "jntuk.edu.in" },
];

function CollegeLogo({ college, isDarkMode }: { college: { name: string; domain: string }; isDarkMode: boolean }) {
  return (
    <div className={`relative flex flex-col items-center justify-center w-96 h-52 p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group ${isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-100"}`}>
      <img
        src={`https://logo.clearbit.com/${college.domain}`}
        alt={college.name}
        className="w-40 h-24 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        onError={(e) => {
          // If clearbit fails, fallback to google favicon
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('googleusercontent')) {
            target.src = `https://s2.googleusercontent.com/s2/favicons?domain=${college.domain}&sz=128`;
            target.classList.remove('grayscale', 'opacity-60');
          } else {
            // If favicon also fails, show text
            target.style.display = 'none';
            if (target.nextElementSibling) {
              (target.nextElementSibling as HTMLElement).style.display = 'block';
            }
          }
        }}
      />
      <div className="mt-3 text-center text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
        {college.name}
      </div>
    </div>
  );
}

export default function CollegeMarquee() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(theme === "dark");
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`relative py-24 overflow-hidden ${isDarkMode ? "bg-slate-950" : "bg-gradient-to-b from-white via-slate-50/50 to-white"}`}>
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#008eff]">
          Partner Institutions
        </p>
        <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          Trusted by <span className="bg-gradient-to-r from-[#00ccff] to-[#008eff] bg-clip-text text-transparent">Top Colleges</span>
        </h2>
        <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
          Collaborating with prestigious institutions to empower the next generation of engineers and innovators.
        </p>
      </div>

      {/* Marquee Row */}
      <div className="relative flex w-full flex-col items-center justify-center gap-4">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:2rem]">
          {colleges.map((college) => (
            <CollegeLogo key={college.domain} college={college} isDarkMode={isDarkMode} />
          ))}
        </Marquee>

        {/* Side fade gradients */}
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r ${isDarkMode ? "from-slate-950 to-transparent" : "from-white to-transparent"}`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l ${isDarkMode ? "from-slate-950 to-transparent" : "from-white to-transparent"}`} />
      </div>
    </section>
  );
}
