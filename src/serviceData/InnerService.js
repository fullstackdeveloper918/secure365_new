// ai-service 

import { MessageSquare, TrendingUp, Workflow } from "lucide-react";

export const Benefits_of_Choosing =
{
  title: "Why Brands Choose Secure365 for Site Design & Development",
  subtitle: "Secure365",
  para: "We blend visual creativity with backend efficiency — every website we build is fast, secure, mobile-first, and optimized to drive measurable results.",
cards : [
  {
    id: 1,
    title: "Enhanced Security",
    description:
      "Your website is your digital front door — and we build it like a fortress.",
    listItems: [
      "Enterprise-grade Data Encryption",
      "Multi-Factor Authentication (MFA)",
      "Continuous Real-Time Threat Detection",
      "Proactive Security Audits",
    ],
    bgImage: "/Astro1.jpg?height=450&width=1300",
  },
  {
    id: 2,
    title: "Scalability & Flexibility",
    description:
      "Built to grow with you. Whether you’re adding new products, locations, or services — your site won’t slow you down.",
    listItems: [
      "Modular development frameworks",
      "Scalable content architecture ",
      "SEO-first structure & schema markup",
      "Easy CMS control for non-tech users",
    ],
    bgImage: "/Astro2.jpg?height=450&width=1300",
  },
  {
    id: 3,
    title: "Optimized for Performance",
    description:
      "Performance isn’t a feature — it’s a foundation.",
    listItems: [
      "90+ Google Lighthouse scores",
      "Built-in technical SEO",
      "Cloud-native infrastructure",
      "Image optimization, caching, & CDN-ready",
    ],
    bgImage: "/Astro3.jpg?height=450&width=1300",
  },
]
}

export const High_ROI_AI_Use_Cases =
{
  title: "High-ROI AI Use Cases",
useCases : [
  {
    icon: <MessageSquare className="h-6 w-6 text-[#009DD6]" />,
    title: "AI Chatbots",
    pain: "Eliminate repetitive tasks with our 24/7 AI chatbots that learn with every conversation — transforming customer support.",
    gain: "",
    roi: "300%+",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#009DD6]" />,
    title: "Predictive Analytics",
    pain: " Forecast trends, predict demand, and make smarter decisions using powerful AI analytics.",
    gain: "",
    roi: "250%+",
  },
  {
    icon: <Workflow className="h-6 w-6 text-[#009DD6]" />,
    title: "Workflow Orchestration",
    pain: "Automate multi-step business processes — from CRM updates to report generation — and reduce errors by up to 95%.",
    gain: "",
    roi: "400%+",
  },
]
};

export const Pricing_Tier =
{
  title: "Plans That Power Every Stage of Growth",
  intro:"All plans include Automated Workflows, Secure Infrastructure, and Daily AI Enhancements.",
 PricingTier : [
          {
            price: "0",
            label: "Free plan",
            title: "Basic",
            icon: "/assets/img/inner-service/service/Basic-plan-icon-main.png",
            features: [
              "3 user request",
              "10 downloads per day",
              "Daily content updates",
              "Fully editable files",
            ],
          },
          {
            price: "19",
            label: "Most popular",
            title: "Professional",
            icon: "/assets/img/inner-service/service/Professional-icon.png",
            features: [
              "Best for SMBs — full feature access",
              "unlimited runs",
              "and priority support",
              
            ],
          },
          {
            price: "49",
            label: "For agencies",
            title: "Enterprise",
            icon: "/assets/img/inner-service/service/Enterprise-icon.png",
            features: [
              "Tailored AI workflows",
              "custom integrations",
              "and dedicated onboarding",
            ],
          },
        ]

      }


export const Service_data =
{
  title: "Our Services Include",
  subtitle: "Core Services Tailored for Businesses Like Yours",
 service_data : [
  {
    id: 1,
    icon: sv_1,
    title: "Cloud Migration & Setup",
    subtitle: "Migrate securely to AWS, Azure, or GCP — optimized for performance and compliance.",
  },
  {
    id: 2,
    icon: sv_2,
    title: "Server Configuration & Optimization",
    subtitle: "Configure and optimize Linux, Windows, or cloud servers for speed, uptime, and security.",
  },
  {
    id: 3,
    icon: sv_3,
    title: "Data Security & Backup Solutions",
    subtitle: "Automated backups, encrypted data pipelines, and disaster recovery systems built for peace of mind.",
  },
  {
    id: 4,
    icon: sv_4,
    title: "Predictive Analytics & Business Intelligence",
    subtitle: "Tailored dashboards and AI analysis for smarter decisions and deeper insights.",
  },
  {
    id: 5,
    icon: sv_5,
    title: "Custom API & AI Integrations",
    subtitle: "Sync apps and systems — CRMs, ERPs, websites — with bespoke APIs and intelligent automations.",
  },
  {
    id: 6,
    icon: sv_6,
    title: "AI Automation via n8n & Make.com",
    subtitle: "Design custom workflows with no‑code/low‑code automations for tools like CRMs, Slack, and email.",
  },
]
}

export const Ready_to_Transform_Your_Business = 
{
  title: "Ready to Transform Your Business?",
  desc: " Book a discovery call today and learn how our integrated services can drive growth for your business.",
  button: "Book a Discovery Call"
}



// app development 

