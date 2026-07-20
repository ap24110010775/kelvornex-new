import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactPageProps {
  isDarkMode: boolean;
}

export default function ContactPage({ isDarkMode }: ContactPageProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-[#0900ff] transition-all ${
    isDarkMode
      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500"
      : "bg-[#f6f8fb] border-slate-200 text-slate-900 placeholder-slate-400"
  }`;

  const labelClass = `block text-[11px] font-bold uppercase tracking-widest mb-1.5 ${
    isDarkMode ? "text-slate-400" : "text-slate-500"
  }`;

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
        className="px-6 py-24 text-white text-center"
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-70px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0900ff, #00ccff)",
            opacity: 0.7,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Kelvornex</h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Have questions about our programs? Get in touch with our admissions
            <br className="hidden md:block" />
            and support teams.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10">
        {/* Left: Get in Touch info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className={`text-sm mb-8 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Whether you are an aspiring learner or looking for
            <br />
            enterprise training solutions, we are here to assist you.
          </p>

          <div className="space-y-6">
            {/* Email Support */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: isDarkMode ? "#0900ff22" : "#e2f1ff" }}
              >
                <Mail className="w-5 h-5" style={{ color: "#0900ff" }} />
              </div>
              <div>
                <p className="font-bold text-sm">Email Support</p>
                <p className={`text-sm mt-0.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  support@kelvornex.com
                  <br />
                  admissions@kelvornex.com
                </p>
              </div>
            </div>

            {/* Phone Support */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: isDarkMode ? "#0900ff22" : "#e2f1ff" }}
              >
                <Phone className="w-5 h-5" style={{ color: "#0900ff" }} />
              </div>
              <div>
                <p className="font-bold text-sm">Phone Support</p>
                <p className={`text-sm mt-0.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  +91 (80) 4123–5678
                  <br />
                  Mon – Sat, 10 AM to 7 PM IST
                </p>
              </div>
            </div>

            {/* Corporate HQ */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: isDarkMode ? "#0900ff22" : "#e2f1ff" }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#0900ff" }} />
              </div>
              <div>
                <p className="font-bold text-sm">Corporate HQ</p>
                <p className={`text-sm mt-0.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  HustleHub, 19th Main Rd, Sector 4
                  <br />
                  HSR Layout, Bengaluru, KA – 560102
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Send a message form */}
        <div
          className={`rounded-2xl border p-7 h-fit ${
            isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          }`}
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
        >
          {submitted ? (
            <div className="text-center py-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#e2f1ff" }}
              >
                <CheckCircle className="w-8 h-8" style={{ color: "#0900ff" }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                Thanks for reaching out! Our team will get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#0900ff,#008eff)" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-lg font-bold">Send us a Message</h2>

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={labelClass}>Subject</label>
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Query regarding Web Development cohort"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Your Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg,#0900ff,#008eff)" }}
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
