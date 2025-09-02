"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection({ serviceList }) {
  const [videoStarted, setVideoStarted] = useState(false);
  const [showLeftText, setShowLeftText] = useState(false);
  const [showRightText, setShowRightText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const [scrollLocked, setScrollLocked] = useState(true);
  const [scalingDone, setScalingDone] = useState(false);

  const videoRef = useRef(null);
  const imageRef = useRef(null);

  // Lock scroll on mount during image scaling phase
  useEffect(() => {
    if (scrollLocked) {
      const preventScroll = (e) => {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [scrollLocked]);

  // Handle the first scroll wheel event for immediate full scaling
  useEffect(() => {
    if (!scrollLocked || scalingDone) return;

    const maxDelta = 100; // max pixels scroll to scale image fully
    const minScale = 1;
    const maxScale = 3;

    const onWheel = (e) => {
      if (scalingDone) return;

      if (e.deltaY <= 0) return; // ignore scroll up

      // Calculate scale proportionally from deltaY capped at maxDelta
      const cappedDelta = Math.min(e.deltaY, maxDelta);
      const scale =
        minScale + ((cappedDelta / maxDelta) * (maxScale - minScale));

      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${scale})`;
      }

      // If user scrolls enough in this single event, finish scaling
      if (e.deltaY >= maxDelta) {
        setScalingDone(true);
        setScrollLocked(false);
        setImageVisible(false);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (imageRef.current) {
        imageRef.current.style.transform = "";
      }
    };
  }, [scrollLocked, scalingDone]);

  // When image faded out, start video and text animations
  useEffect(() => {
    if (!imageVisible && !videoStarted) {
      const video = videoRef.current;
      if (video) {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setVideoStarted(true);
              setTimeout(() => setShowLeftText(true), 500);
              setTimeout(() => setShowRightText(true), 1500);
              setTimeout(() => setShowButton(true), 2500);
            })
            .catch(() => {
              setVideoStarted(true);
              setTimeout(() => setShowLeftText(true), 500);
              setTimeout(() => setShowRightText(true), 1500);
              setTimeout(() => setShowButton(true), 2500);
            });
        }
      }
    }
  }, [imageVisible, videoStarted]);

  // Setup video playback rate and event handlers once on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.8;
      video.onloadedmetadata = () => {
        video.currentTime = 0;
      };
      video.onerror = (e) => {
        console.error("Video error:", e);
      };
    }
  }, []);

  return (
    <section className="hero-sec relative min-h-[100vh] flex items-center main-secure-banner z-0 overflow-hidden">
      {/* Background video fixed and full cover */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          {...(videoStarted ? { autoPlay: true, loop: true } : {})}
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/hero-banner-video.mp4"
          muted
          playsInline
        />
      </div>

      {/* Image overlay */}
      <AnimatePresence>
        {imageVisible && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              ref={imageRef}
              // src="/hero2.png"
              src="/planet/New-Banner-Window.png"
              alt="Airplane window view"
              className="w-full h-full object-cover"
              draggable={false}
              style={{
                transformOrigin: "center center",
                willChange: "transform",
                position: "absolute",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content container with text and button */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-6">
          <div className="flex gap-12 items-end min-h-screen ban-inner-wrapper">
            {/* Left Text */}
            <div className="main-head-banner-box">
              <AnimatePresence>
                {showLeftText && (
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="main-banner-heading text-white font-semibold mb-0 relative z-20"
                  >
                    {serviceList.home_advanced_it_and_cyber_security_first_heading}
                    <br />
                    {serviceList.home_advanced_it_and_cyber_security_second}
                    <br />
                    <span>
                      {serviceList.home_advanced_it_and_cyber_security_third}
                    </span>
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            {/* Right Text and Button */}
            <div className="space-y-8 ban-content-box">
              <AnimatePresence>
                {showRightText && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6 main-banner-para-box relative z-20 p-0 m-0"
                  >
                    <p className="main-banner-paraTxt text-white mb-0">
                      {serviceList.home_advanced_it_and_cyber_security_paragraph}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-20 min-h-[56px] flex items-center">
                <AnimatePresence>
                  {showButton && (
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Link
                        href={"/contact-us"}
                        className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg start-mission-btn px-6 py-3 inline-block"
                      >
                        {serviceList.home_advanced_it_and_cyber_security_fourth}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute z-10 scroll-down-button">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center text-white/70 cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
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
  );
}