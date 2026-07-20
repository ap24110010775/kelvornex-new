import { useState, useRef } from "react";
import { ArrowLeft, Clock, CalendarDays, DollarSign, MapPin, Upload, Send } from "lucide-react";
import type { Job } from "./CareersPage";

interface ApplyPageProps {
  job: Job;
  isDarkMode: boolean;
  onBack: () => void;
}

export default function ApplyPage({ job, isDarkMode, onBack }: ApplyPageProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const resumeRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gradYear: "",
    degree: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#0900ff] transition-all ${
    isDarkMode
      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500"
      : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
  }`;

  const labelClass = `block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`;

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
        className="px-6 py-16 text-white"
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0900ff, #00ccff)",
            opacity: 0.7,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back link */}
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </button>

          <div className="flex items-center gap-3 flex-wrap mb-3">
            <h1 className="text-3xl md:text-4xl font-extrabold">{job.title}</h1>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border border-[#008eff] text-[#00ccff]"
            >
              {job.badge}
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/70 text-sm flex-wrap">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {job.department}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" />
              {job.type}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
        {/* Left: role info */}
        <div className="space-y-8">
          {/* About */}
          <div className={`rounded-2xl border p-6 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            <h2 className="text-lg font-bold mb-3">About the Role</h2>
            <p className={`text-sm leading-7 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              {job.description} You will collaborate with experienced engineers, learn industry best practices and contribute to impactful products.
            </p>

            <h2 className="text-lg font-bold mt-6 mb-3">Key Responsibilities</h2>
            <ul className={`text-sm space-y-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              {job.whatYoullDo.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-bold mt-6 mb-3">Eligibility</h2>
            <ul className={`text-sm space-y-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              {["2027 – 2028 batch graduates", "Strong problem solving and coding skills", "Proficiency in at least one programming language", "Good communication and teamwork skills"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Meta row */}
          <div className={`rounded-2xl border p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            {[
              { icon: <Clock className="w-4 h-4" />, label: "Duration", value: job.duration },
              { icon: <CalendarDays className="w-4 h-4" />, label: "Batch", value: job.batch },
              { icon: <DollarSign className="w-4 h-4" />, label: "Stipend", value: "As per company norms" },
              { icon: <MapPin className="w-4 h-4" />, label: "Location", value: job.location },
            ].map((m) => (
              <div key={m.label} className="flex items-start gap-2">
                <div className="mt-0.5" style={{ color: "#0900ff" }}>{m.icon}</div>
                <div>
                  <p className={`text-xs ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{m.label}</p>
                  <p className="text-xs font-bold">{m.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: application form */}
        <div className={`rounded-2xl border p-6 h-fit ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#e2f1ff" }}>
                <Send className="w-7 h-7" style={{ color: "#0900ff" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                Thank you for applying. We'll review your application and get back to you soon.
              </p>
              <button
                type="button"
                onClick={onBack}
                className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#0900ff,#008eff)" }}
              >
                Back to Careers
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-lg font-bold">Apply for this Role</h2>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Fill in your details and apply for this internship.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input required name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Graduation Year *</label>
                  <select required name="gradYear" value={form.gradYear} onChange={handleChange} className={inputClass}>
                    <option value="">Select Year</option>
                    {[2025, 2026, 2027, 2028, 2029].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Current Degree / Branch *</label>
                  <input required name="degree" value={form.degree} onChange={handleChange} placeholder="B.Tech in Computer Science" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Preferred Location *</label>
                  <select required name="location" value={form.location} onChange={handleChange} className={inputClass}>
                    <option value="">Remote / Hybrid</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>On-site</option>
                  </select>
                </div>
              </div>

              {/* Resume upload */}
              <div>
                <label className={labelClass}>Resume (PDF) *</label>
                <input
                  ref={resumeRef}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => resumeRef.current?.click()}
                  className={`w-full flex flex-col items-center justify-center gap-2 py-5 rounded-lg border-2 border-dashed text-sm font-medium transition-all hover:border-[#0900ff] ${
                    isDarkMode ? "border-slate-700 text-slate-400 hover:text-slate-200" : "border-slate-200 text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Upload className="w-5 h-5" style={{ color: "#0900ff" }} />
                  <span style={{ color: "#0900ff" }} className="font-semibold">
                    {resumeFile ? resumeFile.name : "Upload Resume"}
                  </span>
                  <span className={`text-xs ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Max file size: 5MB</span>
                </button>
              </div>

              {/* Cover letter upload */}
              <div>
                <label className={labelClass}>Cover Letter (Optional)</label>
                <input
                  ref={coverRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => setCoverFile(e.target.files?.[0] ?? null)}
                />
                <button
                  type="button"
                  onClick={() => coverRef.current?.click()}
                  className={`w-full flex flex-col items-center justify-center gap-2 py-5 rounded-lg border-2 border-dashed text-sm font-medium transition-all hover:border-[#0900ff] ${
                    isDarkMode ? "border-slate-700 text-slate-400 hover:text-slate-200" : "border-slate-200 text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Upload className="w-5 h-5" style={{ color: "#0900ff" }} />
                  <span style={{ color: "#0900ff" }} className="font-semibold">
                    {coverFile ? coverFile.name : "Upload Cover Letter"}
                  </span>
                  <span className={`text-xs ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Max file size: 5MB</span>
                </button>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5"
                />
                <span className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  I agree to the{" "}
                  <span className="underline cursor-pointer" style={{ color: "#0900ff" }}>terms</span>
                  {" "}and{" "}
                  <span className="underline cursor-pointer" style={{ color: "#0900ff" }}>privacy policy</span>.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={!agreed}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg,#0900ff,#008eff)" }}
              >
                Submit Application
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
