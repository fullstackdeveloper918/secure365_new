"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecurityStakeholders = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(cardRefs.current, {
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
    <section
      className="relative stakeholder-sec"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center sec-stake-head text-[#01aaeb]">
          Security for Every Stakeholder
        </h2>
        <p className="text-white sec-stake-para text-center">Our multi-layered security approach ensures that stakeholders including administrators, developers, clients, and end-users are protected at every touchpoint.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stake-card-box">
          {["For IT Managers", "For CFOs"].map((title, index) => (
            <div
              key={title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="rounded-lg shadow-lg overflow-hidden stake-inn-card"
            >
              <div className="bg-slate-800 p-3 p-md-4 text-white">
                <h3 className="font-bold mb-0 stake-card-title">{title}</h3>
              </div>
              <div className="p-6 stake-inner-contBox">
                <div className="flex flex-col gap-4 stake-list-box">
                  {[
                    index === 0
                      ? [
                        "Overwhelmed by constant security alerts and false positives",
                        "Lack of specialized security expertise on your team",
                        "Difficulty keeping up with evolving threats and vulnerabilities",
                      ]
                      : [
                        "Unpredictable costs of security incidents and breaches",
                        "High cost of building an in-house security team",
                        "Difficulty quantifying security ROI and risk exposure",
                      ],
                    index === 0
                      ? [
                        "24/7 monitoring with expert triage and response",
                        "Access to a team of certified security professionals",
                        "Proactive threat hunting and vulnerability management",
                      ]
                      : [
                        "Predictable monthly security costs with no surprises",
                        "Fraction of the cost of an in-house security team",
                        "Clear reporting on risk reduction and security posture",
                      ],
                  ].flatMap((textArr, i) =>
                    textArr.map((text, j) => (
                      <div className="flex items-start" key={`${i}-${j}`}>
                        <div
                          className={`$ {
                            i === 0
                              ? "bg-red-100 text-red-700"
                              : "bg-emerald-100 text-emerald-700"
                          } rounded-full p-0 mr-2 mt-0`}
                        >
                          <span className="block w-5 h-45text-center text-md font-bold text-[#01aaeb] cross-rht-ic">
                            {i === 0 ? "✗" : "✓"}
                          </span>
                        </div>
                        <p className="list-stake-txt font-medium mb-0">{text}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityStakeholders;
