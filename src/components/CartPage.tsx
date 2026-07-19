import { ShoppingCart, ArrowLeft, ShieldCheck } from "lucide-react";

interface CartPageProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export default function CartPage({ onBack, isDarkMode }: CartPageProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 transition-colors duration-300 ${isDarkMode ? "text-slate-100" : "text-slate-900"}`}>
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group ${
            isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-950"
          }`}
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Continue Shopping</span>
        </button>
        <span className={isDarkMode ? "text-slate-700" : "text-slate-300"}>|</span>
        <span className={`text-sm ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
          Home / Shopping Cart
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl font-extrabold tracking-tight mb-10">Shopping Cart</h1>

      {/* Two Column Layout (like the mockup image) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column - Product Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className={`border rounded-2xl overflow-hidden shadow-sm ${
            isDarkMode ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"
          }`}>
            {/* Table Header */}
            <div className={`grid grid-cols-12 gap-4 p-5 text-xs font-bold uppercase tracking-wider border-b ${
              isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-100 text-slate-500"
            }`}>
              <div className="col-span-6 sm:col-span-7">Product Code</div>
              <div className="col-span-3 sm:col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1 text-center">Action</div>
            </div>

            {/* Table Body - Empty State / "Nothing" */}
            <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-dashed ${
                isDarkMode ? "bg-slate-950 border-slate-700 text-slate-400" : "bg-slate-50 border-slate-300 text-slate-400"
              }`}>
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-slate-300" : "text-slate-800"}`}>
                nothing
              </h3>
              <p className={`text-sm max-w-sm ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}>
                Your shopping cart is currently empty. Kelvornex division products are currently in development.
              </p>
              
              {/* Coming Soon notice in Table body */}
              <div className={`mt-6 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase ${
                isDarkMode ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-cyan-50/80 text-cyan-600 border border-cyan-100"
              }`}>
                Kelvornex Products Coming Soon
              </div>
            </div>
          </div>

          {/* Action Button under Table */}
          <div>
            <button
              disabled
              className={`rounded-full text-xs font-bold px-8 py-3.5 tracking-wider uppercase transition-all duration-300 cursor-not-allowed ${
                isDarkMode
                  ? "bg-slate-800 text-slate-500 border border-slate-700"
                  : "bg-slate-100 text-slate-400 border border-slate-200"
              }`}
            >
              Update Cart
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary Box */}
        <div className={`border rounded-2xl p-6 sm:p-8 shadow-md space-y-6 ${
          isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}>
          <h2 className="text-xl font-bold tracking-tight">Order Summary</h2>

          {/* Discount voucher code box */}
          <div className="flex gap-2">
            <input
              type="text"
              disabled
              placeholder="Discount voucher"
              className={`flex-1 px-4 py-2.5 text-xs rounded-full border outline-none cursor-not-allowed ${
                isDarkMode 
                  ? "bg-slate-950 border-slate-800 text-slate-600 placeholder:text-slate-700" 
                  : "bg-slate-50 border-slate-200 text-slate-400 placeholder:text-slate-400"
              }`}
            />
            <button
              disabled
              className={`px-5 py-2.5 text-xs font-semibold rounded-full border cursor-not-allowed transition-all ${
                isDarkMode
                  ? "bg-slate-800 border-slate-700 text-slate-500"
                  : "bg-slate-100 border-slate-200 text-slate-400"
              }`}
            >
              Apply
            </button>
          </div>

          {/* Pricing breakdown */}
          <div className="space-y-4 pt-2">
            <div className="flex justify-between text-sm">
              <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>Sub Total</span>
              <span className="font-semibold">0.00 USD</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>Discount</span>
              <span className="font-semibold">0.00 USD</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>Delivery fee</span>
              <span className="font-semibold">0.00 USD</span>
            </div>
            
            <div className={`border-t pt-4 flex justify-between items-baseline ${
              isDarkMode ? "border-slate-800" : "border-slate-100"
            }`}>
              <span className="text-base font-bold">Total</span>
              <span className="text-2xl font-black text-[#00ccff]">$0.00 USD</span>
            </div>
          </div>

          {/* Warranty tag */}
          <div className={`flex items-start gap-2.5 p-3.5 rounded-xl border text-xs leading-relaxed ${
            isDarkMode ? "bg-slate-950/40 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-100 text-slate-500"
          }`}>
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
            <span>
              90 Day Limited Warranty against manufacturer defects. <span className="underline cursor-pointer hover:text-[#00ccff]">Details</span>
            </span>
          </div>

          {/* Checkout Now CTA */}
          <button
            disabled
            className="w-full py-4 rounded-full bg-slate-950 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-not-allowed opacity-50 shadow-md"
          >
            Checkout Now
          </button>
        </div>
      </div>

      {/* "Build Custom Platform" banner at the bottom (matching the "Craft Own Furniture" block in the image) */}
      <div className={`mt-16 border rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 ${
        isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-100"
      }`}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-xl text-center md:text-left space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00ccff]">Build custom solutions</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Craft Own Platform</h2>
          <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Work directly with our team to design tailor-made software solutions, education programs, or smart hardware products.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <button
            onClick={() => {
              const el = document.getElementById("enroll-newsletter");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                onBack();
              }
            }}
            className="rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-sm font-bold px-8 py-3.5 shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Lets Talk!
          </button>
        </div>
      </div>
    </div>
  );
}
