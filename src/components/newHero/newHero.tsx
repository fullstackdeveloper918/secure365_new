"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroSectionMain from "../hero-banner/HeroSectionMain";
import { Rocket } from "lucide-react";

export default function BannerSection({ data }: any) {
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLButtonElement>(null);
  const rocketTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.set(textRef.current, {
      opacity: 0,
      y: 100,
      zIndex: 10,
    });

    const textElements = contentRef.current?.querySelectorAll("h1, p");
    if (textElements) {
      gsap.set(textElements, { opacity: 0, y: 50 });
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to("video", {
      scale: 1.1,
      opacity: 0.9,
      duration: 1,
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    if (textElements) {
      textElements.forEach((element, index) => {
        tl.to(
          element,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          `>-0.3`
        );
      });
    }

    // Floating animation
    if (rocketRef.current) {
      gsap.to(rocketRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });
    }

    // Fade-in rocket text
    if (rocketTextRef.current) {
      gsap.fromTo(
        rocketTextRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, delay: 2.5, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("RocketSecond");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <div className="content" ref={contentRef}>
          <section className="section hero">
            <video
              src="/banner-videonew.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div className="hero-text" ref={textRef}>
              <HeroSectionMain data={data} />
            </div>

            {/* 🚀 Combined button with icon and text */}
            <button
              ref={rocketRef}
              className="rocket-wrapper"
              onClick={scrollToNext}
              aria-label="Scroll to next section"
            >
              {/* <Rocket className="rocket-icon" style={{transform : 'rotate(135deg) !important'}}/> */}
              <div className="arrowdown">
  <a href="#" className="bounce">&#8595;</a> 
</div>
{/* 
              <span ref={rocketTextRef} className="rocket-text">
                Click to Explore More
              </span> */}
            </button>
          </section>
        </div>
      </div>

      <style jsx>{`
        .wrapper,
        .content {
          position: relative;
          width: 100%;
          z-index: 1;
        }

        .section.hero {
          width: 100%;
          height: 100vh;
          position: relative;
          z-index: 3;
          overflow: hidden;
        }

        video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }

        .hero-text {
          position: absolute;
          z-index: 10;
          top: 50%;
          left: 0    %;
          transform: translateY(-50%);
          opacity: 0;
          color: white;
          width: 100%;
          max-width: 1200px;
        }

        .rocket-wrapper {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: rgba(0, 171, 239, 0.7);
          border: none;
          cursor: pointer;
          z-index: 999;
        }
        .rocket-icon {
          width: 26px !important;
          height: 26px !important;
    transform: rotate(135deg) !important;
        }

        .rocket-text {
          color: white;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.85;
        }
      `}</style>
    </>
  );
}
