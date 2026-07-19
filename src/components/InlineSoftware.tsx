import { useEffect, useState } from "react";
import { Terminal, Smartphone, Cpu, BarChart3, ShoppingCart, Cloud, Box, Layers } from "lucide-react";

const ACCENT = "#0900ff";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1200+", label: "Projects Delivered" },
  { value: "15+", label: "Awards Won" },
  { value: "30+", label: "Countries Served" },
];

const offerings = [
  {
    icon: Terminal,
    title: "Web Development",
    body: "Custom web apps, responsive sites & enterprise portals built to engage and convert.",
    color: "#0900ff",
    img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: Smartphone,
    title: "App Development",
    body: "High-performance iOS, Android & cross-platform apps that scale with your user base.",
    color: "#00ccff",
    img: "https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: Cpu,
    title: "AI Agents Dev",
    body: "Autonomous AI agents, LLM integrations, and workflow automations that boost productivity.",
    color: "#4ea9fd",
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: Box,
    title: "Product Management",
    body: "End-to-end product strategy, roadmapping, and delivery aligned to your business goals.",
    color: "#7c3aed",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: Layers,
    title: "Embedded Systems & IoT",
    body: "Smart hardware integration, firmware development & IoT connectivity solutions.",
    color: "#059669",
    img: "https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    body: "Scalable cloud infrastructure, DevOps pipelines & managed services on AWS, Azure & GCP.",
    color: "#0ea5e9",
    img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    body: "Feature-rich online stores with seamless payment gateways, inventory & order management.",
    color: "#f59e0b",
    img: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    body: "Data-driven dashboards, BI reports & predictive analytics that turn data into decisions.",
    color: "#ef4444",
    img: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
  },
];

export default function InlineSoftware() {
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
