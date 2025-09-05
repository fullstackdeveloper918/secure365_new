"use client";
// import sv_2 from "@/assets/img/inner-service/sercive-details/Benefit1.jpg";
// import sv_3 from "@/assets/img/inner-service/sercive-details/Benefit2.jpg";
// import sv_4 from "@/assets/img/inner-service/sercive-details/Benefit3.jpg";
// import sv_5 from "@/assets/img/inner-service/sercive-details/Benefit4.jpg";
// import sv_6 from "@/assets/img/inner-service/sercive-details/Benefit5.jpg";
// import sv_7 from "@/assets/img/inner-service/sercive-details/Benefit6.jpg";
// import sv_8 from "@/assets/img/inner-service/sercive-details/Benefit7.jpg";
// import sv_9 from "@/assets/img/inner-service/sercive-details/Benefit8.jpg";
// import ImageSection from "./ImageSection";
// import { FirstSection } from "../inner-services/ai-services/FirstSection";
import HighROIUseCases from "../inner-services/ai-services/SecondSection";
import PricingCards from "../inner-services/ai-services/ThirdSection";
import FiveStepBuildSprint from "../inner-services/app-development/FiveStep";
import OurWorks from "../inner-services/app-development/OurWorks";
import TrustedBy from "../inner-services/app-development/Trusted";
import BeforeAfterResults from "../inner-services/ui-ux/BeforeAfterResults";
import WebVitalsBenchmarks from "../inner-services/ui-ux/WebVitalsBenchmarks";
import CybersecurityServices from "../inner-services/cybersecurity/CybersecurityServices";
import ComplianceExpertise from "../inner-services/cybersecurity/ComplianceExpertise";
import ThreatIntelligence from "../inner-services/cybersecurity/ThreatIntelligence";
import SecurityStakeholders from "../inner-services/cybersecurity/SecurityStakeholders";
import CardStackingSection from "@/components/service/CardStackingSection";
import ThreeStepBuildSprint from "@/components/inner-services/marketing/ThreeStep"
// import { Rocket } from "lucide-react";
import Link from "next/link";
import { Benefits_of_Choosing_ai, Benefits_of_Choosing_appdevelopment, Benefits_of_Choosing_site, Benefits_of_Choosing_cybersecurity, Benefits_of_Choosing_marketing } from "@/serviceData/CardStackingSection-data"

export default function ServiceDetailsArea({ serviceBannerData }) {


  const isVideo = serviceBannerData?.banner?.backgroundType === "video"; // e.g., 'image' or 'video'
  const backgroundUrl = serviceBannerData?.banner?.backgroundUrl;

  const sectionStyle = !isVideo
    ? {
      backgroundImage: `url(${backgroundUrl || "/assets/img/inner-service/service/Ai-Automtion.webp"
        })`,
      backgroundPosition: "top right",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "80vh",
      display: "flex",
      alignItems: "end",
      position: "relative",
      paddingBottom: "0px",
    }
    : {
      position: "relative",
      height: "80vh",
      display: "flex",
      alignItems: "end",
      paddingBottom: "0px",
    };

  return (
    <div className="service-details__area service-details__space bann-p-block relative">


      <div className="serv-detail-ban innnerServices" style={sectionStyle}>
        {isVideo && backgroundUrl && (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src={backgroundUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="overlay-ser-inner"></div>
        <div
          className="container z-10"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__title-box mb-10">
                <h2 className="sv-hero-title tp-char-animation mb-3">
                  {serviceBannerData?.title1}{" "}
                  <span className="blueColor">
                    {serviceBannerData?.subtitle}
                  </span>
                </h2>
                <span className="service-details__subtitle tp-char-animation text-white mb-2 inline-block inner-serv-banpara">
                  {serviceBannerData?.description1}
                </span>
                <div className="d-block py-3 md:mt-3">

                  <Link href={"/contact-us"} className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg global-primary-btn">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5">
                <div className="service-details__banner-text mb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {serviceBannerData?.slug === "ai-services" && (
        <>
          <HighROIUseCases />
          <CardStackingSection Benefits_of_Choosing={Benefits_of_Choosing_ai} />
          <PricingCards />
        </>
      )}

      {serviceBannerData?.slug === "app-development" && (
        <>
          <OurWorks />
          <CardStackingSection Benefits_of_Choosing={Benefits_of_Choosing_appdevelopment} />
          <FiveStepBuildSprint />
        </>
      )}

      {serviceBannerData?.slug === "site-design" && (
        <>
          <BeforeAfterResults />
          <OurWorks />
          <CardStackingSection Benefits_of_Choosing={Benefits_of_Choosing_site} />
          <WebVitalsBenchmarks />
        </>
      )}

      {serviceBannerData?.slug === "marketing" && (
        <>
          <FiveStepBuildSprint />
          <CardStackingSection Benefits_of_Choosing={Benefits_of_Choosing_marketing} />
        </>
      )}

      {serviceBannerData?.slug === "cybersecurity" && (
        <>
          <CybersecurityServices />
          <CardStackingSection Benefits_of_Choosing={Benefits_of_Choosing_cybersecurity} />
          <div className="bg-black relative security-bg-wrapper">
            <SecurityStakeholders />
            <ThreatIntelligence />
          </div>
        </>
      )}


    </div>
  );
}
