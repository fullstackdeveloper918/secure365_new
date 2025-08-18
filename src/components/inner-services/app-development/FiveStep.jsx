import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FiveStepSprint = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const stars = useRef([]);

  const steps = [
    {
      icon: "fas fa-search",
      title: "1. Discovery",
      text: "We dive deep into your business goals, user needs, and technical requirements to create a solid foundation.",
    },
    {
      icon: "fas fa-pencil-ruler",
      title: "2. Design",
      text: "We create wireframes, prototypes, and user flows that ensure an intuitive and engaging user experience.",
    },
    {
      icon: "fas fa-code",
      title: "3. Development",
      text: "Our engineers build your application using modern technologies and best practices for performance and scalability.",
    },
    {
      icon: "fas fa-bug",
      title: "4. Testing",
      text: "Rigorous quality assurance and user testing ensure your application is bug-free and user-friendly.",
      colSpan: "md:col-span-1",
    },
    {
      icon: "fas fa-rocket",
      title: "5. Launch & Growth",
      text: "We deploy your application and provide ongoing support, maintenance, and feature enhancements.",
      colSpan: "md:col-span-2",
    },
  ];

  useEffect(() => {
    gsap.utils.toArray(".step").forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
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
            <h2 className="step-5-head font-bold text-center mb-4 text-[#01aaeb]">
              Our 5-Step Build Sprint
            </h2>
            <p className="text-white mb-16 text-center mx-auto step-5-para">
              From idea to impact, our streamlined 5-step process transforms your
              vision into a powerful digital product. Each phase is thoughtfully
              designed to ensure clarity, quality, and measurable growth — setting
              the stage for long-term success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`step p-6 rounded-lg shadow-lg ${step.colSpan || ""}`}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="text-[#01aaeb] text-3xl mb-4">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
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
  );
};

export default FiveStepSprint;
