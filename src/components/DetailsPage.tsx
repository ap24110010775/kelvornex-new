import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";

interface DetailPageProps {
  item: {
    title: string;
    description: string;
    price: string;
    originalPrice: string;
    bullets: string[];
    img: string;
    category?: string;
  };
  onBack: () => void;
  brandName: string;
  accentColor: string;
}

export default function DetailsPage({ item, onBack, brandName, accentColor }: DetailPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-black">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <span className="flex items-center gap-1.5 font-bold text-slate-900">
            <Logo className="w-6 h-6" /> {brandName}
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <img src={item.img} alt={item.title} loading="lazy" className="w-full rounded-3xl shadow-lg aspect-video object-cover" />
          <div>
            {item.category && <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: accentColor }}>{item.category}</p>}
            <h1 className="text-4xl font-extrabold text-slate-900 mt-2">{item.title}</h1>
            <p className="mt-4 text-slate-600 leading-relaxed">{item.description}</p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold" style={{ color: accentColor }}>{item.price}</span>
              <span className="text-sm text-slate-400 line-through">{item.originalPrice}</span>
            </div>
            <button className="mt-8 w-full py-4 rounded-xl text-white font-bold transition-transform active:scale-95 shadow-lg" style={{ backgroundColor: accentColor }}>
              Enroll Now
            </button>
            <ul className="mt-8 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
