import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FiveStepSprint = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const stars = useRef([]);

const Our_5_Step_Build_Sprint =
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

  useEffect(() => {
    gsap.utils.toArray(".step").forEach((step) => {
      gsap.fromTo(
        step,
        { opacity:1, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 0%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      if (!canvas || !sectionRef.current) return;
      canvas.width = sectionRef.current.clientWidth;
      canvas.height = sectionRef.current.clientHeight;
    }

    function initStars(count) {
      stars.current = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        stars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          baseRadius: radius,
          speed: Math.random() * 0.3 + 0.05,
          alpha: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars.current) {
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 1.5
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animateStars() {
      for (let star of stars.current) {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.3) {
          star.twinkleSpeed *= -1;
        }
      }
      drawStars();
      requestAnimationFrame(animateStars);
    }

    resizeCanvas();
    initStars(200);
    animateStars();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <>
 
    <div className="relative bg-black text-white overflow-x-hidden">
      <section ref={sectionRef} className="relative z-10 bg-black overflow-hidden step-5-sec">
        {/* Canvas restricted to section */}
        <div className="relative w-full h-full">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
            style={{ filter: "blur(0.3px)" }}
          />
          {/* Galaxy Image */}
          <img
            src="/space-galaxy-big11.png"
            alt=""
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
          />
          {/* Content */}
          <div className="relative z-10 py-20 container mx-auto px-4">
            <h2 className="step-5-head font-semibold text-center mb-4 text-[#01aaeb]">
              {/* Our 5-Step Build Sprint */}
              {Our_5_Step_Build_Sprint.title}
            </h2>
            <p className="text-white mb-16 text-center mx-auto step-5-para">
              {/* From idea to impact, our streamlined 5-step process transforms your
              vision into a powerful digital product. Each phase is thoughtfully
              designed to ensure clarity, quality, and measurable growth — setting
              the stage for long-term success. */}
              {Our_5_Step_Build_Sprint.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Our_5_Step_Build_Sprint?.steps?.map((step, idx) => (
                <div
                  key={idx}
                  className={`step card-5-time translate-none p-6 rounded-lg shadow-lg ${step.colSpan || ""}`}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    opacity:"1 !important",
                    transform:"translate(0,0) !important;"
                  }}
                >
                  <div className="text-[#01aaeb] text-3xl mb-4">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default FiveStepSprint;
