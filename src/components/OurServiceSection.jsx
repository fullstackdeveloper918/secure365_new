"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection({ achievementCards }) {
    const [achievementsSlide, setAchievementsSlide] = useState(0);
    const containerRef = useRef(null);
    const videoPinRef = useRef(null);
    const sectionsRef = useRef(null);
    const videoRef = useRef(null);
    const rocketRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0;
        }
    }, []);

    const sectionRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current || !sectionRef.current || !rocketRef.current) return;

        // Video animation
        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "top top",
                scrub: true,
            },
            width: "100%",
            borderRadius: "6px",
            margin: "0 auto",
            duration: 1,
        });

        // Rocket animation from top-right to bottom-left
        gsap.fromTo(
            rocketRef.current,
            {
                x: "120vw",   // Start from right edge
                y: "-700px",  // Start just above viewport
                visibility: "visible",
            },
            {
                x: "-100vw",  // Move to left edge
                y: "100vh",   // Move to bottom
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",   // Start when section enters viewport
                    end: "bottom top",     // End when section leaves viewport
                    scrub: 2,              // <-- makes rocket move slower with scroll
                    // markers: true,    
                    toggleActions: "play none none reverse",
                },
                duration: 5,               // <-- slower animation if scrub is off
                ease: "power1.inOut",
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);


    return (
        <div ref={containerRef} className="relative overflow-hidden">
            {/* Video container pinned */}
            <div className="absolute top-0 left-0 w-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={"/space-earth.mp4"}
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
                className="absolute"
                style={{ visibility: "hidden" }}
            />

            {/* Sections container */}
            <div ref={sectionRef} className="relative z-10">
                {/* ref={sectionRef} */}
                {/* Achievements Section */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden our-services-sec">
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
                            Our
                            <br />
                            Services
                        </motion.h2>

                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex will-change-transform"
                                animate={{ x: `-${achievementsSlide * 25}%` }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                {achievementCards.map((card, idx) => (
                                    <div key={idx} className="w-1/4 flex-shrink-0 p-3 serv-mainCard-Wrap">
                                        <div className="h-full flex flex-col bg-transparent border border-gray-700 rounded-lg hover:border-[#00AEEF] transition-all duration-300 serv-home-card">
                                            {/* Gradient Background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#3A4A65] to-[#B2B2B2] opacity-60 rounded-lg"></div>

                                            {/* Image */}
                                            <div className="flex justify-left relative z-10 service-img-box">
                                                <Image
                                                    src={card.icon}
                                                    alt="service"
                                                    width={60}
                                                    height={60}
                                                    className="rounded-lg"
                                                />
                                            </div>

                                            {/* Title and Subtitle */}
                                            <div className="text-left mb-2 relative z-10 service-card-head">
                                                <span className="font-normal font-anta text-white">{card.title}</span><br />
                                                <span className="font-normal font-anta text-white">{card.subtitle}</span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-400 text-sm mb-4 relative z-10 service-card-para">{card.desc}</p>

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
                                ))}
                            </motion.div>

                            {/* Navigation Buttons */}
                            <div className="mt-20">
                                <button
                                    onClick={() => setAchievementsSlide((s) => Math.max(0, s - 1))}
                                    disabled={achievementsSlide === 0}
                                    className="absolute right-20 bottom-0 mt-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                                    aria-label="Previous achievements slide"
                                >
                                    <ChevronLeft className="w-5 h-5 mx-auto" />
                                </button>
                            </div>
                            <button
                                onClick={() =>
                                    setAchievementsSlide((s) => Math.min(achievementCards.length - 4, s + 1))
                                }
                                disabled={achievementsSlide >= achievementCards.length - 4}
                                className="absolute right-5 bottom-0 mt-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                                aria-label="Next achievements slide"
                            >
                                <ChevronRight className="w-5 h-5 mx-auto" />
                            </button>
                        </div>

                    </motion.div>
                </section>

                {/* Milestones Reached Section */}
                <section

                    className="arrieved-destination min-h-screen pt-[120px] flex flex-col items-center bg-[#02050f] justify-center relative overflow-hidden px-14 pb-12 w-full"
                >
                    <div className="container">
                    {/* Text animation */}
                    <motion.div
                        className="relative z-10 text-center mb-10"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-white font-semibold destination-head">
                            You Arrived Your Destination
                        </h2>
                    </motion.div>

                    {/* Video */}
                    <div className="relative w-full max-w-full overflow-hidden shadow-lg">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover rounded-none"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={"/space-earth.mp4"}
                            type="video/mp4"
                        />
                    </div>
                    </div>
                </section>
            </div>
        </div>
    );
}