import { useEffect, useState } from "react";
import { Code2, GraduationCap, Cpu, Rocket } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation-Driven Platform",
    body: "Kelvornex is an innovation-driven technology and research organization that empowers students, startups, and professionals with industry-oriented learning and real-world exposure — bridging the gap between academics and industry.",
  },
  {
    icon: Code2,
    title: "Kelvornex Software",
    body: "We deliver end-to-end web, mobile, and enterprise software solutions. From custom application development to scalable cloud platforms, our software division turns ideas into impactful digital products.",
  },
  {
    icon: GraduationCap,
    title: "Kelvornex Education",
    body: "Our education division offers hands-on courses, technical training, and career programs in AI, Generative AI, IoT, VLSI, Cyber Security, Quantum Computing, and more — designed to transform learners into industry-ready professionals.",
  },
  {
    icon: Cpu,
    title: "Kelvornex Products",
    body: "We design and deliver smart devices and precision instruments that power the future. Our products division focuses on cutting-edge electronics that serve both consumer and industrial needs.",
  },
];

export default function CoreValues() {
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
    <section id="about-us" className={`w-full overflow-hidden ${isDarkMode ? "bg-slate-950" : "bg-[#fcfcfc]"}`}>
      {/* ── Background Banner (Kelvornex India 2026 Team Photo) ── */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/images/kelvornex-team.jpg"
          alt="Kelvornex India 2026 – Team Photo"
          loading="lazy"
          className="w-full h-auto block"
        />
        {/* Soft dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* ── Overlapping White Card (Zoho Style) ── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 md:-mt-20 z-20 pb-20">
        <div className={`shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] rounded-xl sm:rounded-2xl border p-8 sm:p-12 md:p-16 ${isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-100"}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              The core values and principles
              <br className="hidden sm:block" /> that drive us
            </h2>
            {/* Zoho red accent line */}
            <div className="w-10 h-0.5 bg-red-600 mx-auto mt-4" />
          </div>

          {/* Core Values 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                {/* Icon Container */}
                <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-slate-50 border-slate-100 text-slate-700"}`}>
                  <Icon className={`w-6 h-6 ${isDarkMode ? "text-slate-200" : "text-slate-700"}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-bold leading-snug ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                    {title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed font-medium ${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
