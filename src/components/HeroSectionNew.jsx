"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ serviceList }) {
    const sectionRef = useRef(null);
    const firstImageRef = useRef(null);
    const secondImageRef = useRef(null);
    const textHeadingRef = useRef(null);
    const textParaButtonRef = useRef(null);

    useEffect(() => {
        // Create a GSAP timeline tied to ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1, // Smooth scrubbing
                pin: true, // Pin the section during animation
            },
        });

        // First image scales up (background with transparent center)
        tl.fromTo(
            firstImageRef.current,
            { scale: 1 },
            {
                scale: 10,
                ease: "power1.out",
                duration: 1,
            },
            0 // Start immediately
        );

        // Second image scales from centered (visible through transparent center) to full-screen
        tl.fromTo(
            secondImageRef.current,
            { scale: 0.5, opacity: 1, xPercent: -50, yPercent: -50 },
            {
                scale: 1,
                width: "100%",
                height: "100%",
                xPercent: 0,
                yPercent: 0,
                ease: "power1.out",
                duration: 1,
            },
            0.5 // Start slightly after first image
        );

        // Text animations (heading and paragraph/button) after second image is full-screen
        tl.fromTo(
            textHeadingRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "easeOut",
                duration: 0.5,
            },
            1.5 // Start after second image is full-screen
        );

        tl.fromTo(
            textParaButtonRef.current,
            { y: 300, opacity: 0 },
            {
                y: 200,
                opacity: 1,
                ease: "easeOut",
                duration: 0.5,
            },
            1.7 // Slightly offset from heading
        );

        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="hero-sec relative min-h-screen flex items-center main-secure-banner z-0"
        >
            {/* First Image (Background with transparent center) */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <img
                    ref={firstImageRef}
                    src="/images/rocket/hero3.png"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Second Image (Centered initially, scales to full-screen) */}
            <img
                ref={secondImageRef}
                src="/images/rocket/earthhero.png"
                alt="center"
                className="absolute z-5 w-full h-full object-cover"
            // style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />

            {/* Main Content */}
            <div className="relative z-10 w-full flex items-center justify-center h-full">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-end min-h-screen">
                        {/* Heading */}
                        <div className="main-head-banner-box">
                            <h1
                                ref={textHeadingRef}
                                className="main-banner-heading text-white font-semibold mb-0"
                            >
                                {serviceList.home_advanced_it_and_cyber_security_first_heading}
                                <br />
                                {serviceList.home_advanced_it_and_cyber_security_second}
                                <br />
                                <span>{serviceList.home_advanced_it_and_cyber_security_third}</span>
                            </h1>
                        </div>

                        {/* Paragraph and Button */}
                        <div className="space-y-8">
                            <div ref={textParaButtonRef} className="space-y-6 main-banner-para-box">
                                <p className="main-banner-paraTxt text-white mb-0">
                                    {serviceList.home_advanced_it_and_cyber_security_paragraph}
                                </p>
                                <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white start-mission-btn">
                                    {serviceList.home_advanced_it_and_cyber_security_fourth}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Down Button */}
                    <div className="absolute z-10 bottom-4 scroll-down-button">
                        <div className="flex items-center text-white/70 animate-bounce">
                            <img src="/Scroll-down-icon.svg" alt="scroll-down-icon" className="me-2" />
                            <div className="text-sm text-white font-normal">Scroll Down</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}