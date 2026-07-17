import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Blog", href: "#enroll" }, // Maps to the student stories & newsletter blog section
  { name: "About Us", href: "#about-us" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-mint-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="#" id="navbar-logo-link" className="flex items-center gap-2 shrink-0 text-black animate-logo-reveal">
            <Logo className="w-9 h-9" />
            <span className="flex items-baseline gap-0.5">
              <span className="text-2xl font-extrabold tracking-tight text-black">
                KELVORNEX
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-plum-900/70 hover:text-lagoon-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-sm justify-end">
            <a
              href="#enroll-newsletter"
              className="rounded-full bg-plum-900 hover:bg-plum-800 text-white text-xs font-semibold px-5 py-2.5 transition-colors shrink-0"
            >
              Enroll now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-plum-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-mint-100 px-4 py-5 space-y-1 shadow-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-plum-900/80 hover:text-lagoon-600 py-2.5 border-b border-mint-100 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#enroll-newsletter"
            className="mt-3 block text-center rounded-full bg-plum-900 text-white text-sm font-semibold px-5 py-3.5"
            onClick={() => setOpen(false)}
          >
            Enroll now
          </a>
        </div>
      )}
    </header>
  );
}
