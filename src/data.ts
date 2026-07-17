import { ShieldAlert, Bot, Cpu, Microchip, Cpu as QuantumIcon, Database, Terminal } from "lucide-react";

export const technicalPrograms = [
  {
    id: "fsdev",
    category: "INTERNSHIP PROGRAM",
    title: "Full-Stack Web Dev",
    description: "Master modern web architectures, frontend framework structures, backend database integrations, and scale production apps with premium cloud deployments.",
    price: "₹4,999/-",
    originalPrice: "₹6,500/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Terminal,
    skills: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "RESTful APIs", "GraphQL", "Docker & CI/CD", "AWS Deployment", "State Management", "TailwindCSS"],
    tools: ["VS Code", "Git & GitHub", "Postman", "Figma", "Docker", "Vercel"],
    detailedModules: [
      { title: "Frontend Mastery", duration: "40 hours", items: 25, desc: "Master modern UI development using React, Next.js, and Tailwind CSS. Build responsive and accessible interfaces.", subtopics: ["React Hooks & Context", "Next.js App Router", "Tailwind CSS Architecture", "Framer Motion Animations"], img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Backend Architecture", duration: "45 hours", items: 22, desc: "Design robust APIs and microservices using Node.js, Express, and modern database solutions.", subtopics: ["REST & GraphQL APIs", "Authentication & JWT", "Database Schema Design", "Caching with Redis"], img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Cloud & DevOps", duration: "35 hours", items: 15, desc: "Deploy and scale your applications using Docker, CI/CD pipelines, and AWS services.", subtopics: ["Containerization with Docker", "GitHub Actions CI/CD", "AWS EC2 & S3", "Nginx & Load Balancing"], img: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "E-Commerce Platform", desc: "Build a full-stack e-commerce store with Stripe payment integration, real-time inventory, and an admin dashboard.", img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Real-time Collaboration App", desc: "Develop a Trello-clone using WebSockets for real-time board updates and task assignments.", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [
      { q: "Do I need prior coding experience?", a: "Basic understanding of HTML/CSS is helpful but not required. We start from the fundamentals." },
      { q: "What stack will I learn?", a: "You will learn the MERN stack (MongoDB, Express, React, Node) along with Next.js and Tailwind." }
    ],
    testimonials: [
      { name: "Alex Johnson", role: "Frontend Engineer", text: "The capstone project helped me land my first job. Highly recommended!", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Priya Sharma", role: "Full Stack Developer", text: "The cloud deployment module was a game-changer. I finally understand DevOps.", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ]
  },
  {
    id: "dsai",
    category: "INTERNSHIP PROGRAM",
    title: "Data Science & AI",
    description: "Master predictive algorithms, neural network design, custom machine learning pipelines, and visual data analytics with high-tech libraries.",
    price: "₹6,200/-",
    originalPrice: "₹8,000/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Bot,
    skills: ["Python", "Machine Learning", "Deep Learning", "Data Visualization", "Pandas & NumPy", "TensorFlow & PyTorch", "Statistical Analysis", "NLP"],
    tools: ["Jupyter", "Scikit-Learn", "TensorFlow", "PyTorch", "Tableau", "Matplotlib"],
    detailedModules: [
      { title: "Data Manipulation & EDA", duration: "35 hours", items: 20, desc: "Learn to clean, process, and analyze massive datasets using Python libraries.", subtopics: ["Pandas & NumPy Basics", "Exploratory Data Analysis", "Data Cleaning Techniques", "Data Visualization with Seaborn"], img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Machine Learning Algorithms", duration: "45 hours", items: 28, desc: "Implement core ML algorithms for classification, regression, and clustering.", subtopics: ["Linear & Logistic Regression", "Decision Trees & Random Forests", "Support Vector Machines", "K-Means Clustering"], img: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Deep Learning & NLP", duration: "40 hours", items: 22, desc: "Build neural networks to solve complex computer vision and natural language tasks.", subtopics: ["Artificial Neural Networks", "CNNs for Image Recognition", "RNNs & Transformers", "Sentiment Analysis"], img: "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Predictive Healthcare Model", desc: "Build a machine learning model that predicts patient readmission rates using historical clinical data.", img: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Real-time Sentiment Analyzer", desc: "Develop an NLP pipeline that ingests Twitter data and classifies live sentiment about trending topics.", img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [
      { q: "Do I need a strong math background?", a: "We cover the required statistics and linear algebra from scratch, but a basic understanding of high-school math is recommended." },
      { q: "Will we use GPUs?", a: "Yes, you will learn how to train deep learning models on cloud GPUs using Google Colab and AWS." }
    ],
    testimonials: [
      { name: "Rohan Gupta", role: "Data Scientist", text: "The deep learning module helped me transition from a standard analyst role into hardcore ML engineering.", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ]
  },
  {
    id: "uiux",
    category: "INTERNSHIP PROGRAM",
    title: "UI/UX Design",
    description: "Develop seamless interface graphics, client empathy pathways, wireframe structures, and modern interactive mockups optimized for human conversions.",
    price: "₹3,500/-",
    originalPrice: "₹4,800/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Cpu,
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Interaction Design", "Usability Testing", "Design Systems"],
    tools: ["Figma", "Adobe XD", "Miro", "InVision", "Zeplin"],
    detailedModules: [
      { title: "User Research & Empathy", duration: "30 hours", items: 15, desc: "Understand your users through qualitative research, personas, and user journey mapping.", subtopics: ["User Interviews", "Creating Personas", "Journey Mapping", "Empathy Maps"], img: "https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Wireframing & Prototyping", duration: "40 hours", items: 25, desc: "Translate concepts into structured wireframes and interactive high-fidelity prototypes.", subtopics: ["Information Architecture", "Low-Fidelity Wireframing", "Interactive Prototyping in Figma", "Micro-interactions"], img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Design Systems & UI Polish", duration: "30 hours", items: 20, desc: "Create scalable design systems and apply advanced visual design principles.", subtopics: ["Color Theory & Typography", "Building UI Components", "Auto Layout Mastery", "Developer Handoff"], img: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Fintech App Redesign", desc: "Conduct user research and completely redesign the UX of a banking app to improve transaction conversion rates.", img: "https://images.pexels.com/photos/5098059/pexels-photo-5098059.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Global Design System", desc: "Build a comprehensive, accessible design system with reusable components and documented guidelines.", img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [
      { q: "Do I need to know how to code?", a: "No coding is required. We focus entirely on design tools, research, and psychology." }
    ],
    testimonials: [
      { name: "Samantha Lee", role: "Product Designer", text: "Figma was always intimidating, but this course made it second nature. I now lead design for my startup.", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ]
  },
  {
    id: "sec",
    category: "INTERNSHIP PROGRAM",
    title: "Cyber Security",
    description: "Ethical hacking, network defense, penetration testing, and cloud security protocols. Protect systems and build a secure digital future.",
    price: "₹899/-",
    originalPrice: "₹1,200/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/30547577/pexels-photo-30547577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: ShieldAlert,
    skills: ["Penetration Testing", "Network Security", "Ethical Hacking", "Cryptography", "Incident Response", "Vulnerability Assessment", "Malware Analysis"],
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "Nessus"],
    detailedModules: [
      { title: "Network Defense & Architecture", duration: "35 hours", items: 18, desc: "Learn how to secure networks, configure firewalls, and detect intrusions.", subtopics: ["TCP/IP Fundamentals", "Firewall Configuration", "Intrusion Detection Systems (IDS)", "Packet Analysis with Wireshark"], img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Ethical Hacking & Penetration Testing", duration: "50 hours", items: 30, desc: "Think like a hacker. Learn how to exploit vulnerabilities safely to patch them.", subtopics: ["Reconnaissance & Footprinting", "Exploitation Frameworks (Metasploit)", "Web App Vulnerabilities (OWASP)", "Privilege Escalation"], img: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Incident Response & Forensics", duration: "35 hours", items: 15, desc: "Discover how to react to a data breach and analyze compromised systems.", subtopics: ["Incident Handling Lifecycle", "Digital Forensics Basics", "Malware Reverse Engineering", "Threat Hunting"], img: "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Enterprise Threat Detection System", desc: "Build a system that ingests network logs and flags anomalous behavior using SIEM tools.", img: "https://images.pexels.com/photos/2088170/pexels-photo-2088170.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Web App Vulnerability Audit", desc: "Perform a full penetration test on a mock enterprise web application and write a professional executive report.", img: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [
      { q: "Is this legal?", a: "Yes, we teach Ethical Hacking. You will practice on intentionally vulnerable virtual machines in a sandboxed environment." }
    ],
    testimonials: [
      { name: "David Chen", role: "Security Analyst", text: "The hands-on labs with Kali Linux were incredible. I learned more here than in my university degree.", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ]
  },
  {
    id: "agentic",
    category: "INTERNSHIP PROGRAM",
    title: "Agentic AI",
    description: "Build autonomous AI agents, multi-agent systems, task planning, and orchestrate intelligent workflows using leading agentic frameworks.",
    price: "₹1199/-",
    originalPrice: "₹1,700/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/17485744/pexels-photo-17485744.png?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Cpu,
    skills: ["LLM Orchestration", "Prompt Engineering", "Multi-Agent Systems", "LangChain", "AutoGPT Architecture", "Vector Databases", "Function Calling"],
    tools: ["LangChain", "OpenAI API", "Pinecone", "LlamaIndex", "Python", "Docker"],
    detailedModules: [
      { title: "LLM Fundamentals & Function Calling", duration: "30 hours", items: 15, desc: "Understand how LLMs work and how to give them access to external tools.", subtopics: ["Prompt Engineering Patterns", "OpenAI API Deep Dive", "Function Calling & JSON modes", "RAG (Retrieval-Augmented Generation)"], img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Building Autonomous Agents", duration: "45 hours", items: 25, desc: "Create agents that can plan tasks, reflect on errors, and execute multi-step workflows.", subtopics: ["ReAct Prompting", "Memory Systems for Agents", "LangChain Agents", "Handling Agent Hallucinations"], img: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Multi-Agent Orchestration", duration: "45 hours", items: 20, desc: "Design complex systems where multiple specialized AI agents collaborate to solve large problems.", subtopics: ["Agent Swarms", "Hierarchical Task Networks", "LangGraph workflows", "Deploying Agents to Production"], img: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.png?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Automated Software Engineer Agent", desc: "Build an agent that can take a GitHub issue, write the code to fix it, and submit a pull request entirely autonomously.", img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { title: "Multi-Agent Research Team", desc: "Create a system with a 'Researcher' agent, a 'Writer' agent, and an 'Editor' agent that collaborate to write comprehensive reports.", img: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [
      { q: "Is this different from Prompt Engineering?", a: "Yes. While prompt engineering is covered, this course focuses on building software systems that orchestrate LLMs to take autonomous actions." }
    ],
    testimonials: [
      { name: "Emily Rogers", role: "AI Engineer", text: "Learning LangGraph and multi-agent workflows was mind-blowing. We implemented it at work the next week.", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ]
  },
  // Provide basic fallbacks for the rest to avoid massive file size, but keep them robust enough
  {
    id: "digimkt",
    category: "INTERNSHIP PROGRAM",
    title: "Digital Marketing",
    description: "Build robust advertising strategies, conversion funnel architectures, SEO campaign pathways, and programmatic conversion assets.",
    price: "₹2,850/-",
    originalPrice: "₹3,900/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/9572526/pexels-photo-9572526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Database,
    skills: ["SEO", "Performance Marketing", "Social Media Strategy", "Content Marketing", "Analytics"],
    tools: ["Google Analytics", "Facebook Ads", "SEMrush", "Mailchimp"],
    detailedModules: [
      { title: "SEO & Content Strategy", duration: "30h", items: 15, desc: "Master search algorithms and organic growth.", subtopics: ["Keyword Research", "On-page SEO", "Off-page link building"], img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Full Funnel Campaign", desc: "Design a complete end-to-end marketing funnel.", img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [],
    testimonials: []
  },
  {
    id: "genai",
    category: "INTERNSHIP PROGRAM",
    title: "Gen AI",
    description: "Learn to build applications with Large Language Models (LLMs), prompt engineering, and integrate generative capabilities into software solutions.",
    price: "₹999/-",
    originalPrice: "₹1,500/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Bot,
    skills: ["Prompt Engineering", "Fine-Tuning", "RAG", "Embeddings"],
    tools: ["OpenAI", "HuggingFace", "Python", "ChromaDB"],
    detailedModules: [
      { title: "Generative Models Basics", duration: "30h", items: 15, desc: "Understand Transformers and generative networks.", subtopics: ["Transformers", "Stable Diffusion", "Prompt Engineering"], img: "https://images.pexels.com/photos/17483873/pexels-photo-17483873.png?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Custom PDF Chatbot", desc: "Build a chatbot that answers questions based on uploaded documents using RAG.", img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [],
    testimonials: []
  },
  {
    id: "vlsi",
    category: "INTERNSHIP PROGRAM",
    title: "VLSI",
    description: "Very Large Scale Integration engineering. Master digital design, Verilog, FPGA, and physical design concepts for modern semiconductor chips.",
    price: "₹1199/-",
    originalPrice: "₹1,750/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/14887613/pexels-photo-14887613.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Microchip,
    skills: ["Digital Logic Design", "Verilog/VHDL", "FPGA Programming", "Static Timing Analysis"],
    tools: ["ModelSim", "Xilinx Vivado", "Cadence"],
    detailedModules: [
      { title: "Digital Design & Verilog", duration: "40h", items: 20, desc: "Learn hardware description languages.", subtopics: ["Combinational Logic", "Sequential Circuits", "Verilog HDL"], img: "https://images.pexels.com/photos/33153/processor-chip-pc-computer.jpg?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "CPU Pipeline Design", desc: "Design a basic 5-stage RISC processor architecture.", img: "https://images.pexels.com/photos/163100/circuit-board-computer-technology-electronic-163100.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [],
    testimonials: []
  },
  {
    id: "quantum",
    category: "INTERNSHIP PROGRAM",
    title: "Quantum Computing",
    description: "Introduction to quantum bits (qubits), quantum circuits, algorithms like Shor's and Grover's, and hands-on programming on quantum hardware.",
    price: "₹1199/-",
    originalPrice: "₹1,750/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/30547566/pexels-photo-30547566.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: QuantumIcon,
    skills: ["Quantum Mechanics", "Qiskit", "Quantum Algorithms", "Linear Algebra"],
    tools: ["IBM Quantum Experience", "Python", "Qiskit"],
    detailedModules: [
      { title: "Quantum Fundamentals", duration: "35h", items: 15, desc: "Understand qubits, superposition, and entanglement.", subtopics: ["Dirac Notation", "Quantum Gates", "Circuit Design"], img: "https://images.pexels.com/photos/17485744/pexels-photo-17485744.png?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "Grover's Algorithm Implementation", desc: "Implement a quantum search algorithm.", img: "https://images.pexels.com/photos/30547566/pexels-photo-30547566.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [],
    testimonials: []
  },
  {
    id: "fabric",
    category: "INTERNSHIP PROGRAM",
    title: "Microsoft Fabric",
    description: "Master Microsoft's all-in-one analytics platform. Learn data engineering, data factory pipelines, Synapse data science, and Power BI integration.",
    price: "₹1499/-",
    originalPrice: "₹2,150/-",
    bullets: ["3 Months In-Depth Training", "Internship Offer Letter Included", "Capstone Live Project Work"],
    img: "https://images.pexels.com/photos/25626445/pexels-photo-25626445.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=760",
    icon: Database,
    skills: ["Data Engineering", "Power BI", "Data Lakehouse", "Azure Synapse"],
    tools: ["Microsoft Fabric", "Power BI", "SQL", "Spark"],
    detailedModules: [
      { title: "Fabric Workspace & Lakehouse", duration: "40h", items: 20, desc: "Set up and manage end-to-end analytics.", subtopics: ["OneLake architecture", "Data Factory Pipelines", "Spark Notebooks"], img: "https://images.pexels.com/photos/25626445/pexels-photo-25626445.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    projects: [
      { title: "End-to-End Analytics Pipeline", desc: "Build a data ingestion pipeline to a Lakehouse, process it with Spark, and visualize in Power BI.", img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ],
    faqs: [],
    testimonials: []
  }
];
