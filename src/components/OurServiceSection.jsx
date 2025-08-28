"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection({ achievementCards, serviceList }) {
  const [achievementsSlide, setAchievementsSlide] = useState(0);
  const containerRef = useRef(null);
  const videoPinRef = useRef(null);
  const sectionsRef = useRef(null);
  const videoRef = useRef(null);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
   const [showSection, setShowSection] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  const sectionRef = useRef(null);
  const animateRef = useRef(null);

  // Screen size for responsive rocket
  const getScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);


   useEffect(() => {
    const timer = setTimeout(() => {
      setShowSection(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation 0 → 100
 

  return (
    <>
      {/* What Make Us Different Section */}
      <section className="relative  what-make-different-sec z-20">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
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
                {/* What Make
                <br />
                Us Different? */}
                {serviceList?.whatMakeUsDifferenceSection?.heading}
              </h2>
              <Link
                href={"/contact-us"}
                className="bg-[#00AEEF] rounded-lg hover:bg-[#0099d4] text-white primary-btn-style"
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
              <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                  <img
                    src={
                      serviceList?.whatMakeUsDifferenceSection?.cards[0]?.icon
                    }
                    alt="security-icon"
                  />
                  <h3 className="text-white mb-0 what-make-card-head font-anta">
                    {/* Information Security <br /> Solutions */}
                    {serviceList?.whatMakeUsDifferenceSection?.cards[0]?.title}
                  </h3>
                </div>
                <div>
                  <p className="what-make-para m-0">
                    {/* Protect your business from threats with advanced security
                    measures, real-time monitoring, and threat intelligence. */}
                    {
                      serviceList?.whatMakeUsDifferenceSection?.cards[0]
                        ?.description
                    }
                  </p>
                </div>
              </div>
              <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                  <img
                    src={
                      serviceList?.whatMakeUsDifferenceSection?.cards[1]?.icon
                    }
                    alt="security-icon"
                  />
                  <h3 className="text-white mb-0 what-make-card-head font-anta">
                    {/* Comprehensive <br /> Solutions */}
                    {serviceList?.whatMakeUsDifferenceSection?.cards[1]?.title}
                  </h3>
                </div>
                <div>
                  <p className="what-make-para m-0">
                    {/* Secure365 is build on years of battling cybercrime, managing
                    e-commerce platform, and developing technology strategies. */}
                    {
                      serviceList?.whatMakeUsDifferenceSection?.cards[1]
                        ?.description
                    }
                  </p>
                </div>
              </div>
              <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                  <img
                    src={
                      serviceList?.whatMakeUsDifferenceSection?.cards[2]?.icon
                    }
                    alt="security-icon"
                  />
                  <h3 className="text-white mb-0 what-make-card-head font-anta">
                    {/* Victim <br /> Approach */}
                    {serviceList?.whatMakeUsDifferenceSection?.cards[2]?.title}
                  </h3>
                </div>
                <div>
                  <p className="what-make-para m-0">
                    {/* Secure365 is built on years of battling cybercrime, managing
                    e-commerce platforms, and developing real-world strategies. */}
                    {
                      serviceList?.whatMakeUsDifferenceSection?.cards[2]
                        ?.description
                    }
                  </p>
                </div>
              </div>
              <div className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                  <img
                    src={
                      serviceList?.whatMakeUsDifferenceSection?.cards[3]?.icon
                    }
                    alt="security-icon"
                  />
                  <h3 className="text-white mb-0 what-make-card-head font-anta">
                    {/* Advanced <br /> Protection */}
                    {serviceList?.whatMakeUsDifferenceSection?.cards[3]?.title}
                  </h3>
                </div>
                <div>
                  <p className="what-make-para m-0">
                    {/* Secure365 provides innovative approaches to combat threats,
                    ensuring the highest security standards. */}
                    {
                      serviceList?.whatMakeUsDifferenceSection?.cards[3]
                        ?.description
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div ref={containerRef} className="relative ">
          {/* Video container pinned */}
          <div className="absolute top-0 left-0 w-full">
            <video
              ref={videoRef} // ✅ attach ref here
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

        
          {/* Sections container */}
          <div ref={sectionsRef} className="relative">
            {/* Achievements Section */}
            <section className="min-h-screen flex items-center justify-center relative  our-services-sec">
              <motion.div
                className="container mx-auto px-6 py-20"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h2
                  className="our-service-heading text-white font-semibold"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Our
              <br />
              Services */}
                  {serviceList?.ourServiceSection?.heading}
                </motion.h2>

                <div className="relative ">
                  <motion.div
                    className="flex will-change-transform"
                    animate={{ x: `-${achievementsSlide * 25}%` }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {serviceList?.ourServiceSection?.serviceCards?.map(
                      (card, idx) => (
                        <div key={idx} className="w-1/4 flex-shrink-0 p-3 service-card-inner">
                          <div className="h-full flex flex-col bg-transparent backdrop-blur-sm border border-gray-700 rounded-lg p-6 py-8 hover:border-[#00AEEF] transition-all duration-300">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#3A4A65] to-[#B2B2B2] opacity-60 rounded-lg"></div>

                            {/* Image */}
                            <div className="flex justify-left mb-4 relative z-10">
                              <Image
                                src={card.icon}
                                alt="service"
                                width={60}
                                height={60}
                                className="rounded-lg"
                              />
                            </div>

                            {/* Title and Subtitle */}
                            <div className="text-left mb-2 relative z-10">
                              <span className="text-lg font-semibold text-white">
                                {card.title}
                              </span>
                              <br />
                              <span className="text-lg font-semibold text-white">
                                {card.subtitle}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 relative z-10">
                              {card.desc}
                            </p>

                            {/* Button */}
                            <div className="flex justify-left relative z-10">
                              <button
                                className="w-10 h-10 rounded-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40 transition-all duration-300"
                                aria-label="Next achievements slide"
                              >
                                <ArrowUpRight className="w-5 h-5 mx-auto" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </motion.div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-end gap-3 slider-nav-btns">
                    <button
                      onClick={() =>
                        setAchievementsSlide((s) => Math.max(0, s - 1))
                      }
                      disabled={achievementsSlide === 0}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                      aria-label="Previous achievements slide"
                    >
                      <ChevronLeft className="w-5 h-5 mx-auto" />
                    </button>
                    <button
                      onClick={() =>
                        setAchievementsSlide((s) =>
                          Math.min(achievementCards.length - 4, s + 1)
                        )
                      }
                      disabled={
                        achievementsSlide >= achievementCards.length - 4
                      }
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                      aria-label="Next achievements slide"
                    >
                      <ChevronRight className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Milestones Reached Section */}
<section
      ref={animateRef}
      className={`arrieved-destination min-h-screen flex flex-col items-center bg-[#02050f] justify-center  ${!showSection ? 'hidden' : 'relative'}  w-full overflow-hidden`}
    >
      <motion.h2
        className="text-4xl lg:text-6xl text-white font-semibold mb-8"
        initial={{ y: -200, scale: 0.8, opacity: 0 }}
        whileInView={{ y: -50, scale: 2, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }} // trigger when 50% in view
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        onAnimationComplete={() => {
          // hide the section after animation finishes
          setTimeout(() => {
            setShowSection(false);
          }, 0); // optional small delay if you want
        }}
      >
        {serviceList.youArrivedYourDestination}
      </motion.h2>
    </section>


          </div>
        </div>
      </section>
    </>
  );
}
