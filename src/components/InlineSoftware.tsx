import { Terminal, Smartphone, Cpu, Users, Briefcase, Trophy, Globe } from "lucide-react";

const ACCENT = "#0900ff";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Briefcase, value: "1200+", label: "Projects Delivered" },
  { icon: Trophy, value: "15+", label: "Awards Won" },
  { icon: Globe, value: "30+", label: "Countries Served" },
];

const offerings = [
  {
    icon: Terminal,
    title: "Web Dev",
    body: "Custom web applications, responsive websites & enterprise portals built to engage and convert.",
    color: "#0900ff",
    img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
  {
    icon: Smartphone,
    title: "App Dev",
    body: "Fluid, high-performance iOS, Android & cross-platform apps that scale with your customer base.",
    color: "#00ccff",
    img: "https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
  {
    icon: Cpu,
    title: "AI Agents Dev",
    body: "Autonomous AI agents, LLM integrations, and custom workflow automations that scale productivity.",
    color: "#4ea9fd",
    img: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.png?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
];

export default function InlineSoftware() {
  return (
    <section id="software-section" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0900ff]">
            KELVORNEX SOFTWARE
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Innovating Today, <span style={{ color: ACCENT }}>Inspiring Tomorrow</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            We deliver enterprise-grade software solutions, mobile applications, and autonomous AI agents designed to scale your operations.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-50 relative">
                    <img
                      src={o.img}
                      alt={o.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: o.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0900ff] transition-colors">
                      {o.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">{o.body}</p>
                  </div>
                </div>
                <div className="mx-6 sm:mx-8 mb-6 sm:mb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-100 shadow-md p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 border-r border-slate-100 last:border-r-0"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0a2540]">{value}</p>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <div
          className="mt-16 bg-[#0a0e1a] rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(9,0,255,0.15),transparent_50%)]" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-white text-2xl sm:text-3xl font-extrabold">Ready to build your solution?</h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Get in touch with our engineering team today to discuss details, timeline, and custom quotes.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="#enroll-newsletter"
              className="inline-flex items-center justify-center rounded-lg text-white font-bold px-8 py-4 bg-[#0900ff] hover:bg-[#008eff] shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-95 text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
