import {
  Video,
  Award,
  Users,
  FolderKanban,
  HelpCircle,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";
import { MarqueeLogoScroller } from "../MarqueeLogoScroller";

// Repeated companies list for infinite continuous auto-scrolling marquee
const marqueeCompanies = [
  ...[
    { name: "Work Yaar", src: "/images/work-yaar.jpg" },
    { name: "Zora", src: "/images/zora.jpg" },
    { name: "EEDAS Analytics Pvt Ltd", src: "/images/eedas-analytics.jpg" },
    { name: "ProV Logic", src: "/images/prov-logic.jpg" },
    { name: "SEMI DESIGN", src: "/images/semi-design.jpg" },
    { name: "Microsoft", src: "/images/microsoft.jpg" },
    { name: "Amazon", src: "/images/amazon.jpg" },
    { name: "Flipkart", src: "/images/flipkart.jpg" },
    { name: "Google", src: "/images/google.jpg" },
    { name: "Rippling", src: "/images/rippling.jpg" },
  ],
  ...[
    { name: "Work Yaar", src: "/images/work-yaar.jpg" },
    { name: "Zora", src: "/images/zora.jpg" },
    { name: "EEDAS Analytics Pvt Ltd", src: "/images/eedas-analytics.jpg" },
    { name: "ProV Logic", src: "/images/prov-logic.jpg" },
    { name: "SEMI DESIGN", src: "/images/semi-design.jpg" },
    { name: "Microsoft", src: "/images/microsoft.jpg" },
    { name: "Amazon", src: "/images/amazon.jpg" },
    { name: "Flipkart", src: "/images/flipkart.jpg" },
    { name: "Google", src: "/images/google.jpg" },
    { name: "Rippling", src: "/images/rippling.jpg" },
  ],
  ...[
    { name: "Work Yaar", src: "/images/work-yaar.jpg" },
    { name: "Zora", src: "/images/zora.jpg" },
    { name: "EEDAS Analytics Pvt Ltd", src: "/images/eedas-analytics.jpg" },
    { name: "ProV Logic", src: "/images/prov-logic.jpg" },
    { name: "SEMI DESIGN", src: "/images/semi-design.jpg" },
    { name: "Microsoft", src: "/images/microsoft.jpg" },
    { name: "Amazon", src: "/images/amazon.jpg" },
    { name: "Flipkart", src: "/images/flipkart.jpg" },
    { name: "Google", src: "/images/google.jpg" },
    { name: "Rippling", src: "/images/rippling.jpg" },
  ],
];

const advantageCards = [
  {
    icon: Video,
    title: "LIVE Interactive Sessions",
    body: "Real-time sessions with practitioners — ask, debug, and get live feedback.",
    gradient: "from-cyan-500/10 to-blue-500/5",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-500",
    border: "border-cyan-500/20",
    glow: "rgba(6,182,212,0.12)",
    tag: "LIVE",
    tagColor: "bg-cyan-500/15 text-cyan-600",
  },
  {
    icon: Award,
    title: "Industry Ratified Certifications",
    body: "Credentials validated by leading industry bodies and government organisations.",
    gradient: "from-indigo-500/10 to-violet-500/5",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-500",
    border: "border-indigo-500/20",
    glow: "rgba(99,102,241,0.12)",
    tag: "CERTIFIED",
    tagColor: "bg-indigo-500/15 text-indigo-600",
  },
  {
    icon: Users,
    title: "Expert Industry Mentors",
    body: "Learn from engineers and leaders with 10+ years of real-world experience.",
    gradient: "from-amber-500/10 to-orange-500/5",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    border: "border-amber-500/20",
    glow: "rgba(245,158,11,0.12)",
    tag: "10+ YRS EXP",
    tagColor: "bg-amber-500/15 text-amber-600",
  },
  {
    icon: FolderKanban,
    title: "Portfolio-worthy Projects",
    body: "Build production-grade projects that impress senior engineers on day one.",
    gradient: "from-emerald-500/10 to-teal-500/5",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.12)",
    tag: "HANDS-ON",
    tagColor: "bg-emerald-500/15 text-emerald-700",
  },
  {
    icon: HelpCircle,
    title: "Dedicated Query Sessions",
    body: "One-on-one doubt resolution sessions with your mentor, at your convenience.",
    gradient: "from-rose-500/10 to-pink-500/5",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-500",
    border: "border-rose-500/20",
    glow: "rgba(244,63,94,0.12)",
    tag: "1-ON-1",
    tagColor: "bg-rose-500/15 text-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Active Peer Community",
    body: "Join 50,000+ ambitious learners in a thriving, collaborative learning network.",
    gradient: "from-violet-500/10 to-purple-500/5",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-600",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.12)",
    tag: "50K+ MEMBERS",
    tagColor: "bg-violet-500/15 text-violet-700",
  },
];

