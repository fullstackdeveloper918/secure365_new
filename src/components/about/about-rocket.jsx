"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rocket } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const RocketAnimation = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const canvasRef = useRef(null);

  // AOS Init
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Starfield Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w, h, stars;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random() * 360,
        v: Math.random() * 0.2 + 0.05,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FFFFFF";
      stars.forEach((s) => {
        s.x += Math.cos(s.a) * s.v;
        s.y += Math.sin(s.a) * s.v;
        if (s.x < 0 || s.x > w || s.y < 0 || s.y > h) {
          s.x = Math.random() * w;
          s.y = Math.random() * h;
        }
        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Rocket + Text Animation Trigger
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%", // Animation starts when 30% of section is visible
        once: true,
      },
    });

    // Rocket Animation
    tl.to(
      imgRef.current,
      {
        x: "-40vw",
        y: "-50vh",
        duration: 2,
        ease: "power1.out",
      },
      "+=0.2"
    ).to(
      img2Ref.current,
      {
        x: "-30vw",
        y: "-40vh",
        duration: 2,
        ease: "power1.out",
      },
      "<"
    );
  }, []);

  return (
    <div
      id="RocketSecond"
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="bannerBottom">
        <div className="overlay-navigate"></div>
        <img
          src="/Navigate-Bg.png"
          alt="navigate-bg-image"
          className="navigate-bg"
        />
      </div>

      {/* Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: "radial-gradient(#04071F 0%, #04071E 70%)" }}
      />

      {/* Rocket Images */}
      <div className="p-10">
        <div className="absolute z-[9999] bottom-40 right-[-300px]">
          <img
            ref={imgRef}
            src="/images/rocket1.png"
            alt="rocket 1"
            className="w-60 h-auto object-contain"
          />
        </div>
        <div className="absolute z-[9999] bottom-0 right-[-400px]">
          <img
            ref={img2Ref}
            src="/images/rocket1.png"
            alt="rocket 2"
            className="w-100 h-auto object-contain"
          />
        </div>
      </div>

      {/* Content After Launch */}
      <h2
        className="relative z-30 text-white font-semibold text-left pl-10 xl:pl-20 paragrpahContent"
        style={{
          fontSize: "54px",
          lineHeight: "66px",
          paddingTop: "150px",
          maxWidth: "55%",
        }}
        data-aos="fade-up"
      >
        Navigating Your Business Through the Stars... and Safeguarding <br />
        Every Step
      </h2>

      <div
        className="relative z-30 mt-4 pb-40 text-left xl:max-w-2xl md:max-w-xl max-w-full pl-10 xl:pl-20"
        style={{ fontSize: "16px" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="text-md leading-relaxed font-medium text-white">
          Think of Secure365 as your interstellar co-pilot, guiding you safely
          through the ever-expanding cosmos of modern technology. We blend
          visionary web development with rock-solid IT services, cloud solutions,
          and cybersecurity—ensuring that no matter which galaxy (or market)
          you're aiming for, you'll arrive unscathed. Our mission? Simple: to
          help your brand thrive and remain secure, from initial launch to the far
          reaches of tomorrow.
        </div>

        <button
          className="relative z-[9999] mt-6 bannerbtn"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link className="header-button ajax-link" href="/contact-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <Rocket className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Let's Talk">Contact Us</span>
              </div>
            </div>
          </Link>
        </button>
      </div>

      {/* Cloud Image */}
      <div className="cloud-inner-box cloudImage">
        <img src="/images/Cloud-image.jpg" width={1920} height={1000} />
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: sans-serif;
          background: #111;
          color: white;
          overflow-x: hidden;
        }
        .navigate-bg {
          position: absolute;
          z-index: 10;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay-navigate {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, black, transparent);
          z-index: 11;
        }
        .cloudImage {
          position: absolute;
          bottom: -60px;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
        }
        .cloudImage img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default RocketAnimation;
