"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import whatusImage3 from "../../../public/images/1.svg";
import whatusImage4 from "../../../public/images/4.svg";
import whatusImage5 from "../../../public/images/5.svg";
import Link from "next/link";
import { Rocket } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
function PainSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsSectionRef = useRef(null);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const cards = [
    {
      icon: whatusImage3,
      title: "Information Security Solutions",
      description:
        "Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.",
    },
    {
      icon: whatusImage4,
      title: "Comprehensive Solutions",
      description:
        "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.",
    },
    {
      icon: whatusImage5,
      title: "Victim Approach",
      description:
        "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.",
    },
    {
      icon: whatusImage4,
      title: "Advanced Protection",
      description:
        "Secure365 provides innovative approaches to combat cyber threats, ensuring the highest security standards.",
    },
  ];
  
  const duplicatedCards = [...cards, ...cards];
  //   useEffect(() => {
  //   if (showSecondSection) {
  //     const ctx = gsap.context(() => {
  //       const tl = gsap.timeline();
  //       tl.from(".title-heading", {
  //         y: 90,
  //         opacity: 0,
  //         duration: 1.8,
  //         ease: "power3.out",
  //       });
  //       tl.from(".card-item", {
  //         y: 70,
  //         opacity: 0,
  //         duration: 0.5,
  //         ease: "power3.out",
  //         stagger: 0.1,
  //         pin: true,
  //       }, "-=0.4"); // overlaps slightly with previous
  //     }, cardsSectionRef);
  //     return () => ctx.revert();
  //   }
  // }, [showSecondSection]);

  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(
      600px circle at ${x}px ${y}px,
rgba(3, 176, 239, 0.39),
      transparent 40%
    )`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.background = "rgba(0, 0, 0, 0.1)";
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=70%",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            setShowSecondSection(self.progress > 0.5);
          },
        },
      });
      tl.to(titleRef.current, {
        scale: 1.8,
        duration: 1.5,
        fontSize: "500vw",
        color: "#fff",
        transformOrigin: "51% center",
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative">
      <div ref={sectionRef} className="mainContainersec bg-white">
        <section className="w-full h-screen flex items-center justify-center overflow-hidden">
          <h2
            ref={titleRef}
            className="text-black text-[4vw] font-bold px-4 transition-colors duration-300 whitespace-nowrap"
          >
            We Understand Your Pain
          </h2>
        </section>
      </div>
      {showSecondSection && (
        <section
          ref={cardsSectionRef}
          data-aos="zoom-out-up"
          className="absolute top-[576px] inset-0 flex flex-col items-center justify-center bg-black text-white md:p-10 p-2 overflow-hidden"
        >
          <img src="/Navigate-Bg.png" className="absolute top-0 left-0 w-full h-full object-cover -z-10" alt="" srcset="" />
          {/* <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
            // src="/whatmakevideo.mp4"
            src="/Project-video.mp4"
            // src="/pain.mp4"
            // Or use source elements if needed
            // preload="auto"
          /> */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#0000005e]  -z-10"></div>
          <h2 className="title-heading text-white font-bold text-center z-10 xl:mb-20 md:mb-12 mb-10 xxl:text-7xl xl:text-5xl text-3xl">
            What Makes Us Different?
          </h2>
          <div className="w-full sliderSec">
            {/* <div
              className="flex space-x-8 w-max animate-scroll-x"
              style={{ animation: "scrollLeft 50s linear infinite" }}
            >
              {duplicatedCards?.map((card, index) => (
                <div
                  key={index}
                  className="card-item flex-shrink-0 w-[400px] h-96 bg-black/10 backdrop-blur-md rounded-2xl p-8 transition-colors duration-300 slidecol"
                  style={{ border: "1px solid #dddddd38" }}
                >
                  <div className="flex items-center mb-6">
                    <Image src={card.icon} width={60} height={60} />
                  </div>
                  <h3 className="text-white md:mb-4 mb-2 cardtitile">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 cardDecription">
                    {card.description}
                  </p>
                </div>
              ))}
            </div> */}

             <div
      className="flex space-x-8 w-max animate-scroll-x"
      style={{ animation: "scrollLeft 50s linear infinite" }}
    >
      {duplicatedCards?.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="card-item flex-shrink-0 w-[400px] h-96 bg-black/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-300 slidecol"
          style={{ border: "1px solid #dddddd38" }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="flex items-center mb-6">
            <Image src={card.icon} width={60} height={60} alt="icon" />
          </div>
          <h3 className="text-white md:mb-4 mb-2 cardtitile">
            {card.title}
          </h3>
          <p className="text-gray-300 cardDecription">
            {card.description}
          </p>
        </div>
      ))}
    </div>
            <button className="relative z-[9999] bannerbtn mt-14 mx-auto flex items-center justify-center">
              <Link className="header-button ajax-link" href="/contact-us">
                <div className="button-icon-link right">
                  <div className="icon-wrap-scale">
                    <div className="icon-wrap parallax-wrap">
                      <div className="button-icon parallax-element">
                        {/* <i className="fa-solid fa-arrow-right"></i> */}
                        <Rocket className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="button-text sticky right">
                    {/* <span data-hover="Let's Talk">Start Your Mission <Rocket className="ml-2 h-5 w-5" /></span> */}
                    <span data-hover="Let's Talk">Start Your Mission</span>
                  </div>
                </div>
              </Link>
              {/* <Link
                      href="/contact-us"
                      id="btnTwo"
                      className="BtnTwo btnWrapper rounded-[50px] text-white px-6 py-3 flex items-center justify-center"
                    >
                      Start Your Mission <Rocket className="ml-2 h-5 w-5" />
                    </Link> */}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
export default PainSection;
