'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const items = [
  {
    icon: '🔒',
    heading: 'Secure Layers',
    image: '/Secure-layer.jpg',
    top: '12%',
    left: '15%',
  },
  {
    icon: '⚙️',
    heading: 'Optimized Engines',
    image: '/Optimize-Engine.jpg',
    top: '25%',
    left: '78%',
  },
  {
    icon: '💡',
    heading: 'Smart UX',
    image: '/Smart-ux.jpg',
    top: '58%',
    left: '12%',
  },
  {
    icon: '🧠',
    heading: 'Intelligent Systems',
    image: '/Intelligent-Systems.jpg',
    top: '72%',
    left: '65%',
  },
  {
    icon: '🚀',
    heading: 'Blazing Performance',
    image: '/Performance.jpg',
    top: '18%',
    left: '47%',
  },
];

const MoreDesign = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const floatingRefs = useRef([]);
  const [active, setActive] = useState({ image: null, top: '', left: '' });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pin section on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
      });

      // Animate center text
      gsap.fromTo(
        textRef.current.querySelectorAll('h2, p'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );

      // Mouse move effect inside section only
      const handleMouseMove = (e) => {
        const bounds = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width - 0.5) * 2;
        const y = ((e.clientY - bounds.top) / bounds.height - 0.5) * 2;

        floatingRefs.current.forEach((el, i) => {
          gsap.to(el, {
            x: x * (10 + i * 2),
            y: y * (10 + i * 2),
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      };

      const section = sectionRef.current;
      section.addEventListener('mousemove', handleMouseMove);

      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
        ctx.revert();
      };
    }, sectionRef);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-cover bg-center text-white overflow-hidden flex items-center justify-center px-6 more-design-sec"
      style={{ backgroundImage: "url('/More-Design-bg.jpg')" }}
    >
      {/* Floating Icons with Headings */}
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (floatingRefs.current[index] = el)}
          className="absolute flex flex-col items-center cursor-pointer group z-10"
          style={{ top: item.top, left: item.left }}
          onMouseEnter={() =>
            setActive({ image: item.image, top: item.top, left: item.left })
          }
          onMouseLeave={() => setActive({ image: null, top: '', left: '' })}
        >
          <div className="text-4xl md:text-5xl opacity-80">{item.icon}</div>
          <div className="mt-6 text-sm md:text-base text-white bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm transition-all group-hover:scale-105">
            {item.heading}
          </div>
        </div>
      ))}

      {/* Image on Hover */}
      {active.image && (
        <div
          className="absolute z-50 pointer-events-none transition-all duration-300 ease-in-out"
          style={{
            top: `calc(${active.top} + 50px)`,
            left: `calc(${active.left} + 50px)`,
          }}
        >
          <div className="p-1 rounded-xl shadow-xl">
            <img
              src={active.image}
              alt="Hover"
              className="w-64 h-64 object-cover rounded-xl transition-transform duration-300 scale-105"
            />
          </div>
        </div>
      )}

      {/* Center Text */}
      <div className="more-design-content mx-auto text-center z-10 relative" ref={textRef}>
        <h2 className="font-bold text-3xl md:text-5xl mb-6 drop-shadow-lg leading-tight text-white">
          Your Website Deserves More <br /> Than Just Good Design
        </h2>
        <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed drop-shadow text-white">
          Security, speed, and structure are equally important. At Secure365, we fuse aesthetics with
          functionality to make sure your digital presence is powerful and protected.
        </p>
      </div>
    </section>
  );
};

export default MoreDesign;
