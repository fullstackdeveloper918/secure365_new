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
  const headerRef = useRef(null);
  useEffect(() => {
    const cards = cardsRef.current;
    // Animate header
    gsap.set(headerRef.current, { y: 200, opacity: 0 });
    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    });
    // Animate cards
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
      description:
        'Recently completed AI and app projects, driving growth through innovation, security, and smart design solutions.',
      image: 'Astronaut-galaxy.jpg',
      link: '/work/highlights', // Link for this card
    },
    {
      title: 'Sellmac',
      description:
        'Innovating sustainable solutions to power the future responsibly and efficiently.',
      image: 'Sellmac.png',
      link: '/work/sellmac', // Link for this card
    },
    {
      title: 'Apple Tech',
      description:
        'A full-stack marketing agency delivering engaging digital experiences.',
      image: 'ipad-pro-mockup (2).png',
      link: '/work/apple-tech', // Link for this card
    },
    {
      title: 'Techable',
      description:
        'Specialized in providing high-quality refurbished Apple products at competitive prices.',
      image: '/images/techable.png',
      link: '/work/techable', // Link for this card
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
          overflow-x: hidden;
        }
        .my-works {
          width: 100%;
          padding: 100px 0;
          background: #000;
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
          font-weight: 600;
        }
        .works-header-subtitle p {
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
          position: relative;
          margin-top: 60px;
        }
        .work-item {
          width: 100%;
          min-width: 220px;
          height: 460px;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background: #fff;
          position: relative;
          will-change: transform;
          transition: background 0.3s ease;
        }
        .work-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          position: relative;
        }
        .work-item:hover img {
          transform: scale(1.05);
          opacity: 0.4;
        }
        .dark-card {
          background-color: #1A2A2A;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dark-card:hover {
          background-color: rgba(0, 0, 0, 0.7); /* Dark background on hover */
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
         .show-default {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }
          .work-item.dark-card.show-default .card-content {
    opacity: 1;
}
        .work-item.dark-card:hover .card-content {
          opacity: 1;
          transform: translateY(0px);
        }
        .dark-card h3 {
          font-size: 1.7rem;
          margin: 0 0 10px 0;
          line-height: 32px;
          color: #fff;
          font-weight: 700;
        }
        .dark-card p {
          font-size: 1rem;
          line-height: 1.6;
          max-width: 100%;
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
        .card-arrow:hover {
          background-color: #fff;
          color: #111;
          transform: rotate(0deg);
        }
@media (max-width: 1400px) {
 .work-item {
 width: 100%;
 min-width: 220px;
  height: 380px;
  border-radius: 25px;
   overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
     background: #fff; position: relative; will-change: transform; }
    .card-content {
    padding: 40px 25px;
     z-index:2;
      opacity: 0;
      transform: translateY(-60px);
       transition: .9s all ease;
        height: 100%;
         display: flex;
          flex-direction: column;
           justify-content: end;
           }
 }
        /* Tablet: 2 cards per row */
        @media (max-width: 991px) {
          .card-row {
            grid-template-columns: 1fr 1fr;
          }
          .work-item {
            height: 400px;
          }
        }
        /* Mobile: 1 card per row */
        @media (max-width: 700px) {
          .card-row {
            grid-template-columns: 1fr;
          }
          .work-item {
            width: 100%;
            height: 300px;
            margin-bottom: 0px;
          }
          .card-content {
            padding: 25px;
          }
          .dark-card h3 {
            font-size: 1.5rem;
            margin: 0 0 10px 0;
            line-height: 30px;
            font-weight: 600;
          }
          .works-header-title h2 {
            font-size: 2.2rem;
            margin: 0 0 15px 0;
            font-weight: 600;
          }
          .works-header-subtitle p {
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
            max-width: 100%;
            margin-top: 25px;
          }
          .my-works {
            padding: 60px 0;
          }
        }
      `}</style>
      <section className="my-works" ref={sectionRef}>
        <div className="project-container">
          <div className="head-btn-wrap flex justify-center">
            <div className="works-header text-center" ref={headerRef}>
              <div className="works-header-title">
                <h2 className="text-[#04ACED] font-semibold">Our Projects</h2>
              </div>
              <div className="works-header-subtitle text-gray-300">
                <p>
                  Take a closer look at some of our recent work—each <br /> project reflects our commitment to
                  purposeful design and precise execution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="card-row mt-5">
            {cards.map((card, i) => (
              <Link href={card.link} passHref key={i}>
                <div
                  className={`work-item dark-card ${i === 0 ? 'show-default' : ''}`}
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default WorksSection;