"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import ServiceDetailsArea from "@/components/service/service-details-area";

// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import AnimationHeader from "@/components/animation_header";
import ServiceThree from "@/components/service/service-three";
import FooterFour from "@/layouts/footers/footer-four";
import { servicePanel } from "@/utils/panel-animation";
import { FourthSection } from "../../components/inner-services/ai-services/FourthSection";
import ContactTwo from "@/components/contact/contact-two";
import CardStackingSection from "@/components/service/CardStackingSection";
import { config } from "../../../config";
import { Ready_to_Transform_Your_Business_ai, Ready_to_Transform_Your_Business_marketing, Ready_to_Transform_Your_Business_cybersecurity, Ready_to_Transform_Your_Business_site, Ready_to_Transform_Your_Business_appdevelopment } from "@/serviceData/CardStackingSection-data"
import { Service_data_ai, Service_data_appdevelopment, Service_data_site, Service_data_cybersecurity, Service_data_marketing } from "@/serviceData/CardStackingSection-data"
const ServiceDetailsMain = ({ serviceBannerData }) => {
  const [contactData, setContactData] = React.useState(null);
  useScrollSmooth();
  // console.log("serviceBannerDatadd", serviceBannerData);
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      titleAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });




  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`${config.APP_URL}/secure-plugin/v1/contact`, {
          cache: "no-store",
        });
        const data = await response.json();
        // const contactData = data?.data;
        setContactData(data?.data);

        // Handle the contactData as needed, e.g., updating state
        // console.log(contactData);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);



  return (
    <Wrapper>
      {/* <AnimationHeader /> */}

      {/* <CardStackingSection />
      <div className="h-[500px]"></div> */}

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <div id="">
        <div id="">
          <main>
            <ServiceDetailsArea serviceBannerData={serviceBannerData} />
            <div
              className="bg-[#000019] mt-[0px] relative z-10 px-6 "
            >
              {/* <ServiceThree serviceBannerData={serviceBannerData} /> */}
              {
                serviceBannerData?.slug === "ai-services" ?
                  <ServiceThree Service_data={Service_data_ai} />
                  :
                  serviceBannerData?.slug === "app-development" ?
                    <ServiceThree Service_data={Service_data_appdevelopment} />
                    :
                    serviceBannerData?.slug === "site-design" ?
                      <ServiceThree Service_data={Service_data_site} />
                      :
                      serviceBannerData?.slug === "marketing" ?
                        <ServiceThree Service_data={Service_data_marketing} />
                        :
                        <ServiceThree Service_data={Service_data_cybersecurity} />

              }
            </div>
            <div
              className="bg-[#009dd610] singleSerivce mt-[0px]"
              id="singleSerivce"
            >
              <ContactTwo contactData={contactData} />
            </div>
            <div
              className="bg-[#fff] mt-[0px] relative z-10"
            >
              {
                serviceBannerData?.slug === "ai-services" ?
                  <FourthSection Ready_to_Transform_Your_Business={Ready_to_Transform_Your_Business_ai} />
                  :
                  serviceBannerData?.slug === "app-development" ?
                    <FourthSection Ready_to_Transform_Your_Business={Ready_to_Transform_Your_Business_appdevelopment} />
                    :
                    serviceBannerData?.slug === "site-design" ?
                      <FourthSection Ready_to_Transform_Your_Business={Ready_to_Transform_Your_Business_site} />
                      :
                      serviceBannerData?.slug === "marketing" ?
                        <FourthSection Ready_to_Transform_Your_Business={Ready_to_Transform_Your_Business_marketing} />
                        :
                        <FourthSection Ready_to_Transform_Your_Business={Ready_to_Transform_Your_Business_cybersecurity} />

              }
            </div>
          </main>
          <div className="relative z-10">
            <FooterFour />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsMain;
