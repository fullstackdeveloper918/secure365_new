"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export default function HeroSection({ serviceList }) {
  const [videoStarted, setVideoStarted] = useState(false);
  const [showLeftText, setShowLeftText] = useState(false);
  const [showRightText, setShowRightText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  // GSAP ScrollTrigger for smooth scaling
  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;
    const image = imageRef.current;
    const section = sectionRef.current;
    // GSAP timeline for scaling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=500", // Adjusted scroll distance for better UX
        scrub: 4.5, // Smooth scrubbing
        pin: true, // Pin the section
        anticipatePin: 1,
        onUpdate: (self) => {
          // Check if animation is complete (progress === 1)
          if (self.progress === 1) {
            setImageVisible(false); // Trigger fade-out
          }
        },
        onComplete: () => {
          console.log("ScrollTrigger completed: scale reached 20");
        },
      },
    });
    // Scale image from 1 to 20
    tl.to(image, {
      scale: 4,
      ease: "none",
      transformOrigin: "center center",
    });
    // tl.to({}, { duration: 1.5 });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);
  // When image fades out, start video and text animations
  useEffect(() => {
    console.log("imageVisible:", imageVisible, "videoStarted:", videoStarted);
    if (!imageVisible && !videoStarted) {
      const video = videoRef.current;
      if (video) {
        console.log("Attempting to play video");
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video started successfully");
              setVideoStarted(true);
              setTimeout(() => {
                console.log("Showing left text");
                setShowLeftText(true);
              }, 500);
              setTimeout(() => {
                console.log("Showing right text");
                setShowRightText(true);
              }, 1500);
              setTimeout(() => {
                console.log("Showing button");
                setShowButton(true);
              }, 2500);
            })
            .catch((error) => {
              console.error("Video play error:", error);
              setVideoStarted(true); // Proceed even if video fails
              setTimeout(() => {
                console.log("Showing left text (on error)");
                setShowLeftText(true);
              }, 500);
              setTimeout(() => {
                console.log("Showing right text (on error)");
                setShowRightText(true);
              }, 1500);
              setTimeout(() => {
                console.log("Showing button (on error)");
                setShowButton(true);
              }, 2500);
            });
        }
      } else {
        console.log("No video ref, triggering text animations");
        setVideoStarted(true);
        setTimeout(() => setShowLeftText(true), 500);
        setTimeout(() => setShowRightText(true), 1500);
        setTimeout(() => setShowButton(true), 2500);
      }
    }
  }, [imageVisible, videoStarted]);
  // Setup video playback rate and event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.8;
      video.onloadedmetadata = () => {
        video.currentTime = 0;
        console.log("Video metadata loaded, reset to start");
      };
      video.onerror = (e) => {
        console.error("Video error:", e);
      };
    }
  }, []);
  return (
    <section
      ref={sectionRef}
      className="hero-sec relative min-h-[100vh] flex items-center main-secure-banner z-0 overflow-hidden"
    >
      {/* Background video */}
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
              src="/planet/New-Banner-Window.png"
              alt="Airplane window view"
              className="w-full h-full object-cover"
              draggable={false}
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Content container */}
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
              <div className="relative z-20 min-h-[56px] flex items-center ban-btn-wrapper">
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
                        className="bg-[#00AEEF] hover:bg-[#0099D4] text-white rounded-lg start-mission-btn px-6 py-3 inline-block"
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