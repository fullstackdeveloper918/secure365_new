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

  useEffect(() => {
    const section = sectionRef.current;
    const rocket = rocketRef.current;
    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;
    const button = buttonRef.current;

    if (!section || !rocket || !leftText || !rightText || !button) return;

    // Start and End positions
    const xStart = 233.58;
    const yStart = -504.942;
    const xEnd = -1666.86;
    const yEnd = 158.37;

    // Set rocket initial position and rotation
    gsap.set(rocket, {
      x: xStart,
      y: yStart,
      opacity: 1,
      rotate: -45,
    });

    // Hide texts and button initially
    gsap.set([leftText, rightText, button], { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "-10% top",
        end: "+=3000",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate rocket along the path and then show text/button
    tl.to(rocket, {
      x: xEnd,
      y: yEnd,
      duration: 2,
      ease: "power1.inOut",
    })
      .to(leftText, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .to(rightText, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .to(button, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
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
      <div className="relative z-10 container mx-auto px-6 pt-[90px]">
        <div className="grid lg:grid-cols-2 gap-12 items-end relative navigate-box-iner">
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
                className="absolute"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>

            {/* Text paragraph and button */}
            <div className="space-y-4 relative bottom-[0px]">
              <p
                ref={rightTextRef}
                className="text-lg lg:text-xl max-w-[80%] text-gray-300 leading-relaxed mb-0"
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
    </section>
  );
};

export default NavigatingSection;
