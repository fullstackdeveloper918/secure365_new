"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NavigatingSection = ({ serviceList }) => {
    const sectionRef = useRef(null);
    const rocketRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const buttonRef = useRef(null);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    // Function to get screen and viewport size
    const getScreenSize = () => {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        console.log("Screen size:", screenWidth + "x" + screenHeight);
        console.log("Viewport size:", viewportWidth + "x" + viewportHeight);

        setScreenSize({ width: viewportWidth, height: viewportHeight });
    };

    useEffect(() => {
        // Get screen size on mount
        getScreenSize();

        // Update on resize
        window.addEventListener("resize", getScreenSize);
        return () => window.removeEventListener("resize", getScreenSize);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        const rocket = rocketRef.current;
        const leftText = leftTextRef.current;
        const rightText = rightTextRef.current;
        const button = buttonRef.current;

        if (!section || !rocket || !leftText || !rightText || !button) return;

        console.log("screen width and height ", screenSize.width, "height", screenSize.height);

        // Determine animation positions based on screen size ranges
        let xStart, yStart, xEnd, yEnd;
        if (screenSize.width >= 1920) {
            xStart = 450; yStart = 250; xEnd = -450; yEnd = -250; // Large Desktop
        } else if (screenSize.width >= 1440) {
            xStart = 350; yStart = 200; xEnd = -350; yEnd = -200;   // Desktop / Standard
        } else if (screenSize.width >= 1366) {
            xStart = 150; yStart = 80; xEnd = -250; yEnd = -80;   // Small Desktop / Laptop
        } else if (screenSize.width >= 1280) {
            xStart = 120; yStart = 60; xEnd = -300; yEnd = -60;   // Laptop / Notebook
        } else {
            xStart = 100; yStart = 50; xEnd = -250; yEnd = -50;   // Small Laptop / Netbook
        }

        // Initial states
        gsap.set(rocket, { xPercent: xStart, yPercent: yStart });
        gsap.set([leftText, rightText, button], { opacity: 0, y: 50 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,
                anticipatePin: 1,
                // markers: true,
            },
        });

        // Sequential animations with increased duration and delay
        tl.to(leftText, {
            opacity: 1,
            y: 0,
            duration: 300, // Increased duration for slower animation
            ease: "power2.out",
        })
            .to(rightText, {
                opacity: 1,
                y: 0,
                duration: 300,
                ease: "power2.out",
                delay: 8, // Increased delay to ensure left text completes
            })
            .to(button, {
                opacity: 1,
                y: 0,
                duration: 300,
                ease: "power2.out",
                delay: 8, // Increased delay to ensure right text completes
            })
            .to(rocket, {
                xPercent: xEnd,
                yPercent: yEnd,
                ease: "none",
                duration: 5000, //  Further increased duration for slower rocket animation
                delay: 8, // Increased delay to ensure button completes
            });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [screenSize]);

    return (
        <section
            ref={sectionRef}
            className="arrieved-destination hero-sec relative py-32 overflow-hidden h-[100vh] navigate-second-sec"
            style={{ backgroundColor: "#000" }}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-end relative md:top-[73px]">
                <div className="grid lg:grid-cols-2 gap-12 items-end relative navigate-inner">
                    <div className="z-20">
                        <h2
                            ref={leftTextRef}
                            className="text-white font-semibold navigate-heading"
                        >
                            {serviceList.home_page_challenge_section_challenge}
                        </h2>
                    </div>

                    <div>
                        {/* Rocket image */}
                        <div className="relative h-60 w-full overflow-visible">
                            <Image
                                ref={rocketRef}
                                src="/images/rocket/R3.png"
                                alt="Rocket"
                                width={900}
                                height={900}
                                className="absolute top-20 -translate-y-1/2"
                                style={{ right: 0 }}
                            />
                        </div>

                        {/* Text paragraph and button */}
                        <div className="space-y-4 relative bottom-[60px]">
                            <p
                                ref={rightTextRef}
                                className="text-lg lg:text-xl max-w-[80%] text-gray-300 leading-relaxed mb-0"
                                id="content-responsive"
                            >
                                {serviceList.home_page_challenge_section_paragraph}
                            </p>
                            <Link
                                ref={buttonRef}
                                href={"/contact-us"}
                                className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg navigate-contact-btn inline-block px-6 py-3"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default NavigatingSection;