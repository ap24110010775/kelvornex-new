import { useEffect, useMemo, useState } from "react";
import { Bell, Mail, Check } from "lucide-react";

const getTimeRemaining = (target: Date) => {
  const diff = Math.max(target.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
};

const pad2 = (value: number) => String(value).padStart(2, "0");

export default function InlineGadgets() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 57);
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 2000);
  };

  const topBlocks = [
    { label: "DAYS", value: pad2(timeLeft.days) },
    { label: "HOUR", value: pad2(timeLeft.hours) },
    { label: "MIN", value: pad2(timeLeft.minutes) },
    { label: "SEC", value: pad2(timeLeft.seconds) },
  ];

  return (
    <section id="gadgets-section" className="relative overflow-hidden bg-slate-100 py-24">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-slate-900/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-slate-900/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full py-6">
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-cyan-300" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-sm uppercase tracking-[0.35em] text-cyan-300 font-bold mb-2">
            Kelvornex Tech Hardware
          </div>
          <h2 className="text-4xl font-black text-cyan-400">Innovate With Smart Devices</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Experience cutting-edge gadgets and precision instruments engineered for excellence with expert-grade quality and smart features.
          </p>
        </div>

        <div className="overflow-hidden rounded-[3rem] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
          <div className="relative bg-white px-8 pt-10 pb-6 sm:px-12 sm:pt-12 sm:pb-8 lg:px-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="inline-flex items-center gap-4">
                <div className="h-px w-12 bg-slate-200/40 rounded" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Products &amp; Hardware
                </span>
                <div className="h-px w-12 bg-slate-200/40 rounded" />
              </div>
              <div className="text-right text-xs uppercase tracking-[0.2em] text-slate-500 space-y-1">
                <div>+00 123 456 789</div>
                <div>hello@domain.com</div>
              </div>
            </div>
          </div>

          <div className="relative px-8 pb-16 sm:px-12 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="absolute inset-x-0 -top-7 text-center text-[7rem] font-black uppercase tracking-[-0.15em] text-slate-200/50 leading-[0.9] pointer-events-none select-none md:text-[8rem] lg:text-[9.5rem] xl:text-[10.5rem] whitespace-nowrap">
              COMING SOON
            </div>

            <div className="relative">
              <div className="mx-auto max-w-4xl text-center">

                <div className="mt-21 grid items-end justify-center gap-4 sm:grid-cols-[auto_auto_auto_auto] sm:mt-23">
                  {topBlocks.map((block) => (
                    <div key={block.label} className="flex flex-col items-center gap-3">
                      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-5 shadow-[0_25px_80px_rgba(15,23,45,0.12)]">
                        <span className="text-4xl font-black tabular-nums text-white">{block.value}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
                        {block.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-18 space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">We''re coming soon...</p>
                  <p className="max-w-2xl mx-auto text-sm leading-relaxed text-slate-500">
                    The next hardware collection is being built with polished design and smart AI features. Follow along and reserve early access for the launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-8 text-white shadow-[0_40px_90px_rgba(15,23,45,0.12)] sm:px-12 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Stay updated</p>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-white">Get early launch access and updates</h3>
            </div>
            <div>
              {isSubmitted ? (
                <div className="flex items-center justify-center gap-3 rounded-3xl border border-emerald-300/20 bg-emerald-500/10 px-6 py-4 text-sm font-bold text-emerald-300">
                  <Check className="w-4 h-4" />
                  Thank you! We''ll notify you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-full border border-slate-700 bg-slate-900/90 py-3.5 pl-12 pr-4 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-300"
                  >
                    <Bell className="w-4 h-4 inline-block mr-2" />
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
