"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { ChevronRight, Shield, Rocket, Video } from "lucide-react";
import Link from "next/link";
// import bannerobert from "../../../public/images/bannerobert.png";

export default function HeroSectionMain({ data }: any) {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  // Use a more efficient way to handle scroll animations
  // by reducing the number of transform calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Optimize parallax effects by using simpler transforms
  // and reducing the number of dependencies
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Simplify animations to improve performance
  useEffect(() => {
    controls.start({
      y: [0, 15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-space-gradient main-hero-banner"
      id="hero"
      style={{
        willChange: "transform", // Hint to browser for optimization
        contain: "layout paint size", // Improve rendering performance
      }}
    >
      {/* <video
        autoPlay
        loop
        className="banner-video"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      >
        <source 
        src="/banner-videonew.mp4" 

        type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div
        className="absolute inset-0 z-0 bg-stars"
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      />

      <div className="container mx-auto relative z-[9999] bannercontent">
        <motion.div
          className="main_banner"
          style={{
            y: textY,
            opacity: textOpacity,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
      
          {data && (
            <motion.h1
              key={data?.home_advanced_it_and_cyber_security_first_heading}
              className="text-[12vw] leading-[13vw] sm:leading-[5xl] md:leading-[6xl] sm:text-3xl md:text-6xl xl:text-5xl 2xl:text-8xl mb-6 text-left main-ban-home"
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .9, delay: 0.7 }}
              
            >
              <motion.span className="text-white block"
               
              >
                {data.home_advanced_it_and_cyber_security_first_heading}
                

              </motion.span>

              
              <span className="colorblue"
              >
                {data.home_advanced_it_and_cyber_security_second}
              </span>

              <br />
              <motion.span className="bg-clip-text text-transparent"
               initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              >
                {data.home_advanced_it_and_cyber_security_third}
              </motion.span>
            </motion.h1>
          )}

          <motion.p
            className="text-md xl:text-md 2xl:text-xl text-white mb-6 xl:mb-12 max-w-2xl text-left mx-auto"
             initial={{ opacity: 0, y: 600 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration:1.7, delay: 1.7 }}
          >
            {data?.home_advanced_it_and_cyber_security_paragraph}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 btn-mission"
            initial={{ opacity: 0, y: 220 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2 }}
          >
            {data?.home_advanced_it_and_cyber_security_fourth && (
              <button className="relative z-[9999] bannerbtn">
                <Link className="header-button ajax-link" href="/contact-us">
                  <div className="button-icon-link right">
                    <div className="icon-wrap-scale">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                          <Rocket className="ml-2 h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <div className="button-text sticky right">
                      {/* <span data-hover="Let's Talk">Start Your Mission <Rocket className="ml-2 h-5 w-5" /></span> */}
                      <span data-hover="Let's Talk">
                        {data?.home_advanced_it_and_cyber_security_fourth}
                      </span>
                    </div>
                  </div>
                </Link>
                {/* <Link
                href="/contact-us"
                id="btnTwo"
                className="BtnTwo btnWrapper rounded-[50px] text-white px-6 py-3 flex items-center justify-center"
              >
                Start Your Mission <Rocket className="ml-2 h-5 w-5" />
              </Link> */}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030508] to-transparent z-1"></div> */}
    </section>
  );
}
