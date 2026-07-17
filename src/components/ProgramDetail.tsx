import { useState, useEffect } from "react";
import { ArrowLeft, ChevronDown, Clock, Star, CheckCircle2, Share2, FileText, Globe, Award, PlayCircle, Briefcase, Zap, Info, Loader2, Check } from "lucide-react";
import Logo from "./Logo";
import { technicalPrograms } from "../data";
import Footer from "./Footer";

interface ProgramDetailProps {
  item: any;
  onBack: () => void;
  onNavigate: (item: any) => void;
}

export default function ProgramDetail({ item, onBack, onNavigate }: ProgramDetailProps) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("Modules");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        setShowStickyBar(window.scrollY > 500);
        throttleTimeout = null;
      }, 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  const handleEnroll = () => {
    setIsEnrolling(true);
    // Simulate API call
    setTimeout(() => {
      setIsEnrolling(false);
      setEnrollSuccess(true);
      
      // Auto-hide success modal after 4 seconds
      setTimeout(() => {
        setEnrollSuccess(false);
      }, 4000);
    }, 1500);
  };

  const tabs = ["About", "Outcomes", "Modules", "Projects", "Testimonials", "FAQ"];

  const skills = item.skills || [];
  const tools = item.tools || [];
  const modulesList = item.detailedModules || [];
  const projectsList = item.projects || [];
  const testimonialsList = item.testimonials || [];
  const faqsList = item.faqs || [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 relative">
      
      {/* ── Success Modal Overlay ── */}
      {enrollSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in px-4">
            <div className="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl animate-scale-in">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">You're In!</h3>
                <p className="text-slate-600 mb-8">You have successfully enrolled in <strong>{item.title}</strong>. Check your email for next steps!</p>
                <button 
                  onClick={() => setEnrollSuccess(false)}
                  className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Start Learning
                </button>
            </div>
        </div>
      )}

      {/* ── Sticky Bottom Enrollment Bar ── */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40 transition-transform duration-500 flex justify-center py-4 px-6 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="max-w-7xl w-full flex items-center justify-between gap-4">
              <div className="hidden sm:block">
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400"/> 4.8 • {modulesList.length} Modules</p>
              </div>
              <div className="flex gap-4 items-center w-full sm:w-auto">
                  <div className="hidden sm:block text-right mr-2">
                     <p className="text-xs text-slate-400 line-through">{item.originalPrice}</p>
                     <p className="text-lg font-black text-slate-900">{item.price}</p>
                  </div>
                  <button 
                    onClick={handleEnroll}
                    className="w-full sm:w-auto bg-[#00ccff] text-slate-900 px-8 py-3 rounded-lg font-bold shadow-md hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isEnrolling ? <Loader2 className="w-5 h-5 animate-spin" /> : "Enroll Now"}
                  </button>
              </div>
          </div>
      </div>

      {/* Navbar */}
      <div className="bg-[#00ccff] text-white text-center py-2 text-sm font-semibold shadow-sm">
        Enrolling now! Get an official Internship Offer Letter with this program. <a href="#" className="underline">Apply today.</a>
      </div>
      
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-2 text-sm font-medium text-slate-500 shadow-sm sticky top-0 z-50">
        <button onClick={onBack} className="hover:text-black flex items-center"><ArrowLeft className="w-4 h-4 mr-1" /> Back</button>
        <span>›</span>
        <span className="text-slate-900 font-bold">{item.title}</span>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-[#f0f9ff] text-slate-900 min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#f0f9ff]/95 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white text-slate-900 border border-slate-200 shadow-sm px-3 py-1 rounded flex items-center gap-2 w-max text-sm font-bold mb-6">
              <Logo className="w-4 h-4" /> Kelvornex
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{item.title}</h1>
            <p className="text-slate-600 text-sm mb-4">This course is part of the <span className="text-[#00ccff] font-bold underline cursor-pointer">Kelvornex {item.title} Professional Certificate</span></p>
            
            <div className="flex items-center gap-3 mb-6">
              <img src="https://images.pexels.com/photos/8278871/pexels-photo-8278871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=40&w=40" className="w-8 h-8 rounded-full border border-slate-200" alt="Instructor" loading="lazy" />
              <span className="text-sm">Instructor: <strong>Kelvornex Academy</strong></span>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium mb-8">
              <span className="flex items-center gap-1 text-amber-500 font-bold"><Star className="w-4 h-4 fill-amber-500" /> 4.8 <span className="text-slate-500 font-normal ml-1">(1.2k reviews)</span></span>
              <span className="text-slate-500 font-medium">23,555 already enrolled</span>
            </div>

            <button 
              onClick={handleEnroll}
              className="bg-[#00ccff] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {isEnrolling ? <Loader2 className="w-6 h-6 animate-spin text-white" /> : "Enroll for free"} 
              {!isEnrolling && <br/>}
              {!isEnrolling && <span className="text-xs font-medium text-white/90">Starts next Monday</span>}
            </button>
            <p className="mt-3 text-xs text-slate-500">Included with <strong className="text-slate-900">Kelvornex Plus</strong> · <a href="#" className="underline text-indigo-600">Learn more</a></p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-slate-200">
        <div className="w-full px-6 md:px-12 lg:px-20 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex gap-3">
             <div className="mt-1"><FileText className="w-5 h-5 text-indigo-600" /></div>
             <div>
               <p className="font-bold text-slate-900">3 modules</p>
               <p className="text-xs text-slate-500 mt-1">Gain insight into a topic and learn the fundamentals.</p>
             </div>
          </div>
          <div className="flex gap-3">
             <div className="mt-1"><Star className="w-5 h-5 text-amber-400 fill-amber-400" /></div>
             <div>
               <p className="font-bold text-slate-900">4.8</p>
               <p className="text-xs text-slate-500 mt-1">1.2k reviews</p>
             </div>
          </div>
          <div className="flex gap-3">
             <div className="mt-1"><Award className="w-5 h-5 text-indigo-600" /></div>
             <div>
               <p className="font-bold text-slate-900">Beginner level</p>
               <p className="text-xs text-slate-500 mt-1">Recommended experience</p>
             </div>
          </div>
          <div className="flex gap-3">
             <div className="mt-1"><Clock className="w-5 h-5 text-indigo-600" /></div>
             <div>
               <p className="font-bold text-slate-900">Flexible schedule</p>
               <p className="text-xs text-slate-500 mt-1">3 months at 10 hours a week</p>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-[68px] z-40 shadow-sm">
        <div className="w-full px-6 md:px-12 lg:px-20 flex gap-8 overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => {
                setActiveTab(tab);
                const el = document.getElementById(tab);
                if (el) {
                  const offset = 130;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = el.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className={`py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-12 space-y-24">
        
        {/* What you'll learn */}
        <section id="About">
          <h2 className="text-3xl font-extrabold mb-8 text-slate-900">What you'll learn</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" /><span className="text-slate-700 leading-relaxed font-medium">Master modern methodologies and architectures for scalable solutions.</span></div>
            <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" /><span className="text-slate-700 leading-relaxed font-medium">Understand industry-standard tools and environments used by top tier tech companies.</span></div>
            <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" /><span className="text-slate-700 leading-relaxed font-medium">Perform real-world assessments and solve complex production bugs efficiently.</span></div>
            <div className="flex items-start gap-4"><CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" /><span className="text-slate-700 leading-relaxed font-medium">Implement secure, performant, and highly optimized infrastructure and workflows.</span></div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="bg-indigo-50 border border-indigo-100 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
               <Info className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Prerequisites & Requirements</h3>
               <p className="text-slate-700 mb-4 leading-relaxed">This course is designed to be accessible to ambitious beginners, but to get the most out of it, we recommend having:</p>
               <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                   <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><Check className="w-4 h-4 text-emerald-500" /> Basic computer literacy</li>
                   <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><Check className="w-4 h-4 text-emerald-500" /> A modern laptop (Windows/Mac/Linux)</li>
                   <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><Check className="w-4 h-4 text-emerald-500" /> Stable internet connection</li>
                   <li className="flex items-center gap-2 text-sm font-medium text-slate-700"><Check className="w-4 h-4 text-emerald-500" /> No prior coding experience required</li>
               </ul>
            </div>
        </section>

        {/* Skills & Tools */}
        <section id="Outcomes" className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold mb-6 text-slate-900">Skills you'll gain</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill: string) => (
                  <span key={skill} className="border border-slate-200 text-slate-700 bg-white rounded-full px-4 py-2 text-sm font-semibold shadow-sm hover:border-indigo-300 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold mb-6 text-slate-900">Tools you'll master</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool: string) => (
                  <span key={tool} className="bg-indigo-600 text-white rounded-full px-4 py-2 text-sm font-bold shadow-sm hover:bg-indigo-700 transition-colors cursor-default flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> {tool}
                  </span>
                ))}
              </div>
            </div>
        </section>

        {/* Benefit Cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center"><Share2 className="w-6 h-6 text-indigo-600" /></div>
             <div>
               <h4 className="font-bold text-slate-900 text-lg">Shareable certificate</h4>
               <p className="text-sm text-slate-500 mt-2">Easily add your credentials to your LinkedIn profile with one click.</p>
             </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center"><FileText className="w-6 h-6 text-indigo-600" /></div>
             <div>
               <h4 className="font-bold text-slate-900 text-lg">Real Assignments</h4>
               <p className="text-sm text-slate-500 mt-2">Complete 24+ assignments designed to test your knowledge.</p>
             </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center"><Globe className="w-6 h-6 text-indigo-600" /></div>
             <div>
               <h4 className="font-bold text-slate-900 text-lg">Global Reach</h4>
               <p className="text-sm text-slate-500 mt-2">Taught in English with subtitles available in 12+ languages.</p>
             </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center"><Award className="w-6 h-6 text-indigo-600" /></div>
             <div>
               <h4 className="font-bold text-slate-900 text-lg">100% Online</h4>
               <p className="text-sm text-slate-500 mt-2">Completely self-paced. Learn whenever and wherever you want.</p>
             </div>
          </div>
        </section>

        {/* Modules Accordion */}
        {modulesList.length > 0 && (
        <section id="Modules">
          <h2 className="text-3xl font-extrabold mb-3 text-slate-900">There are {modulesList.length} modules in this course</h2>
          <p className="text-slate-600 mb-8 max-w-3xl text-lg">Train from the ground up to become a skilled professional. You'll master industry standards, methodologies, threat analysis, and practical implementation using the latest tools.</p>

          <div className="space-y-4">
            {modulesList.map((mod: any, i: number) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${openModule === i ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-slate-200 hover:border-slate-300'}`}>
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className={`w-full p-6 sm:p-8 flex justify-between items-center transition-colors ${openModule === i ? 'bg-indigo-50/40' : 'bg-white'}`}
                >
                  <div className="text-left">
                    <span className="font-bold text-xl text-slate-900 block">{mod.title}</span>
                    <span className="text-sm text-slate-500 font-semibold block mt-2 flex items-center gap-2">
                       <Clock className="w-4 h-4" /> Module {i + 1} • {mod.items} items • {mod.duration}
                    </span>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openModule === i ? 'bg-indigo-100' : 'bg-slate-100'}`}>
                     <ChevronDown className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${openModule === i ? 'rotate-180 text-indigo-600' : ''}`} />
                  </div>
                </button>
                {openModule === i && (
                  <div className="p-6 sm:p-8 bg-white border-t border-slate-100 animate-fade-in flex flex-col md:flex-row gap-10">
                     <div className="flex-1">
                         <h4 className="font-bold text-slate-900 mb-3 text-lg">Module Overview</h4>
                         <p className="mb-8 text-base text-slate-600 leading-relaxed">{mod.desc}</p>
                         
                         <h5 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Subtopics</h5>
                         <ul className="space-y-4 mb-10">
                            {mod.subtopics.map((sub: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-base text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                   <div className="w-2 h-2 rounded-full bg-[#00ccff] mt-2 shrink-0" />
                                   <span className="font-medium">{sub}</span>
                                </li>
                            ))}
                         </ul>

                         <button className="text-indigo-600 font-bold flex items-center gap-2 border-2 border-indigo-600 rounded-xl px-6 py-3 hover:bg-indigo-50 transition-colors active:scale-95">
                             <PlayCircle className="w-5 h-5"/> Preview Module Content
                         </button>
                     </div>
                     <div className="w-full md:w-5/12 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-slate-200 shrink-0 group">
                         <img src={mod.img} alt="Module Preview" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="border border-slate-200 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl mt-8">
               <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-md border border-white/20">
                  <Award className="w-8 h-8 text-[#00ccff]" />
               </div>
               <div className="text-center sm:text-left">
                  <h4 className="font-black text-white text-2xl mb-2">Earn a professional certificate</h4>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">Upon completion, you'll receive a verifiable digital certificate. Add it directly to your LinkedIn profile, resume, or CV to demonstrate your new skills to employers globally.</p>
               </div>
            </div>
          </div>
        </section>
        )}

        {/* Real-World Projects */}
        {projectsList.length > 0 && (
        <section id="Projects">
            <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl font-extrabold text-slate-900">Hands-on Projects</h2>
            </div>
            <p className="text-slate-600 mb-10 max-w-3xl text-lg">Theory is important, but execution is everything. In this program, you won't just watch videos—you will build actual, portfolio-ready projects that solve real industry problems.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
                {projectsList.map((proj: any, i: number) => (
                    <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 group">
                        <div className="aspect-video overflow-hidden">
                            <img src={proj.img} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Project" />
                        </div>
                        <div className="p-8">
                            <div className="text-[10px] font-black uppercase tracking-widest text-[#00ccff] mb-3">Project {i + 1}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{proj.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{proj.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        )}

        {/* Learner Testimonials */}
        {testimonialsList.length > 0 && (
        <section id="Testimonials" className="bg-indigo-50/50 -mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 py-20 border-y border-slate-200">
            <div className="w-full">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Loved by thousands of learners globally</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonialsList.map((t: any, i: number) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full">
                            <div className="flex text-amber-400 mb-6">
                                <Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" /><Star className="w-5 h-5 fill-amber-400" />
                            </div>
                            <p className="text-slate-700 italic flex-1 text-lg leading-relaxed">"{t.text}"</p>
                            <div className="mt-8 flex items-center gap-4">
                                <img src={t.img} loading="lazy" className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100" alt={t.name} />
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        )}

        {/* FAQ Section */}
        {faqsList.length > 0 && (
        <section id="FAQ" className="w-full">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqsList.map((faq: any, i: number) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full p-6 text-left flex justify-between items-center font-bold text-lg text-slate-900 hover:bg-slate-50 transition-colors"
                        >
                            {faq.q}
                            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180 text-indigo-600' : ''}`} />
                        </button>
                        {openFaq === i && (
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-fade-in">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
        )}

        {/* Bottom Cards: Instructor, Offered By, Career Outcomes */}
        <section className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Instructor</h3>
                <div className="flex items-center gap-5">
                    <img src="https://images.pexels.com/photos/8278871/pexels-photo-8278871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100" loading="lazy" className="w-20 h-20 rounded-full object-cover border-4 border-slate-50" alt="Instructor" />
                    <div>
                        <p className="font-black text-slate-900 text-xl">Kelvornex Academy</p>
                        <p className="text-sm text-indigo-600 font-semibold mt-1">Lead Architect & Mentor</p>
                    </div>
                </div>
                <div className="mt-6 text-sm text-slate-600 flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" /> 
                    <span className="font-bold text-slate-900">4.8</span> 
                    <span>(1.2k ratings)</span>
                </div>
            </div>

            <div className="bg-slate-900 text-white border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00ccff] rounded-full blur-[80px] opacity-20"></div>
                <div className="relative z-10">
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Offered by</h3>
                   {/* Logo in a white rounded box so it's visible on dark bg */}
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2 shrink-0">
                       <Logo className="w-12 h-12" />
                     </div>
                     <div>
                       <p className="font-black text-2xl tracking-tight text-white leading-tight">KELVORNEX</p>
                       <p className="text-[#00ccff] text-xs font-bold tracking-widest uppercase mt-0.5">.in Education</p>
                     </div>
                   </div>
                   <p className="text-slate-400 mt-2 text-sm leading-relaxed">Pioneering digital education and technical consulting globally.</p>
                </div>
                <button className="text-[#00ccff] font-bold text-sm text-left mt-6 hover:underline relative z-10 flex items-center gap-1">Learn more about us <span>→</span></button>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xs font-bold flex items-center gap-2 text-slate-400 uppercase tracking-widest mb-6">
                   <Award className="w-4 h-4 text-indigo-600" /> Career outcomes
                </h3>
                <ul className="space-y-4 text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                        <span>92% got a new job after completion</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                        <span>78% received a promotion or pay raise</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-emerald-600"/></div>
                        <span>Average salary increase: ₹3.2 LPA</span>
                    </li>
                </ul>
            </div>
        </section>

      </div>

      {/* Explore More Programs */}
      <section className="bg-white py-20 border-t border-slate-200">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Explore All Other Courses</h2>
            <p className="text-slate-500 mb-10">Browse all programs offered by Kelvornex – except the one you're already viewing.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {technicalPrograms
                    .filter(p => p.id !== item.id)
                    .map(p => (
                    <div 
                        key={p.id} 
                        onClick={() => onNavigate(p)} 
                        className="cursor-pointer group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
                    >
                        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                            <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><Logo className="w-3.5 h-3.5 text-slate-300"/> Kelvornex</p>
                            <h4 className="font-bold text-xl text-slate-900 leading-tight mb-4 flex-1 group-hover:text-indigo-600 transition-colors">{p.title}</h4>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 
                                    <span>4.{Math.floor(Math.random() * 5) + 5}</span> 
                                </div>
                                <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">{Math.random() > 0.5 ? 'Intermediate' : 'Advanced'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
}
