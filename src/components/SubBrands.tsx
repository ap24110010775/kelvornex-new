import { CheckCircle2 } from "lucide-react";

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
    name: "Kelvornex Products",
    tag: "Smart devices & precision instruments",
    img: "https://images.pexels.com/photos/38264253/pexels-photo-38264253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
  },
];

interface SubBrandsProps {
  activeBrand?: string;
  onBrandSelect?: (id: string) => void;
}

export default function SubBrands({ activeBrand = "software", onBrandSelect }: SubBrandsProps) {

  return (
    <section aria-label="Our brands" className="mt-4">
      {/* Dark strip */}
      <div className="bg-plum-950 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-xl sm:text-2xl font-bold text-center">
            Our Brands
          </h2>
          <p className="mt-2 text-mint-100/60 text-xs sm:text-sm text-center max-w-xl mx-auto">
            Click a brand card to explore its products and services below.
          </p>

          <div className="mt-8 flex items-center gap-3 sm:gap-5">
            {/* Cards */}
            <div
              className="flex-1 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {brands.map((b) => {
                const isActive = activeBrand === b.id;
                return (
                  <article
                    key={b.name}
                    onClick={() => onBrandSelect?.(b.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onBrandSelect?.(b.id);
                    }}
                    className={`relative shrink-0 snap-center w-[80vw] max-w-[340px] sm:w-72 md:w-80 lg:w-[350px] h-48 sm:h-52 overflow-hidden group cursor-pointer rounded-sm focus:outline-none transition-all duration-300 ${
                      isActive
                        ? "ring-4 ring-[#00ccff] ring-offset-2 scale-[1.03] shadow-[0_0_30px_rgba(0,204,255,0.45)]"
                        : "opacity-65 hover:opacity-90 hover:scale-[1.01]"
                    }`}
                  >
                    <img
                      src={b.img}
                      alt={b.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Active "Viewing" badge */}
                    {isActive && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#00ccff] text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                        <CheckCircle2 className="w-3 h-3" />
                        Viewing
                      </div>
                    )}

                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <h3 className="text-white font-bold text-sm sm:text-base">
                        {b.name}
                      </h3>
                      <p className="mt-0.5 text-white/70 text-[11px] sm:text-xs">
                        {b.tag}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Blue bar beneath */}
      <div className="h-10 sm:h-12 bg-[#008eff]" />
    </section>
  );
}
