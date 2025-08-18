"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const standards = ["HIPAA", "PCI-DSS", "GDPR", "SOC 2", "CCPA"];

export default function ComplianceExpertise() {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(itemRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-medium text-center text-black fw-bold mb-8 ce-head">
          Compliance Expertise
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {standards.map((label, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center w-32 h-20"
            >
              <span className="font-bold text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
