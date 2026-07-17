import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Zap,
  Radio,
  ShieldCheck,
  Users,
  Award,
  Headphones as HeadphonesIcon,
  Package,
  X,
  Check,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import Logo from "./Logo";

const ACCENT = "#008eff"; // logo dot color

const features = [
  {
    icon: Box,
    title: "Innovative Design",
    body: "Crafted with precision and a focus on the future.",
  },
  {
    icon: Zap,
    title: "Powerful Performance",
    body: "High-speed, high-efficiency technology you can trust.",
  },
  {
    icon: Radio,
    title: "Seamless Connectivity",
    body: "Stay connected anywhere, anytime with ease.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    body: "Advanced protection for your data and devices.",
  },
];

interface ProductItem {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  img: string;
  tagline: string;
  specs: string[];
}

const products: ProductItem[] = [
  {
    id: "buds",
    name: "Kelvornex Buds Pro",
    price: "₹2,999",
    priceNum: 2999,
    img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    tagline: "True Wireless Sound & Smart Active Noise Cancellation",
    specs: ["40 hours total battery life", "IPX7 sweat & water resistant", "Ultra-low latency gaming mode"],
  },
  {
    id: "watch",
    name: "Kelvornex Watch X",
    price: "₹4,499",
    priceNum: 4499,
    img: "https://images.pexels.com/photos/12564670/pexels-photo-12564670.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    tagline: "Always-On AMOLED Display & Comprehensive Health Tracking",
    specs: ["SPO2 & heart-rate tracking", "Up to 14 days standby battery", "110+ customized workout modes"],
  },
  {
    id: "laptop",
    name: "Kelvornex Laptop Air",
    price: "₹54,999",
    priceNum: 54999,
    img: "https://images.pexels.com/photos/34803981/pexels-photo-34803981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    tagline: "Sleek Aluminum Shell with Next-Gen Processing Efficiency",
    specs: ["Intel Core i7 Gen-14", "16GB LPDDR5 RAM / 512GB SSD", "Full Day 15-Hour battery life"],
  },
  {
    id: "tab",
    name: "Kelvornex Tab 15",
    price: "₹18,999",
    priceNum: 18999,
    img: "https://images.pexels.com/photos/7241341/pexels-photo-7241341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    tagline: "Premium High-Refresh Cinematic Screen & Dual Pen Support",
    specs: ["12.4-inch AMOLED display", "Kelvornex Pen support included", "Quad speakers tuned by Dolby Atmos"],
  },
];

