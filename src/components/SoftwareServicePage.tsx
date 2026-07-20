import { useRef } from "react";
import {
  ArrowLeft, ChevronLeft, ChevronRight, ArrowRight, Download,
  Globe, Smartphone, Database, ShoppingCart, Heart, Building2,
  Users, BookOpen, BarChart3, Server, Shield, Lock, CloudCog,
  Container, Activity, RefreshCw, Layers, Cpu, Bot, LineChart,
  ScanSearch, FileCode2, Network, Workflow, MonitorCheck,
  GitBranch, Wrench, BrainCircuit, ArrowRightLeft, FolderOpen,
} from "lucide-react";

/* ───────────────────────── SERVICE DATA ───────────────────────── */
export interface SoftwareService {
  id: string;
  index: string; // "01", "02", …
  title: string;
  subtitle: string;
  description: string;
  heroImg: string;
  accentColor: string;
  services: { icon: React.ElementType; label: string }[];
  techLabel: string; // "Technologies" | "Platforms" | …
  techs: { name: string; slug?: string; color?: string }[];
  stats: { icon: React.ElementType; value: string; label: string }[];
}

export const softwareServices: SoftwareService[] = [
  /* 1 ─ Custom Software Development */
  {
    id: "custom-software",
    index: "01",
    title: "Custom Software Development",
    subtitle: "Scalable. Secure. Purpose-Built.",
    description:
      "We build scalable, secure and high-performance software solutions tailored to your unique business needs — from MVPs to large enterprise platforms.",
    heroImg: "/hero_custom_software.png",
    accentColor: "#0900ff",
    services: [
      { icon: Globe,        label: "Web Applications" },
      { icon: Smartphone,   label: "Mobile App Development" },
      { icon: Building2,    label: "Enterprise Software" },
      { icon: CloudCog,     label: "SaaS Products" },
      { icon: Users,        label: "CRM Development" },
      { icon: Layers,       label: "ERP Development" },
      { icon: Wrench,       label: "HRMS Development" },
      { icon: BookOpen,     label: "LMS Development" },
      { icon: ShoppingCart, label: "E-Commerce Platforms" },
      { icon: Heart,        label: "Healthcare Applications" },
      { icon: BarChart3,    label: "Banking Applications" },
    ],
    techLabel: "Technologies",
    techs: [
      { name: "React",        slug: "react", color: "#61dafb" },
      { name: "Node.js",      slug: "nodedotjs", color: "#43853d" },
      { name: "Python",       slug: "python", color: "#3776ab" },
      { name: "Java",         slug: "openjdk", color: "#f89820" },
      { name: ".NET",         slug: "dotnet", color: "#512bd4" },
      { name: "Spring Boot",  slug: "springboot", color: "#6db33f" },
      { name: "Angular",      slug: "angular", color: "#dd0031" },
      { name: "Vue.js",       slug: "vuedotjs", color: "#42b883" },
      { name: "Django",       slug: "django", color: "#092e20" },
      { name: "Flutter",      slug: "flutter", color: "#54c5f8" },
      { name: "React Native", slug: "react", color: "#61dafb" },
    ],
    stats: [
      { icon: FileCode2, value: "500+", label: "Projects Delivered" },
      { icon: Users,     value: "120+", label: "Enterprise Clients" },
      { icon: Globe,     value: "15+",  label: "Industries Served" },
      { icon: Shield,    value: "99.9%",label: "Uptime" },
      { icon: Activity,  value: "24/7", label: "Support" },
    ],
  },

  /* 2 ─ Cloud Services */
  {
    id: "cloud-services",
    index: "02",
    title: "Cloud Services",
    subtitle: "Migrate. Scale. Optimise.",
    description:
      "We help companies migrate and manage applications in the cloud — delivering resilient, scalable, and cost-optimised infrastructure across all major platforms.",
    heroImg: "/hero_cloud_services.png",
    accentColor: "#00ccff",
    services: [
      { icon: CloudCog,   label: "Cloud Migration" },
      { icon: Network,    label: "Cloud Architecture" },
      { icon: Workflow,   label: "Cloud Deployment" },
      { icon: Lock,       label: "Cloud Security" },
      { icon: GitBranch,  label: "DevOps" },
      { icon: Container,  label: "Kubernetes" },
      { icon: Layers,     label: "Docker" },
      { icon: MonitorCheck,label: "Cloud Monitoring" },
      { icon: RefreshCw,  label: "Disaster Recovery" },
      { icon: Server,     label: "Multi-cloud Management" },
    ],
    techLabel: "Platforms",
    techs: [
      { name: "AWS",            slug: "amazonaws", color: "#ff9900" },
      { name: "Microsoft Azure",slug: "azure", color: "#0078d4" },
      { name: "Google Cloud",   slug: "googlecloud", color: "#4285f4" },
      { name: "Oracle Cloud",   slug: "oracle", color: "#f80000" },
    ],
    stats: [
      { icon: Server,    value: "300+", label: "Migrations Done" },
      { icon: Shield,    value: "99.99%",label: "Availability SLA" },
      { icon: Activity,  value: "40%",  label: "Cost Reduction" },
      { icon: Users,     value: "80+",  label: "Cloud Clients" },
      { icon: RefreshCw, value: "24/7", label: "Monitoring" },
    ],
  },

  /* 3 ─ Microsoft Services */
  {
    id: "microsoft-services",
    index: "03",
    title: "Microsoft Services",
    subtitle: "Power Your Enterprise with Microsoft.",
    description:
      "We implement and optimise the full Microsoft ecosystem — from Azure infrastructure to Microsoft 365 productivity, Power Platform automation, and Dynamics 365 business apps.",
    heroImg: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    accentColor: "#0078d4",
    services: [
      { icon: Database,    label: "Microsoft Fabric" },
      { icon: BarChart3,   label: "Power BI" },
      { icon: CloudCog,    label: "Azure" },
      { icon: Smartphone,   label: "Power Apps" },
      { icon: Workflow,    label: "Power Automate" },
      { icon: Users,       label: "Microsoft 365" },
      { icon: Building2,   label: "Dynamics 365" },
      { icon: Bot,         label: "Copilot" },
      { icon: FolderOpen,  label: "SharePoint" },
      { icon: Database,    label: "SQL Server" },
    ],
    techLabel: "Microsoft Stack",
    techs: [
      { name: "Azure",           slug: "azure", color: "#0078d4" },
      { name: "Microsoft 365",   slug: "microsoftoffice", color: "#d83b01" },
      { name: "Power Platform",  slug: "microsoft", color: "#742774" },
      { name: "Dynamics 365",    slug: "microsoft", color: "#002050" },
      { name: "SharePoint",      slug: "sharepoint", color: "#038387" },
      { name: "SQL Server",      slug: "microsoftsqlserver", color: "#cc2927" },
      { name: "Power BI",        slug: "powerbi", color: "#f2c811" },
      { name: "Microsoft Fabric",slug: "microsoft", color: "#0078d4" },
    ],
    stats: [
      { icon: Users,    value: "200+", label: "M365 Deployments" },
      { icon: Globe,    value: "50+",  label: "Azure Projects" },
      { icon: BarChart3,value: "100+", label: "Power BI Reports" },
      { icon: Shield,   value: "99.9%",label: "Uptime" },
      { icon: Activity, value: "24/7", label: "Support" },
    ],
  },

  /* 4 ─ Data Engineering */
  {
    id: "data-engineering",
    index: "04",
    title: "Data Engineering",
    subtitle: "Working with large-scale enterprise data.",
    description:
      "We design and build robust data pipelines, warehouses, ETL workflows and real-time streaming solutions to fuel accurate, data-driven decisions at scale.",
    heroImg: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    accentColor: "#a855f7",
    services: [
      { icon: Workflow,       label: "Data pipelines" },
      { icon: RefreshCw,      label: "ETL/ELT" },
      { icon: Database,       label: "Data warehouses" },
      { icon: Server,         label: "Data lakes" },
      { icon: ArrowRightLeft, label: "Data migration" },
      { icon: Shield,         label: "Data governance" },
      { icon: Layers,         label: "Master data management" },
    ],
    techLabel: "Tools & Technologies",
    techs: [
      { name: "Snowflake",          slug: "snowflake", color: "#29b5e8" },
      { name: "Databricks",         slug: "databricks", color: "#ff6f00" },
      { name: "Azure Data Factory", slug: "azure", color: "#0078d4" },
      { name: "Microsoft Fabric",   slug: "microsoft", color: "#0078d4" },
      { name: "Apache Spark",       slug: "apachespark", color: "#e25a1c" },
      { name: "Kafka",              slug: "apachekafka", color: "#231f20" },
    ],
    stats: [
      { icon: Database,  value: "1B+",  label: "Records Processed" },
      { icon: Activity,  value: "60%",  label: "Faster Insights" },
      { icon: Users,     value: "90+",  label: "Data Clients" },
      { icon: Shield,    value: "100%", label: "Data Accuracy" },
      { icon: RefreshCw, value: "24/7", label: "Pipeline Monitoring" },
    ],
  },

  /* 5 ─ AI & Machine Learning */
  {
    id: "ai-ml",
    index: "05",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Systems. Real-World Impact.",
    description:
      "We build intelligent models, integrate LLMs, develop predictive analytics systems and AI-powered automation solutions that deliver measurable business results.",
    heroImg: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    accentColor: "#f59e0b",
    services: [
      { icon: Globe,        label: "AI applications" },
      { icon: Bot,          label: "Chatbots" },
      { icon: Network,      label: "LLM integration" },
      { icon: BrainCircuit, label: "Generative AI" },
      { icon: Bot,          label: "AI agents" },
      { icon: LineChart,    label: "Predictive analytics" },
      { icon: BarChart3,    label: "Recommendation systems" },
      { icon: Cpu,          label: "NLP" },
      { icon: ScanSearch,   label: "Computer Vision" },
    ],
    techLabel: "Tools & Frameworks",
    techs: [
      { name: "OpenAI",       slug: "openai", color: "#10a37f" },
      { name: "Azure AI",     slug: "azure", color: "#0078d4" },
      { name: "Vertex AI",    slug: "googlecloud", color: "#4285f4" },
      { name: "Hugging Face", slug: "huggingface", color: "#ffcc00" },
      { name: "LangChain",    slug: "chainlink", color: "#1c3144" },
      { name: "LlamaIndex",   slug: "python", color: "#1a237e" },
    ],
    stats: [
      { icon: BrainCircuit,value: "80+",  label: "AI Models Deployed" },
      { icon: Activity,    value: "95%",  label: "Model Accuracy" },
      { icon: LineChart,   value: "3x",   label: "Faster Decisions" },
      { icon: Users,       value: "60+",  label: "AI Clients" },
      { icon: RefreshCw,   value: "24/7", label: "Model Monitoring" },
    ],
  },

  /* 6 ─ Cyber Security */
  {
    id: "cyber-security",
    index: "06",
    title: "Cyber Security",
    subtitle: "Protect. Detect. Respond.",
    description:
      "We provide end-to-end cybersecurity assessments, threat detection, compliance frameworks and round-the-clock monitoring to protect your digital assets from evolving threats.",
    heroImg: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    accentColor: "#ef4444",
    services: [
      { icon: ScanSearch,   label: "Vulnerability Assessment" },
      { icon: FileCode2,    label: "Penetration Testing" },
      { icon: Activity,     label: "SOC (Security Operations Center)" },
      { icon: Server,       label: "SIEM" },
      { icon: Lock,         label: "IAM" },
      { icon: Shield,       label: "Zero Trust" },
      { icon: CloudCog,     label: "Cloud Security" },
      { icon: Smartphone,   label: "Endpoint Security" },
      { icon: ScanSearch,   label: "Threat Hunting" },
      { icon: RefreshCw,    label: "Incident Response" },
    ],
    techLabel: "Compliance & Tools",
    techs: [
      { name: "ISO 27001",    color: "#1565c0" },
      { name: "SOC 2",        color: "#283593" },
      { name: "GDPR",         color: "#1a237e" },
      { name: "NIST",         color: "#0d47a1" },
      { name: "Zero Trust",   color: "#b71c1c" },
    ],
    stats: [
      { icon: Shield,    value: "500+", label: "Security Audits" },
      { icon: ScanSearch,value: "0",    label: "Breaches on Watch" },
      { icon: Activity,  value: "99%",  label: "Threat Detection Rate" },
      { icon: Users,     value: "150+", label: "Secured Clients" },
      { icon: RefreshCw, value: "24/7", label: "SOC Monitoring" },
    ],
  },
];

