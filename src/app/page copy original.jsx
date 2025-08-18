"use client";
import PreLoader from "../components/preLoader";
import AnimationHeader from "../components/animation_header";
import HeroSection from "../components/HeroSection";
import AwardOne from "@/components/award/award-one";
import ProjectTextLine from "@/components/project/project-text-line";
import TeamOne from "@/components/team/team-one";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import BlogOne from "@/components/blog/blog-one";
import FooterFour from "@/layouts/footers/footer-four";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Libre_Franklin } from "next/font/google";
import { config } from "../../config";
import BrandOne from "@/components/brand/brand-one";
import PainSection from "@/components/what-us-diff/whatusdiff";
import ProjectOne from "@/components/project/project-one";
import ProjectFour from "@/components/project/project-four";
import ProjectFive from "@/components/project/project-five";
import ProjectSix from "@/components/project/project-six";
// import bannerDiv from "../../../public/assets/img/inner-faq/faq/InnerDiv.png";
import bannerDiv from "../../public/assets/img/inner-faq/faq/InnerDiv.png";
import SecureSection from "@/components/whysecure/SecureSection";
import HeroSectionMain from "@/components/hero-banner/HeroSectionMain";
import RealEstateSection from "@/components/about/about-six";
import ClientWrapper from "@/components/ClientWrapper";
import ServicesSection from "@/components/service/services-section";
import ServicescardSection from "@/components/service/cardscroll";
import NewCardStack from "@/components/service/NewCardStack";
import ScrollAnimation from "@/components/about/about-ScrollAnimation";
import RocketAnimation from "@/components/about/about-rocket";
import dynamic from 'next/dynamic';
import BannerSection from "@/components/newHero/newHero";
import HorizontalScrollSection from '@/components/project/new-project'
import CtaSection from '@/components/CtaSection'
import CanvasGame from '@/components/GameSection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CanvasScene = dynamic(() => import('../components/CanvasScene'), { ssr: false });


const businessesData = [
  {
    text: "We help businesses",
    image:
      "https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png",
  },
  {
    text: "to innovate and",
    image:
      "https://sellmac.cybersify.tech/secure365/wp-content/uploads/2025/01/client-01-1.png",
  },
];

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // GSAP animation for ServicesSection
    gsap.fromTo(
      '.services-section',
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%', // Start animation when top of ServicesSection hits 80% of viewport height
          end: 'bottom 20%', // End when bottom hits 20% of viewport
          toggleActions: 'play none none reverse', // Play on enter, reverse on leave
        },
      }
    );

    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    return () => {
      // Cleanup ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.APP_URL}/secure-plugin/v1/home`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("data of home page", data);

        if (data?.home_advanced_it_and_cyber_security_first_heading) {
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };



    fetchData();
  }, []);

  console.log("data of home1 page", data);

  // useEffect(() => {
  //   // Add class to body only if it's the homepage
  //   console.log(router , 'hence')
  //   if (router.pathname === '/') {
  //     document.body.classList.add('homepage-class');
  //   } else {
  //     document.body.classList.remove('homepage-class');
  //   }

  //   // Clean up the class when the component unmounts or the route changes
  //   return () => {
  //     document.body.classList.remove('homepage-class');
  //   };
  // }, [router.pathname]);

  return (
    <>
      {/* <PreLoader /> */}

      {/* <div id="content-scroll"> */}
      <div id="main">
        {/* <HeroSection data={data?.featured_section_heading} /> */}
        {/* <HeroSectionMain data={data} /> */}
        <BannerSection data={data}/>
        {/* <BrandOne /> */}

        <div id="main-content">
          <div id="main-page-content">
            <div id="itemsWrapperLinks">
              <div
                id="itemsWrapper"
                className="webgl-fitthumbs fx-one relative bg-white"
              >
                {/* securesec */}
                {/* <ScrollAnimation /> */}
                <RocketAnimation />
                {/* <RealEstateSection data={data} /> */}
                <SecureSection />
                {/* <ProjectsCard /> */}
                {/* securesec end*/}

                <PainSection />
        


              </div>
            </div>
          </div>
        </div>
      </div>
<div>
                   <HorizontalScrollSection />
    </div>
  





      <footer className="clapat-footer hidden">
        <div id="footer-container">
          <div id="backtotop" className="button-wrap left">
            <div className="icon-wrap parallax-wrap">
              <div className="button-icon parallax-element">
                <i className="fa-solid fa-angle-up"></i>
              </div>
            </div>
            <div className="button-text sticky left">
              <span data-hover="Back Top">Back Top</span>
            </div>
          </div>

          <div className="footer-middle">
            <div className="copyright">
              2024 ©{" "}
              <Link
                className="link"
                target="_blank"
                href="https://www.clapat.com/"
              >
                ClaPat
              </Link>
              . All rights reserved.
            </div>
          </div>

          <div className="socials-wrap">
            <div className="socials-icon">
              <i className="fa-solid fa-share-nodes"></i>
            </div>
            <div className="socials-text">Follow Us</div>
            <ul className="socials">
              <li>
                <span className="parallax-wrap">
                  <Link
                    className="parallax-element"
                    href="https://www.dribbble.com/clapat"
                    target="_blank"
                  >
                    Db
                  </Link>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <Link
                    className="parallax-element"
                    href="https://www.twitter.com/clapatdesign"
                    target="_blank"
                  >
                    Tx
                  </Link>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <Link
                    className="parallax-element"
                    href="https://www.behance.com/clapat"
                    target="_blank"
                  >
                    Be
                  </Link>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <Link
                    className="parallax-element"
                    href="https://www.facebook.com/clapat.ro"
                    target="_blank"
                  >
                    Fb
                  </Link>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <Link
                    className="parallax-element"
                    href="https://www.instagram.com/clapat.themes/"
                  >
                    In
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* </div> */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="bg-white">

            <ServicescardSection />
                    <ServicesSection data={data} />
                            {/* <NewCardStack /> */}
                       
                                  

                    
            <div className="awardsSec">
              <BlogOne />
            </div>

            <div className="ctamain-Sec">
              <CtaSection />
            </div>
            <div className="Game-Sec">
              {/* <CanvasGame /> */}
            </div>
        
    
          </main>
          <FooterFour />
        </div>
      </div>



      <div className="cd-cover-layer"></div>
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x"></div>
          <div id="ball-drag-y"></div>
          <div id="ball-loader"></div>
        </div>
      </div>
      <div id="clone-image">
        <div className="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
    </>
  );
}