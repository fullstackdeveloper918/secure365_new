"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyTechable = () => {
  useEffect(() => {

    // Cards animation
    gsap.utils.toArray(".why-hero-section .card-box").forEach((card, i) => {
      const duration = 0.8;
      gsap.set(card, { x: -100, opacity: 0 });
      gsap.to(card, {
        x: 0,
        opacity: 1,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
        delay: i * 0.2,
      });
    });

    // Parallax image scroll
    gsap.to(".why-hero-section .content-right img", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".why-hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
<style jsx>{`
  .why-hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 100px 20px 100px;
    box-sizing: border-box;
  }

  .why-hero-section .container {
    display: flex;
    align-items: center;
    gap: 50px;
    max-width: 1440px;
    margin-bottom: 80px;
    justify-content: center;
  }

  .why-hero-section .content-left {
    width: 50%;
  }

  .why-hero-section .content-left h1 {
    font-size: 44px;
    color: #363636;
    line-height: 1.2;
    margin-bottom: 20px;
    opacity: 1 !important;
    transform: translate(0px, 0px) !important;
    max-width: 85%;
    font-weight: 600;
    letter-spacing: 0px;
    margin: 0 auto;
    text-align: center;
  }

  .why-hero-section .highlight {
    color: #3eaced;
    opacity: 1 !important;
    display: inline-block;
  }

  .why-hero-section .content-right {
    text-align: center;
    width: 55%;
  }

  .why-hero-section .cards-container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1440px;
  }

  .why-hero-section .card-box {
    flex: 1 1 300px;
    padding: 30px;
    background: #f9f9f9;
    border-radius: 12px;
    border: 1px solid rgb(215, 220, 224);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .why-hero-section .card-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid #3eaced;
  }

  .why-hero-section .card-box h3 {
    font-size: 1.6em;
    margin-bottom: 10px;
    max-width: 60%;
    line-height: 1.4;
    font-weight: 600;
  }

  .why-hero-section .card-box p {
    font-size: 1.2em;
    color: #555;
    margin-bottom: 0px;
    line-height: 1.5;
  }

  // .content-right img {
  //   width: 100%;
  //   height: 400px !important;
  //   object-fit: cover !important;
  //   transform: translate(0px, 0px) !important;
  //   border-radius: 8px;
  // }
    .icon-circle {
  width: 60px;
  height: 60px;
  background-color: #eaf6fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.icon-circle svg {
  width: 28px;
  height: 28px;
  stroke-width: 2.2;
}

`}</style>


      <section className="why-hero-section">
        <div className="container p-0">
          <div className="content-left">
            <h1 className="hero-title">
              Protect, Build, and Grow with <span className="highlight">Secure365</span>
            </h1>
          </div>
          {/* <div className="content-right">
            <img
              src="../images/projects/why-Secure-image.jpg"
              alt="People working in an office"
              width={600}
              height={400}
            />
          </div> */}
        </div>

       <div className="cards-container">
  <div className="card-box">
    <div className="icon-circle">
      <svg width="28" height="28" fill="none" stroke="#3eaced" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M4.5 19.5l5.4-5.4M14.5 5.5L12 12l-2 2-6.5 1.5L3 17l1.5-3.5L7 10l2-2 6.5-2.5z" />
  <path d="M15 4l5 5" />
</svg>
    </div>
    <h3>Fast, Reliable, and Expert Service</h3>
    <p>
      Secure365 delivers quick, dependable heating services with honest,
      expert advice every step of the way.
    </p>
  </div>

  <div className="card-box">
    <div className="icon-circle">
   <svg width="28" height="28" fill="none" stroke="#3eaced" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  <path d="M9 12v-1a3 3 0 016 0v1m-6 0h6m-3 3v2" />
</svg>
    </div>
    <h3>A Heating Focus on Security</h3>
    <p>
      Specialize exclusively in heating, providing security solutions
      whenever you need them, no matter the season.
    </p>
  </div>

  <div className="card-box">
    <div className="icon-circle">
     <svg width="28" height="28" fill="none" stroke="#3eaced" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  <path d="M9 12l2 2 4-4" />
</svg>
    </div>
    <h3>100% Satisfaction Guarantee</h3>
    <p>
      If you're not completely happy with our work, you don't pay - your
      satisfaction is our top priority.
    </p>
  </div>
</div>

{/* <div className="container gap-0 p-0 mt-5">
<img src="/Protect-Secure.png" alt="" className="project-big-img" />
</div> */}
      </section>
    </>
  );
};

export default WhyTechable;
