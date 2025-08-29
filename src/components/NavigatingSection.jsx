  "use client";
  import { useEffect, useRef } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Image from "next/image";
  import Link from "next/link";
  import { motion } from "framer-motion";

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

      // Text and button initial state (below + invisible)
      gsap.set([leftText, rightText, button], { opacity: 0, y: 150 });

      // ===== Timeline for left text animation (appears first) =====
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 30%",
          scrub: false, // text appears normally
        },
      });

      // Left text appears
      tlText.to(leftText, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

      // Right text appears smoothly after left text
      tlText.to(rightText, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Button appears after right text
      tlText.to(button, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

      // ===== Timeline for rocket (scroll-driven) =====
      const tlRocket = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom top",
          scrub: 3, // slow rocket movement
        },
      });

      tlRocket.to(rocket, {
        x: -2466.86,
        y: 158.37,
        rotate: -40,
        ease: "power1.inOut",
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, []);

    return (
      <section
        ref={sectionRef}
        className="relative h-screen navigate-second-sec"
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
        <div
          className="relative z-10 container mx-auto h-full px-6 "
          id="navigate-section"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-end relative navigate-box-iner">
            <div className="z-20">
              <motion.h2
                ref={leftTextRef}
                className="text-white font-semibold navigate-heading"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {serviceList.home_page_challenge_section_challenge}
              </motion.h2>
            </div>
            <div>
              {/* Text paragraph and button */}
              <div className="space-y-4 relative bottom-[0px] navigate-bottom-wrapper">
                <motion.p
                  ref={rightTextRef}
                  className="text-lg lg:text-xl max-w-[80%] text-gray-300 leading-relaxed mb-0 navigate-para-txt"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {serviceList.home_page_challenge_section_paragraph}
                </motion.p>
                <motion.div
                  ref={buttonRef}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    href={"/contact-us"}
                    className="bg-[#00AEEF] hover:bg-[#0099D4] text-white rounded-lg navigate-contact-btn inline-block px-6 py-3"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default NavigatingSection;
    