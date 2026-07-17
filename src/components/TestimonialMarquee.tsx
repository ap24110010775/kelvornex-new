import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Ken Masters",
    username: "@kmasters",
    body: "\u201COur productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.\u201D",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "\u201CWhat surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.\u201D",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Lirael Nassun",
    username: "@lnassun",
    body: "\u201CThis is easily one of the most reliable SaaS tools we\u2019ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.\u201D",
    profile: "https://images.shadcnspace.com/assets/profiles/linda.webp",
  },
  {
    name: "Jessica",
    username: "@jessica",
    body: "Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.",
    profile: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "\u201CWe evaluated multiple solutions, but this stood out immediately. It\u2019s fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.\u201D",
    profile: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun2",
    body: "\u201CWhat surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.\u201D",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Ken Masters",
    username: "@kmasters2",
    body: "\u201COur productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.\u201D",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

function ReviewCard({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <div className="relative h-full w-72 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full ring-2 ring-cyan-200/50"
            width="36"
            height="36"
            alt=""
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-900">{name}</p>
            <p className="text-xs font-medium text-slate-400">{username}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">{body}</p>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-14 px-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00ccff]">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2540] tracking-tight">
          Trusted by <span className="text-[#00ccff]">Innovators</span>
        </h2>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          Hear from teams and professionals who accelerated their growth with Kelvornex.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative flex w-full flex-col items-center justify-center gap-4">
        <Marquee pauseOnHover className="[--duration:25s] [--gap:1rem]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s] [--gap:1rem]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Side fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
