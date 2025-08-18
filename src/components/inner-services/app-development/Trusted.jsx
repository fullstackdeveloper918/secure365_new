import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(logoRefs.current, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const logos = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"];

  return (
    <section className="py-12 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-medium text-center text-slate-600 mb-8">
          Trusted By
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((text, index) => (
            <div
              key={index}
              className="w-32 h-12 bg-slate-200 rounded flex items-center justify-center"
              ref={(el) => (logoRefs.current[index] = el)}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
