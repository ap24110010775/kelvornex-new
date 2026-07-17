import {
  ArrowLeft,
  Terminal,
  Smartphone,
  Cpu,
  ArrowRight,
  Play,
  Users,
  Briefcase,
  Trophy,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Logo from "./Logo";

// Use the first dot color #0900ff (distinct from gadgets' #008eff)
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
    color: "#0900ff", // vivid blue
    img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
  {
    icon: Smartphone,
    title: "App Dev",
    body: "Fluid, high-performance iOS, Android & cross-platform apps that scale with your customer base.",
    color: "#00ccff", // cyan
    img: "https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
  {
    icon: Cpu,
    title: "AI Agents Dev",
    body: "Autonomous AI agents, LLM integrations, and custom workflow automations that scale productivity.",
    color: "#4ea9fd", // sky blue
    img: "/images/ai-agents.jpg",
  },
];

const footerColumns = [
  {
    title: "Services",
    links: ["Web Development", "Mobile App Development", "AI Agents & Automation", "Cloud Consulting"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Work", "Careers", "Contact Support"],
  },
  {
    title: "Resources",
    links: ["Tech Blog", "Open Source", "Case Studies", "Documentation"],
  },
];

interface SoftwarePageProps {
  onBack: () => void;
}

export default function SoftwarePage({ onBack }: SoftwarePageProps) {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      
      {/* ── Navbar (Corporate Brand: KELVORNEX Software) ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Back Arrow + Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-black transition-colors"
                aria-label="Back to main site"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <span className="w-px h-6 bg-slate-200" />
              
              <span className="flex items-center gap-2" style={{ color: ACCENT }}>
                <Logo className="w-9 h-9" />
                <span className="flex items-baseline gap-0.5">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900">
                    KELVORNEX
                  </span>
                  <span className="text-sm font-bold" style={{ color: ACCENT }}>
                     Software
                  </span>
                </span>
              </span>
            </div>

            {/* Corporate Nav Links */}
            <nav className="hidden lg:flex items-center gap-7">
              <button
                onClick={onBack}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Home
              </button>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Industries
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Insights
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Careers
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* CTA */}
            <a
              href="#services"
              className="rounded-lg text-white text-xs sm:text-sm font-bold px-5 py-2.5 transition-all shadow-md active:scale-95"
              style={{ backgroundColor: ACCENT }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero Section (Full-Screen, Glass Skyscraper Background) ── */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
        
        {/* Background Skyscraper Photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/10349474/pexels-photo-10349474.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800"
            alt="Modern glass skyscraper corporate office"
            className="w-full h-full object-cover"
          />
          {/* Transparent gradient mask overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:to-white/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] lg:leading-[1.1] font-extrabold text-[#0a2540] tracking-tight">
              Innovating Today <br />
              <span style={{ color: ACCENT }}>Inspiring Tomorrow</span>
            </h1>

            <p className="mt-6 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              We deliver intelligent solutions that drive growth, empower businesses, and create lasting impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0">
              <a
                href="#services"
                className="rounded-lg text-white text-sm font-bold px-8 py-3.5 text-center transition-all shadow-lg shadow-indigo-600/10 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: ACCENT }}
              >
                Our Services
              </a>
              <button
                className="rounded-lg border border-slate-300 bg-white/80 hover:bg-white text-slate-700 text-sm font-semibold px-8 py-3.5 text-center flex items-center justify-center gap-2 transition-colors backdrop-blur-sm shadow-sm"
              >
                <Play className="w-4 h-4 fill-slate-700 stroke-none" />
                Watch Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Statistics Strip (Exactly like the Image) ── */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-6 sm:mt-16 sm:mb-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 border-r border-slate-100 last:border-r-0">
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
      </section>

      {/* ── Solutions Section (What We Do) ── */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
              WHAT WE DO
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0a2540]">
              Solutions that <br />
              Drive <span style={{ color: ACCENT }}>Real Impact</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-slate-500 leading-relaxed">
              From strategy to execution, we provide end-to-end services tailored to your business goals.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold hover:underline"
              style={{ color: ACCENT }}
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 offering cards: Web, App, AI Agents with related imagery */}
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-50">
                    <img
                      src={o.img}
                      alt={`${o.title} representation`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6"
                      style={{ backgroundColor: o.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{o.title}</h3>
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                      {o.body}
                    </p>
                  </div>
                </div>

                <div className="mx-8 mb-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Partner Section (Your Trusted Partner) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
              ABOUT KELVORNEX SOFTWARE
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0a2540] leading-tight">
              Your Trusted Partner <br />
              for <span style={{ color: ACCENT }}>Sustainable Growth</span>
            </h2>
            <p className="mt-5 text-slate-500 text-sm leading-relaxed">
              At Kelvornex, we combine innovation, expertise, and collaboration to help businesses unlock new opportunities and achieve long-term success.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Client-Centric Approach",
                "Proven Track Record",
                "Commitment to Excellence",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-lg text-white text-sm font-bold px-6 py-3 shadow-lg shadow-indigo-600/10 hover:brightness-110"
              style={{ backgroundColor: ACCENT }}
            >
              Learn More About Us
            </a>
          </div>

          {/* Right skyscraper collage */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/33800416/pexels-photo-33800416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900"
                alt="Reflective glass panels on corporate skyscraper"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 max-w-[200px]">
              <p className="text-3xl font-extrabold text-[#0a2540]">15+</p>
              <p className="text-xs font-bold text-slate-800 mt-1">Years of Experience</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                Delivering value and building lasting partnerships.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Full Corporate Footer for Kelvornex Software ── */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
            
            {/* Brand Intro Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-white">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white p-1">
                  <Logo className="w-8 h-8" />
                </span>
                <span className="text-lg font-extrabold">
                  KELVORNEX{" "}
                  <span style={{ color: ACCENT }} className="text-xs tracking-wider">
                    Software
                  </span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed max-w-xs">
                Empowering enterprises and startups globally with custom web, native mobile, and cutting-edge autonomous AI agent software systems.
              </p>
            </div>

            {/* Custom columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} Kelvornex Software. All rights reserved.</p>
            <button
              onClick={onBack}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to main site
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
