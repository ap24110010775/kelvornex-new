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
const MICROSOFT_ICONS: Record<string, React.ReactNode> = {
  azure: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" fill="#0078d4" xmlns="http://www.w3.org/2000/svg">
      <title>Microsoft Azure</title>
      <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54 0 0 1-.51.713v-.001h-.03a.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54 0 0 1 .512.366l6.562 19.445a.54 0 0 1-.338.684"/>
    </svg>
  ),
  microsoftoffice: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" fill="#d83b01" xmlns="http://www.w3.org/2000/svg">
      <title>Microsoft 365</title>
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 19.5l-6-3.4V7.9l6 3.4v8.2zm9 0l-6-3.4V7.9l6-3.4v15z"/>
    </svg>
  ),
  sharepoint: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" fill="#038387" xmlns="http://www.w3.org/2000/svg">
      <title>Microsoft SharePoint</title>
      <path d="M24 13.5q0 1.242-.475 2.332-.474 1.09-1.289 1.904-.814.815-1.904 1.29-1.09.474-2.332.474-.762 0-1.523-.2-.106.997-.557 1.858-.451.862-1.154 1.494-.704.633-1.606.99-.902.358-1.91.358-1.09 0-2.045-.416-.955-.416-1.664-1.125-.709-.709-1.125-1.664Q6 19.84 6 18.75q0-.188.018-.375.017-.188.04-.375H.997q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6h3.54q.14-1.277.726-2.373.586-1.096 1.488-1.904Q7.652.914 8.807.457 9.96 0 11.25 0q1.395 0 2.625.533T16.02 1.98q.914.915 1.447 2.145T18 6.75q0 .188-.012.375-.011.188-.035.375 1.242 0 2.344.469 1.101.468 1.928 1.277.826.809 1.3 1.904Q24 12.246 24 13.5zm-12.75-12q-.973 0-1.857.34-.885.34-1.577.943-.691.604-1.154 1.43Q6.2 5.039 6.06 6h4.945q.41 0 .703.293t.293.703v4.945l.21-.035q.212-.75.61-1.424.399-.673.944-1.218.545-.545 1.213-.944.668-.398 1.43-.61.093-.503.093-.96 0-1.09-.416-2.045-.416-.955-1.125-1.664-.709-.709-1.664-1.125Q12.34 1.5 11.25 1.5zM6.117 15.902q.54 0 1.06-.111.522-.111.932-.37.41-.257.662-.679.252-.422.252-1.055 0-.632-.263-1.054-.264-.422-.662-.703-.399-.282-.856-.463l-.855-.34q-.399-.158-.662-.334-.264-.176-.264-.445 0-.2.14-.323.141-.123.335-.193.193-.07.404-.094.21-.023.351-.023.598 0 1.055.152.457.153.95.457V8.543q-.282-.082-.522-.14-.24-.06-.475-.1-.234-.041-.486-.059-.252-.017-.557-.017-.515 0-1.054.117-.54.117-.979.375-.44.258-.715.68-.275.421-.275 1.03 0 .598.263.997.264.398.663.68.398.28.855.474l.856.363q.398.17.662.358.263.187.263.457 0 .222-.123.351-.123.13-.31.2-.188.07-.393.087-.205.018-.369.018-.703 0-1.248-.234-.545-.235-1.107-.621v1.875q1.195.468 2.472.468zM11.25 22.5q.773 0 1.453-.293t1.19-.803q.51-.51.808-1.195.299-.686.299-1.459 0-.668-.223-1.277-.222-.61-.62-1.096-.4-.486-.95-.826-.55-.34-1.207-.48v1.933q0 .41-.293.703t-.703.293H7.57q-.07.375-.07.75 0 .773.293 1.459t.803 1.195q.51.51 1.195.803.686.293 1.459.293zM18 18q.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752 0-.926-.352-1.746-.351-.82-.966-1.436-.616-.615-1.436-.966Q18.926 9 18 9t-1.74.357q-.815.358-1.43.973t-.973 1.43q-.357.814-.357 1.74 0 .129.006.258t.017.258q.551.27 1.02.65t.838.855q.369.475.627 1.026.258.55.387 1.148Q17.18 18 18 18Z"/>
    </svg>
  ),
  microsoftsqlserver: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" fill="#cc2927" xmlns="http://www.w3.org/2000/svg">
      <title>SQL Server</title>
      <path d="M4.724 2.505s-.08.127-.004.315c.046.116.186.256.34.404 0 0 1.615 1.576 1.813 1.804.895 1.033 1.284 2.05 1.32 3.453.022.9-.151 1.692-.573 2.613-.756 1.649-2.35 3.468-4.81 5.49l.36-.12c.233-.173.548-.359 1.292-.766 1.713-.936 3.636-1.798 5.999-2.686 3.399-1.277 8.99-2.776 12.172-3.263l.331-.051-.05-.08c-.292-.452-.49-.731-.73-1.027-.697-.863-1.542-1.567-2.577-2.146-1.422-.797-3.267-1.416-5.6-1.88a67.93 67.93 0 00-2.191-.375 209.29 209.29 0 01-3.924-.64c-.425-.075-1.06-.181-1.481-.272a9.404 9.404 0 01-.961-.258c-.268-.105-.645-.207-.726-.515zm.936.909c.003-.002.063.017.137.042.136.046.316.1.526.159.146.04.307.084.479.127.218.056.399.104.401.107.024.027.391 1.198.516 1.647.048.172.084.315.081.318a.789.789 0 01-.09-.14c-.424-.746-1.097-1.505-1.874-2.116a3.104 3.104 0 01-.176-.144zm1.79.494c.018-.001.099.012.195.034.619.136 1.725.35 2.435.47.119.02.216.04.216.047a.348.348 0 01-.098.062c-.119.06-.602.349-.763.457-.403.27-.766.559-1.03.821a5.4 5.4 0 01-.197.192c-.003 0-.022-.062-.041-.137a12.09 12.09 0 00-.65-1.779 1.801 1.801 0 01-.071-.165c0-.001 0-.002.004-.002zm3.147.598c.02.007.06.13.129.404a6.05 6.05 0 01.153 1.977l-.012.038-.187-.06c-.388-.124-1.02-.31-1.562-.46a6.625 6.625 0 01-.56-.17c0-.022.449-.471.642-.642.369-.326 1.362-1.098 1.397-1.087zm.25.036c.011-.01 1.504.248 2.182.378.506.097 1.237.25 1.281.269.022.008-.054.05-.297.16-.96.432-1.672.82-2.38 1.293-.186.124-.341.226-.344.226-.004 0-.006-.104-.006-.23 0-.69-.139-1.387-.391-1.976a.688.688 0 01-.045-.12zm3.86.764c.011.011-.038.306-.08.48-.132.54-.482 1.344-.914 2.099a2.26 2.26 0 01-.152.246 1.499 1.499 0 01-.219-.115c-.422-.247-.9-.48-1.425-.697a4.588 4.588 0 01-.278-.12c-.024-.022 1.143-.795 1.762-1.166.495-.297 1.292-.741 1.306-.727zm.276.043c.033 0 .695.18 1.037.283.853.255 1.837.614 2.475.904l.265.12-.187.043c-1.561.36-2.9.773-4.188 1.296-.107.044-.2.08-.207.08a.911.911 0 01.075-.185c.388-.823.638-1.687.703-2.42.006-.067.018-.121.027-.121zm-6.58 1.512c.01-.01.514.108.789.185.413.116 1.292.41 1.292.433 0 .004-.097.089-.215.188-.475.397-.934.813-1.483 1.343a5.27 5.27 0 01-.308.285c-.007 0-.01-.023-.006-.05.083-.611.065-1.395-.05-2.193a1.29 1.29 0 01-.02-.19zm10.61.01c.007.008-.234.385-.384.6-.22.314-.537.726-1.261 1.637l-.954 1.202a9.418 9.418 0 01-.269.333c-.003 0-.05-.066-.103-.146a7.584 7.584 0 00-1.47-1.625 9.59 9.59 0 00-.27-.218.427.427 0 01-.074-.063c0-.01.617-.274 1.088-.466a37.02 37.02 0 012.778-.99c.442-.135.912-.27.919-.264zm.278.073a.93.93 0 01.207.1 12.274 12.274 0 012.428 1.824c.194.19.667.683.66.687l-.363.029c-1.53.115-3.486.44-5.37.893-.128.03-.238.056-.246.056-.007 0 .133-.14.311-.312 1.107-1.063 1.611-1.734 2.205-2.934.088-.178.163-.333.166-.342h.002zm-8.088.83c.051.01.523.23.879.408.325.163.818.426.843.449.003.003-.17.093-.386.201-.683.342-1.268.664-1.878 1.037-.175.107-.32.194-.325.194-.015 0-.01-.013.088-.191a7.702 7.702 0 00.738-2.002c.014-.062.03-.1.041-.097zm-.475.084c.01.01-.112.46-.19.7a9.092 9.092 0 01-.835 1.808l-.09.147-.203-.197a2.671 2.671 0 00-.676-.5 1.009 1.009 0 01-.176-.102c0-.03.62-.593 1.098-.998.343-.29 1.064-.867 1.072-.858zm2.888 1.188l.177.115c.407.264.888.619 1.255.924.206.172.605.53.687.616l.044.047-.294.082a53.8 53.8 0 00-4.45 1.424c-.167.061-.31.112-.32.112-.021 0-.042.019.333-.326.96-.883 1.807-1.856 2.44-2.802zm-.759.19c.009.009-.492.71-.789 1.106-.356.473-.99 1.265-1.426 1.78a8.769 8.769 0 01-.346.397c-.01.003-.015-.05-.016-.133 0-.44-.112-.91-.308-1.308-.083-.168-.097-.208-.08-.224.068-.062 1.127-.666 1.794-1.023.459-.246 1.163-.604 1.171-.595zm-4.59 1.125a3.988 3.988 0 01.812.518c.008.005-.087.083-.21.172-.345.249-.87.644-1.173.886-.32.255-.331.263-.295.207.24-.367.36-.574.486-.84.113-.236.224-.516.304-.76a.675.675 0 01.077-.183zm1.223.96c.017-.003.04.028.139.175.207.31.366.722.407 1.058l.008.073-.497.192c-.89.346-1.711.687-2.266.94-.155.072-.428.202-.607.292-.179.09-.325.16-.325.156 0-.004.112-.089.25-.188 1.087-.79 2.025-1.654 2.732-2.519.075-.092.144-.172.153-.178a.016.016 0 01.006-.002zm-.564.14c.015.014-.401.484-.681.77-.7.715-1.396 1.275-2.256 1.821-.108.069-.206.13-.22.138-.023.014.008-.022.386-.434.238-.259.42-.474.628-.743.136-.177.162-.202.362-.346.537-.388 1.767-1.221 1.781-1.207zM9.925 0c-.08-.01-1.371.455-2.2.791-1.123.457-1.996.894-2.534 1.272-.2.14-.452.393-.488.49a.356.356 0 00-.021.123l.488.46 1.158.37L9.087 4l3.153.542.032-.27-.028-.005-.415-.066-.085-.148a27.702 27.702 0 01-1.177-2.325 12.264 12.264 0 01-.53-1.465C9.969.02 9.962.005 9.925 0zm-.061.186h.005c.003.003.017.105.032.225.062.508.176 1 .354 1.53.134.4.136.377-.024.332-.37-.103-2.032-.388-3.234-.555a8.796 8.796 0 01-.357-.053c-.015-.015.867-.477 1.258-.66.501-.232 1.867-.8 1.966-.819zM6.362 1.814l.141.048c.772.262 2.706.632 3.775.72.12.01.222.021.225.024.003.003-.1.058-.228.122-.515.258-1.083.573-1.476.819-.115.072-.22.13-.235.129a4.868 4.868 0 01-.17-.027l-.144-.023-.365-.355c-.641-.62-1.141-1.1-1.335-1.28zm-.143.114l.511.638c.282.35.564.699.626.774.063.075.111.138.108.14-.014.011-.74-.13-1.125-.219a8.532 8.532 0 01-.803-.212l-.2-.064.001-.049c.003-.245.312-.607.836-.976zm4.352.869c.015.001.032.032.077.131.124.272.51 1.008.603 1.15.03.047.08.05-.433-.033-1.23-.198-1.629-.265-1.629-.273a.36.36 0 01.083-.054 7.13 7.13 0 001.107-.767l.175-.147c.006-.005.012-.008.017-.007zm4.309 8.408l-4.808 1.568-4.18 1.846-1.17.31c-.298.282-.613.568-.948.86-.37.321-.716.612-.98.822a7.46 7.46 0 00-.953.945c-.332.414-.592.854-.704 1.193-.2.61-.103 1.228.285 1.798.495.728 1.48 1.468 2.625 1.972.585.256 1.57.588 2.31.774 1.233.312 3.614.65 4.926.7.266.01.62.01.637-.002.028-.019.233-.405.47-.89.806-1.646 1.389-3.19 1.703-4.508.19-.799.338-1.863.434-3.125.027-.354.037-1.533.016-1.934a13.564 13.564 0 00-.183-1.706.435.435 0 01-.012-.15c.014-.01.059-.025.65-.197zm-1.1.645c.045 0 .16 1.114.191 1.82.006.151.005.247-.004.247-.028 0-.615-.345-1.032-.606a28.716 28.716 0 01-1.162-.772c-.035-.028-.031-.029.266-.131.505-.174 1.704-.558 1.742-.558zm-2.448.803c.03 0 .115.047.315.172.75.47 1.766 1.035 2.2 1.225.136.06.151.036-.16.247-.662.45-1.486.892-2.497 1.342a7.59 7.59 0 01-.331.142.989.989 0 01.043-.2c.245-.905.383-1.82.387-2.554.002-.362.002-.364.037-.373h.006zm-.504.193c.021.022.006.834-.02 1.056a9.206 9.206 0 01-.418 1.837c-.014.017-.511-.468-.676-.66a4.918 4.918 0 01-.669-.973c-.082-.162-.214-.484-.202-.493.056-.04 1.971-.78 1.985-.767zm-2.375.936c.004 0 .008.001.01.004a.881.881 0 01.056.131c.116.315.376.782.602 1.08a6.247 6.247 0 001.017 1.06c.023.02.03.016-.562.24a48.53 48.53 0 01-2.294.8c-.327.106-.604.195-.615.2-.033.011-.023-.009.073-.158.427-.666 1.073-1.97 1.435-2.892.062-.16.122-.32.133-.356.015-.052.031-.07.08-.092a.149.149 0 01.065-.017zm-.728.3c.01.009-.174.398-.356.751-.351.686-.739 1.361-1.253 2.185l-.182.288c-.018.027-.026.018-.082-.094a3.307 3.307 0 01-.28-.842 3.39 3.39 0 01.02-1.083c.047-.227.045-.222.152-.276.462-.237 1.966-.942 1.981-.929zm6.268.255v.154a20.106 20.106 0 01-.255 2.992 9.362 9.362 0 01-1.898-.782c-.354-.194-.865-.507-.85-.522.003-.004.154-.083.334-.177.714-.37 1.395-.77 1.988-1.166.222-.148.555-.389.629-.454zM4.981 15.41c.015 0 .011.028-.012.161a4.137 4.137 0 00-.041.39c-.03.532.057.924.32 1.46.074.15.132.274.129.276-.027.023-2.43.726-3.186.933l-.435.12c-.027.008-.029.002-.02-.06.083-.533.49-1.232 1.058-1.82.378-.39.68-.622 1.195-.915a30.782 30.782 0 01.992-.545zm5.669 1.015c.002-.002.091.045.197.107.777.449 1.86.87 2.783 1.081l.084.02-.115.063c-.482.268-2.071.929-3.694 1.537a68.82 68.82 0 00-.513.194.314.314 0 01-.082.027c0-.004.067-.132.149-.286.456-.852.91-1.887 1.144-2.605.023-.073.044-.135.047-.138zm-.578.19a1.39 1.39 0 01-.063.169 23.534 23.534 0 01-1.261 2.54 9.009 9.009 0 01-.252.433c-.005 0-.114-.066-.244-.145-.77-.472-1.452-1.052-1.9-1.617l-.064-.08.332-.091a23.616 23.616 0 003.19-1.103c.142-.06.26-.109.262-.106zm3.59 1.253c.001 0 .002.001.002.003 0 .08-.183.828-.336 1.37-.128.453-.236.808-.435 1.437a8.533 8.533 0 01-.168.504 15.004 15.004 0 01-3-.841 7.964 7.964 0 01-.639-.283c-.006-.007.213-.11.486-.23 1.655-.721 3.369-1.543 3.955-1.896a.432.432 0 01.135-.064zm-8.287.283c.009.009-.454.671-1.1 1.576l-.587.823c-.097.139-.245.358-.329.488l-.153.236-.162-.137c-.191-.16-.525-.501-.677-.69-.312-.389-.523-.798-.607-1.174-.038-.174-.04-.262-.003-.273a176.26 176.26 0 011.934-.455l1.3-.305c.209-.05.382-.09.384-.089zm.465.178l.117.131a6.763 6.763 0 001.706 1.394c.115.066.202.124.195.128a281.967 281.967 0 01-4.33 1.53.858.858 0 01-.072-.048l-.067-.048.105-.152c.34-.493.768-1.035 1.705-2.162zm2.9 2.073c.003-.003.165.054.362.128.473.177.844.292 1.347.418.617.155 1.51.31 2.038.354.08.006.122.016.11.024-.025.016-.56.194-.953.318a258.526 258.526 0 01-4.636 1.363c-.035.007-.157-.025-.157-.04 0-.009.087-.119.193-.246a22.027 22.027 0 001.476-1.984 56.9 56.9 0 01.22-.335zm-.642.018c.005.005-.253.418-.706 1.132-.192.301-.409.645-.483.762-.075.118-.184.298-.242.4l-.107.185-.054-.014c-.13-.035-1.049-.36-1.291-.456-.301-.12-.615-.264-.846-.389-.289-.156-.655-.388-.627-.397l1.105-.302c1.592-.434 2.473-.683 3.05-.864.109-.033.199-.059.2-.057zm4.523 1.061h.006c.015.038-.575 1.67-.79 2.188-.049.116-.066.145-.092.143a55.54 55.54 0 01-1.433-.2c-.906-.138-2.423-.403-2.806-.49l-.089-.02.543-.122c1.164-.262 1.723-.403 2.29-.577a16.544 16.544 0 002.138-.824c.113-.052.21-.093.233-.098Z"/>
    </svg>
  ),
  powerbi: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" fill="#f2c811" xmlns="http://www.w3.org/2000/svg">
      <title>Power BI</title>
      <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z"/>
    </svg>
  ),
  dynamics365: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" fill="#002050" xmlns="http://www.w3.org/2000/svg">
      <title>Dynamics 365</title>
      <path d="M15.805 11.322v4.889a2.536 2.536 0 0 1-1.643 2.374l-1.732.652a.507.507 0 0 1-.686-.475v-5.956l-3.392 1.239a1.015 1.015 0 0 0-.664.953v7.986c0 .705.7 1.195 1.363.953l10.161-3.713a2.535 2.535 0 0 0 1.666-2.382V7.696a2.537 2.537 0 0 1-1.666 2.381l-3.407 1.245Zm0-.532V9.323a2.537 2.537 0 0 0-1.645-2.375l-1.728-.65a.508.508 0 0 0-.686.475v4.59c0 .701-.695 1.191-1.355.956L3.795 9.963a1.015 1.015 0 0 1-.674-.956V1.015c0-.701.695-1.191 1.356-.955l14.718 5.256A2.538 2.538 0 0 1 20.83 7.21c-.136.861-1.05 2.128-1.79 2.398l-3.235 1.182Z"/>
    </svg>
  ),
  microsoft: (
    <svg viewBox="0 0 24 24" className="w-4 h-4 object-contain shrink-0" xmlns="http://www.w3.org/2000/svg">
      <title>Microsoft</title>
      <rect x="0" y="0" width="11.4" height="11.4" fill="#F25022"/>
      <rect x="12.6" y="0" width="11.4" height="11.4" fill="#7FBA00"/>
      <rect x="0" y="12.6" width="11.4" height="11.4" fill="#00A4EF"/>
      <rect x="12.6" y="12.6" width="11.4" height="11.4" fill="#FFB900"/>
    </svg>
  )
};

