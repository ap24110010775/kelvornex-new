import { useEffect, useRef, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Logo from "./Logo";const links = [
  {
    name: "Business",
    href: "#",
    sections: [
      {
        title: "Business Overview",
        items: [{ label: "Kelvornex Innovation Platform", href: "#home" }],
      },
      {
        title: "Our Programs",
        items: [
          { label: "Startup Incubation", href: "#education-section" },
          { label: "Technical Training", href: "#education-section" },
          { label: "Research Support", href: "#education-section" },
        ],
      },
      {
        title: "Technology Focus",
        items: [
          { label: "Artificial Intelligence", href: "#education-section" },
          { label: "Generative AI", href: "#education-section" },
          { label: "IoT & Embedded Systems", href: "#education-section" },
          { label: "VLSI & Electronics", href: "#education-section" },
          { label: "Cyber Security", href: "#education-section" },
          { label: "Quantum Computing", href: "#education-section" },
          { label: "Microsoft Fabric", href: "#education-section" },
        ],
      },
    ],
  },
  {
    name: "Community",
    href: "#",
    sections: [
      {
        title: "Overview",
        items: [{ label: "Community Initiatives", href: "#our-brands-strip" }],
      },
      {
        title: "Areas of Work",
        items: [
          { label: "Education & Learning", href: "#education-section" },
          { label: "Health & Wellness", href: "#our-brands-strip" },
          { label: "Empowerment Programs", href: "#education-section" },
          { label: "Environment & Sustainability", href: "#our-brands-strip" },
        ],
      },
      {
        title: "Engagement",
        items: [
          { label: "Hackathons & Workshops", href: "#education-section" },
          { label: "Mentorship Network", href: "#education-section" },
          { label: "Internship Opportunities", href: "#education-section" },
        ],
      },
    ],
  },
  {
    name: "Careers",
    href: "#",
    sections: [
      {
        title: "Careers at Kelvornex",
        items: [{ label: "Join Our Team", href: "#enroll-newsletter" }],
      },
      {
        title: "Opportunities",
        items: [
          { label: "Full-time Roles", href: "#enroll-newsletter" },
          { label: "Internships", href: "#education-section" },
          { label: "Graduate Programs", href: "#education-section" },
          { label: "Contract Positions", href: "#enroll-newsletter" },
        ],
      },
      {
        title: "Departments",
        items: [
          { label: "Technology & Research", href: "#software-section" },
          { label: "Education Programs", href: "#education-section" },
          { label: "Operations & Strategy", href: "#our-brands-strip" },
        ],
      },
    ],
  },
  {
    name: "About Us",
    href: "#",
    sections: [
      {
        title: "About Kelvornex",
        description:
          "Kelvornex is an innovation-driven technology and research organization focused on empowering students, startups, and professionals with industry-oriented learning and real-world exposure.",
      },
      {
        title: "Our Mission",
        items: [
          { label: "Bridge academics and industry", href: "#our-brands-strip" },
          { label: "Practical training programs", href: "#education-section" },
          { label: "Startup mentorship", href: "#education-section" },
          { label: "Research support", href: "#education-section" },
        ],
      },
      {
        title: "Contact",
        items: [
          { label: "Website: kelvornex.in", href: "#home" },
          { label: "Phone: 9347405443", href: "#enroll-newsletter" },
          { label: "Founded: 2025", href: "#our-brands-strip" },
        ],
      },
    ],
  },
];

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onHomeClick?: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme, onHomeClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroActive(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      { threshold: [0.2, 0.5], rootMargin: "-10% 0px -40% 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Manage dropdown show/hide with a small delay to prevent flicker when moving between nav items
  const handleNavEnter = (name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveDropdown(name);
    setIsDropdownVisible(true);
  };

  const handleNavLeave = () => {
    hideTimer.current = setTimeout(() => {
      setIsDropdownVisible(false);
      setTimeout(() => setActiveDropdown(null), 300); // wait for exit animation
    }, 80);
  };

  const handleDropdownEnter = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setIsDropdownVisible(true);
  };

  const handleDropdownLeave = () => {
    hideTimer.current = setTimeout(() => {
      setIsDropdownVisible(false);
      setTimeout(() => setActiveDropdown(null), 300);
    }, 80);
  };

  const isDarkTheme = isHeroActive || isDarkMode;

  const headerClasses = isDarkTheme
    ? "sticky top-0 z-50 text-white border-b border-white/5"
    : "sticky top-0 z-50 bg-white text-slate-900 border-b border-slate-200/50";

  const linkClasses = (name: string) =>
    `relative text-sm font-medium py-1 transition-colors duration-200 ${
      activeDropdown === name && isDropdownVisible
        ? isDarkTheme
          ? "text-lagoon-400"
          : "text-plum-700"
        : isDarkTheme
        ? "text-white/85 hover:text-white"
        : "text-slate-700 hover:text-slate-900"
    }`;

  const logoClasses = isDarkTheme ? "text-white" : "text-black";

  const mobileLinkClasses = isDarkTheme
    ? "block text-base font-medium text-white/80 hover:text-lagoon-400 py-2.5 border-b border-white/5 last:border-0"
    : "block text-base font-medium text-slate-700 hover:text-slate-900 py-2.5 border-b border-slate-200/50 last:border-0";

  const mobileButtonClasses = isDarkTheme
    ? "mt-3 block text-center rounded-full bg-white/10 text-white text-sm font-semibold px-5 py-3.5 border border-white/20 hover:bg-white/20 transition-colors"
    : "mt-3 block text-center rounded-full bg-slate-100 text-slate-900 text-sm font-semibold px-5 py-3.5 border border-slate-200 hover:bg-slate-200 transition-colors";

  const iconButtonClasses = isDarkTheme
    ? "flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
    : "flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:text-slate-900 transition-colors";

  const activeLink = links.find((l) => l.name === activeDropdown);

  return (
    <>
      <header className={headerClasses} style={{ position: "sticky", top: 0, zIndex: 50, background: isDarkTheme ? "#000000" : "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <a
              href="#"
              id="navbar-logo-link"
              onClick={(e) => {
                e.preventDefault();
                onHomeClick?.();
              }}
              className={`flex items-center gap-2 shrink-0 animate-logo-reveal ${logoClasses}`}
            >
              <Logo className="w-9 h-9" color={isDarkTheme ? "white" : "black"} />
              <span className="flex items-baseline gap-0.5">
                <span className={`text-2xl font-extrabold tracking-tight ${logoClasses}`}>
                  KELVORNEX
                </span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center ml-[-2rem]">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative py-5"
                  onMouseEnter={() => handleNavEnter(link.name)}
                  onMouseLeave={handleNavLeave}
                >
                  <a
                    href={link.href}
                    id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={linkClasses(link.name)}
                    onClick={(e) => e.preventDefault()}
                  >
                    {link.name}
                    {/* Animated underline indicator */}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300"
                      style={{
                        width: activeDropdown === link.name && isDropdownVisible ? "100%" : "0%",
                        background: isDarkTheme
                          ? "var(--color-lagoon-400)"
                          : "var(--color-lagoon-600)",
                      }}
                    />
                  </a>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
              <button
                type="button"
                onClick={onToggleTheme}
                className={iconButtonClasses}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("kelvornex-open-contact"))}
                className={`rounded-full text-xs font-semibold px-5 py-2.5 transition-all duration-300 ${
                  isDarkTheme
                    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 ${isDarkTheme ? "text-white" : "text-slate-900"}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className={`lg:hidden border-t px-4 py-5 space-y-1 shadow-lg ${
              isDarkTheme
                ? "bg-slate-950 border-white/5"
                : "bg-white border-slate-200/50"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={mobileLinkClasses}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div
              className="mt-4 pt-4 border-t"
              style={
                isDarkTheme
                  ? { borderColor: "rgba(255,255,255,0.05)" }
                  : { borderColor: "rgba(0,0,0,0.1)" }
              }
            >
              <button
                type="button"
                className={mobileButtonClasses}
                onClick={() => { setOpen(false); window.dispatchEvent(new CustomEvent("kelvornex-open-contact")); }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ─── FULL-WIDTH MEGA MENU PANEL ─── */}
      {/* Rendered outside the sticky header so it can span full viewport width */}
      <div
        id="mega-menu-panel"
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleDropdownLeave}
        style={{
          position: "fixed",
          top: 64, // height of navbar (h-16 = 64px)
          left: 0,
          right: 0,
          width: "100vw",
          zIndex: 49,
          pointerEvents: activeDropdown ? "auto" : "none",
          // Curtain slide-down animation
          clipPath: isDropdownVisible
            ? "inset(0 0 0 0)"
            : "inset(0 0 100% 0)",
          transition: isDropdownVisible
            ? "clip-path 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
            : "clip-path 0.3s cubic-bezier(0.55, 0, 1, 0.45)",
          // Background — matches navbar colour exactly
          background: isDarkTheme ? "#000000" : "#ffffff",
          borderBottom: isDarkTheme
            ? "1px solid rgba(0,204,255,0.12)"
            : "1px solid rgba(0,0,0,0.08)",
          boxShadow: isDarkTheme
            ? "0 20px 60px rgba(0,0,0,0.6)"
            : "0 20px 60px rgba(0,0,0,0.12)",
        }}
      >
        {activeLink && (
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            {/* Section title */}
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-8"
              style={{ color: isDarkTheme ? "var(--color-lagoon-400)" : "var(--color-lagoon-600)" }}
            >
              {activeLink.name}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
              {activeLink.sections?.map((section, idx) => (
                <div key={section.title}>
                  <h3
                    className="text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b"
                    style={{
                      color: isDarkTheme ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)",
                      borderColor: isDarkTheme ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                    }}
                  >
                    {section.title}
                  </h3>

                  {section.description ? (
                    <p
                      className="text-sm leading-7"
                      style={{
                        color: isDarkTheme ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.7)",
                      }}
                    >
                      {section.description}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {section.items?.map((item, itemIdx) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsDropdownVisible(false);
                            setTimeout(() => setActiveDropdown(null), 300);
                            const id = item.href.replace("#", "");
                            // Map section IDs to brand names so App can show the right tab
                            const brandMap: Record<string, string> = {
                              "software-section": "software",
                              "education-section": "education",
                              "gadgets-section": "gadgets",
                            };
                            const brand = brandMap[id];
                            if (brand) {
                              window.dispatchEvent(
                                new CustomEvent("kelvornex-brand-select", { detail: brand })
                              );
                              // Give React time to render the section before scrolling
                              setTimeout(() => {
                                const el = document.getElementById(id);
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                              }, 150);
                            } else {
                              const el = document.getElementById(id);
                              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                          }}
                          className="group flex items-center gap-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                          style={{
                            color: isDarkTheme ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.8)",
                            animationDelay: `${idx * 60 + itemIdx * 30}ms`,
                          }}
                        >
                          <span
                            className="h-1 w-1 rounded-full shrink-0 transition-all duration-200 group-hover:w-3"
                            style={{
                              background: isDarkTheme
                                ? "var(--color-lagoon-400)"
                                : "var(--color-lagoon-600)",
                            }}
                          />
                          <span
                            className="group-hover:translate-x-1 transition-transform duration-200"
                            style={{
                              color: isDarkTheme
                                ? "rgba(255,255,255,0.85)"
                                : "rgba(15,23,42,0.85)",
                            }}
                          >
                            {item.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>


          </div>
        )}
      {activeLink?.name === "Careers" && (
        <button
          type="button"
          aria-label="Apply"
          className="absolute bottom-4 right-4 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-100"
          style={{ background: "linear-gradient(135deg,#0900ff,#008eff)" }}
          onClick={() => {
            setIsDropdownVisible(false);
            setTimeout(() => setActiveDropdown(null), 300);
            window.dispatchEvent(new CustomEvent("kelvornex-open-careers"));
          }}
        >
          Apply
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      )}
      </div>

      {/* Backdrop overlay — subtle dimming of page content below */}
      <div
        style={{
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 48,
          background: "rgba(0,0,0,0.25)",
          opacity: isDropdownVisible ? 1 : 0,
          pointerEvents: isDropdownVisible ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={() => {
          setIsDropdownVisible(false);
          setTimeout(() => setActiveDropdown(null), 300);
        }}
      />
    </>
  );
}
