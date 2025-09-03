"use client";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SingleProKeyTechable from "./SingleProKeyTechable"
import BeforeAfterTechable from './BeforeAfterTechable'
import FooterFour from "@/layouts/footers/footer-four";
import { FourthSection } from "../inner-services/ai-services/FourthSection";

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

// Scramble text function
const scrambleText = (element, finalText, duration = 1.5) => {
  if (!element) return;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const intervalMs = 40;
  const totalFrames = Math.ceil((duration * 1000) / intervalMs);
  let frame = 0;

  element.textContent = ""; // start empty

  const intervalId = setInterval(() => {
    const progress = frame / totalFrames;
    const revealCount = Math.floor(progress * finalText.length);

    element.textContent = finalText
      .split("")
      .map((ch, i) => (i < revealCount ? finalText[i] : chars[Math.floor(Math.random() * chars.length)]))
      .join("");

    frame++;
    if (frame >= totalFrames) {
      element.textContent = finalText;
      clearInterval(intervalId);
    }
  }, intervalMs);

  return intervalId;
};

const Techable = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const intervalsRef = useRef([]);

  const imageSectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Scramble text on banner when it enters viewport
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (titleRef.current) {
          const id = scrambleText(titleRef.current, "Techable Refurbished Store", 1.5);
          if (id) intervalsRef.current.push(id);
        }
        if (spanRef.current) {
          const id = scrambleText(
            spanRef.current,
            "Certified Refurbished Apple Devices with Trust & Warranty",
            2
          );
          if (id) intervalsRef.current.push(id);
        }
      },
      once: true,
    });

    // Image scale animation on scroll
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageSectionRef.current,
        start: "top bottom", // when image enters viewport
        end: "bottom top", // when image leaves viewport
        scrub: true,
      },
      width: "100vw",
      duration: 1,
      ease: "power2.inOut",
    });

    // Cleanup intervals
    return () => {
      intervalsRef.current.forEach((id) => clearInterval(id));
      intervalsRef.current = [];
    };
  }, []);

  

  return (
    
    <>
    
 <style>{`

  .why-hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 20px 100px;
    box-sizing: border-box;
    background:#000;
  }

  .why-hero-section .container {
    display: flex;
    align-items: center;
    gap: 50px;
    max-width: 1440px;
    margin-bottom: 50px;
    justify-content: center;
  }

  .why-hero-section .content-left {
    width: 50%;
    margin-bottom: 40px !important;
  }

  .why-hero-section .content-left h1 {
    font-size: 44px;
    color: #fff;
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
    padding: 40px !important;
    border: 1px solid #303030 !important;
    backdrop-filter: blur(95px);
    background: rgb(202 202 202 / 13%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgb(0 0 0 / 10%), inset 0 1px 0 rgb(52 52 52), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 20px 10px rgb(26 26 26);
    position: relative;
    overflow: hidden;
  }

  .why-hero-section .card-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid #3eaced;
  }

  .why-hero-section .card-box h3 {
    font-size: 1.6em;
    margin-bottom: 10px;
    max-width: 80%;
    line-height: 1.4;
    font-weight: 600;
    color:#3eaced;
  }

  .why-hero-section .card-box p {
    font-size: 1.2em;
    color: #d3d3d3ff;
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


   .cont-first-para{
        max-width: 100%;
        font-size: 20px;
    }
    .about-single-Projimg img{
        width: 85%;
        margin: auto;
    }
    .about-single-projectCont h2{
        font-size: 40px;
    }
    .single-project-banner h1{
        font-size: 64px;
    }
    .smain-subhead{
        font-size: 24px;
    }
    .about-ch-head{
        font-size: 20px;
    }
        .about-list li{
          font-size:16px;
          margin-bottom: 15px;
        }



        h2, h3 {
          color: #00AEEF;
        }
          .project-single-banner-sec{
             height:550px;
             justify-content: end;
             padding-bottom: 60px;
             background-image:url('/Project-single-banimage.webp');
             background-position: bottom;
             background-size: cover;
          }
        .card-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 8px;
        }
        .container{
          max-width: 1440px;
          margin: auto;
        }
        .single-project-section{
          padding: 100px 0 40px;
        }
        .cont-first-para{
          max-width: 100%;
          font-size: 20px;
        }
        .about-single-Projimg img{
          width: 85%;
          margin: auto;
        }
        .about-single-projectCont h2{
          font-size: 40px;
        }
        .single-project-banner h1{
          font-size: 64px;
        }
        .smain-subhead{
          font-size: 24px;
        }
        .about-ch-head{
          font-size: 20px;
        }
        @media (max-width: 768px){
          .about-single-Projimg img{
            width: 100%;
          }
          .single-project-banner h1{
            font-size: 40px;
          }
          .smain-subhead{
            font-size: 18px;
          }
          .about-single-projectCont h2{
            font-size: 28px;
          }
        }
      `}</style>
      {/* Banner with scramble text */}
      <div
        ref={sectionRef}
        className="project-single-banner-sec flex flex-col justify-center items-center text-center bg-[#000] px-4"
      >
        <h1 ref={titleRef} className="text-6xl font-semibold mb-4 text-[#00AEEF]"></h1>
        <span ref={spanRef} className="text-2xl text-white mb-3"></span>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Secure365 boosted techable.com’s trust, security, and user experience for customers buying refurbished Apple gear.
        </p>
      </div>

      {/* About Project */}
      <section className="pt-16 px-6 bg-black" data-aos="fade-up">
        <div className="container">
          <div className="about-proj-wrapper flex flex-col md:flex-row items-center gap-5">
            <div className="about-single-projectCont">
              <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-300 mb-4 cont-first-para">
                techable.com specializes in high-quality refurbished Apple products—MacBooks, iPads, iPhones—inspected to exceed expectations, sold with warranties and reasonable return policies.
              </p>
              <p className="text-white mb-4 about-ch-head">
                Challenges faced before Secure365:
              </p>
              <ul className="list-disc list-inside text-gray-400 about-list ms-0">
                <li>Handling secure user data</li>
                <li>Fast payment processing</li>
                <li>Scaling operations safely</li>
              </ul>
            </div>
            <div className="about-single-Projimg mt-6 md:mt-0 text-center">
              <img src="/About-Sellmac-image.png" alt="Devices" className="rounded-lg shadow-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Secure365 Contribution */}
      <section className="why-hero-section">
          <div className="content-left">
            <h1 className="hero-title mb-[50px]">
             How <span className="highlight">Secure365</span> Helped
            </h1>
          </div>

       <div className="cards-container">
  <div className="card-box">
    <div className="icon-circle">
      <svg width="28" height="28" fill="none" stroke="#3eaced" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M4.5 19.5l5.4-5.4M14.5 5.5L12 12l-2 2-6.5 1.5L3 17l1.5-3.5L7 10l2-2 6.5-2.5z" />
  <path d="M15 4l5 5" />
</svg>
    </div>
    <h3>Trust & Guarantees</h3>
    <p>
      Enabled secure display of warranty & return guarantees, building customer confidence.
    </p>
  </div>

  <div className="card-box">
    <div className="icon-circle">
   <svg width="28" height="28" fill="none" stroke="#3eaced" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  <path d="M9 12v-1a3 3 0 016 0v1m-6 0h6m-3 3v2" />
</svg>
    </div>
    <h3>Protected Payments</h3>
    <p>
      Integrated secure gateways for PayPal-protected payments and fast processing.
    </p>
  </div>

  <div className="card-box">
    <div className="icon-circle">
     <svg width="28" height="28" fill="none" stroke="#3eaced" strokeWidth="2" viewBox="0 0 24 24">
  <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  <path d="M9 12l2 2 4-4" />
</svg>
    </div>
    <h3>Efficient Shipping</h3>
    <p>
     Boosted reliability of shipping workflows—free, fast, and trackable deliveries.
     </p>
  </div>
</div>

{/* <div className="container gap-0 p-0 mt-5">
<img src="/Protect-Secure.png" alt="" className="project-big-img" />
</div> */}
      </section>
      
      {/* Key Features */}
      {/* <section className="py-16 px-6 project-key-feature" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Instant Online Quotes",
              desc: "Users get accurate device pricing instantly, improving user experience.",
            },
            {
              title: "Secure Data Handling",
              desc: "Personal info wiped safely before devices are resold.",
              delay: 100,
            },
            {
              title: "Fast & Reliable Payments",
              desc: "Multiple payment methods supported and processed quickly.",
              delay: 200,
            },
            {
              title: "Wide Device Coverage",
              desc: "Supports MacBook, iPad, iPhone, iMac, Mac Mini, and Apple Watch.",
              delay: 300,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow"
              data-aos="fade-up"
              data-aos-delay={feature.delay || 0}
            >
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section> */}
      <SingleProKeyTechable />

      {/* Before & After */}
     <BeforeAfterTechable />

      {/* Testimonials */}
      {/* <section className="py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 italic mb-4">
            “Secure365’s solutions allowed us to focus on growing our business while keeping our users’ data safe and payments fast.”
          </p>
          <p className="text-gray-500 font-semibold">– SellMac CEO</p>
          <img
            src="https://via.placeholder.com/600x200"
            alt="Client Screenshot"
            className="mx-auto mt-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={200}
          />
        </div>
      </section> */}

      {/* Technology & Tools */}
      <section className="py-16 px-6 bg-black" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Technology & Tools Used</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Secure365 Platform",
              desc: "Secure payment flows, encrypted data handling, shipping integration",
              icon: "https://via.placeholder.com/40",
            },
            {
              title: "Warranty & Returns Engine",
              desc: "Automated return/warranty display and management logic",
              icon: "https://via.placeholder.com/40",
              delay: 100,
            },
            {
              title: "UI & UX Layer",
              desc: "Clean frontend for browsing, purchasing, and guarantee display",
              icon: "https://via.placeholder.com/40",
              delay: 200,
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow"
              data-aos="fade-up"
              data-aos-delay={tool.delay || 0}
            >
              <img src={tool.icon} className="card-icon mx-auto" alt={tool.title} />
              <h3 className="font-semibold text-3xl mb-2">{tool.title}</h3>
              <p className="text-gray-300">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

     

       <div
                    className="bg-[#fff] mt-[0px] relative z-10"
                  ><FourthSection />
                  </div>
            <FooterFour className="relative z-20" />
    </>
  );
};

export default Techable;
