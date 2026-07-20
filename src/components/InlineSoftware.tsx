import { useEffect, useState } from "react";
import { Code2, Cloud, MonitorSmartphone, Database, Brain, ShieldCheck } from "lucide-react";

const ACCENT = "#0900ff";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1200+", label: "Projects Delivered" },
  { value: "15+", label: "Awards Won" },
  { value: "30+", label: "Countries Served" },
];

const offerings = [
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    body: "Tailor-made software solutions engineered to your exact business requirements — from MVPs to enterprise platforms.",
    color: "#0900ff",
    img: "/custom_software_dev2.png",
  },
  {
    id: "cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    body: "Scalable cloud infrastructure, DevOps pipelines & managed services on AWS, Azure & GCP tailored to your workload.",
    color: "#00ccff",
    img: "/cloud_services2.png",
  },
  {
    id: "microsoft-services",
    icon: MonitorSmartphone,
    title: "Microsoft Services",
    body: "Microsoft 365, Azure, Power Platform & Dynamics 365 integrations to modernise your enterprise operations.",
    color: "#0078d4",
    img: "/microsoft_services2.png",
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    body: "Robust data pipelines, warehousing, ETL workflows and real-time streaming solutions to fuel data-driven decisions.",
    color: "#a855f7",
    img: "/data_engineering2.png",
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    body: "Intelligent models, LLM integrations, predictive analytics and AI-powered automation built for real-world impact.",
    color: "#f59e0b",
    img: "/ai_ml2.png",
  },
  {
    id: "cyber-security",
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "End-to-end security assessments, threat detection, compliance frameworks and 24/7 monitoring to protect your assets.",
    color: "#ef4444",
    img: "/cyber_security2.png",
  },
];



interface InlineSoftwareProps {
  onServiceClick?: (serviceId: string) => void;
}

export default function InlineSoftware({ onServiceClick }: InlineSoftwareProps) {
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
    <section id="software-section" className={`py-20 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0900ff]">
            KELVORNEX SOFTWARE
          </p>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#0a2540]"}`}>
            Innovating Today,{" "}
            <span style={{ color: ACCENT }}>Inspiring Tomorrow</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Enterprise-grade software, AI solutions, and digital products engineered to scale your business.
          </p>
        </div>

        {/* Offerings Grid — full-image cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => onServiceClick?.(o.id)}
              >
                {/* Full background image */}
                <img
                  src={o.img}
                  alt={o.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark gradient overlay — heavier at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Icon badge top-left */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: o.color }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="text-white font-bold text-base leading-tight">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-white/70 text-xs leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors">
                    {o.body}
                  </p>
                  <span
                    className="mt-3 inline-block text-[11px] font-bold tracking-wide uppercase transition-colors"
                    style={{ color: o.color }}
                  >
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className={`mt-14 rounded-2xl border shadow-md p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 transition-colors duration-300 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}>
          {stats.map(({ value, label }) => (
            <div key={label} className={`text-center border-r last:border-r-0 ${isDarkMode ? "border-slate-800" : "border-slate-100"}`}>
              <p className={`text-2xl sm:text-3xl font-extrabold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#0a2540]"}`}>{value}</p>
              <p className={`mt-1 text-xs sm:text-sm font-medium transition-colors duration-300 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
