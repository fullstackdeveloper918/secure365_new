"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection({ serviceList }) {
    const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeroAnimationComplete(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.onloadedmetadata = () => {
                video.play(); // Start video automatically
                const timer = setTimeout(() => {
                    video.pause(); // Pause video after 5 seconds
                }, 5000);
                return () => clearTimeout(timer); // Cleanup timer
            };
        }
    }, []);

    return (
        <section ref={sectionRef} className="hero-sec relative min-h-screen flex items-center main-secure-banner z-0">
            <div className="absolute inset-[-82px] overflow-hidden">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/hero.mp4"
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 w-full">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-end min-h-screen">
                        <div className="main-head-banner-box">
                            <AnimatePresence>
                                {heroAnimationComplete && (
                                    <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="main-banner-heading text-white font-semibold mb-0"
                                    >
                                        {serviceList.home_advanced_it_and_cyber_security_first_heading}<br />
                                        {serviceList.home_advanced_it_and_cyber_security_second}<br />
                                        <span className="">{serviceList.home_advanced_it_and_cyber_security_third}</span>
                                    </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="space-y-8">
                            <AnimatePresence>
                                {heroAnimationComplete && (
                                    <motion.div
                                        initial={{ y: 300, opacity: 0 }}
                                        animate={{ y: 200, opacity: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="space-y-6 main-banner-para-box"
                                    >
                                        <p className="main-banner-paraTxt text-white mb-0">
                                            {serviceList.home_advanced_it_and_cyber_security_paragraph}
                                        </p>
                                        <Link href={"/contact-us"} className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg start-mission-btn">
                                            {serviceList.home_advanced_it_and_cyber_security_fourth}
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="absolute z-10 scroll-down-button">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center text-white/70 cursor-pointer"
                            onClick={() => {
                                window.scrollTo({
                                    top: window.innerHeight, // scrolls down by 1 screen
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