"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const scrambleText = (element, finalText, duration = 1.5) => {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let iterations = 0;
    const scrambleInterval = 40;
    const totalIterations = (duration * 1000) / scrambleInterval;

    const scramble = setInterval(() => {
        const scrambled = finalText
            .split("")
            .map((char, index) => {
                if (index < iterations) return finalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        element.innerText = scrambled;

        iterations += 1;
        if (iterations > finalText.length) clearInterval(scramble);
    }, scrambleInterval);
};

// const scrambleWord = (element, text, duration = 1000) => {
//   const chars = "opqrstuvwxyz";
//   let iterations = 0;
//   const intervalTime = 10;
//   const totalIterations = duration / intervalTime;

//   const interval = setInterval(() => {
//     const scrambled = text
//       .split("")
//       .map((char, i) => {
//         if (i < iterations) return text[i];
//         return chars[Math.floor(Math.random() * chars.length)];
//       })
//       .join("");

//     element.innerText = scrambled;
//     iterations++;

//     if (iterations > text.length) {
//       clearInterval(interval);
//       element.innerText = text;
//     }
//   }, intervalTime);
// };

const Techable = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const spanRef = useRef(null);
    const imageRef = useRef(null);
    const imageSectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
                    { backgroundColor: "#E9C3F4", duration: 1 }
                )
                .fromTo(
                    titleRef.current,
                    { opacity: 0, color: "#E9C3F4" },
                    {
                        opacity: 1,
                        color: "white",
                        duration: 0.5,
                        onStart: () =>
                            scrambleText(titleRef.current, "Techable Project", 1.2),
                    }
                )
                .fromTo(
                    spanRef.current,
                    { opacity: 0, color: "#E9C3F4" },
                    {
                        opacity: 1,
                        color: "white",
                        duration: 0.5,
                        onStart: () =>
                            scrambleText(spanRef.current, "Scroll-Powered Text Magic", 1),
                    },
                    "<+0.5"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // existing scramble timeline...

            // Image scaling timeline
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
                    //   height: "100%",
                    duration: 1,
                    ease: "power2.inOut",
                });
        });

        return () => ctx.revert();
    }, []);

    //    const image1Ref = useRef(null);

    //   useEffect(() => {
    //     const handleParallaxScroll = () => {
    //       const scrollY = window.scrollY;
    //       const image = imageRef.current;

    //       if (image) {
    //         image.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust 0.3 for effect strength
    //       }
    //     };

    //     window.addEventListener("scroll", handleParallaxScroll);
    //     return () => window.removeEventListener("scroll", handleParallaxScroll);
    //   }, []);

    const textRef = useRef(null);

    // useEffect(() => {
    //   const el = textRef.current;
    //   if (!el) return;

    //   let currentDelay = 0;
    //   el.innerText = "";

    //   words.forEach((word, index) => {
    //     const span = document.createElement("span");
    //     span.className = "inline-block mr-2";
    //     el.appendChild(span);

    //     scrambleWord(span, word, currentDelay);
    //     currentDelay += 500; // delay between words
    //   });
    // }, []);

    const section1Ref = useRef(null);
    const text1Ref = useRef(null);

    //   useEffect(() => {
    //     const trigger = ScrollTrigger.create({
    //       trigger: section1Ref.current,
    //       start: "top 80%", // Trigger when section is 80% in view
    //       once: false, // Only trigger once
    //       onEnter: () => {
    //         scrambleWord(
    //           text1Ref.current,
    //           "Secure with techable and sellmac project",
    //           1200
    //         );
    //       },
    //     });

    //     return () => {
    //       trigger.kill();
    //     };
    //   }, []);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax for image
            gsap.to(section1Ref.current.querySelector("img"), {
                y: -300, // moves upward during scroll
                ease: "none",
                scrollTrigger: {
                    trigger: section1Ref.current,
                    start: "top bottom", // when section hits the bottom of viewport
                    end: "bottom top", // until it scrolls out
                    scrub: true,
                },
            });

            // Parallax for text
            // gsap.fromTo(
            //   text1Ref.current,
            //   { y: 100, opacity: 0 },
            //   {
            //     y: 0,
            //     opacity: 1,
            //     ease: "power2.out",
            //     scrollTrigger: {
            //       trigger: section1Ref.current,
            //       start: "top 70%",
            //       end: "bottom top",
            //       scrub: true,
            //     },
            //   }
            // );
        });

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const el = text1Ref.current;
        const sentence = "";

        // Clear existing content
        el.innerHTML = "";

        // Split into words, wrap in span
        const words = sentence.split(" ");
        words.forEach((word, index) => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            span.style.opacity = 0;
            span.style.display = "inline-block";
            span.style.transform = "translateY(20px)";
            el.appendChild(span);
        });

        // Animate on scroll
        gsap.to(el.children, {
            scrollTrigger: {
                trigger: section1Ref.current,
                start: "center center", // when section enters viewport
                once: false,
            },
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "power3.out",
        });
    }, []);

    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
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
        });
    }, []);

    const images = [
        {
            src: "/images/projects/appletechslide01.png",
            width: "w-[550px]",
            height: "h-[600px]",
        },
        {
            src: "/images/projects/appletechslide02.png",
            width: "w-[650px]",
            height: "h-[450px]",
        },
        {
            src: "/images/projects/appletechslide03.png",
            width: "w-[650px]",
            height: "h-[450px]",
        },
        {
            src: "/images/projects/appletechslide04.png",
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
                <h1
                    ref={titleRef}
                    className="text-8xl font-bold mb-4 text-black"
                    style={{ color: "#000" }}
                >
                    Techable Project
                </h1>
                <span ref={spanRef} className="text-3xl text-black">
                    Decode your Apple Serial Number or Model Number for Specs
                </span>
                <div id="hero-footer">
                    <div className="hero-footer-left text-white">
                        <div className="button-wrap left scroll-down">
                            <div className="icon-wrap parallax-wrap">
                                <div className="button-icon parallax-element">
                                    <i
                                        className="fa-solid fa-arrow-down"
                                        style={{ color: "#111" }}
                                    ></i>
                                </div>
                            </div>
                            <div className="button-text sticky left">
                                <span data-hover="SCROLL TO EXPLORE" style={{ color: "#111" }}>
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
                            style={{ color: "#111" }}
                        >
                            <div className="jssocials-shares">
                                <div className="parallax-wrap">
                                    <FaFacebookF style={{ color: "#111" }} />
                                </div>
                                <div className="parallax-wrap">
                                    <BsTwitterX style={{ color: "#111" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={imageSectionRef}
                className="h-screen flex justify-center items-center bg-white"
            >
                <img
                    ref={imageRef}
                    src="/images/projects/appletechslide02.png"
                    alt="techable slide"
                    className="object-contain transition-all duration-300 ease-in-out"
                    style={{ width: "60vw" }}
                />
            </div>

            <div className="text-[#ffff] mt-40 pt-8 pb-16 w-[100vw] bg-[#E9C3F4]">
                <p
                    className="mt-20 text-5xl text-[#111] font-bold text-center px-20 applecontent mx-auto"
                    style={{ maxWidth: "1200px" }}
                >
                    Explore the possibilities and unleash your creativity with our
                    innovative tools designed for video enthusiasts.
                </p>

                <div
                    className="overflow-hidden relative mt-12 flex justify-center items-center "
                    style={{ borderRadius: "15px" }}
                >
                    <img
                        //   ref={image1Ref}
                        src="/images/projects/appletechslide04.png"
                        alt="techable slide"
                        className="object-cover transition-all duration-300 ease-in-out w-[60%] h-screen "
                        style={{ borderRadius: "20px" }}
                    />
                </div>
            </div>

            <div ref={section1Ref} className="text-black w-screen  bottomImges">
                <div className="overflow-hidden relative w-full h-[1000px] flex justify-center items-center">
                    {/* Image */}
                    <img
                        src="/images/projects/appletechslide03.png"
                        alt="techable slide"
                        className="w-screen h-full object-cover"
                        style={{ borderRadius: "20" }}
                    />

                    {/* Word-by-word animated text */}
                    <div
                        className="absolute text-black ml-80 text-left text-3xl md:text-7xl text-wrap w-[60%] font-bold"
                        ref={text1Ref}
                    >
                        {/* Text will be dynamically inserted here by JavaScript */}
                    </div>
                </div>
            </div>

            {/* <div className="">
        <section className="bg-[#e9c3f4] px-6 pb-20 min-h-screen">
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
                  style={{ borderRadius: "20" }}
                />
              </div>
            ))}
          </div>
        </section>
      </div> */}
        </>
    );
};

export default Techable;
