import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const brands = [
  {
    id: "software",
    name: "Kelvornex Software",
    tag: "Web, mobile & enterprise solutions",
    img: "https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
  {
    id: "education",
    name: "Kelvornex Education",
    tag: "Courses, training & career programs",
    img: "https://images.pexels.com/photos/31367511/pexels-photo-31367511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
  {
    id: "gadgets",
    name: "Kelvornex Electric Gadgets",
    tag: "Smart devices & precision instruments",
    img: "https://images.pexels.com/photos/38264253/pexels-photo-38264253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
];

interface SubBrandsProps {
  highlightEducation?: boolean;
}

export default function SubBrands({ highlightEducation }: SubBrandsProps) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const handleCardClick = (id: string) => {
    const el = document.getElementById(`${id}-section`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section aria-label="Our brands" className="mt-4">
      {/* Dark strip */}
      <div className="bg-plum-950 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-xl sm:text-2xl font-bold text-center">
            Our Brands
          </h2>
          <p className="mt-2 text-mint-100/60 text-xs sm:text-sm text-center max-w-xl mx-auto">
            One vision, three divisions — Kelvornex powers software, electric
            gadgets, and education.
          </p>

          <div className="mt-8 flex items-center gap-3 sm:gap-5">
            {/* Left arrow */}
            <button
              onClick={() => scroll(-1)}
              className="hidden sm:flex shrink-0 w-11 h-11 items-center justify-center bg-lagoon-500 hover:bg-lagoon-400 text-plum-950 transition-colors active:scale-95"
              aria-label="Scroll brands left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Cards */}
            <div
              ref={scroller}
              className="flex-1 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {brands.map((b) => (
                <article
                  key={b.name}
                  onClick={() => handleCardClick(b.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(b.id);
                    }
                  }}
                  className={`relative shrink-0 snap-center w-[80vw] max-w-[340px] sm:w-72 md:w-80 lg:w-[350px] h-48 sm:h-52 overflow-hidden group cursor-pointer rounded-sm focus:outline-none focus:ring-2 focus:ring-lagoon-400 transition-all ${
                    b.id === "education" && highlightEducation
                      ? "ring-4 ring-[#00ccff] ring-offset-2 scale-105 animate-pulse"
                      : ""
                  }`}
                >
                  <img
                    src={b.img}
                    alt={b.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base">
                      {b.name}
                    </h3>
                    <p className="mt-0.5 text-white/70 text-[11px] sm:text-xs">
                      {b.tag}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll(1)}
              className="hidden sm:flex shrink-0 w-11 h-11 items-center justify-center bg-lagoon-500 hover:bg-lagoon-400 text-plum-950 transition-colors active:scale-95"
              aria-label="Scroll brands right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="mt-5 flex sm:hidden justify-center gap-3">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 flex items-center justify-center bg-lagoon-500 active:bg-lagoon-400 text-plum-950 transition-colors active:scale-95"
              aria-label="Scroll brands left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 flex items-center justify-center bg-lagoon-500 active:bg-lagoon-400 text-plum-950 transition-colors active:scale-95"
              aria-label="Scroll brands right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Blue bar beneath — like the reference */}
      <div className="h-10 sm:h-12 bg-[#008eff]" />
    </section>
  );
}
