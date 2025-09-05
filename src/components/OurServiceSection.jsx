"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import EarthSection from "./EarthSection";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
export default function AchievementsSection({ serviceList }) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const [showEarth, setShowEarth] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Check if the screen is mobile or tablet (less than 1024px)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  // GSAP ScrollTrigger for desktop
  useEffect(() => {
    if (!containerRef.current || !sliderRef.current || isMobile) return;
    const container = containerRef.current;
    const slider = sliderRef.current;
    const totalScrollWidth = slider.scrollWidth;
    const visibleWidth = slider.offsetWidth;
    const scrollDistance = totalScrollWidth - visibleWidth;
    // Horizontal scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalScrollWidth + window.innerHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onLeave: () => setShowEarth(true),
      },
    });
    // Animate horizontal cards
    tl.to(slider, { x: () => `-${scrollDistance}px`, ease: "none" });
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [serviceList?.ourServiceSection?.serviceCards, isMobile]);
  // Video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);
  // Handle arrow navigation for mobile/tablet
  const handleArrowClick = (direction) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const cardWidth = slider.querySelector("div").offsetWidth + 24; // Card width + gap
    const currentX = gsap.getProperty(slider, "x") || 0;
    const maxScroll = -(slider.scrollWidth - slider.offsetWidth);
    let newX;
    if (direction === "left") {
      newX = Math.min(currentX + cardWidth, 0);
    } else {
      newX = Math.max(currentX - cardWidth, maxScroll);
    }
    gsap.to(slider, {
      x: newX,
      duration: 0.5,
      ease: "power2.out",
    });
  };
  return (
    <>
      {/* ===== What Make Us Different Section ===== */}
      <section className="relative what-make-different-sec z-20">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 what-make-gradient">
          <div className="flex gap-5 items-start justify-between what-make-outer-box">
            <motion.div
              className="what-make-heading-left-box"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="what-make-heading font-semibold text-white">
                {serviceList?.whatMakeUsDifferenceSection?.heading}
              </h2>
              <Link
                href={"/contact-us"}
                className="bg-[#00AEEF] rounded-lg hover:bg-[#0099D4] text-white primary-btn-style"
              >
                {serviceList?.whatMakeUsDifferenceSection?.button}
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 what-make-card-box-inner"
            >
              {serviceList?.whatMakeUsDifferenceSection?.cards?.map(
                (card, idx) => (
                  <div
                    key={idx}
                    className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors"
                  >
                    <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                      <img src={card.icon} alt="security-icon" />
                      <h3 className="text-white mb-0 what-make-card-head font-anta">
                        {card.title}
                      </h3>
                    </div>
                    <div>
                      <p className="what-make-para m-0">{card.description}</p>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== Horizontal Service Cards Section ===== */}
      <section
        className="relative w-full h-screen overflow-hidden our-service-main-sec"
        ref={containerRef}
      >
        {/* Video background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/space-earth.mp4"
            type="video/mp4"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center container mx-auto px-6 py-20 h-full">
          <motion.h2
            className="our-service-heading text-white font-semibold mb-10 text-left capitalize"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {serviceList?.ourServiceSection?.heading}
          </motion.h2>
          <div
            ref={sliderRef}
            className="flex gap-6 will-change-transform select-none max-w-full overflow-visible"
            style={{ touchAction: isMobile ? "none" : "auto" }}
          >
            {serviceList?.ourServiceSection?.serviceCards?.map((card, idx) => (
              <div key={idx} className="w-[25%] flex-shrink-0 p-1 serviceCardMobile">
                <div className="h-full flex flex-col bg-transparent backdrop-blur-sm border border-gray-700 rounded-lg p-6 py-8 hover:border-[#00AEEF] transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#3A4A65] to-[#B2B2B2] opacity-60 rounded-lg -z-10"></div>
                  <div className="flex justify-left mb-4 relative z-10">
                    <Image src={card.icon} alt={card.title} width={60} height={60} className="rounded-lg" />
                  </div>
                  <div className="text-left mb-2 relative z-10">
                    <span className="text-lg font-semibold text-white">{card.title}</span>
                    <br />
                    <span className="text-lg font-semibold text-white">{card.subtitle}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 relative z-10">{card.desc}</p>
                  <div className="flex justify-left relative z-10">
                    <button
                      className="w-10 h-10 rounded-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                      aria-label="Explore service"
                    >
                      <ArrowUpRight className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Arrow Icons for Mobile/Tablet */}
          <div className="lg:hidden flex justify-end gap-6 mt-3 our-serv-slideBtn">
            <button
              onClick={() => handleArrowClick("left")}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 mx-auto" />
            </button>
            <button
              onClick={() => handleArrowClick("right")}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </section>
      {/* ===== Earth Section ===== */}
      {(isMobile || showEarth) && (
        <section className="relative z-20">
          <EarthSection />
        </section>
      )}
    </>
  );
}
