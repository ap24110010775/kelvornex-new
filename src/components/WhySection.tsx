import {
  GraduationCap,
  LayoutDashboard,
  Headphones,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

const stats = [
  { icon: Users, value: "15k", label: "Learners Trained and Placed" },
  { icon: Award, value: "8yrs", label: "Proven Ed-Tech Industry Experience" },
  { icon: BookOpen, value: "40+", label: "Industry-Ready Courses Covered" },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    body: "Learn directly from industry professionals who guide you with real-world insights you won't find in typical online courses.",
  },
  {
    icon: LayoutDashboard,
    title: "All-in-One Learning",
    body: "Courses, projects, quizzes, and certificates in one place—easy, structured, and hassle-free, whether you're upskilling or starting fresh.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    body: "We're here anytime, anywhere. Get real-time help with doubts, assignments, and career guidance before, during, or after your course.",
  },
];

export default function WhySection() {
  return (
    <section id="about-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left column */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-plum-900 leading-snug">
            Why Thousands of Learners Choose{" "}
            <span className="text-lagoon-600">Kelvornex</span> to Build Their
            Careers
          </h2>
          <p className="mt-4 text-sm md:text-base text-sage-500 leading-relaxed">
            Kelvornex is an innovation-driven technology and research organization focused on empowering students, startups, and professionals with industry-oriented learning and real-world exposure. We specialize in emerging technologies such as Artificial Intelligence, Generative AI, IoT, VLSI, Cyber Security, Quantum Computing, and Microsoft Fabric.<br/><br/>
            Our mission is to bridge the gap between academia and industry by offering practical training programs, internships, workshops, hackathons, research support, startup mentorship, and career development opportunities. Through expert-led sessions and hands‑on experiences, we help individuals turn ideas into impactful solutions and future‑ready careers.<br/><br/>
            Kelvornex is committed to building a strong ecosystem of innovation, research, and entrepreneurship for the next generation of technology leaders.
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-plum-900 hover:text-lagoon-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-plum-900 hover:text-lagoon-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M23 4.9c-.8.4-1.7.6-2.6.8a4.5 4.5 0 0 0 2-2.5c-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.7a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.5v.1a4.5 4.5 0 0 0 3.6 4.4c-.7.2-1.4.2-2 .1a4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.7a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.4z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-plum-900 hover:text-lagoon-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-3 sm:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={value} className="text-center">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-plum-900 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-mint-100" />
                </div>
                <p className="mt-3 text-lg sm:text-xl font-bold text-plum-900">{value}</p>
                <p className="mt-1 text-[11px] sm:text-xs text-sage-500 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — feature cards */}
        <div className="space-y-5">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 sm:gap-5 rounded-2xl bg-sage-500 p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-mint-100 flex items-center justify-center">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-plum-900" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base md:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 text-mint-100/90 text-[13px] sm:text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
