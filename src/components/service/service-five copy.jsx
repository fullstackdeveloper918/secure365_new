'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServiceItems({ serviceData }) {
  const containerRefs = useRef([]);

  useEffect(() => {
    containerRefs.current.forEach((container) => {
      if (!container) return;

      const firstImage = container.querySelector('.image-left');
      const secondImage = container.querySelector('.image-right');

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        }
      })
        .to(firstImage, {
          width: '30%',
          ease: 'power2.out',
        }, 0)
        .to(secondImage, {
          width: '70%',
          ease: 'power2.out',
        }, 0);
    });
  }, []);

  const services = [
    {
      title: "Proactive & Preventative",
      description: "We don’t just react to issues; we prevent them from happening",
      imgLeft: "/images/service1.jpg",
      imgRight: "/images/service2.jpg",
    },
    {
      title: "End-to-End Solutions",
      description: "From assessment to implementation and ongoing support, we cover the entire process",
      imgLeft: "/images/service4.jpg",
      imgRight: "/images/service3.jpg",
    },
    {
      title: "Client-Centric",
      description: "Your needs come first. We customize our services to fit your business’s unique goals and challenges",
      imgLeft: "/images/service6.jpg",
      imgRight: "/images/service5.jpg",
    }
  ];

  return (
    <div className="row">
      {services.map((item, index) => (
        <div key={index} className="col-xxl-12 col-xl-4 col-lg-4 col-md-6">
          <div
            className="tp-service-5-item tp_fade_bottom space-1"
            ref={(el) => (containerRefs.current[index] = el)}
          >
            <div className="tp-service-4-content">
              <h2 className="tp-service-4-title-sm tp-text-black">
                <span>{(index + 1).toString().padStart(2, '0')}. </span>
                <Link href="/service">{item.title}</Link>
              </h2>
              <p>{item.description}</p>
            </div>
            <div className="serv-image-grp flex justify-end gap-3 items-end">
              <div className="image-left w-[70%] transition-all duration-100 ease-in-out">
                <Image
                  src={item.imgLeft}
                  alt="Service Left"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="image-right w-[30%] transition-all duration-100 ease-in-out">
                <Image
                  src={item.imgRight}
                  alt="Service Right"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
