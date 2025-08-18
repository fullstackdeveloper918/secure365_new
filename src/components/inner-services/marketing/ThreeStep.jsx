"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. Discovery",
    description:
      "We dive deep into your business goals, user needs, and technical requirements to create a solid foundation.",
  },
  {
    title: "2. Design",
    description:
      "We create wireframes, prototypes, and user flows that ensure an intuitive and engaging user experience.",
  },
  {
    title: "3. Development",
    description:
      "Our engineers build your application using modern technologies and best practices for performance and scalability.",
  },
];

export default function ThreeStepBuildSprint() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".step").forEach((stepEl) => {
        gsap.fromTo(
          stepEl,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepEl,
              start: "top 80%",
              toggleActions: "play none none reverse",
              once: false,
              markers: false, // set to true for debugging
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-slate-50 py-20 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our 3-Step Build Sprint
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200 transform -translate-x-1/2 hidden md:block" />
          <div className="space-y-24 relative">
            {steps.map((step, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className="step opacity-0 md:grid md:grid-cols-2 md:gap-10 items-center"
                >
                  {isOdd ? (
                    <>
                      <div className="hidden md:flex justify-end items-center">
                        <div className="bg-[#00aceb] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 text-lg font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-xl font-bold mb-2 text-[#00aceb]">
                            {step.title}
                          </h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:text-right">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-xl font-bold mb-2 text-[#00aceb]">
                            {step.title}
                          </h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:flex justify-start items-center">
                        <div className="bg-[#00aceb] text-white rounded-full w-10 h-10 flex items-center justify-center z-10 text-lg font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
