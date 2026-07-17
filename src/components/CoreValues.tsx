import { Handshake, Landmark, ShieldCheck, Cpu } from "lucide-react";

const values = [
  {
    icon: Landmark,
    title: "Long-term dedication",
    body: "Over 8 years of proven ed-tech experience helps us understand the real-world challenges that learners face. We build a sustainable path to successful tech careers.",
  },
  {
    icon: Handshake,
    title: "Student-first philosophy",
    body: "Our students' trust and career success are our greatest achievements. We design every course, assignment, and mentorship session to prioritize student placement.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & quality programs",
    body: "We align our specialized technical programs with global standards. Students receive industry-ratified validation recognized by top tech companies worldwide.",
  },
  {
    icon: Cpu,
    title: "Practical-first approach",
    body: "We focus on project-based learning. Our courses are crafted to make learning skills practical, ensuring you build a portfolio that stands out to top employers.",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#fcfcfc] overflow-hidden">
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
        <div className="bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] rounded-xl sm:rounded-2xl border border-slate-100 p-8 sm:p-12 md:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
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
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
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
