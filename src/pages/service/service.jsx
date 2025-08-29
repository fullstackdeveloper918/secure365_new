"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import { Leaf } from "@/components/svg";
import AnimationHeader from "@/components/animation_header";

// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import FooterFour from "@/layouts/footers/footer-four";
import BrandLogos from "@/components/service/service-logo"

const ServiceMain = ({ serviceData, serviceBannerData }) => {
  useScrollSmooth();
  console.log("serviceData here", serviceBannerData);
  console.log("serviceData  2", serviceData);
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <div className="cd-index cd-main-content">
        {/* <AnimationHeader /> */}
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceHero serviceBannerData={serviceBannerData} />
            <BrandLogos serviceData={serviceData} />

            <div className="tp-service-5-area sv-service-style pb-100 relative serv-main-num-sec">
              <div className="container container-1530 relative">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-10">
                      <span className="ab-inner-subtitle mb-8 text-white">
                        {/* <Leaf /> */}
                        {
                          serviceData?.data?.service_why_choose_section_heading
                        }{" "}
                        <span className="blueColor">
                          {
                            serviceData?.data
                              ?.service_why_choose_section_heading_second
                          }
                        </span>
                      </span>
                      <h2 className="tp-service-5-title text-white">
                        {/* With us, you’re not just getting IT services; <br /> */}
                        {/* you’re gaining a trusted partner. */}
                        {
                          serviceData?.data
                            ?.service_why_choose_section_paragraph
                        }
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="tp-service-5-wrap set-inner-serv">
                  <ServiceItems serviceData={serviceData} />
                </div>
              </div>
            </div>


            <ServiceSix serviceData={serviceData} />

            {/* <div className="tp-brand-4-area">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems serviceData={serviceData} />
                </div>
              </div>
            </div> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;
