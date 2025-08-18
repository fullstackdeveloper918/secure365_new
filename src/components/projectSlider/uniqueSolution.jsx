"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UniqueSolution = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      gsap.fromTo(
        image,
        {
          scale: 1,
        },
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            // markers: true, // Enable for debugging
          },
          ease: "power2.out",
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .Sol-unique {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 100px 20px 60px;
          box-sizing: border-box;
        }

        .Sol-unique .container {
          display: flex;
          align-items: center;
          gap: 50px;
          max-width: 1440px;
          margin-bottom: 80px;
          justify-content: center;
        }

        .Sol-unique h2.sol-hero-title {
          font-size: 54px;
          color: #363636;
          line-height: 1.2;
          margin: 0 auto 100px !important;
          font-weight: 600;
          letter-spacing: 0px;
          text-align: center;
          max-width: 70%;
        }

        .Sol-unique .highlight {
          color: #3eaced;
          display: inline-block;
        }

        .sol-image-box img {
          width: 90%;
          height: 600px;
          object-fit: cover;
          border-radius: 24px;
          transition: transform 0.3s ease-out;
        }

        .sol-image-box {
          text-align: center;
        }
      `}</style>

      <section className="Sol-unique" ref={sectionRef}>
        <div className="container p-0">
          <div className="sol-content-wrap-box">
            <h2 className="sol-hero-title">
              Solving <span className="highlight">Unique </span> Challenges with Custom Solutions
            </h2>
            <div className="sol-image-box">
              <img
                ref={imageRef}
                src="../images/projects/Unique-sol-image.png"
                alt="People working in an office"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UniqueSolution;