const stats = [
  { icon: Package, value: "120+", label: "Premium Products" },
  { icon: Users, value: "2.5M+", label: "Happy Customers" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
  { icon: HeadphonesIcon, value: "24/7", label: "Expert Support" },
];

interface CartLineItem {
  product: ProductItem;
  quantity: number;
}

interface GadgetsPageProps {
  onBack: () => void;
}

export default function GadgetsPage({ onBack }: GadgetsPageProps) {
  const [cart, setCart] = useState<CartLineItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [purchased, setPurchased] = useState<ProductItem[]>([]);
  const [buySuccess, setBuySuccess] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCartFromDetail = (item: ProductItem) => {
    const existing = cart.find((c) => c.product.id === item.id);
    if (existing) {
      setCart(
        cart.map((c) =>
          c.product.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { product: item, quantity: 1 }]);
    }
    setSelectedProduct(null);
    setIsCheckingOut(false);
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(
      cart
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: Math.max(1, nextQty) };
          }
          return item;
        })
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutProcess = () => {
    setIsCheckingOut(true);
  };

  const handleFinalBuy = () => {
    if (cart.length === 0) return;
    const boughtProducts = cart.map((item) => item.product);
    setPurchased([...purchased, ...boughtProducts]);
    setCart([]);
    setIsCheckingOut(false);
    setIsCartOpen(false);
    setBuySuccess(true);
    setTimeout(() => setBuySuccess(false), 4000);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.priceNum * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f3f4f6] relative text-slate-800">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-xs font-semibold text-black/60 hover:text-black transition-colors"
                aria-label="Back to Kelvornex home"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <span className="w-px h-6 bg-black/10" />
              {/* Gadgets logo */}
              <span className="flex items-center gap-2 text-black">
                <Logo className="w-9 h-9" />
                <span className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-950">
                    KELVORNEX
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
                    Gadgets
                  </span>
                </span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={onBack} className="text-sm font-medium text-black/60 hover:text-black transition-colors cursor-pointer">
                Home
              </button>
              <a href="#top-picks" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
                Products
              </a>
              <a href="#top-picks" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
                Solutions
              </a>
              <a href="#top-picks" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
                Innovation
              </a>
              <a href="#top-picks" className="text-sm font-medium text-black/60 hover:text-black transition-colors">
                Support
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#top-picks"
                className="rounded-full text-white text-xs font-semibold px-5 py-2.5 transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Shop Now
              </a>
              {/* Trolly Cart Trigger Button */}
              <button
                className="relative p-2.5 text-slate-700 hover:text-black transition-colors bg-slate-100 rounded-full active:scale-95"
                aria-label="Shopping Trolly"
                onClick={() => {
                  setIsCartOpen(!isCartOpen);
                  setIsCheckingOut(false);
                }}
              >
                <ShoppingCart className="w-5 h-5 text-slate-800" />
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center animate-pulse" style={{ backgroundColor: ACCENT }}>
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Trolly Overlay (Fully styled as Amazon Shopping Cart) ── */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-full pl-4 sm:pl-10 flex animate-slide-in-right">
            <div className="w-screen max-w-4xl bg-[#eaeded] shadow-2xl flex flex-col justify-between">
              
              {/* Cart Header */}
              <div className="p-5 bg-white border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" style={{ color: ACCENT }} />
                  {isCheckingOut ? "Checkout & Place Order" : "Shopping Cart"}
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-400 hover:text-black rounded-full hover:bg-slate-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Columns & Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid lg:grid-cols-12 gap-5">
                
                {/* Left Side: Items or Checkout Summary */}
                <div className="lg:col-span-8 bg-white rounded-lg p-5 border border-slate-200 shadow-sm space-y-6">
                  
                  {isCheckingOut ? (
                    /* Checkout Form View */
                    <div className="space-y-5">
                      <h3 className="text-base font-bold text-slate-900 border-b pb-3">Delivery & Payment Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" required className="w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50" />
                        <input type="email" placeholder="Email Address" required className="w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50" />
                      </div>
                      <input type="text" placeholder="Shipping Address" required className="w-full rounded-md border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ccff]/50" />
                      <div className="bg-[#f4f9ff] border border-[#d6e9ff] p-4 rounded-xl flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold text-slate-700">Cash on Delivery (COD) / Direct Banking Activated</span>
                      </div>
                    </div>
                  ) : (
                    /* Amazon Shopping Cart Items View */
                    <div>
                      <div className="flex items-center justify-between border-b pb-3 text-slate-500 text-xs font-bold uppercase tracking-wider">
                        <span>Items ({totalItems})</span>
                        <span>Price</span>
                      </div>

                      {cart.length === 0 ? (
                        <div className="text-center py-20 text-slate-400">
                          <p className="text-sm">nothing yet</p>
                          <button
                            onClick={() => setIsCartOpen(false)}
                            className="mt-4 text-xs font-bold hover:underline"
                            style={{ color: ACCENT }}
                          >
                            Explore Our Top Picks
                          </button>
                        </div>
                      ) : (
                        <div className="divide-y divide-slate-100">
                          {cart.map((item) => (
                            <div key={item.product.id} className="flex flex-col sm:flex-row sm:items-start gap-4 py-5 justify-between">
                              <div className="flex items-start gap-4">
                                <img src={item.product.img} alt={item.product.name} loading="lazy" className="w-20 h-20 rounded-xl object-cover border border-slate-100 bg-[#f4f9ff]" />
                                <div className="space-y-1">
                                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.product.name}</h4>
                                  <p className="text-xs text-slate-500 leading-snug">{item.product.tagline}</p>
                                  <p className="text-[10px] text-emerald-600 font-semibold">In Stock</p>
                                  
                                  {/* Quantity Controls & Actions */}
                                  <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-slate-50 shadow-sm">
                                      <button
                                        onClick={() => updateQuantity(item.product.id, -1)}
                                        className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 text-xs font-bold active:scale-95 border-r border-slate-200"
                                      >
                                        -
                                      </button>
                                      <span className="px-3.5 py-1 text-xs font-bold text-slate-800">{item.quantity}</span>
                                      <button
                                        onClick={() => updateQuantity(item.product.id, 1)}
                                        className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 text-xs font-bold active:scale-95 border-l border-slate-200"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <span className="text-slate-300">|</span>
                                    <button
                                      onClick={() => removeFromCart(item.product.id)}
                                      className="text-xs text-[#008eff] hover:underline flex items-center gap-1 font-semibold"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" /> Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                              
                              <p className="text-sm font-extrabold text-slate-900 whitespace-nowrap self-end sm:self-auto">
                                ₹{(item.product.priceNum * item.quantity).toLocaleString()}/-
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Right Side: Price summary box */}
                <div className="lg:col-span-4 bg-white rounded-lg p-5 border border-slate-200 shadow-sm h-fit space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-slate-500 font-medium">Subtotal ({totalItems} items):</span>
                      <span className="text-lg font-black text-slate-950">₹{subtotal.toLocaleString()}/-</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                      <input type="checkbox" id="gift" className="rounded text-[#008eff] focus:ring-0" />
                      <label htmlFor="gift">This order contains a gift</label>
                    </div>
                  </div>

                  {isCheckingOut ? (
                    <button
                      onClick={handleFinalBuy}
                      disabled={cart.length === 0}
                      className="w-full rounded-xl text-white font-bold py-3 text-center transition-all hover:brightness-110 active:scale-95 shadow-md shadow-emerald-500/10 bg-emerald-500"
                    >
                      Buy Now
                    </button>
                  ) : (
                    <button
                      onClick={handleCheckoutProcess}
                      disabled={cart.length === 0}
                      className="w-full rounded-xl text-white font-bold py-3 text-center transition-all hover:brightness-110 active:scale-95 shadow-md bg-[#008eff]"
                    >
                      Proceed to checkout
                    </button>
                  )}

                  {isCheckingOut && (
                    <button
                      onClick={() => setIsCheckingOut(false)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 text-center text-xs font-semibold text-slate-500 hover:text-black transition-colors"
                    >
                      Back to Shopping Cart
                    </button>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Product Details Modal popup ── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row border border-slate-100 animate-scale">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-slate-600 hover:text-black rounded-full shadow-md transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Product Image */}
            <div className="md:w-1/2 bg-[#f4f9ff] flex items-center justify-center relative min-h-[250px] md:min-h-0">
              <img src={selectedProduct.img} alt={selectedProduct.name} loading="lazy" className="w-full h-full object-cover" />
            </div>

            {/* Product description & buying options */}
            <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">KELVORNEX PREMIUM</span>
                <h3 className="text-2xl font-black text-black mt-1 leading-tight">{selectedProduct.name}</h3>
                <p className="text-xs font-bold text-slate-500 mt-2 leading-relaxed">{selectedProduct.tagline}</p>

                <p className="text-2xl font-extrabold mt-4" style={{ color: ACCENT }}>{selectedProduct.price}</p>
                
                {/* Specifications Checklist */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Features & Specs:</p>
                  {selectedProduct.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart action */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => addToCartFromDetail(selectedProduct)}
                  className="w-full rounded-xl border-2 py-3.5 text-center text-xs font-bold transition-all active:scale-95"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── Purchase Success Notification Alert ── */}
      {buySuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-sm">Purchase successful!</p>
            <p className="text-[11px] text-white/80 mt-0.5">Your items have been bought successfully.</p>
          </div>
        </div>
      )}

      {/* ── Hero (Full-Screen Layout) ── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: ACCENT }} />
        <div className="absolute bottom-[-30%] left-[-10%] w-96 h-96 rounded-full bg-[#00ccff]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
              <Zap className="w-3.5 h-3.5" /> Next-Gen Gadgets
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-[1.05] tracking-tight">
              TECH THAT <span style={{ color: ACCENT }}>EMPOWERS</span> EVERY DAY
            </h1>
            <p className="mt-5 text-sm sm:text-base text-black/60 max-w-md mx-auto md:mx-0 leading-relaxed">
              Smart. Sleek. Seamless. Explore technology designed to elevate the way you live.
            </p>
            <a
              href="#top-picks"
              className="mt-8 inline-flex items-center gap-2 rounded-full text-white text-sm font-bold px-8 py-3.5 transition-opacity hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: ACCENT,
                boxShadow: "0 10px 30px rgba(0,142,255,.35)",
              }}
            >
              Explore Devices <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-4 rounded-full opacity-25 blur-2xl" style={{ backgroundColor: ACCENT }} />
            <img
              src="https://images.pexels.com/photos/4087270/pexels-photo-4087270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1000"
              alt="Modern tech gadgets — laptop, camera, and accessories"
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ── Dark features strip ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black px-6 py-10 sm:px-10 md:px-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#00ccff" }}>
            Built for the Future
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title}>
                <Icon className="w-7 h-7" style={{ color: "#00ccff" }} />
                <h3 className="mt-4 text-white font-bold text-sm uppercase tracking-wide">
                  {title}
                </h3>
                <p className="mt-2 text-white/50 text-xs leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top picks (Removed bought tick-mark overlays on product) ── */}
      <section id="top-picks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-44 shrink-0">
            <h2 className="text-2xl font-extrabold text-black leading-snug">
              EXPLORE OUR TOP PICKS
            </h2>
            <div className="mt-3 h-1 w-10 rounded-full" style={{ backgroundColor: ACCENT }} />
          </div>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {products.map((p) => {
              return (
                <article
                  key={p.name}
                  onClick={() => setSelectedProduct(p)}
                  className="rounded-2xl bg-white border border-[#d6e9ff] overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all relative"
                >
                  <div className="aspect-square overflow-hidden bg-[#f4f9ff]">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-black">
                        {p.name}
                      </h3>
                      <p className="mt-0.5 text-sm font-extrabold" style={{ color: ACCENT }}>
                        {p.price}
                      </p>
                    </div>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Purchased / Bought Gadgets Shelf (Visible when items bought) ── */}
      {purchased.length > 0 && (
        <section className="bg-emerald-50 border-y border-emerald-100 py-12 px-6 lg:px-14">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-500 rounded-full" />
              Your Active Enrolled Devices
            </h2>
            <p className="text-xs text-slate-500 mt-1">Below are the gadgets you have bought successfully.</p>
            
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn">
              {purchased.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-emerald-100 shadow-sm overflow-hidden flex items-center gap-4 p-4">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold text-emerald-600 tracking-wider">BOUGHT</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Stats bar ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl px-6 py-8 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ backgroundColor: "#0900ff" }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-7 h-7 shrink-0" style={{ color: "#00ccff" }} />
              <div>
                <p className="text-white font-extrabold text-lg sm:text-xl">
                  {value}
                </p>
                <p className="text-white/60 text-[11px]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial + CTA ── */}
      <section className="mt-14 md:mt-20 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr_1.1fr] items-stretch">
          <div className="relative min-h-64 md:min-h-0">
            <img
              src="https://images.pexels.com/photos/4996004/pexels-photo-4996004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=640"
              alt="Man enjoying a VR headset experience"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
          </div>

          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <span className="text-5xl font-extrabold leading-none" style={{ color: "#00ccff" }}>
              “
            </span>
            <blockquote className="mt-2 text-white text-lg sm:text-xl font-medium leading-relaxed">
              Kelvornex delivers more than just gadgets — it delivers experiences.
            </blockquote>
            <p className="mt-4 text-white/50 text-xs">
              — Daniel K. <span className="block">Tech Enthusiast</span>
            </p>
          </div>

          <div className="p-8 sm:p-10 flex items-center">
            <div className="w-full rounded-2xl border p-6 sm:p-8" style={{ borderColor: "rgba(0,142,255,.4)" }}>
              <h3 className="text-white font-extrabold text-lg sm:text-xl uppercase tracking-wide">
                Ready to Upgrade Your Tech?
              </h3>
              <p className="mt-3 text-white/50 text-xs leading-relaxed">
                Join millions who trust Kelvornex for quality, innovation, and style.
              </p>
              <a
                href="#top-picks"
                className="mt-6 inline-flex items-center gap-2 rounded-full text-white text-xs font-bold px-6 py-3 transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Join Kelvornex Family <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Corporate Footer for Kelvornex Gadgets ── */}
      <footer className="bg-black text-white/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
            
            {/* Brand Intro Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-white">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white p-1">
                  <Logo className="w-8 h-8" />
                </span>
                <span className="text-lg font-extrabold">
                  KELVORNEX{" "}
                  <span style={{ color: ACCENT }} className="text-xs tracking-wider uppercase">
                    Gadgets
                  </span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed max-w-xs">
                Designing sleek, next-generation smart accessories, wearable monitors, and high-performance computing devices that empower your daily life.
              </p>
            </div>

            {/* Links Columns */}
            {[
              {
                title: "Categories",
                links: ["Wireless Audio", "Smartwatches", "Laptops & Tabs", "Charging & Accs"],
              },
              {
                title: "Company",
                links: ["About Kelvornex", "Innovation Lab", "Store Locator", "Contact Sales"],
              },
              {
                title: "Support",
                links: ["Device Manuals", "Warranty Claim", "Track Your Order", "Easy Returns"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} Kelvornex Gadgets. All rights reserved.</p>
            <button
              onClick={onBack}
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 font-bold text-white/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to main site
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
