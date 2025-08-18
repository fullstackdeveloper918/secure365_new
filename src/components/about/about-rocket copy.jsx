"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Rocket } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const RocketAnimation = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const canvasRef = useRef(null);
  const animatedTextRef = useRef(null);
  const contentContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w, h;
    let stars;

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

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    tl.to(
      imgRef.current,
      {
        x: "-30vw",
        y: "-50vh",
        ease: "power1.out",
      },
      0
    );

    tl.to(
      img2Ref.current,
      {
        x: "-35vw",
        y: "-40vh",
        ease: "power1.out",
      },
      0.5
    );

    tl.fromTo(
      animatedTextRef.current,
      {
        opacity: 0,
        y: 700,
      },
      {
        opacity: 1,
        y: 100,
        duration: 1.5,
        ease: "power1.out",
      },
      1
    );

    tl.fromTo(
      contentContainerRef.current,
      {
        opacity: 0,
        y: 700,
      },
      {
        opacity: 1,
        y: 100,
        duration: 1.5,
        ease: "power1.out",
      },
      ">"
    );

    tl.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
      },
      ">"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    const handleMouseEnter = () => {
      if (video) video.pause();
    };

    const handleMouseLeave = () => {
      if (video) video.play();
    };

    if (section) {
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef} id="RokcetSecond"
      className="min-h-[100vh] bg-black relative overflow-hidden bottomContent"
    >
      <div className="bannerBottom" id="RokcetSecond">
        <video
          ref={videoRef}
          className="play-video absolute inset-0 w-full z-[1]"
          loop={true}
          muted={true}
          autoPlay={true}
          playsInline={true}
        >
          <source src="/bannerBottom.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <canvas
        id="starfield"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: "radial-gradient(#04071f 0%, #04071e 70%)" }}
      /> */}
      <div className="p-10 ">
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
      <h2
        ref={animatedTextRef}
        className="relative z-30 text-3xl xl:text-5xl max-w-2xl xl:max-w-3xl text-white font-semibold text-left pl-10 xl:pl-20 uppercase paragrpahContent"
      >
        Navigating Your Business Through the Stars.. and Safeguarding Every Step
      </h2>

      <div
        ref={contentContainerRef}
        className="relative z-30 mt-4 pb-40 text-left md:max-w-2xl pl-10 xl:pl-20"
      >
        <div className="text-md leading-relaxed font-medium text-white">
          Think of Secure365 as your interstellar co-pilot, guiding you safely
          through the ever-expanding cosmos of modern technology. We blend
          visionary web development with rock-solid IT services, cloud
          solutions, and cybersecurity—ensuring that no matter which galaxy (or
          market) you're aiming for, you'll arrive unscathed. Our mission?
          Simple: to help your brand thrive and remain secure, from initial
          launch to the far reaches of tomorrow.
        </div>
        <button
          ref={buttonRef}
          className="relative mt-4 z-[9999] bannerbtn"
          data-aos="fade-up"
        >
          <Link className="header-button ajax-link" href="/about-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <Rocket className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Let's Talk">About us</span>
              </div>
            </div>
          </Link>
        </button>
      </div>
      <div className={`cloud-inner-box cloudImage`}>
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
        .scroll-animation {
          position: relative;
        }
        .pin-section {
          overflow: hidden;
        }


        @media (max-width:1366px){
             .cloudImage {
          bottom: -30px;
        }
          }
      `}</style>
    </div>
  );
};

export default RocketAnimation;
