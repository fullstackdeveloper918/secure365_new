"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ProjectSlider from "@/components/projectSlider/projectSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechableProject from "@/components/projectSlider/TechableProject";
import AppleTech from "@/components/projectSlider/AppleTech";
import TextScrollAnimation from "@/components/ProjectTextaniamtion/TextScrollAnimation";
import Component from "@/components/ProjectTextaniamtion/TextScrollAnimation";
import WhyTechable from "@/components/projectSlider/whyTechable";
import UniqueSolution from "@/components/projectSlider/uniqueSolution";
import MoreDesign from "@/components/projectSlider/MoreDesign";
import ImagesSlider from "@/components/projectSlider/ImagesSlider";
import SecureWay from "@/components/projectSlider/SecureWay";
import GallerySection from "@/components/projectSlider/GallerySection";
import CtaSection from "@/components/projectSlider/CtaSection";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    gsap.set("#hero-background-layer", {
      y: "-100%",
      scale: 0.8,
      width: "60%",
      transformOrigin: "center top",
      opacity: 0,
    });

    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .to("#hero-background-layer", {
        y: "0%",
        scale: 1,
        width: "100%",
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
      })
      .fromTo(
        ".hero-title span",
        { y: 120, opacity: 0, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
        },
        "-=1.2"
      )
      .fromTo(
        ".hero-subtitle span",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .fromTo(
        ".hero-footer-left, .hero-footer-right",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.5"
      );


    // Parallax fade/move on scroll for hero texts
    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -50,
      opacity: 0,
      ease: "none",
    });

    gsap.to(".hero-subtitle", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -30,
      opacity: 0,
      ease: "none",
    });

    // Parallax Hero Image
    gsap.to("#hero-bg-image", {
      // yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax Images
    gsap.utils.toArray(".parallax-image").forEach((image) => {
      gsap.fromTo(
        image,
        { y: -60 },
        {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Floating stars (space animation)
    const createStars = () => {
      const container = document.getElementById("space-animation");
      if (!container) return;
      for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = `${Math.random() * 2 + 1}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
      }
    };
    createStars();

    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #space-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          background: transparent;
          overflow: hidden;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: floatStars 5s linear infinite;
        }
        @keyframes floatStars {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>

      <main>
        <div className="cd-index cd-main-content">
          <div
            id="clapat-page-content"
            className="dark-content"
            data-bgcolor="#ffffff"
          >
            <div id="content-scroll">
              <div id="main" className="" ref={mainContentRef}>
                <div id="hero" className="has-image autoscroll" ref={heroRef}>
                  <div id="hero-styles">
                    <div
                      id="hero-caption"
                      className="content-full-width parallax-scroll-caption project-top-bg"
                    >
                      {/* <video src="/Futuristic_Tech.mp4" className="Project-ban-vd"></video> */}
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
                      >
                        <source src="/Futuristic_Tech.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div id="space-animation"></div> {/* Space Animation Here */}
                      <div className="container">
                      <div className="inner">
                        <h1 className="hero-title caption-timeline project-top-heading">
                          <span>Transforming a Vision</span>{" "}
                          <span className="text-[#04aced]">into Reality</span>
                        </h1>
                        <div className="hero-subtitle caption-timeline onload-shuffle project-top-para">
                          <span>
                           At Secure365, we turn your digital ideas into secure, high-performing websites. From concept to launch, our expert team ensures every line of code aligns with your goals—built to protect, scale, and succeed in today’s online landscape.
                          </span>
                        </div>
                        </div>
                      </div>
                      {/* <div id="hero-footer">
                        <div className="hero-footer-left">
                          <div className="button-wrap left scroll-down">
                            <div className="icon-wrap parallax-wrap">
                              <div className="button-icon parallax-element">
                                <i className="fa-solid fa-arrow-down"></i>
                              </div>
                            </div>
                            <div className="button-text sticky left">
                              <span data-hover="SCROLL TO EXPLORE">
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
                          >
                            <div className="jssocials-shares">
                              <div className="parallax-wrap">
                                <FaFacebookF />
                              </div>
                              <div className="parallax-wrap">
                                <BsTwitterX />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* <div
                  id="hero-image-wrapper"
                  className="change-header-color hero-pixels-cover parallax-scroll-image flex flex-col justify-center items-center proj-full-image"
                >
                  <div
                    id="hero-background-layer"
                    className="parallax-scroll-image"
                    style={{ backgroundColor: "#ffffff00" }}
                  >
                    <div
                      id="hero-bg-image"
                      style={{
                        backgroundImage:
                          "url('../images/projects/Astronaut-flag-hand.jpg')",
                      }}

                    >
                      <img src={('../images/projects/Project-Main-full.jpg')} />
                    </div>
                  </div>
                </div> */}

                {/* Your existing content here */}
                <div id="main-content">
                  <div id="main-page-content">
                    {/* Add your sections here */}
                  </div>
                </div>
              </div>
            </div>
            <WhyTechable />
            <MoreDesign />
            <ImagesSlider />
             <SecureWay />
             {/* <CardStackingSection /> */}
            <TextScrollAnimation />
            <GallerySection />
            <CtaSection />
            {/* <UniqueSolution />
            <ProjectSlider />
            <TechableProject />
            <AppleTech /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
