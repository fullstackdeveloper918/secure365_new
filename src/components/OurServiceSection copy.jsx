"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ContactFormHome } from "./ContactFormHome";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection({ achievementCards, serviceList }) {
  const [achievementsSlide, setAchievementsSlide] = useState(0);
  const containerRef = useRef(null);
  const videoPinRef = useRef(null);
  const sectionsRef = useRef(null);
  const videoRef = useRef(null);
  const rocketRef = useRef(null);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const canvasRef = useRef(null);
  const headingRef = useRef(null);
  const videoContentRef = useRef(null);
  const earthRef = useRef(null);
  const galaxyRef = useRef(null);
  const spaceshipRef = useRef(null);
  const explosionRef = useRef(null);
  const particlesRef = useRef(null);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  console.log(serviceList, "serviceList here3");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  const getScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  useEffect(() => {
    const rocket = rocketRef.current;
    const container = containerRef.current;
    if (!rocket || !container) return;

    gsap.set(rocket, {
      x: screenSize.width > 1024 ? "71.4451vw" : "50vw",
      y: screenSize.width > 1024 ? "-50.2042vh" : "-50vh",
      rotation: 10.3796,
      scale: screenSize.width > 1024 ? 1 : 0.7,
      zIndex: 10,
      autoAlpha: 1,
      force3D: true, // Hardware acceleration
    });

    gsap.to(rocket, {
      x: "-40.928vw",
      y: "32.725vh",
      rotation: 10.0999,
      ease: "none", // Smoother for scrub animations
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3, // Reduced scrub for smoother animation
      },
    });
  }, [screenSize]);

useEffect(() => {
  if (!sectionRef.current) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=4000", // total scroll distance
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  // Initial state
  gsap.set([headingRef.current, videoContentRef.current], {
    opacity: 0,
    y: 100,
    scale: 0.8,
    force3D: true,
  });

  gsap.set(earthRef.current, {
    scale: 0.1,
    opacity: 0,
    zIndex: 100,
    force3D: true,
  });

  // Galaxy reveal
  tl.to(
    galaxyRef.current,
    {
      opacity: 1,
      scale: 1.5,
      rotation: 360,
      duration: 8,
      ease: "power2.inOut",
    },
    0
  );

  // Earth reveal (fade in and zoom to fill)
  tl.to(
    earthRef.current,
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "back.out(1.7)",
    },
    "<+2"
  );

  // **Scroll-based Earth zoom**
  tl.to(
    earthRef.current,
    {
      scale: 20, // Increase scale to fill the viewport
      duration: 5,
      ease: "power3.inOut",
    },
    "<+1"
  );

  // Explosion effect (optional)
  tl.to(
    explosionRef.current,
    {
      opacity: 1,
      scale: 3,
      duration: 2,
      ease: "power4.out",
    },
    "<+1.5"
  ).to(explosionRef.current, {
    opacity: 0,
    scale: 5,
    duration: 1.5,
    ease: "power2.in",
  });

  // Heading & Content fade-in
  tl.to(
    headingRef.current,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 2.5,
      ease: "power3.out",
    },
    "<+1"
  );

  tl.to(
    videoContentRef.current,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 2.5,
      ease: "power3.out",
    },
    "<+0.5"
  );

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 2 + 0.5,
      trail: Math.random() * 50 + 20,
    }));

    let animationId;
    let time = 0;

    function animate() {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spaceGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      spaceGradient.addColorStop(0, "rgba(0, 20, 40, 0.1)");
      spaceGradient.addColorStop(0.5, "rgba(0, 50, 100, 0.05)");
      spaceGradient.addColorStop(1, "rgba(0, 0, 0, 0.3)");
      ctx.fillStyle = spaceGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x -= star.speed * Math.cos(time * 0.1);
        star.y -= star.speed * Math.sin(time * 0.1);

        if (star.x < 0) star.x = canvas.width;
        if (star.y < 0) star.y = canvas.height;
        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height) star.y = 0;

        // Draw star trail
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x + star.trail * Math.cos(time * 0.1),
          star.y + star.trail * Math.sin(time * 0.1)
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`;
        ctx.lineWidth = star.r * 0.5;
        ctx.stroke();

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = star.r * 3;
        ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

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
                (card, index) => (
                  <div
                    key={index}
                    className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors"
                  >
                    <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                      <img
                        src={card?.icon || "/placeholder.svg"}
                        alt="security-icon"
                      />
                      <h3 className="text-white mb-0 what-make-card-head font-anta">
                        {card?.title}
                      </h3>
                    </div>
                    <div>
                      <p className="what-make-para m-0">{card?.description}</p>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>

        <div ref={containerRef} className="relative ">
          {/* Video container pinned */}
          <div className="absolute top-0 left-0 w-full">
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

          {/* Rocket image */}
          <Image
            ref={rocketRef}
            src="/images/rocket/R2.png"
            alt="Rocket"
            width={900}
            height={900}
            className="absolute z-9999"
            style={{ visibility: "hidden" }}
          />

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
                        <div key={idx} className="w-1/4 flex-shrink-0 p-3">
                          <div className="h-full flex flex-col bg-transparent backdrop-blur-sm border border-gray-700 rounded-lg p-6 py-8 hover:border-[#00AEEF] transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#3A4A65] to-[#B2B2B2] opacity-60 rounded-lg"></div>
                            <div className="flex justify-left mb-4 relative z-10">
                              <Image
                                src={card.icon || "/placeholder.svg"}
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

            <section
              ref={sectionRef}
              className="arrieved-destination min-h-[100vh] flex items-center overflow-hidden relative"
            >
              <div
                ref={earthRef}
                className="fixed inset-0 z-[100] flex items-center justify-center"
              >
                <div className="w-[400px] h-[400px] relative">
                  {/* Earth core */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white-500 to-white rounded-full shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black-500/30 via-transparent to-blue-400/30 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Pinned Content */}
              <div className="relative z-20 w-full sticky top-0 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-6 relative">
                  <div className="flex flex-col items-center justify-center min-h-screen text-center">
                    {/* Heading */}
                    <div
                      ref={headingRef}
                      className="mb-10 will-change-transform"
                    >
                      <h2 className="text-4xl lg:text-6xl text-white font-semibold drop-shadow-2xl">
                        {serviceList.youArrivedYourDestination}
                      </h2>
                    </div>

                    {/* Video Content */}
                    <div
                      ref={videoContentRef}
                      className="w-full max-w-8xl z-[1000] mx-auto will-change-transform"
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-2xl">
                        <video
                          className="w-[100%] h-[800px] object-cover rounded-lg border border-white/20"
                          autoPlay
                          muted
                          loop
                          playsInline
                          src="/space-earth.mp4"
                          type="video/mp4"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 via-transparent to-blue-400/10 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <ContactFormHome />
    </>
  );
}