export const Our_work =
{
  title: "Our Work",
  projects : [
    {
      title: "HealthPlus Mobile App",
      description:
        "HIPAA-compliant telehealth platform with video consultations and prescription management.",
      href: "/case-studies/healthplus",
      image: "../../assets/img/inner-service/service/HealthPlus-Mobile-App.jpg",
    },
    {
      title: "FinTech Dashboard",
      description:
        "Real-time financial analytics platform with secure transaction processing and reporting.",
      href: "/case-studies/fintech",
      image: "../../assets/img/inner-service/service/FinTech-Dashboard.jpg",
    },
    {
      title: "E-commerce Platform",
      description:
        "Scalable e-commerce solution with inventory management and payment processing.",
      href: "/case-studies/ecommerce",
      image: "../../assets/img/inner-service/service/E-commerce-Platform.jpg",
    },
  ]
}

export const Our_5_Step_Build_Sprint =
{
  title: "Our 5-Step Build Sprint",
  subtitle: "A Streamlined Process. A Powerful Outcome.",
  description: "Our site design and development process is lean, fast, and transparent — delivering polished, high-converting sites on time and on budget.",
    steps : [
    {
      icon: "fas fa-search",
      title: "1. Discovery",
      text: "Deep dive into your brand, goals, and competitive landscape.",
    },
    {
      icon: "fas fa-pencil-ruler",
      title: "2. Design",
      text: "Wireframes → UI Concepts → Prototypes with UX flows.",
    },
    {
      icon: "fas fa-code",
      title: "3. Development",
      text: "Clean code. Fast loading. Built for scalability & SEO.",
    },
    {
      icon: "fas fa-bug",
      title: "4. Testing",
      text: "Rigorous QA across browsers, devices, and screen sizes.",
      colSpan: "md:col-span-1",
    },
    {
      icon: "fas fa-rocket",
      title: "5. Launch & Growth",
      text: " Your site goes live — and we keep supporting its growth.",
      colSpan: "md:col-span-2",
    },
  ]
}



// site_design

export const Core_Web_Vitals =
{
  title: "Core Web Vitals",
   para: "Google now uses Core Web Vitals as a ranking factor for search results",
   stats : [
    {
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      title: "Largest Contentful Paint",
      value: "0.9s",
      note: "(Google recommends under 2.5s)",
    },
    {
      icon: <LineChart className="h-8 w-8 text-emerald-600" />,
      title: "Cumulative Layout Shift",
      value: "0.02",
      note: "(Google recommends under 0.1)",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-emerald-600" />,
      title: "First Input Delay",
      value: "12ms",
      note: "(Google recommends under 100ms)",
    },
  ]
}

 const Before_vs_After_Results =
{
  title: "Before vs After Results",
  before:"BEFORE",
  para:" Average improvement across all clients:",
  para2:"+187%",
  para3:"in key metrics",
  beforeData: [
                ["Page Load Speed", "5.2s", "30%"],
                ["Mobile Responsiveness", "Poor", "20%"],
                ["Conversion Rate", "1.2%", "12%"],
                ["SEO Ranking", "Page 3+", "15%"],
              ],
            
  after:"AFTER",
  afterData: [
                ["Page Load Speed", "0.8s", "95%"],
                ["Mobile Responsiveness", "Excellent", "98%"],
                ["Conversion Rate", "4.8%", "85%"],
                ["SEO Ranking", "Top 5", "90%"],
              ],
      }



// cyberscurity

export const Cybersecurity_Services =
{
  title: "Cybersecurity Services",
  services : [
  {
    icon: <Shield className="h-6 w-6 text-slate-700" />,
    iconBg: "bg-slate-100",
    title: "Lite Security Scan",
    desc: "Essential protection for small businesses",
    price: "$999",
    priceNote: "One-time assessment",
    buttonText: "Get Started",
    features: [
      "Vulnerability assessment",
      "Security configuration review",
      "Basic threat detection",
      "Remediation recommendations",
    ],
  },
  {
    icon: <Lock className="h-6 w-6 text-[#01abeb]" />,
    iconBg: "bg-slate-100",
    cardStyle: "border-emerald-200 shadow-lg",
    title: "24/7 Security Operations",
    desc: "Continuous protection for growing businesses",
    price: "$1,999",
    priceNote: "Monthly subscription",
    buttonText: "Get Started",
    buttonStyle: "bg-[#01aaeb] hover:bg-[#01aaebcf]",
    features: [
      "Includes Lite Scan features",
      "24/7 security monitoring",
      "Real-time threat detection & response",
      "Monthly security reports",
    ],
  },
  {
    icon: <FileCheck className="h-6 w-6 text-slate-700" />,
    iconBg: "bg-slate-100",
    title: "Compliance Bundles",
    desc: "Regulatory compliance for regulated industries",
    price: "Custom",
    priceNote: "Based on your needs",
    buttonText: "Contact Sales",
    features: [
      "Includes 24/7 Security Ops",
      "Compliance gap assessment",
      "Policy & procedure development",
      "Audit preparation & support",
    ],
  },
]
}


export const Security_for_Every_Stakeholder = {
  title: "Security for Every Stakeholder",
  description: "Our multi-layered approach secures every touchpoint — from IT to Finance to Compliance.",
  security: {
    "For IT Managers": {
      problems: [
        "✘ Drowning in security alerts & false positives",
        "✘ Struggling to keep up with evolving threats",
        "✘ Limited internal security expertise",
      ],
      solutions: [
        "✅ 24/7 Monitoring & response",
        "✅ Threat hunting & vulnerability scans",
        "✅ Access to certified security professionals",
      ],
    },
    "For CFOs": {
      problems: [
        "✘ Rising cost of breaches & in-house security",
        "✘ Difficult to quantify security ROI",
        "✘ Unpredictable monthly expenses",
      ],
      solutions: [
        "✅ Fixed-cost monthly protection",
        "✅ Compliance & audit-ready reporting",
        "✅ Predictable security ROI",
      ],
    },
  },
};
