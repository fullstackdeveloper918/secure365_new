"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ContactFormHome } from "./ContactFormHome";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection({ achievementCards, serviceList }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const milestoneSectionRef = useRef(null);
  const [showMilestone, setShowMilestone] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  useEffect(() => {
    if (
      !containerRef.current ||
      !sliderRef.current ||
      !milestoneSectionRef.current
    )
      return;

    const slider = sliderRef.current;
    const container = containerRef.current;
    const milestoneSection = milestoneSectionRef.current;

    const totalScrollWidth = slider.scrollWidth;
    const visibleWidth = slider.offsetWidth;
    const scrollDistance = totalScrollWidth - visibleWidth;

    let bhoomTriggered = false;
    let milestoneTimeout;

    // Horizontal scroll pinned timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalScrollWidth}`, // Scroll distance for horizontal slide
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(slider, { x: () => `-${scrollDistance}px`, ease: "none" });

    // ScrollTrigger for milestone section enter
    const milestoneTrigger = ScrollTrigger.create({
      trigger: milestoneSection,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        if (!bhoomTriggered) {
          bhoomTriggered = true;

          // Bhoom scale effect on milestone section
          gsap.fromTo(
            milestoneSection,
            { scale: 0.8, opacity: 0, pointerEvents: "none" },
            {
              scale: 1,
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.6,
              ease: "power2.out",
              onComplete: () => {
                setShowMilestone(true);
                // Hide milestone after 5 seconds but keep faintly visible for overlap
                milestoneTimeout = setTimeout(() => {
                  gsap.to(milestoneSection, {
                    scale: 0.8,
                    opacity: 0.15, // faintly visible
                    pointerEvents: "none",
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => {
                      setShowMilestone(false);
                      setShowContactForm(true);
                    },
                  });
                }, 2000);
              },
            }
          );
        }
      },
      onEnterBack: () => {
        clearTimeout(milestoneTimeout);
        setShowContactForm(false);
        setShowMilestone(false);
        gsap.set(milestoneSection, {
          scale: 0.8,
          opacity: 0,
          pointerEvents: "none",
        });
        bhoomTriggered = false;
      },
      onLeaveBack: () => {
        clearTimeout(milestoneTimeout);
        setShowContactForm(false);
        setShowMilestone(false);
        gsap.set(milestoneSection, {
          scale: 0.8,
          opacity: 0,
          pointerEvents: "none",
        });
        bhoomTriggered = false;
      },
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      milestoneTrigger.kill();
      clearTimeout(milestoneTimeout);
    };
  }, [serviceList?.ourServiceSection?.serviceCards]);

  // Star sparkle CSS animation
  const starSparkleStyle = (
    <style jsx>{`
      @keyframes sparkle {
        0%,
        100% {
          opacity: 0;
          transform: scale(0.7);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
      }
      .star {
        position: absolute;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        filter: drop-shadow(0 0 2px #00aeef);
        opacity: 0;
        animation: sparkle 1.5s infinite ease-in-out;
      }
      .star:nth-child(1) {
        top: 20%;
        left: 25%;
        animation-delay: 0s;
      }
      .star:nth-child(2) {
        top: 40%;
        left: 70%;
        animation-delay: 0.3s;
      }
      .star:nth-child(3) {
        top: 65%;
        left: 40%;
        animation-delay: 0.6s;
      }
      .star:nth-child(4) {
        top: 80%;
        left: 75%;
        animation-delay: 0.9s;
      }
      .star:nth-child(5) {
        top: 35%;
        left: 50%;
        animation-delay: 1.2s;
      }
    `}</style>
  );

  return (
    <>
      {/* What Make Us Different Section */}
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

      {/* Our Service Section with pinned video + horizontal slider */}
      <section
        className={`relative w-full h-screen overflow-hidden`}
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

        {/* Slider container */}
        <div className="relative z-10 flex flex-col justify-center container mx-auto px-6 py-20 h-full">
          <motion.h2
            className="our-service-heading text-white font-semibold mb-10 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {serviceList?.ourServiceSection?.heading}
          </motion.h2>

          <div
            ref={sliderRef}
            className="flex gap-6 will-change-transform cursor-grab select-none max-w-full overflow-visible"
          >
            {serviceList?.ourServiceSection?.serviceCards?.map((card, idx) => (
              <div
                key={idx}
                className="w-[25%] flex-shrink-0 p-3 service-card-inner"
              >
                <div className="h-full flex flex-col bg-transparent backdrop-blur-sm border border-gray-700 rounded-lg p-6 py-8 hover:border-[#00AEEF] transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#3A4A65] to-[#B2B2B2] opacity-60 rounded-lg -z-10"></div>

                  <div className="flex justify-left mb-4 relative z-10">
                    <Image
                      src={card.icon}
                      alt="service"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="text-left mb-2 relative z-10">
                    <span className="text-lg font-semibold text-white">
                      {card.title}
                    </span>
                    <br />
                    <span className="text-lg font-semibold text-white">
                      {card.subtitle}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 relative z-10">
                    {card.desc}
                  </p>

                  <div className="flex justify-left relative z-10">
                    <button
                      className="w-10 h-10 rounded-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40 transition-all duration-300"
                      aria-label="Explore service"
                    >
                      <ArrowUpRight className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Section with full bg and stars */}
      <section
        ref={milestoneSectionRef}
        className={`relative w-full h-screen flex flex-col items-center justify-center bg-[#02050f] overflow-hidden z-40 ${
          !showMilestone ? "pointer-events-none hidden" : ""
        }`}
        style={{ opacity: 0, scale: 0.8, pointerEvents: "none" }} // initial gsap state
      >
        {starSparkleStyle}
        <AnimatePresence>
          {showMilestone && (
            <motion.section
              ref={milestoneSectionRef}
              key="milestone-section"
              initial={{ opacity: 0, scale: 0.8, pointerEvents: "none" }}
              animate={{ opacity: 1, scale: 1, pointerEvents: "auto" }}
              exit={{ opacity: 0, scale: 0.8, pointerEvents: "none" }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-screen flex flex-col items-center justify-center bg-[#02050f] overflow-hidden z-40"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-8xl font-extrabold text-white text-center max-w-4xl mb-12 relative z-10"
              >
                {serviceList?.youArrivedYourDestination}
              </motion.h2>

              {/* Star sparkle elements */}
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />

              {/* Glowing background circle */}
              <div
                className="absolute rounded-full bg-gradient-to-r from-[#00aeef]/60 via-[#00aeefff] to-[#00aeef]/60"
                style={{
                  width: "300px",
                  height: "300px",
                  filter: "blur(40px)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              />
            </motion.section>
          )}
        </AnimatePresence>
      </section>

      {/* Contact Form slides up and overlaps milestone */}
      <AnimatePresence>
        {!showMilestone && showContactForm && (
          <motion.section
            key="contact-form"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-0 w-full z-50 bg-[#0a0f2c] shadow-xl rounded-t-xl"
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <ContactFormHome />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
