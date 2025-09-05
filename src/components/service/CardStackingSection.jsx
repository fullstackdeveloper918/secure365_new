"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {Benefits_of_Choosing} from "@/serviceData/InnerService"



// const Benefits_of_Choosing =
// {
//   title: "Why Brands Choose Secure365 for Site Design & Development",
//   subtitle: "Secure365",
//   para: "We blend visual creativity with backend efficiency — every website we build is fast, secure, mobile-first, and optimized to drive measurable results.",
// cards : [
//   {
//     id: 1,
//     title: "Enhanced Security",
//     description:
//       "Your website is your digital front door — and we build it like a fortress.",
//     listItems: [
//       "Enterprise-grade Data Encryption",
//       "Multi-Factor Authentication (MFA)",
//       "Continuous Real-Time Threat Detection",
//       "Proactive Security Audits",
//     ],
//     bgImage: "/Astro1.jpg?height=450&width=1300",
//   },
//   {
//     id: 2,
//     title: "Scalability & Flexibility",
//     description:
//       "Built to grow with you. Whether you’re adding new products, locations, or services — your site won’t slow you down.",
//     listItems: [
//       "Modular development frameworks",
//       "Scalable content architecture ",
//       "SEO-first structure & schema markup",
//       "Easy CMS control for non-tech users",
//     ],
//     bgImage: "/Astro2.jpg?height=450&width=1300",
//   },
//   {
//     id: 3,
//     title: "Optimized for Performance",
//     description:
//       "Performance isn’t a feature — it’s a foundation.",
//     listItems: [
//       "90+ Google Lighthouse scores",
//       "Built-in technical SEO",
//       "Cloud-native infrastructure",
//       "Image optimization, caching, & CDN-ready",
//     ],
//     bgImage: "/Astro3.jpg?height=450&width=1300",
//   },
// ]
// }



export default function CardStackingSection({ Benefits_of_Choosing }) {
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w, h;
    let stars;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random() * 360,
        v: Math.random() * 0.2 + 0.05,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FFFFFF";
      stars.forEach((s) => {
        s.x += Math.cos(s.a) * s.v;
        s.y += Math.sin(s.a) * s.v;
        if (s.x < 0 || s.x > w || s.y < 0 || s.y > h) {
          s.x = Math.random() * w;
          s.y = Math.random() * h;
        }
        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024; // Tailwind's lg breakpoint

    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const stickDistance = 0;

    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top+=80",
      endTrigger: cardsRef.current[cardsRef.current.length - 1],
      end: "bottom+=500",
      pin: true,
      pinSpacing: false,
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cardsRef.current[cardsRef.current.length - 1],
      start: "top top",
    });

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const scale = 1 - (cardsRef.current.length - index) * 0.025;

      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: `50% ${lastCardST.start + stickDistance}`,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top+=280",
        end: () => `${lastCardST.start} ${stickDistance}`,
        pin: true,
        pinSpacing: false,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-[60px] relative overflow-hidden benifitsec">
      <canvas
        id="starfield"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: "radial-gradient(rgb(22 25 30) 0%, rgb(23 26 31) 70%)",
        }}
      />

      <div className="container mx-auto cardbenifits">
        <div className="flex justify-center">
          <div className="w-full">
            <h2
              ref={headerRef}
              className="text-center text-[44px] font-semibold text-white mb-[120px] sticky top-5 benefit-main-head"
            >
              {Benefits_of_Choosing.title} <span className="text-[#009dd6]">{Benefits_of_Choosing.subtitle}</span>
              <p className="benefitPara text-[#f9f9f9d6] text-lg w-full mt-2 mb-12 mx-auto">
                {/* Secure365 offers robust, 24/7 protection with advanced threat
                detection to keep your data safe. Enjoy peace of mind with
                reliable security solutions tailored for businesses of all sizes. */}
                {Benefits_of_Choosing.para}
              </p>
            </h2>

            <div className="max-w-[1300px] mx-auto flex flex-col gap-[30px] mainCard">
              {Benefits_of_Choosing?.cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="w-full min-h-[450px] rounded-[30px] p-[60px_35px] relative hover:rotate-2 transition-transform duration-300 border borderColor benefit-card-inner"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transformOrigin: "50% -160%",
                  }}
                >
                  <div className="flex items-center justify-between w-full ben-card-wrap-box">
                    <div className="benefit-card-contBox">
                      <h4 className="text-white text-[34px] mb-[15px] mt-0">
                        {card.title}
                      </h4>
                      <p className="text-white text-[18px] leading-[26px] max-w-[80%]">
                        {card.description}
                      </p>
                      <ul className="mt-[50px]">
                        {card.listItems.map((item, i) => (
                          <li
                            key={i}
                            className="list-none text-white text-[20px] mt-[25px]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
