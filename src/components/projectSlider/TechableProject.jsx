"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import TextScrollAnimation from "../../components/ProjectTextaniamtion/TextScrollAnimation";
gsap.registerPlugin(ScrollTrigger);

const scrambleText = (element, finalText, duration = 1.5) => {
  if (!element) return; // Guard against null element
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let iterations = 0;
  const scrambleInterval = 40;
  const totalIterations = Math.ceil((duration * 1000) / scrambleInterval);

  element.innerText = finalText; // Set initial text to avoid empty state
  const scramble = setInterval(() => {
    const scrambled = finalText
      .split("")
      .map((char, index) => {
        if (index < Math.floor(iterations)) return finalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.innerText = scrambled;
    iterations += 1 / (totalIterations / finalText.length); // Smooth progression

    if (iterations >= finalText.length) {
      element.innerText = finalText; // Ensure final text is set
      clearInterval(scramble);
    }
  }, scrambleInterval);
};

const TechableProject = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const imageSectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main section animation (title and span scramble)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=800",
            scrub: true,
            pin: true,
          },
        })
        .fromTo(
          sectionRef.current,
          { backgroundColor: "transparent" },
          { backgroundColor: "#3eaced", duration: 1 }
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, color: "#3eaced" },
          {
            opacity: 1,
            color: "white",
            duration: 0.5,
            onStart: () => {
              if (titleRef.current)
                scrambleText(titleRef.current, "Sellmac Project", 1.2);
            },
          }
        )
        .fromTo(
          spanRef.current,
          { opacity: 0, color: "#3eaced" },
          {
            opacity: 1,
            color: "white",
            duration: 0.5,
            onStart: () => {
              if (spanRef.current)
                scrambleText(
                  spanRef.current,
                  "The Easiest Way to Sell Your MacBook Air",
                  1
                );
            },
          },
          "<+0.5"
        );

      // Image scaling animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imageSectionRef.current,
            start: "top top",
            end: "+=800",
            scrub: true,
            pin: true,
          },
        })
        .to(imageRef.current, {
          width: "100vw",
          duration: 1,
          ease: "power2.inOut",
        });

      // Card animations for showcase
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    {
      src: "/images/projects/sellamc01banner.png",
      width: "w-[550px]",
      height: "h-[600px]",
    },
    {
      src: "/images/projects/sellamc01.png",
      width: "w-[650px]",
      height: "h-[450px]",
    },
    {
      src: "/images/projects/sellamc03.png",
      width: "w-[650px]",
      height: "h-[450px]",
    },
    {
      src: "/images/projects/sellamc02.png",
      width: "w-[500px]",
      height: "h-[600px]",
    },
  ];

  return (
    <>
      <div
        ref={sectionRef}
        className="h-screen flex flex-col justify-center items-center text-black px-4 text-center"
      >
        <h1 ref={titleRef} className="text-8xl font-bold mb-4 ">
          Sellmac Project
        </h1>
        <span ref={spanRef} className="text-3xl ">
          The Easiest Way to Sell Your MacBook Air
        </span>
        {/* <div
          id="hero-footer"
          className="flex justify-between w-full max-w-4xl mt-8"
        >
          <div className="hero-footer-left text-white">
            <div className="button-wrap left scroll-down flex items-center">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <i
                    className="fa-solid fa-arrow-down"
                    style={{ color: "#fff" }}
                  ></i>
                </div>
              </div>
              <div className="button-text sticky left ml-2">
                <span data-hover="SCROLL TO EXPLORE" style={{ color: "#fff" }}>
                  SCROLL TO EXPLORE
                </span>
              </div>
            </div>
          </div>
          <div className="hero-footer-right">
            <div id="share" className="page-action-content" data-text="SHARE:">
              <div className="jssocials-shares flex gap-4">
                <div className="parallax-wrap">
                  <FaFacebookF style={{ color: "#fff" }} />
                </div>
                <div className="parallax-wrap">
                  <BsTwitterX style={{ color: "#fff" }} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div id="hero-footer">
          <div className="hero-footer-left text-white">
            <div className="button-wrap left scroll-down">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <i
                    className="fa-solid fa-arrow-down"
                    style={{ color: "#fcfcfc" }}
                  ></i>
                </div>
              </div>
              <div className="button-text sticky left">
                <span
                  data-hover="SCROLL TO EXPLORE"
                  style={{ color: "#ffffff" }}
                >
                  SCROLL TO EXPLORE
                </span>
              </div>
            </div>
          </div>
          <div className="hero-footer-right">
            <div
              id="share"
              className="page-action-content"
              data-text="SHARE:"
              style={{ color: "#ffffff" }}
            >
              <div className="jssocials-shares">
                <div className="parallax-wrap">
                  <FaFacebookF style={{ color: "#ffffff" }} />
                </div>
                <div className="parallax-wrap">
                  <BsTwitterX style={{ color: "#ffffff" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={imageSectionRef}
        className="flex justify-center items-center bg-white min-h-screen"
      >
        <img
          ref={imageRef}
          src="/images/projects/sellamc01banner.png"
          alt="techable slide"
          className="object-contain transition-all duration-300 ease-in-out"
          style={{ width: "50vw" }}
          width={2000}
        />
      </div>

      <div className="text-white pt-8 pb-12 w-full bg-[#3eaced] textAnimation">
        <p className="mt-20 text-5xl text-white font-bold text-center px-20 max-w-[50rem]:">
          SELL YOUR MAC EASILY
          WITH SELLMAC FOR THE MOST CASH
        </p>
        <div className="overflow-hidden relative h-[800px] mt-12 flex justify-center items-center rounded-2xl">
          <img
            src="/images/projects/sellamc01.png"
            alt="techable slide"
            className="object-contain transition-all duration-300 ease-in-out w-[60%] h-screen rounded-2xl"
          />
        </div>
      </div>

      {/* <div>
        <section className="bg-[#3eaced] px-6 pb-20 min-h-screen">
          <h2 className="text-white text-center text-5xl font-bold mb-16">
            Our Showcase
          </h2>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {images.map((img, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`bg-white rounded-lg overflow-hidden shadow-lg ${img.width} ${img.height}`}
              >
                <img
                  src={img.src}
                  alt={`Showcase ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div> */}
      {/* <TextScrollAnimation /> */}
    </>
  );
};

export default TechableProject;
