"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecurityStakeholders = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const Security_for_Every_Stakeholder = {
    title: "Security for Every Stakeholder",
    description: "Our multi-layered approach secures every touchpoint — from IT to Finance to Compliance.",
    security: {
      "For IT Managers": {
        problems: [
          " Drowning in security alerts & false positives",
          " Struggling to keep up with evolving threats",
          " Limited internal security expertise",
        ],
        solutions: [
          "24/7 Monitoring & response",
          "Threat hunting & vulnerability scans",
          "Access to certified security professionals",
        ],
      },
      "For CFOs": {
        problems: [
          "Rising cost of breaches & in-house security",
          "Difficult to quantify security ROI",
          "Unpredictable monthly expenses",
        ],
        solutions: [
          "Fixed-cost monthly protection",
          "Compliance & audit-ready reporting",
          "Predictable security ROI",
        ],
      },
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative stakeholder-sec" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="font-semibold text-center sec-stake-head text-[#01aaeb]">
          {Security_for_Every_Stakeholder.title}
        </h2>
        <p className="text-white sec-stake-para text-center">
          {Security_for_Every_Stakeholder.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stake-card-box">
          {Object.entries(Security_for_Every_Stakeholder.security).map(
            ([title, data], index) => (
              <div
                key={title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="rounded-lg shadow-lg overflow-hidden stake-inn-card"
              >
                <div className="bg-slate-800 p-3 p-md-4 text-white">
                  <h3 className="font-semibold mb-0 stake-card-title">{title}</h3>
                </div>
                <div className="p-6 stake-inner-contBox">
                  <div className="flex flex-col gap-4 stake-list-box">
                    {["problems", "solutions"].flatMap((type, i) =>
                      data[type].map((text, j) => (
                        <div className="flex items-start" key={`${type}-${j}`}>
                          <div
                            className={`${
                              type === "problems"
                                ? "bg-red-100 text-red-700"
                                : "bg-emerald-100 text-emerald-700"
                            } rounded-full p-0 mr-2 mt-0`}
                          >
                            <span className="block w-5 h-45 text-center text-md font-bold text-[#01aaeb]">
                              {type === "problems" ? "✗" : "✓"}
                            </span>
                          </div>
                          <p className="list-stake-txt font-medium mb-0">{text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityStakeholders;
