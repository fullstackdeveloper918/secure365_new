"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ContactFormHome } from './ContactFormHome';
gsap.registerPlugin(ScrollTrigger);
const EarthSection = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);
    const formRef = useRef(null);
    useEffect(() => {
        const section = sectionRef.current;
        const img = imgRef.current;
        const circle = circleRef.current;
        const form = formRef.current;
        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(img, { scale: 0.5, transformOrigin: '50% 50%', zIndex: 10 });
            gsap.set(circle, { scale: 1, autoAlpha: 0, transformOrigin: '50% 50%', zIndex: 20 });
            gsap.set(form, { autoAlpha: 0, y: 50, zIndex: 30 });
            // Timeline with ScrollTrigger
            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: '+=2200', // Adjust end for scroll distance
                    scrub: 1.5, // Smooth scrubbing with slight delay
                    pin: true,
                    anticipatePin: 1, // Prevents layout shifts
                    // markers: true, // Uncomment for debugging
                },
            })
                // 1) Earth zooms to full size
                .to(img, { scale: 1, duration: 1, ease: 'power2.inOut' })
                // 2) Earth fades, circle appears
                .to(img, { autoAlpha: 0, duration: 0.3, ease: 'power2.inOut' }, '+=0.1')
                .to(circle, { autoAlpha: 1, scale: 1.2, duration: 0.4, ease: 'power2.inOut' }, '<')
                // 3) Circle expands
                .to(circle, { scale: 10, duration: 1, ease: 'power3.inOut' })
                // 4) Form appears
                .to(form, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5');
        }, section);
        return () => ctx.revert(); // Cleanup
    }, []);
    return (
        <div ref={sectionRef} className="h-screen relative overflow-hidden bg-black">
            {/* Background Video (behind everything) */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/navigateVideoOne.mp4" type="video/mp4" />
            </video>
            {/* Initial Heading */}
            <div className="absolute top-40 left-1/2 w-full flex justify-center -translate-x-1/2 -translate-y-1/2 transform z-10 text-white text-[80px] font-semibold pointer-events-none">
                You Arrived Your Destination
            </div>
            {/* Earth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10 pointer-events-none">
                <img
                    ref={imgRef}
                    src="/images/mainearth.webp"
                    alt="earth"
                    className="w-60 h-60 will-change-transform"
                />
            </div>
            {/* White Circle */}
            <div
                ref={circleRef}
                className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-white -translate-x-1/2 -translate-y-1/2 transform z-20 pointer-events-none will-change-transform"
            />
            {/* Contact Form */}
            <div ref={formRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-full z-30">
                <ContactFormHome />
            </div>
        </div>
    );
};
export default EarthSection;