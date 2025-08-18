"use client";
import { useEffect, useRef } from "react";
import { Zap, LineChart, Smartphone, Search } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebVitalsBenchmarks() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const noteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
      }).from(
        noteRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
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
  ];

  return (
    <section
      className="relative core-web-vit-sec"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center core-web-head relative">
          Core Web Vitals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-md text-center vital-card-box"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4 vital-icon-box">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 inline-block">{stat.title}</h3>
              </div>
              <p className="text-slate-600 mb-4">Our sites average:</p>
              <div className="text-3xl font-bold text-[#01aaeb]">
                {stat.value}
              </div>
              <p className="text-sm text-slate-500 mt-2">{stat.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" ref={noteRef}>
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md vital-highlight">
            <div className="flex items-center justify-center">
              <Search className="h-5 w-5 text-emerald-600 mr-2" />
              <p className="font-medium mb-0">
                Google now uses Core Web Vitals as a ranking factor for search
                results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