const renderTechIcon = (tech: { name: string; slug?: string; color?: string }, isDarkMode: boolean) => {
  const lowercaseName = tech.name.toLowerCase();
  const slug = tech.slug;

  if (slug === "azure" || lowercaseName.includes("azure")) {
    return MICROSOFT_ICONS.azure;
  }
  if (slug === "microsoftoffice" || lowercaseName.includes("microsoft 365") || lowercaseName.includes("m365")) {
    return MICROSOFT_ICONS.microsoftoffice;
  }
  if (slug === "sharepoint" || lowercaseName.includes("sharepoint")) {
    return MICROSOFT_ICONS.sharepoint;
  }
  if (slug === "microsoftsqlserver" || lowercaseName.includes("sql server")) {
    return MICROSOFT_ICONS.microsoftsqlserver;
  }
  if (slug === "powerbi" || lowercaseName.includes("power bi")) {
    return MICROSOFT_ICONS.powerbi;
  }
  if (slug === "dynamics365" || lowercaseName.includes("dynamics")) {
    return MICROSOFT_ICONS.dynamics365;
  }
  if (slug === "openai" || lowercaseName.includes("openai")) {
    return (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/openai.svg"
        alt={tech.name}
        className="w-4 h-4 object-contain shrink-0"
        style={{
          filter: isDarkMode ? "brightness(0) invert(1)" : undefined
        }}
      />
    );
  }
  if (slug === "oracle" || lowercaseName.includes("oracle")) {
    return (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/oracle.svg"
        alt={tech.name}
        className="w-4 h-4 object-contain shrink-0"
      />
    );
  }
  if (slug === "amazonaws" || slug === "amazonwebservices" || lowercaseName.includes("aws")) {
    return (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@12.0.0/icons/amazonwebservices.svg"
        alt={tech.name}
        className="w-4 h-4 object-contain shrink-0"
      />
    );
  }
  if (lowercaseName.includes("power platform") || lowercaseName.includes("fabric") || lowercaseName.includes("microsoft")) {
    return MICROSOFT_ICONS.microsoft;
  }

  if (slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={tech.name}
        className="w-4 h-4 object-contain shrink-0"
        style={{
          filter: isDarkMode && (slug === "openai" || slug === "apachekafka") ? "brightness(0) invert(1)" : undefined
        }}
      />
    );
  }

  return (
    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: tech.color || "var(--color-lagoon-500)" }} />
  );
};

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
                {renderTechIcon(tech, isDarkMode)}
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
