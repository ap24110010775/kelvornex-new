import { useRef } from "react";
import { Star, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    name: "Full-Stack Web Dev",
    tag: "Beginner friendly",
    rating: "4.8 (1.2k)",
    duration: "6 months · Live + Recorded",
    price: "₹4,999",
    img: "https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640",
  },
  {
    name: "Data Science & AI",
    tag: "Career track",
    rating: "4.6 (950)",
    duration: "8 months · Live + Recorded",
    price: "₹6,200",
    img: "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640",
  },
  {
    name: "UI/UX Design",
    tag: "Project based",
    rating: "4.9 (2k)",
    duration: "4 months · Self-paced",
    price: "₹3,500",
    img: "https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640",
  },
  {
    name: "Digital Marketing",
    tag: "In-demand skill",
    rating: "4.7 (780)",
    duration: "3 months · Self-paced",
    price: "₹2,850",
    img: "https://images.pexels.com/photos/9572526/pexels-photo-9572526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640",
  },
];

interface DestinationsProps {
  onCourseClick?: () => void;
  onViewMoreClick?: () => void;
}

export default function Destinations({ onCourseClick, onViewMoreClick }: DestinationsProps) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section id="courses" className="w-full pb-16 md:pb-24">
      <div className="bg-mint-100/30 border-y border-mint-200 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-plum-900">
              Top Courses
            </h2>
            <p className="text-sm text-sage-500 max-w-md md:text-right">
              From coding bootcamps to creative design tracks, discover the
              skills that will shape your next career move
            </p>
          </div>

        {/* Cards */}
        <div
          ref={scroller}
          className="mt-8 flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {courses.map((c) => (
            <article
              key={c.name}
              onClick={onCourseClick}
              className="relative shrink-0 snap-center sm:snap-start w-[78vw] max-w-[280px] sm:w-64 md:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/25 to-transparent" />

              {/* Price pill */}
              <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-plum-900">
                starts at <span className="text-lagoon-600">{c.price}</span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="text-white text-xl font-bold">{c.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-mint-100/90">
                  <span>{c.tag}</span>
                  <span className="opacity-50">|</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-lagoon-400 text-lagoon-400" />
                    {c.rating}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-1 text-[11px] text-mint-100/80">
                  <Clock className="w-3 h-3 text-lagoon-400" />
                  {c.duration}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={onViewMoreClick}
            className="rounded-full bg-plum-900 hover:bg-plum-800 text-white text-xs font-semibold px-6 py-2.5 transition-colors cursor-pointer"
          >
            View more
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-sage-500/40 text-sage-600 hover:bg-lagoon-500 hover:text-white hover:border-lagoon-500 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-sage-500/40 text-sage-600 hover:bg-lagoon-500 hover:text-white hover:border-lagoon-500 flex items-center justify-center transition-colors active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
