"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TextScrollAnimation() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const canvasRef = useRef(null);

  const words = [
    "Speed",
    "Retention",
    "Conversion",
    "Satisfaction",
    "Engagement",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const wordElements = wordsRef.current;

    if (!container || wordElements.length === 0) return;

    // Set initial state - all words invisible
    gsap.set(wordElements, {
      opacity: 0,
      y: 100,
      scale: 0.8,
    });

    // Timeline for scroll-triggered text animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    wordElements.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        index * 0.8
      );

      if (index < wordElements.length - 1) {
        tl.to(
          word,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          index * 0.8 + 1.2
        );
      }
    });

    // Cleanup GSAP triggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 500;

    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          velocity: Math.random() * 0.5 + 0.1,
          color:
            "rgba(255, 255, 255, " + (Math.random() * 0.7 + 0.3).toFixed(2) + ")",
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });
    }

    function animateStars() {
      stars.forEach((star) => {
        star.x += star.velocity;
        if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }
      });
      drawStars();
      requestAnimationFrame(animateStars);
    }

    initCanvas();
    animateStars();

    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, []);

  return (
    <div className="bg-black text-white">
      <section
        ref={containerRef}
        className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
      >
        {/* Canvas background */}
        <canvas
          id="galaxyCanvas"
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        ></canvas>
        {/* <video
          src="/Dark-blue-sky.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          autoPlay
          muted
          loop
          playsInline
        ></video> */}
        <div className="overlay-box absolute top-0 left-0 w-full h-full"></div>

        <h1 className="text-white text-2xl font-medium relative z-10 mb-4">
          RESULT THAT MATTER
        </h1>

        <div className="text-center relative z-10 space-y-2">
          {words.map((word, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className="flex justify-center"
            >
              <h2 className="text-[calc(1rem+4vw)] leading-[calc(1rem+4vw)] tracking-[-0.15vw] font-medium text-white">
                {word}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
