"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ serviceList }) {
  const sectionRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const buttonRef = useRef(null);
  const topImgRef = useRef(null);
  const bgImgRef = useRef(null);
  const canvasRef = useRef(null);

  const [bgZIndex, setBgZIndex] = useState(2000);

  useEffect(() => {
    if (!sectionRef.current) return;

    // GSAP ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        scrub: 1.5,
        pin: true,
      },
    });

    // Hide text & button initially
    gsap.set([leftTextRef.current, rightTextRef.current, buttonRef.current], {
      opacity: 0,
      y: 150,
    });

    // Top image scale → z-index to 0 after scaling
    tl.to(
      topImgRef.current,
      {
        scale: 3.5,
        ease: "power1.inOut",
        duration: 3,
        onComplete: () => {
          gsap.set(topImgRef.current, { zIndex: 0 });
        },
      },
      0
    );

    // Background image slight scale
    tl.to(bgImgRef.current, { scale: 1.2, ease: "power1.inOut", duration: 3 }, 0);

    // Text & button animation sequentially
    tl.to(leftTextRef.current, { opacity: 1, y: 0, duration: 3, ease: "power1.out" }, 0.2);
    tl.to(rightTextRef.current, { opacity: 1, y: 0, duration: 3, ease: "power1.out" }, 0.6);
    tl.to(buttonRef.current, { opacity: 1, y: 0, duration: 3, ease: "power1.out" }, 0.8);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);



  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  // Set initial size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", handleResize);

  // Create stars
  const stars = Array.from({ length: 200 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    opacity: Math.random(),
    delta:
      (Math.random() * 0.03 + 0.01) * (Math.random() < 0.5 ? 1 : -1), // blink speed
  }));

  // Fog animation variables
  let fogX = canvas.width * 0.7; // start at right side
  let fogY = 0;
  const fogSpeedX = 0.1; // slow horizontal drift
  const fogSpeedY = 0.05; // vertical drift

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ---- Draw stars everywhere ----
    stars.forEach((s) => {
      s.opacity += s.delta;
      if (s.opacity > 1) {
        s.opacity = 1;
        s.delta = -s.delta;
      }
      if (s.opacity < 0.2) {
        s.opacity = 0.2;
        s.delta = -s.delta;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
      ctx.fill();
    });

    // ---- Draw fog only on right side ----
    const fogGradient = ctx.createLinearGradient(
      canvas.width * 0.7, fogY, // start fade around 70% width
      canvas.width, canvas.height
    );

    fogGradient.addColorStop(0, "rgba(255,255,255,0)");   // transparent blend
    fogGradient.addColorStop(1, "rgba(255,255,255,0.15)"); // soft fog

    ctx.fillStyle = fogGradient;
    ctx.fillRect(canvas.width * 0.7, 0, canvas.width * 0.3, canvas.height);

    // Move fog (gentle drift)
    fogX += fogSpeedX;
    fogY += fogSpeedY;

    if (fogY > canvas.height) fogY = -canvas.height;

    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
<>
     {/* Top Image */}
      <div ref={topImgRef} className="fixed inset-0 z-[2000]">
        <img src="/hero2.png" className="w-full h-full object-cover" />
      </div>
    <section
      ref={sectionRef}
      className={`hero-sec relative min-h-[100vh] flex items-center overflow-hidden main-secure-banner `}
    //   style={{ zIndex: bgZIndex }}
    >
      {/* Background Image */}
      <div ref={bgImgRef} className="fixed inset-0 overflow-hidden">
        <img src="/hero_019.jpg" className="w-full h-full object-cover" />
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

     

      {/* Pinned Content */}
      <div className="relative z-20 w-full sticky top-0 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row gap-4 items-end justify-between min-h-screen ban-inner-wrapper md:text-left">
            {/* Left Heading */}
            <div className="main-head-banner-box">
              <h1
                ref={leftTextRef}
                className="main-banner-heading text-white font-semibold mb-0 text-4xl md:text-6xl leading-tight"
              >
                {serviceList?.home_advanced_it_and_cyber_security_first_heading}
                <br />
                {serviceList?.home_advanced_it_and_cyber_security_second}
                <br />
                <span className="text-[#00AEEF]">
                  {serviceList?.home_advanced_it_and_cyber_security_third}
                </span>
              </h1>
            </div>

            {/* Right Side */}
            <div ref={rightTextRef} className="space-y-8 ban-content-box">
              <div className="space-y-6 main-banner-para-box">
                <p className="main-banner-paraTxt text-white mb-0">
                  {serviceList?.home_advanced_it_and_cyber_security_paragraph}
                </p>

                <div ref={buttonRef}>
                  <Link
                    href={"/contact-us"}
                    className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg start-mission-btn inline-block px-8 py-3 font-semibold transition-colors duration-300"
                  >
                    {serviceList?.home_advanced_it_and_cyber_security_fourth}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Button */}
          <div className="absolute z-30 scroll-down-button transform">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center text-white/70 cursor-pointer hover:text-white transition-colors"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <img
                src="/Scroll-down-icon.svg"
                alt="scroll-down-icon"
                className="me-2"
              />
              <div className="text-sm text-white font-normal">Scroll Down</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
