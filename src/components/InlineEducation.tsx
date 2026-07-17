import { Search, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { technicalPrograms } from "../data";
import InitiativesAccordion from "./InitiativesAccordion";

interface InlineEducationProps {
  onProgramClick?: (program: any) => void;
}

export default function InlineEducation({ onProgramClick }: InlineEducationProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "INTERNSHIP PROGRAM"];

  const filtered = technicalPrograms.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    if (activeTab === "All") return matchesSearch;
    return matchesSearch && p.category === activeTab;
  });

  return (
    <section id="education-section" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00ccff]">
            KELVORNEX EDUTECH
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
            Accelerate Your <span className="text-[#00ccff]">Learning Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Gain job-ready skills with hands-on practice, industrial tool mastery, and expert mentorship built into every program.
          </p>
        </div>
        
      </div>

      {/* Initiatives Accordion — full viewport width */}
      <div className="w-full mb-0">
        <InitiativesAccordion />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveTab(c)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === c
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search programs or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ccff] focus:border-transparent bg-slate-50/50"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-slate-50 relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full text-slate-800 shadow-sm">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.skills.slice(0, 4).map((s) => (
                      <span key={s} className="text-[10px] font-semibold bg-slate-50 text-slate-600 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                    {p.skills.length > 4 && (
                      <span className="text-[10px] font-bold text-[#00ccff] px-2 py-0.5">
                        +{p.skills.length - 4} more
                      </span>
                    )}
                  </div>
                  <ul className="mt-5 space-y-2">
                    {p.bullets.slice(0, 3).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-extrabold text-slate-950">{p.price}</span>
                  <span className="text-xs text-slate-400 line-through">{p.originalPrice}</span>
                </div>
                <button
                  onClick={() => onProgramClick?.(p)}
                  className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98]"
                >
                  View Syllabus & Enroll
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