const successStories = [
  {
    quote: '"The web development program at Kelvornex was life-changing. The mentors are industry experts who guide you at every step. I landed my dream job within 3 months of completion."',
    name: "Rahul Sharma",
    role: "Full Stack Developer @ Google",
    avatar: "https://images.pexels.com/photos/7584674/pexels-photo-7584674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  },
  {
    quote: '"The curriculum is extremely well-structured. Practical projects gave me the confidence to solve real-world problems. Highly recommended for anyone looking to transition into Data Science."',
    name: "Ananya Iyer",
    role: "Data Scientist @ Amazon",
    avatar: "https://images.pexels.com/photos/6893883/pexels-photo-6893883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  },
  {
    quote: '"Kelvornex\'s Machine Learning program is one of the best out there. The focus on fundamentals combined with advanced topics like NLP and CV is unmatched."',
    name: "Vikram Singh",
    role: "ML Engineer @ Microsoft",
    avatar: "https://images.pexels.com/photos/8278871/pexels-photo-8278871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  },
];

interface BookingStepsProps {
  showOnlyHireTalents?: boolean;
}

export default function BookingSteps({ showOnlyHireTalents = false }: BookingStepsProps) {
  // Use the first 10 unique partners for the curved marquee
  const partners = marqueeCompanies.slice(0, 10).map((c) => c);
  // helper to create a tiny SVG data-url placeholder when src is not available
  const makeDataUrl = (text: string, color = '#444') => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='100'><rect width='100%' height='100%' fill='${color}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='white'>${text}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  const logos = partners.map((p) => ({
    src: p.src || makeDataUrl(p.name, (p as any).color || '#444'),
    alt: p.name,
  }));
  if (showOnlyHireTalents) {
    return (
      <div className="w-full pt-8 pb-4">
        {/* Continuous Auto-scrolling Infinite Marquee Block */}
        <div className="text-center py-6 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540]">
              OUR PARTNERS & <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">INDUSTRY COLLABORATION</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Trusted collaborations with leading companies and design partners
            </p>
          </div>
          
          {/* Marquee Logo Scroller (seamless CSS marquee) */}
          <div className="relative mt-8 w-full overflow-hidden bg-slate-50/80 border-y border-slate-100 py-12">
            <MarqueeLogoScroller
              title=""
              description=""
              logos={logos}
              speed="normal"
              className="px-6"
            />

            <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Microsoft Certification Block (Validate your skills with global standards) placed directly below Hire Talent */}
        <div className="w-full bg-[#f8fafc] border-y border-slate-100 py-12 md:py-16 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_2.5fr] gap-8 md:gap-12 items-center text-left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-12">
              {/* Microsoft colorful logo block using official colors: Red, Green, Blue, Yellow */}
              <div className="grid grid-cols-2 gap-1.5 w-11 h-11 mb-4">
                <span className="bg-[#F25022] rounded-sm" />
                <span className="bg-[#7FBA00] rounded-sm" />
                <span className="bg-[#01A4EF] rounded-sm" />
                <span className="bg-[#FFB900] rounded-sm" />
              </div>
              <h3 className="text-lg font-bold text-[#0a2540]">Microsoft</h3>
              <p className="text-xs font-extrabold text-[#0900ff] mt-1">Certified Partner</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Authorized Technical Training</p>
            </div>
            
            <div>
              <h4 className="text-xl font-extrabold text-[#0a2540]">
                Validate your skills with global standards
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our specialized technical programs and curriculum align with Microsoft standards. Students receive industry-ratified validation recognized by technology companies globally.
              </p>
              
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Microsoft Curriculum Standards Alignment",
                  "Official Industry-Vetted Project Work",
                  "Globally Recognized Career Credentials",
                  "Direct Path to Advanced Technical Roles",
                ].map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#00ccff]" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  return (
    <section id="enroll" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      
      <div className="mt-8 md:mt-12">
        {/* Advantage Header — Why Choose Kelvornex positioned ABOVE Success Stories */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-16 mb-12">
          <div>
            <span className="inline-flex items-center rounded-md bg-[#e2f1ff] px-2.5 py-1 text-xs font-bold text-[#008eff] tracking-wide">
              🔹 OUR ADVANTAGE
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0a2540] leading-tight">
              Why Choose <span className="text-[#0900ff]">Kelvornex?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl">
              We bridge the gap between classroom theory and industry reality through live mentorship, real projects, and community.
            </p>
          </div>
          <button className="self-start md:self-auto rounded-full bg-slate-900 text-white hover:bg-black text-xs font-bold px-6 py-3.5 flex items-center gap-2 transition-all active:scale-95 shadow-lg">
            APPLY AS MENTOR <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Advantage grid + Rating scorecard */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 6 Grid items */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {advantageCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`relative rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}
                  style={{ boxShadow: `0 2px 24px 0 ${card.glow}` }}
                >
                  {/* Subtle bg glow blob */}
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-30 pointer-events-none"
                    style={{ background: card.glow, filter: "blur(20px)" }}
                  />

                  {/* Top row: icon + tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug">{card.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{card.body}</p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl ${card.iconColor.replace("text-", "bg-")}`} />
                </div>
              );
            })}
          </div>

          {/* Rating overview card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md flex flex-col justify-between text-center lg:text-left h-full">
            <div>
              <p className="text-5xl sm:text-6xl font-black text-[#0a2540]">4.8</p>
              
              {/* Star row */}
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00ccff] stroke-none" />
                ))}
              </div>
              
              <p className="mt-3 text-sm font-bold text-slate-900">Google Rating</p>
              <p className="text-xs text-slate-400">From 10,000+ Students</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-y-6 gap-x-4 text-left">
              {[
                { val: "50K+", lbl: "MENTEES" },
                { val: "500+", lbl: "PARTNERS" },
                { val: "120+", lbl: "MENTORS" },
                { val: "98%", lbl: "SATISFACTION" },
              ].map((stat) => (
                <div key={stat.lbl}>
                  <p className="text-lg sm:text-xl font-extrabold text-[#0900ff]">{stat.val}</p>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider mt-0.5">{stat.lbl}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>



      {/* ── PART 3: Success Stories (now positioned BELOW Why Choose segment) ── */}
      <div className="mt-16 md:mt-24 pt-10 border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540]">
            Success <span className="text-[#0900ff]">Stories</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Hear from our alumni who have successfully transitioned into high-growth tech roles after learning with Kelvornex.
          </p>
        </div>

        {/* 3 Testimonial Column Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col justify-between">
              
              {/* Quote bubbles decoration matching screenshot layout */}
              <span className="absolute top-5 right-6 w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-extrabold text-sm select-none">
                “
              </span>

              <div>
                {/* 5 stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#00ccff] stroke-none" />
                  ))}
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  {story.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{story.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{story.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── PART 4: Ready to learn CTA banner (labeled with id="enroll-newsletter" as target) ── */}
      <div id="enroll-newsletter" className="mt-20 rounded-3xl bg-gradient-to-r from-plum-900 to-plum-700 px-5 py-10 sm:px-8 sm:py-12 md:px-14 text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#00ccff]/25 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#ffe8f7]/10 blur-2xl" />
        <h3 className="relative text-2xl md:text-3xl font-bold text-white">
          Ready to learn, execute, and succeed?
        </h3>
        <p className="relative mt-3 text-mint-100/80 text-sm max-w-lg mx-auto">
          Join 15,000+ successful learners. Get exclusive course discounts and
          career guides straight to your inbox.
        </p>
        <form
          className="relative mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 rounded-full bg-white/95 px-5 py-3 text-sm text-plum-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-[#00ccff]"
          />
          <button
            type="submit"
            className="rounded-full bg-[#00ccff] hover:bg-[#00ccff]/90 text-plum-900 text-sm font-bold px-7 py-3 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

    </section>
  );
}
