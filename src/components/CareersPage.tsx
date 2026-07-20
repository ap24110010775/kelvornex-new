import { useState } from "react";
import { Code2, Cpu, FlaskConical, Users } from "lucide-react";

interface Job {
  id: string;
  title: string;
  badge: string;
  department: string;
  location: string;
  type: string;
  description: string;
  eligibility: string;
  whatYoullDo: string[];
  duration: string;
  batch: string;
  icon: React.ReactNode;
}

const jobs: Job[] = [
  {
    id: "software-intern-2026",
    title: "Software Intern – 2026",
    badge: "Internship",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Internship",
    description:
      "Work on real-world software projects, build scalable solutions and enhance your coding skills.",
    eligibility: "Eligibility: 2027 – 2028 Graduates",
    whatYoullDo: [
      "Develop and maintain web applications",
      "Collaborate with cross-functional teams",
      "Write clean, efficient and maintainable code",
      "Debug, test and improve application performance",
      "Learn and implement new technologies",
    ],
    duration: "3 – 6 Months",
    batch: "2026",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    id: "hardware-intern-2026",
    title: "Hardware Intern – 2026",
    badge: "Internship",
    department: "Hardware Engineering",
    location: "On-site / Hybrid",
    type: "Internship",
    description:
      "Design, develop and test hardware systems and bring innovative ideas to life.",
    eligibility: "Eligibility: 2027 – 2028 Graduates",
    whatYoullDo: [
      "Design and develop electronic circuits and systems",
      "Test and validate hardware prototypes",
      "Work with cross-functional engineering teams",
      "Optimize designs for performance and reliability",
      "Maintain documentation and test reports",
    ],
    duration: "3 – 6 Months",
    batch: "2026",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    id: "research-intern-2026",
    title: "Research Intern – 2026",
    badge: "Internship",
    department: "R&D",
    location: "Remote / Hybrid",
    type: "Internship",
    description:
      "Contribute to cutting-edge research and help us build the technologies of tomorrow.",
    eligibility: "Eligibility: 2027 – 2028 Graduates",
    whatYoullDo: [
      "Conduct research and literature surveys",
      "Design experiments and collect data",
      "Analyze results and build prototypes",
      "Work with cross-functional research and development teams",
      "Document findings and present insights",
    ],
    duration: "3 – 6 Months",
    batch: "2026",
    icon: <FlaskConical className="w-8 h-8" />,
  },
];

const departments = ["All Departments", "Engineering", "Hardware Engineering", "R&D"];

interface CareersPageProps {
  isDarkMode: boolean;
  onApplyNow: (job: Job) => void;
}

export default function CareersPage({ isDarkMode, onApplyNow }: CareersPageProps) {
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [deptOpen, setDeptOpen] = useState(false);

  const filtered =
    selectedDept === "All Departments"
      ? jobs
      : jobs.filter((j) => j.department === selectedDept);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8faff] text-slate-900"}`}>
      {/* Hero banner */}
      <div
        style={{
          background: isDarkMode
            ? "linear-gradient(135deg, #0a0e1a 60%, #0900ff22 100%)"
            : "linear-gradient(135deg, #111827 60%, #0900ff33 100%)",
          position: "relative",
          overflow: "hidden",
        }}
        className="px-6 py-20 text-white"
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0900ff, #00ccff)",
            opacity: 0.7,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Careers at Kelvornex
          </h1>
          <p className="text-lg text-white/75">
            Join our team of innovators and problem solvers.
            <br />
            Build the future with us.
          </p>
        </div>
      </div>

      {/* Listings */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold">Open Opportunities</h2>
            <p className={`text-sm mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Explore exciting internship opportunities and start your career with Kelvornex.
            </p>
          </div>

          {/* Dept filter */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDeptOpen((p) => !p)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                isDarkMode
                  ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {selectedDept}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {deptOpen && (
              <div
                className={`absolute right-0 mt-1 w-52 rounded-lg shadow-xl border z-10 ${
                  isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
                }`}
              >
                {departments.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => { setSelectedDept(d); setDeptOpen(false); }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      selectedDept === d
                        ? "text-[#0900ff] font-semibold"
                        : isDarkMode
                        ? "text-slate-300 hover:bg-slate-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Job cards */}
        <div className="space-y-5">
          {filtered.map((job) => (
            <div
              key={job.id}
              className={`rounded-2xl border transition-shadow hover:shadow-lg ${
                isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <div className="p-6 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-start">
                {/* Left: icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: isDarkMode ? "#0900ff22" : "#e2f1ff", color: "#0900ff" }}
                >
                  {job.icon}
                </div>

                {/* Middle: details */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "#e2f1ff", color: "#0900ff" }}
                    >
                      {job.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs mb-3 flex-wrap" style={{ color: isDarkMode ? "#94a3b8" : "#64748b" }}>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {job.type}
                    </span>
                  </div>
                  <p className={`text-sm mb-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{job.description}</p>
                  <p className="text-xs font-semibold" style={{ color: "#0900ff" }}>{job.eligibility}</p>

                  {/* What you'll do */}
                  <div className="mt-4 hidden lg:block">
                    <p className={`text-xs font-bold mb-2 uppercase tracking-wide ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>What you'll do:</p>
                    <ul className={`text-xs space-y-1 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {job.whatYoullDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 w-1 h-1 rounded-full bg-current shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: duration + apply */}
                <div className="flex flex-col items-end gap-4 shrink-0 min-w-[130px]">
                  <div className="text-right">
                    <p className={`text-xs font-semibold ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Duration</p>
                    <p className="text-sm font-bold">{job.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-semibold ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Batch</p>
                    <p className="text-sm font-bold">{job.batch}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onApplyNow(job)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-100"
                    style={{ background: "linear-gradient(135deg,#0900ff,#008eff)" }}
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Don't see a role */}
        <div
          className={`mt-6 rounded-2xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: isDarkMode ? "#0900ff22" : "#e2f1ff", color: "#0900ff" }}
            >
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold">Don't see a role that fits you?</p>
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                We are always looking for passionate individuals.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all hover:shadow-md"
            style={{ border: "1.5px solid #0900ff", color: "#0900ff" }}
          >
            Share Your Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export type { Job };