/* ───────────────────────── COMPONENT ───────────────────────── */
interface SoftwareServicePageProps {
  service: SoftwareService;
  isDarkMode: boolean;
  onBack: () => void;
}

export default function SoftwareServicePage({ service, isDarkMode, onBack }: SoftwareServicePageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollServices = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 300;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const bg = isDarkMode ? "bg-slate-950" : "bg-[#f4f7fe]";
  const cardBg = isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200";
  const text = isDarkMode ? "text-slate-100" : "text-slate-900";
  const muted = isDarkMode ? "text-slate-400" : "text-slate-500";

  return (
    <div className={`min-h-screen ${bg} ${text}`}>

      {/* ── HERO ── */}
      <section className={`relative overflow-hidden min-h-[440px] flex items-center ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
        {/* Left Content */}
        <div className="w-full max-w-6xl mx-auto px-6 py-10 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className="max-w-xl">
              {/* Breadcrumb */}
              <button
                onClick={onBack}
                className={`flex items-center gap-1.5 text-xs font-medium mb-6 transition-colors ${isDarkMode ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-800"}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Software Services
                <span className="mx-1 opacity-40">/</span>
                <span style={{ color: service.accentColor }}>{service.title}</span>
              </button>

              <span
                className="inline-block text-xs font-extrabold px-3 py-1.5 rounded-md mb-5"
                style={{ background: service.accentColor + "22", color: service.accentColor }}
              >
                {service.index}
              </span>
              <h1 className={`text-4xl lg:text-5xl font-extrabold leading-tight mb-3 ${isDarkMode ? "text-white" : "text-[#0a2540]"}`}>
                {service.title}
              </h1>
              <p className="text-base font-semibold mb-4" style={{ color: service.accentColor }}>
                {service.subtitle}
              </p>
              <p className={`text-sm leading-7 mb-8 ${muted}`}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: service.accentColor }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-all hover:shadow-md ${isDarkMode ? "border-slate-700 text-slate-300 hover:border-slate-500" : "border-slate-300 text-slate-700 hover:border-slate-400"}`}
                >
                  Download Brochure <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Right spacer for lg screens */}
            <div className="hidden lg:block h-[360px]" />
          </div>
        </div>

        {/* Right - Full Screen Split Image */}
        <div className="relative lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 w-full h-[320px] lg:h-full shrink-0">
          <img
            src={service.heroImg}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Gradients to blend seamless */}
          <div className={`absolute inset-0 bg-gradient-to-r lg:block hidden ${isDarkMode ? "from-slate-900 via-slate-900/50 to-transparent" : "from-white via-white/50 to-transparent"}`} />
          <div className={`absolute inset-0 bg-gradient-to-t lg:hidden block ${isDarkMode ? "from-slate-900 via-slate-900/50 to-transparent" : "from-white via-white/50 to-transparent"}`} />
        </div>
      </section>

      {/* ── SERVICES WE OFFER ── */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-[#0a2540]"}`}>Services We Offer</h2>
          <p className={`text-xs mb-6 ${muted}`}>Explore our full range of {service.title.toLowerCase()} capabilities.</p>

          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scrollServices("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-white text-slate-700"}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable row */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-2"
              style={{ scrollbarWidth: "none" }}
            >
              {service.services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.label}
                    className={`flex-none w-[130px] flex flex-col items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${cardBg}`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: service.accentColor + "18" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: service.accentColor }} />
                    </div>
                    <p className={`text-[11px] font-semibold text-center leading-tight ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {svc.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scrollServices("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-white text-slate-700"}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES / PLATFORMS ── */}
      <section className={`px-6 py-10 ${isDarkMode ? "bg-slate-900/50" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-[#0a2540]"}`}>
            {service.techLabel} We Use
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.techs.map((tech) => (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                  isDarkMode ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                {tech.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt={tech.name}
                    className="w-4 h-4 object-contain shrink-0"
                    style={{
                      filter: isDarkMode && (tech.slug === "openai" || tech.slug === "apachekafka") ? "brightness(0) invert(1)" : undefined
                    }}
                  />
                ) : (
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: tech.color || "var(--color-lagoon-500)" }} />
                )}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-2xl border ${cardBg} p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6`}>
            {service.stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center text-center gap-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: service.accentColor + "18" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.accentColor }} />
                  </div>
                  <p className={`text-2xl font-extrabold ${isDarkMode ? "text-white" : "text-[#0a2540]"}`}>{s.value}</p>
                  <p className={`text-xs ${muted}`}>{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
