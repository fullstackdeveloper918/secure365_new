"use client";
import { useEffect, useRef } from "react";
import { AlertTriangle, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const threats = [
  "Ransomware attack targeting healthcare sector detected",
  "New phishing campaign impersonating Microsoft Office 365",
  "Critical vulnerability discovered in popular CMS platform",
  "DDoS attacks increasing against financial institutions",
  "Data breach affecting 50,000+ users reported",
];

export default function ThreatIntelligence() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-20 relative text-white overflow-hidden threat-sec"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-center gap-2 mb-10 threat-i-txt">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <h3 className="text-xl font-medium text-white mb-0 threat-head">
            Real-time Threat Intelligence
          </h3>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-4">
          {[...threats, ...threats].map((threat, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="mx-2 px-4 py-2 bg-red-900/30 rounded-lg flex items-center min-w-max"
            >
              <Clock className="h-4 w-4 mr-2 text-red-400" />
              <span className="font-medium threat-boxTxt">{threat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
