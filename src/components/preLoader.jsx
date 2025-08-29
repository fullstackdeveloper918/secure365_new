"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const progressRef = useRef(null);
  const progressTextRef = useRef(null);
  const loadingTextRef = useRef(null);
  const countdownRef = useRef(null);
  const rocketRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [hide, setHide] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  // Show preloader only once per session
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("preloaderLoaded");
    if (!hasLoaded) {
      setShowPreloader(true);
    } else {
      if (typeof onComplete === "function") onComplete();
    }
  }, [onComplete]);

  // Increment progress
  useEffect(() => {
    if (!showPreloader) return;
    if (progress >= 100) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 60);

    return () => clearInterval(interval);
  }, [progress, showPreloader]);

  // Sync progress bar & text; trigger countdown on completion
  useEffect(() => {
    if (!showPreloader) return;
    if (progressRef.current) progressRef.current.style.width = `${progress}%`;
    if (progressTextRef.current) progressTextRef.current.textContent = `${progress}%`;

    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => setCountdown(3),
      });
      tl.to(loadingTextRef.current, { opacity: 0, duration: 0.8 }, 0);
      tl.to(progressRef.current, { opacity: 0, duration: 0.8 }, 0);
      tl.to(progressTextRef.current, { opacity: 0, duration: 0.8 }, 0);
      tl.to(countdownRef.current, { opacity: 1, duration: 0.8 }, 0);
    }
  }, [progress, showPreloader]);

  // Countdown and rocket blastoff animation
  useEffect(() => {
    if (!showPreloader) return;
    if (countdown === null) return;

    if (countdown === 0) {
      if (rocketRef.current) {
        const tl = gsap.timeline();
        tl.to(rocketRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "power1.out",
        });
        tl.to(
          rocketRef.current,
          {
            y: -window.innerHeight * 1.2,
            opacity: 0,
            duration: 1.5,
            ease: "power3.in",
          },
          ">"
        );
      }

      setTimeout(() => {
        setHide(true);
        sessionStorage.setItem("preloaderLoaded", "true");
        if (typeof onComplete === "function") onComplete();
      }, 1800);

      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, onComplete, showPreloader]);

  // Loading text flicker effect
  useEffect(() => {
    if (!showPreloader) return;
    if (!loadingTextRef.current) return;

    const flicker = gsap.to(loadingTextRef.current, {
      opacity: 0.7,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    return () => flicker.kill();
  }, [showPreloader]);

  if (!showPreloader || hide) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center select-none z-[9999] transition-opacity duration-1000 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-live="polite"
      aria-label="Loading your experience"
      role="progressbar"
      aria-busy={progress < 100}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      style={{
        background:
          "radial-gradient(circle at center, #1d2a44, #090a0f 70%), " +
          "radial-gradient(circle at 30% 20%, #0b3d91, transparent 60%), " +
          "radial-gradient(circle at 80% 70%, #0b3d91, transparent 50%)",
        overflow: "hidden",
      }}
    >
      {/* Galaxy background with glowing Earth */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          aria-hidden="true"
          className="relative w-72 h-72 rounded-full bg-gradient-radial from-[#1a4e7a] via-[#3b7abf] to-[#0d1c2c] shadow-[0_0_80px_#3b7abf] animate-glowPlanet"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_70%)]" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.3),transparent_70%)]" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_90%)]" />
        </div>

        {/* Star fields */}
        <div
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-repeat bg-center opacity-40 animate-starTwinkle"
          style={{ backgroundSize: "40px 40px" }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-repeat bg-center opacity-25 animate-starTwinkle"
          style={{ backgroundSize: "70px 70px" }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(white_0.8px,transparent_0.8px)] bg-repeat bg-center opacity-15 animate-starTwinkle"
          style={{ backgroundSize: "25px 25px" }}
        />
      </div>

      {/* Rocket and trail */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          aria-hidden="true"
          className="absolute bottom-14 w-3 h-24 rounded-full bg-gradient-to-t from-[#00aeef] to-transparent filter blur-xl opacity-60 drop-shadow-[0_0_15px_#00aeef]"
          style={{ filter: "drop-shadow(0 0 15px #00aeef)" }}
        />
        <div
          ref={rocketRef}
          aria-hidden="true"
          className="text-8xl drop-shadow-[0_0_15px_#00aeef] animate-rocketLift"
        >
          🚀
        </div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 w-[80vw] max-w-xs text-center mt-6 select-text">
        {countdown === null ? (
          <>
            <h1
              ref={loadingTextRef}
              className="font-extrabold text-2xl mb-6 tracking-widest text-white select-text"
            >
              Loading your experience
            </h1>
            <div
              className="w-full h-3 rounded-lg bg-white/10 mb-3 shadow-[0_0_10px_#00aeef]"
              aria-hidden="true"
            >
              <div
                ref={progressRef}
                className="h-full rounded-lg bg-gradient-to-r from-[#00aeef] to-[#0099d4] shadow-[0_0_15px_#00aeefff]"
                style={{ width: "0%" }}
              />
            </div>
            <span
              ref={progressTextRef}
              className="font-semibold text-lg tracking-widest text-[#00aeef] drop-shadow-[0_0_5px_#00aeef]"
            >
              0%
            </span>
          </>
        ) : countdown > 0 ? (
          <h1 className="font-extrabold text-6xl text-[#00aeef] drop-shadow-[0_0_20px_#00aeef]">
            {countdown}
          </h1>
        ) : (
          <h1 className="font-extrabold text-6xl text-[#00aeef] drop-shadow-[0_0_20px_#00aeef]">
            Blast Off!
          </h1>
        )}
      </div>

      <style jsx>{`
        @keyframes starTwinkle {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }
        .animate-starTwinkle {
          animation-name: starTwinkle;
          animation-duration: 40s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes rocketLift {
          0% {
            transform: translateY(0);
            filter: drop-shadow(0 0 15px #00aeef);
          }
          100% {
            transform: translateY(-10px);
            filter: drop-shadow(0 0 25px #00d4ff);
          }
        }
        .animate-rocketLift {
          animation-name: rocketLift;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
        }

        @keyframes glowPlanet {
          0%,
          100% {
            box-shadow: 0 0 80px #3b7abf;
          }
          50% {
            box-shadow: 0 0 100px #5599ff;
          }
        }
        .animate-glowPlanet {
          animation: glowPlanet 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}