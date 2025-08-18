"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const WorksSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // useEffect(() => {
  //   const cards = cardsRef.current;
  //   gsap.set(cards, { y: 920 });

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       pin: true,
  //       start: 'top top',
  //       end: `+=${cards.length * 400}`,
  //       scrub: 1,
  //       anticipatePin: 1,
  //     },
  //   }).to(cards, {
  //     y: 0,
  //     stagger: 0.5,
  //     ease: 'power2.out',
  //   });
  // }, []);

  // const sectionRef = useRef(null);
  //   const cardsRef = useRef([]);
  const headerRef = useRef(null);
  // useEffect(() => {
  //   const cards = cardsRef.current;
  //   // Set all cards off-screen initially
  //   gsap.set(cards, { y: 200, opacity: 0 });
  //   cards.forEach((card, i) => {
  //     gsap.to(card, {
  //       scrollTrigger: {
  //         trigger: card,
  //         start: 'top 90%', // When card hits 70% from top of viewport
  //         toggleActions: 'play none none none',
  //       },
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.3,
  //       ease: 'power2.out',
  //       delay: i * 0.5, // Optional stagger effect via delay
  //     });
  //   });
  // }, []);
  useEffect(() => {
    const cards = cardsRef.current;
    // :white_tick: Animate the works-header
    gsap.set(headerRef.current, { y: 200, opacity: 0 });
    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 90%', // When top of header hits 90% of viewport
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    });
    // :white_tick: Animate each card individually
    gsap.set(cards, { y: 200, opacity: 0 });
    cards.forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: 'power2.out',
        delay: i * 0.5,
      });
    });
  }, []);











  const cards = [
    {
      title: 'Recent Work Highlights',
      description: 'Recently completed AI and app projects, driving growth through innovation, security, and smart design solutions.',
      image: 'Astronaut-galaxy.jpg',
    },
    {
      title: 'Sellmac',
      description: 'Innovating sustainable solutions to power the future responsibly and efficiently.',
      // image: 'ipad-pro-mockup.png',
      // image: 'sellamc01banner.png',
      image: 'Sellmac.png',
    },
    {
      title: 'Apple Tech',
      description: 'A full-stack marketing agency delivering engaging digital experiences.',
      image: 'ipad-pro-mockup (2).png',
    },
    {
      title: 'Techable',
      description: 'Specialized in providing high-quality refurbished Apple products at competitive prices.',
      image: '/images/techable.png',
    },
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <style>{`
        body {
          // background-color: #EAE9E5;
          // background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          overflow-x: hidden;
        }

        .my-works {
          width: 100%;
          padding: 100px 0;
          background:#fff;
        }

        .project-container {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .works-header {
          text-align: left;
          margin-bottom: 20px;
        }

        .works-header-title h2 {
          font-size: 3.5rem;
          margin: 0 0 15px 0;
          font-weight: 700;
        }

        .works-header-subtitle p {
          // margin: auto;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          max-width: 100%;
        }

        .card-row {
      display: grid;
    grid-template-columns: 3.5fr 2.5fr 2.5fr 2.5fr;
    align-items: flex-end;
    justify-content: center;
    gap: 30px;
    // height: 500px;
    position: relative;
    margin-top:60px;
        }
.card-row>div:first-child.work-item.dark-card .card-content {
    transform: unset;
    opacity: 1;
}
    .card-row>div:first-child.work-item.dark-card img{
    opacity: 1 !important;
    }
        .work-item {
          width: 100%;
          min-width: 220px;
          height: 460px;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          background: #fff;
          position: relative;
          will-change: transform;
        }

        .work-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          z-index: 1;
          position: relative;
        }

        .work-item:hover img {
           transform: scale(1.05);
            opacity: .4;
        }

        .dark-card {
          background-color: #1a2a2a;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dark-card img {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .card-content {
          padding: 40px;
          z-index: 2;
          opacity: 0;
          transform: translateY(-60px);
          transition: .9s all ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
        }

        .work-item.dark-card:hover .card-content {
          opacity: 1;
          transform: translateY(0px);
        }

        .dark-card h3 {
          font-size: 1.7rem;
          margin: 0 0 10px 0;
          line-height:32px;
          color: #fff;
          font-weight: 700;
        }

        .dark-card p {
          font-size: 1rem;
          line-height: 1.6;
          max-width: 80%;
          color: #fff;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px;
          z-index: 2;
        }

        .card-arrow {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: absolute;
          bottom: 30px;
          right: 40px;
          transform: rotate(45deg);
        }
          .allProjectbtn{
            border-color: #06b2f2 !important;
            color: #fff !important;
            background-color: #06b2f2 !important;
            box-shadow: unset !important;
          }
            .allProjectbtn:hover{
                background-color: transparent !important;
                border-color: #06b2f2 !important;
                color: #06b2f2 !important;
            }
             .allProjectbtn:hover .button-text.sticky.right span {
                color: #06b2f2 !important;
                filter: none !important;
            }
           .allProjectbtn:hover .icon-wrap-scale {
                top: 10px !important;
            }

        .card-arrow:hover {
          background-color: #fff;
          color: #111;
          transform: rotate(0deg);
        }
          @media (max-width:1536px){
                  .work-item {
          height: 450px;
          border-radius: 20px;
        }
          .card-row {
    height: 460px;
}
          }

        @media (max-width: 1200px) {
          .work-item { width: 260px; }
        }

        @media (max-width: 900px) {
          .work-item { width: 180px; }
        }

        @media (max-width: 700px) {
          .work-item { width: 90vw; height: 300px; margin-bottom: 20px; }
        }
      `}</style>

      <section className="my-works" ref={sectionRef}>
        <div className="project-container">
          <div className="head-btn-wrap flex justify-between">
            <div className="works-header text-left" ref={headerRef}>
              <div className="works-header-title">
                <h2>Our Projects</h2>
              </div>
              <div className="works-header-subtitle">
                <p>
                  Take a closer look at some of our recent work—each <br /> project reflects our commitment to
                  purposeful design and precise execution.
                </p>
              </div>
            </div>
            <div className="cta-project-btn" ref={headerRef}>
              <button className="relative z-[99] bannerbtn mt-14 mx-auto flex items-center justify-center">
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
                      <span data-hover="Let's Talk">All Projects</span>
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
          </div>
        </div>
        <div className="project-container">
          <div className="card-row">
            {cards.map((card, i) => (
              <div
                className="work-item dark-card"
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <img src={card.image} alt={`Work ${i + 1}`} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="card-footer">
                    <div className="card-arrow">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
