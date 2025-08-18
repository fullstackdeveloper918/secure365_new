"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import WorkCard from "../components/Cards"; // Adjust path if needed

gsap.registerPlugin(ScrollTrigger);

export default function WorkShowcase() {
  const cardsRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: true,
    });

    // Optional: Remove this GSAP if you're using only AOS
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 1, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "HealthPlus Mobile App",
      description:
        "HIPAA-compliant telehealth platform with video consultations and prescription management.",
      href: "/case-studies/healthplus",
      image: "../../assets/img/inner-service/service/HealthPlus-Mobile-App.jpg",
    },
    {
      title: "FinTech Dashboard",
      description:
        "Real-time financial analytics platform with secure transaction processing and reporting.",
      href: "/case-studies/fintech",
      image: "../../assets/img/inner-service/service/FinTech-Dashboard.jpg",
    },
    {
      title: "E-commerce Platform",
      description:
        "Scalable e-commerce solution with inventory management and payment processing.",
      href: "/case-studies/ecommerce",
      image: "../../assets/img/inner-service/service/E-commerce-Platform.jpg",
    },
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <style>{`
       

        
          .allProjectbtn{
            border-color: #62d2fd !important;
            color: #62d2fd !important;
            background-color: transparent !important;
            box-shadow: unset !important;
          }
            .allProjectbtn:hover{
                background-color: #62d2fd !important;
            }
             .allProjectbtn:hover .button-text.sticky.right span {
                color: #fff !important;
                filter: none !important;
            }
           .allProjectbtn:hover .icon-wrap-scale {
                top: 10px !important;
            }

        
      `}</style>
    
    <section className="relative bg-white our-work-serv-sec">
      <div className="container mx-auto px-4">
        <h2
          className="text-white font-bold text-center relative our-work-head-txt"
          data-aos="fade-up"
        >
          Our Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 our-work-sec-inner">
          {projects.map((project, index) => (
  <WorkCard
    key={index}
    {...project}
    data-aos="fade-up"
    data-aos-delay={index * 100}
    data-aos-offset="120"
  />
))}
        </div>

        {/* <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <Link
            href="/case-studies"
            className="text-[#393939] fw-semibold fs-6 px-4 py-3 border rounded-pill inline-block hover:text-black"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-4 w-4 inline-block" />
          </Link>
        </div> */}

        <div className="cta-project-btn service-all-btn" data-aos="fade-up" >
                    <button className="relative z-[99] bannerbtn mt-14 mx-auto flex items-center justify-center">
                      <Link className="header-button ajax-link" href="/case-studies">
                        <div className="button-icon-link right">
                          <div className="icon-wrap-scale d-none d-sm-block">
                            <div className="icon-wrap parallax-wrap">
                              <div className="button-icon parallax-element">
                                {/* <i className="fa-solid fa-arrow-right"></i> */}
                                <Rocket className="ml-2 h-5 w-5" />
                              </div>
                            </div>
                          </div>
                          <div className="button-text sticky right">
                            {/* <span data-hover="Let's Talk">Start Your Mission <Rocket className="ml-2 h-5 w-5" /></span> */}
                            <span data-hover="Let's Talk">View All Case Studies</span>
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
    </section>
    </>
  );
}
