"use client";
import { useEffect, useRef } from "react";
import { Shield, Lock, FileCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
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
      "All Lite Scan features",
      "24/7 security monitoring",
      "Real-time threat detection & response",
      "Security incident management",
      "Monthly security reports",
    ],
  },
  {
    icon: <FileCheck className="h-6 w-6 text-slate-700" />,
    iconBg: "bg-slate-100",
    title: "Compliance Bundles",
    desc: "Regulatory compliance for regulated industries",
    price: "Custom",
    priceNote: "Based on requirements",
    buttonText: "Contact Sales",
    features: [
      "All 24/7 Security features",
      "Compliance gap assessment",
      "Policy & procedure development",
      "Compliance documentation",
      "Audit preparation & support",
    ],
  },
];

export default function CybersecurityServices() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Properly assign each card to its ref
  const setCardRef = (el, index) => {
    if (el) cardRefs.current[index] = el;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.from(cardRefs.current, {
          opacity: 0,
          y: 60,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.3,
        });
      }, sectionRef);

      return () => ctx.revert();
    }, 100); // Small delay ensures refs are set

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="cyber-serv-sec relative bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center mb-12 cyber-sec-head-txt">
          Cybersecurity Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cybersec-serv-outer">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => setCardRef(el, index)}
              className={`bg-white rounded-lg shadow-md border p-6 flex flex-col justify-between cb-card-box ${service.cardStyle || ""
                }`}
            >
              <div>
                <div
                  className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${service.iconBg}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 serv-title">{service.title}</h3>
                <p className="text-white mb-4 serv-txtPara">{service.desc}</p>
                <ul className="space-y-2 ms-0 ms-lg-3 cybersecurity-servList">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start mb-3 gap-1">
                      <span className="text-[#01aaeb] mr-2">✓</span>
                      <span className="fs-6 cs-list-item">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-2xl font-bold cb-price-txt">
                  {service.price}
                </div>
                <p className="text-sm text-slate-500 mb-0">{service.priceNote}</p>
                <button
                  className={`mt-4 w-full px-4 py-2 rounded-md text-white font-semibold cb-btn-prc ${service.buttonStyle || "bg-slate-800 hover:bg-slate-900"
                    }`}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
