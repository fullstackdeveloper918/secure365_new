"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection({ serviceList }) {
  const [videoStarted, setVideoStarted] = useState(false);
  const [showLeftText, setShowLeftText] = useState(false);
  const [showRightText, setShowRightText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scale image from 1 to 3 based on scroll progress (0 to 0.5 scroll progress)
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 3]);

  // Track when scaling animation completes
  const [scalingComplete, setScalingComplete] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.1 && !scalingComplete) {
        setScalingComplete(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, scalingComplete]);

  useEffect(() => {
    if (scalingComplete && imageVisible) {
      // Start fading out the image after scaling completes
      setTimeout(() => {
        setImageVisible(false);
      }, []); // Small delay before fade starts
    }
  }, [scalingComplete, imageVisible]);

  useEffect(() => {
    if (!imageVisible && !videoStarted) {
      const video = videoRef.current;
      if (video) {
        console.log("[v0] Attempting to play video");
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("[v0] Video started playing successfully");
              setVideoStarted(true);

              // Sequential text animations after video starts
              setTimeout(() => {
                setShowLeftText(true);
              }, 500); // Left text after 0.5s
              setTimeout(() => {
                setShowRightText(true);
              }, 1500); // Right text after 1.5s
              setTimeout(() => {
                setShowButton(true);
              }, 2500); // Button after 2.5s
            })
            .catch((error) => {
              console.log("[v0] Video play failed:", error);
              // If autoplay fails, still show the text animations
              setVideoStarted(true);
              setTimeout(() => setShowLeftText(true), 500);
              setTimeout(() => setShowRightText(true), 1500);
              setTimeout(() => setShowButton(true), 2500);
            });
        }
      }
    }
  }, [imageVisible, videoStarted]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
          video.playbackRate = 0.8; // 0.5 = half speed, 2.0 = double speed

      video.onloadedmetadata = () => {
        console.log("[v0] Video metadata loaded");
        video.currentTime = 0;
      };

      video.oncanplay = () => {
        console.log("[v0] Video can start playing");
      };

      video.onerror = (e) => {
        console.log("[v0] Video error:", e);
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-sec relative min-h-[100vh] flex items-center main-secure-banner z-0 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-[100vh] z-0">
       <video
  {...(videoStarted ? { autoPlay: true, loop: true } : {})}
  ref={videoRef}
  className="w-full h-full object-cover"
  src="/hero-banner-video.mp4"
  muted
  playsInline
/>

      </div>

      <AnimatePresence>
        {imageVisible && (
          <div className="absolute inset-0 flex items-center justify-center z-5">
            <motion.img
              src="/hero2.png"
              alt="Airplane window view"
              className="w-full h-full object-cover"
              style={{
                scale: imageScale,
                transformOrigin: "center center",
                willChange: "transform",
                position: "absolute",
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        )}
      </AnimatePresence>

      {/* <div className="absolute inset-0 bg-black/50 z-6" /> */}

      <div className="relative z-4 w-full ">
        <div className="container mx-auto px-6">
          <div className="flex gap-12 items-end min-h-screen ban-inner-wrapper">
            <div className="main-head-banner-box">
              <AnimatePresence>
                {showLeftText && (
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }} // start lower
                    animate={{ y: 0, opacity: 1 }} // move up to position
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="main-banner-heading text-white font-semibold mb-0 relative z-10"
                  >
                    {
                      serviceList.home_advanced_it_and_cyber_security_first_heading
                    }
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

            <div className="space-y-8 ban-content-box">
              {/* Right text */}
              <AnimatePresence>
                {showRightText && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }} // start lower
                    animate={{ y: 0, opacity: 1 }} // move up to position
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6 main-banner-para-box relative z-10 p-0 m-0"
                  >
                    <p className="main-banner-paraTxt text-white mb-0">
                      {
                        serviceList.home_advanced_it_and_cyber_security_paragraph
                      }
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reserve space for button */}
              <div className="relative z-10 min-h-[56px] flex items-center">
                <AnimatePresence>
                  {showButton && (
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Link
                        href={"/contact-us"}
                        className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg start-mission-btn"
                      >
                        {serviceList.home_advanced_it_and_cyber_security_fourth}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

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
