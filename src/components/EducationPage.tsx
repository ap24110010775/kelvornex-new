import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  CheckCircle2,
  X,
  Check,
  Search,
} from "lucide-react";
import Logo from "./Logo";

// Use the third dot color #00ccff (distinct from software's #0900ff and gadgets' #008eff)
const ACCENT = "#00ccff";

interface ProgramItem {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  bullets: string[];
  img: string;
  icon: React.ComponentType<any>;
}

import { technicalPrograms } from "../data";

const footerColumns = [
  {
    title: "Programs",
    links: ["Cyber Security", "Generative AI", "Agentic AI", "VLSI Design"],
  },
  {
    title: "Platform",
    links: ["Live Classes", "Mentorship", "Certificate Verification", "Alumni"],
  },
  {
    title: "Support",
    links: ["Help Desk", "Refund Policy", "Terms of Use", "Privacy Policy"],
  },
];

interface EducationPageProps {
  onBack: () => void;
  onProgramClick?: (program: ProgramItem) => void;
}

export default function EducationPage({ onBack, onProgramClick }: EducationPageProps) {
  const [cart, setCart] = useState<ProgramItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchased, setPurchased] = useState<ProgramItem[]>([]);
  const [buySuccess, setBuySuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");



  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleBuy = () => {
    if (cart.length === 0) return;
    setPurchased([...purchased, ...cart]);
    setCart([]);
    setIsCartOpen(false);
    setBuySuccess(true);
    setTimeout(() => setBuySuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      
      {/* ── Navbar (NovaClair Inspired) ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Back Button + Logo */}
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
                    .edu
                  </span>
                </span>
              </span>
            </div>

            {/* Nav Menu Search Bar */}
            <div className="hidden md:flex items-center gap-3 flex-1 max-w-sm justify-center">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a program or skill..."
                  className="w-full rounded-full bg-slate-50 border border-slate-200 pl-4 pr-10 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#programs"
                className="rounded-lg text-slate-900 text-xs sm:text-sm font-bold px-5 py-2.5 transition-all shadow-md active:scale-95 border border-slate-200 hover:bg-slate-50 flex items-center gap-1.5"
              >
                <span>Get Started</span>
              </a>
              
              {/* Shopping Cart Button */}
              <button
                className="relative p-2.5 text-slate-700 hover:text-black transition-colors bg-slate-100 rounded-full active:scale-95"
                aria-label="Shopping Cart"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00ccff] text-slate-900 text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Shopping Cart Drawer Overlay ── */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex animate-slide-in-right">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00ccff]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Your Cart ({cart.length})
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 text-slate-400">
                    <p className="text-sm">nothing yet</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 text-xs font-bold text-[#008eff] hover:underline"
                    >
                      Explore Technical Programs
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 justify-between">
                      <div className="flex items-center gap-3">
                        <img src={item.img} alt={item.title} loading="lazy" className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                          <p className="text-xs font-bold text-[#008eff] mt-0.5">{item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-slate-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-all"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Buy Button */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-100 space-y-4 bg-slate-50/30">
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-500">Total Price:</span>
                    <span className="text-lg text-slate-900">
                      ₹{cart.reduce((sum, item) => sum + parseInt(item.price.replace(/[^\d]/g, "")), 0)}/-
                    </span>
                  </div>
                  <button
                    onClick={handleBuy}
                    className="w-full rounded-xl text-white font-bold py-3.5 text-center transition-all shadow-lg hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#008eff" }}
                  >
                    Buy Now
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ── Purchase Success Notification Alert ── */}
      {buySuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-sm">Purchase successful!</p>
            <p className="text-[11px] text-white/80 mt-0.5">Your programs have been bought successfully.</p>
          </div>
        </div>
      )}

      {/* ── Hero Section (NovaClair Inspired) ── */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-r from-slate-100 via-white/80 to-transparent">
        
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800"
            alt="Collaborative technical mentoring workspace session"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Blue vertical vignette filter like screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 text-center md:text-left">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] lg:leading-[1.1] font-extrabold tracking-tight">
              Innovative Digital <br />
              <span className="text-[#00ccff]">Solutions</span>
            </h1>

            <p className="mt-6 text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Simplify the web for your business and accelerate your career with our practical and recognized learning programs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0">
              <a
                href="#programs"
                className="rounded-lg text-slate-900 text-sm font-bold px-8 py-3.5 text-center transition-all shadow-lg hover:brightness-110 active:scale-95"
                style={{ backgroundColor: ACCENT }}
              >
                Discover Our Services
              </a>
              <button
                className="rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-8 py-3.5 text-center flex items-center justify-center gap-2 transition-colors backdrop-blur-sm"
              >
                <Play className="w-4 h-4 fill-white stroke-none" />
                Watch Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Technical Programs Section (Second Image) ── */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our Technical <span className="text-[#008eff]">Programs</span>
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            All programs include an official Internship Offer Letter, 3 Months of Training, and a Live Capstone Project to build your career.
          </p>
        </div>

        {/* 2x3 Grid filtered dynamically */}
        {(() => {
          const filtered = technicalPrograms.filter(
            (p) =>
              p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.description.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filtered.length === 0) {
            return (
              <div className="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                <div className="text-4xl">🔍</div>
                <p className="mt-4 text-base font-bold text-slate-800">not there</p>
                <p className="text-xs text-slate-400 mt-1">
                  We couldn't find any program matching "{searchQuery}". Try searching for another skill.
                </p>
              </div>
            );
          }

          return (
            <div className="col-span-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => {
                const Icon = p.icon;
                const isBought = purchased.some((item) => item.id === p.id);
                return (
                  <div
                    key={p.title}
                    className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
                  >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {isBought && (
                      <div className="absolute inset-0 bg-slate-950/70 flex flex-col items-center justify-center text-white p-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center mb-2 animate-scale">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-bold text-sm">Bought Successfully</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-bold text-[#008eff] tracking-widest uppercase">
                      {p.category}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 flex items-center justify-between">
                      {p.title}
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#00ccff] transition-colors" />
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[60px]">
                      {p.description}
                    </p>

                    {/* Price Tag Details */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-extrabold text-slate-900">{p.price}</span>
                        <span className="text-xs text-slate-400 line-through">{p.originalPrice}</span>
                      </div>
                      
                      {/* Course Bullet checklist */}
                      <ul className="mt-4 space-y-2">
                        {p.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008eff]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onProgramClick?.(p)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#008eff] py-3 text-xs font-bold text-[#008eff] hover:bg-[#008eff]/5 transition-all active:scale-95"
                  >
                    EXPLORE PROGRAM <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        );
      })()}
      </section>

      {/* ── Purchased / Bought Programs Section (Visible at bottom when items bought) ── */}
      {purchased.length > 0 && (
        <section className="bg-emerald-50 border-y border-emerald-100 py-12 px-6 lg:px-14">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full" />
              Your Active Enrolled Programs
            </h2>
            <p className="text-xs text-slate-500 mt-1">Below are the training programs you have bought successfully.</p>
            
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn">
              {purchased.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-emerald-100 shadow-sm overflow-hidden flex items-center gap-4 p-4">
                  <img src={item.img} alt={item.title} loading="lazy" className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold text-emerald-600 tracking-wider">BOUGHT</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Career Accelerator Programs (Moved from Main Page to KELVORNEX.edu) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Career Accelerator <span className="text-[#008eff]">Programs</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Outcome-driven intensive cohorts designed to bridge the gap between classroom theory and real-world employment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="relative rounded-2xl overflow-hidden min-h-[300px] group cursor-pointer shadow-md">
            <img
              src="https://images.pexels.com/photos/5496463/pexels-photo-5496463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640"
              alt="Career Accelerator Bootcamp"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/85" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Career Accelerator Bootcamp</h3>
              <p className="mt-2 text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm">
                Go from zero to job-ready with intensive live training, capstone projects, mock interviews, and placement assistance.
              </p>
            </div>
          </article>

          <article className="relative rounded-2xl overflow-hidden min-h-[300px] group cursor-pointer shadow-md">
            <img
              src="https://images.pexels.com/photos/5496459/pexels-photo-5496459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640"
              alt="Freelance Launchpad"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/85" />
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Freelance Launchpad</h3>
              <p className="mt-2 text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm">
                Learn how to package your skills, win clients, and build a profitable freelance business with expert guidance.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ── À Propos de Nous Section (NovaClair) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
              About Us
            </h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
              Digital experts at your service
            </p>
            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Kelvornex Education, your partner for innovative and effective digital solutions. We create web experiences that turn your ideas into reality while training tomorrow's technical talent.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Apprentissage par Projet",
                "Reconnu par l'Industrie",
                "Mentors Certifiés",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/7993944/pexels-photo-7993944.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900"
                alt="Mentorship session discussion"
                loading="lazy"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Contact Us Segment (NovaClair) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-[#0a2540] leading-tight">
              Contact Us
            </h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
              Let's talk about your project
            </p>
            <p className="mt-5 text-slate-500 text-sm leading-relaxed">
              Ready to get started? Contact us today! Our admissions advisors and technical mentors will be happy to guide you.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Message"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50"
              />
              <button
                type="submit"
                className="rounded-lg text-white font-bold text-sm px-8 py-3.5 shadow-md active:scale-95 hover:brightness-110"
                style={{ backgroundColor: ACCENT }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ── Education Footer ── */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
            
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-white">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white p-1">
                  <Logo className="w-8 h-8" />
                </span>
                <span className="text-lg font-extrabold">
                  KELVORNEX{" "}
                  <span style={{ color: ACCENT }} className="text-xs tracking-wider">
                    Education
                  </span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed max-w-xs">
                Accélérer le futur technique grâce à des programmes d'apprentissage immersifs, du mentorat en direct et une insertion professionnelle guidée.
              </p>
            </div>

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
            <p>© {new Date().getFullYear()} Kelvornex Education. All rights reserved.</p>
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
