"use client";
import sv_2 from "@/assets/img/inner-service/sercive-details/Benefit1.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/Benefit2.jpg";
import sv_4 from "@/assets/img/inner-service/sercive-details/Benefit3.jpg";
import sv_5 from "@/assets/img/inner-service/sercive-details/Benefit4.jpg";
import sv_6 from "@/assets/img/inner-service/sercive-details/Benefit5.jpg";
import sv_7 from "@/assets/img/inner-service/sercive-details/Benefit6.jpg";
import sv_8 from "@/assets/img/inner-service/sercive-details/Benefit7.jpg";
import sv_9 from "@/assets/img/inner-service/sercive-details/Benefit8.jpg";
import ImageSection from "./ImageSection";
import { FirstSection } from "../inner-services/ai-services/FirstSection";
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
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailsArea({ serviceBannerData }) {
  //   const backgroundImageUrl = serviceBannerData?.banner?.backgroundImage || '/assets/img/inner-service/service/Ai-Automtion.webp';

  //   console.log("serviceBannerDatapp", serviceBannerData);
  //   const sectionStyle = {
  //   backgroundImage: `url(${backgroundImageUrl})`,
  //   backgroundPosition: 'top right',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   height: '80vh',
  //   display: 'flex',
  //   alignItems: 'end',
  //   position: 'relative',
  //   paddingBottom: '0px',
  // };

  const isVideo = serviceBannerData?.banner?.backgroundType === "video"; // e.g., 'image' or 'video'
  const backgroundUrl = serviceBannerData?.banner?.backgroundUrl;

  const sectionStyle = !isVideo
    ? {
        backgroundImage: `url(${
          backgroundUrl || "/assets/img/inner-service/service/Ai-Automtion.webp"
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
      {/* <div className="serv-detail-ban app-dev">
        <div className="container z-10">
          <div className="row">
            <div className="col-xl-12">
              <div className="service-details__title-box mb-10">
                
                <h2 className="sv-hero-title tp-char-animation mb-4">
                  {serviceBannerData?.title1}{" "}
                  <span className="blueColor">
                    {" "}
                    {serviceBannerData?.subtitle}
                  </span>
                </h2>
                <span className="service-details__subtitle tp-char-animation text-white mb-4 inline-block">
                  
                  {serviceBannerData?.description1}
                </span>
                <div className="d-block py-3 mt-3">
                  <a href="#" className="serv-in-ban-btn text-white border-2 rounded-pill">{serviceBannerData?.banner?.button1}</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-xl-5">
                <div className="service-details__banner-text mb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="serv-detail-ban app-dev" style={sectionStyle}>
    <div className="container z-10">
      <div className="row">
        <div className="col-xl-12">
          <div className="service-details__title-box mb-10">
            <h2 className="sv-hero-title tp-char-animation mb-4">
              {serviceBannerData?.title1}{" "}
              <span className="blueColor">{serviceBannerData?.subtitle}</span>
            </h2>
            <span className="service-details__subtitle tp-char-animation text-white mb-4 inline-block">
              {serviceBannerData?.description1}
            </span>
            <div className="d-block py-3 mt-3">
              <a href="#" className="serv-in-ban-btn text-white border-2 rounded-pill">
                {serviceBannerData?.banner?.button1}
              </a>
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
  </div> */}

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
                <h2 className="sv-hero-title tp-char-animation mb-4">
                  {serviceBannerData?.title1}{" "}
                  <span className="blueColor">
                    {serviceBannerData?.subtitle}
                  </span>
                </h2>
                <span className="service-details__subtitle tp-char-animation text-white mb-4 inline-block">
                  {serviceBannerData?.description1}
                </span>
                <div className="d-block py-3 md:mt-3">
                  {/* <a
                    href="#singleSerivce"
                    className="serv-in-ban-btn text-white border-2 rounded-pill"
                  >
                    {serviceBannerData?.banner?.button1}
                  </a> */}

                   <div className="cta-project-btn service-all-btn">
                            <button className="relative z-[99] bannerbtn flex items-center justify-content-center justify-content-lg-start w-full">
                              <Link className="header-button ajax-link" href="/contact-us">
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
                                    <span data-hover="Let's Talk">{serviceBannerData?.banner?.button1}</span>
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
            </div>
            <div className="row">
              <div className="col-xl-5">
                <div className="service-details__banner-text mb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div
              className="service-details__left-wrap pt-100 ben-fit-box"
              style={{ borderBottom: "1px solid #eee" }}
            >
              <div className="service-details__left-text pb-6 flex justify-between mb-10 items-center ben-row-box">
                <h2 className="tp_title_anim">
                  {serviceBannerData?.title2}{" "}
                  <span>{serviceBannerData?.subtitle2}</span>
                </h2>
                <p className="benfits_content">
                  {serviceBannerData?.description2}
                </p>
              </div>
              <div className="ben-head-box mb-20">
                <h4 className="mb-2">01. Enhanced Security</h4>
                <p className="benfits_content">
                  We create and tell stories that connect with people and convey
                  your brand's message in a clear, authentic way. Our creative,
                  artistic thinkers immerse into the DNA of your brand to
                  conceptualize and shape visual content that achieves your
                  objectives and resonates within your target audience.
                </p>
              </div>
              <div className="service-details__fea-list"></div>
              <div className="service-details__sm-thumb-wrap md:mb-10 mb-4">
                <ImageSection leftImage={sv_2} rightImage={sv_3} />
              </div>
            </div>

            <div
              className="service-details__left-wrap pt-100 ben-fit-box"
              style={{ borderBottom: "1px solid #eee" }}
            >
              <div className="ben-head-box mb-20">
                <h4>02. Scalability & Flexibility</h4>
                <p className="benfits_content">
                  We create and tell stories that connect with people and convey
                  your brand's message in a clear, authentic way. Our creative,
                  artistic thinkers immerse into the DNA of your brand to
                  conceptualize and shape visual content that achieves your
                  objectives and resonates within your target audience.
                </p>
              </div>
              <div className="service-details__fea-list"></div>
              <div className="service-details__sm-thumb-wrap md:mb-10 mb-4">
                <ImageSection leftImage={sv_4} rightImage={sv_5} />
              </div>
            </div>

            <div
              className="service-details__left-wrap pt-100 ben-fit-box">
              <div className="ben-head-box mb-20">
                <h4>03. Improved Performance</h4>
                <p className="benfits_content">
                  We create and tell stories that connect with people and convey
                  your brand's message in a clear, authentic way. Our creative,
                  artistic thinkers immerse into the DNA of your brand to
                  conceptualize and shape visual content that achieves your
                  objectives and resonates within your target audience.
                </p>
              </div>
              <div className="service-details__fea-list"></div>
              <div className="service-details__sm-thumb-wrap md:mb-10 mb-4">
                <ImageSection leftImage={sv_6} rightImage={sv_7} />
              </div>
            </div>

          </div>
        </div>
      </div> */}
      {/* <FirstSection serviceBannerData={serviceBannerData} /> */}

      {serviceBannerData?.slug === "ai-services" && (
        <>
          {/* <div className="h-[500px]"></div> */}
          <HighROIUseCases />
          <CardStackingSection />
          <PricingCards />
        </>
      )}

      {serviceBannerData?.slug === "app-development" && (
        <>
          <OurWorks />
          <CardStackingSection />
          <FiveStepBuildSprint />
          {/* <TrustedBy /> */}
        </>
      )}

      {serviceBannerData?.slug === "site-design" && (
        <>
          <BeforeAfterResults />
          <OurWorks />
          <CardStackingSection />
          {/* <ServiceTiers /> */}
          <WebVitalsBenchmarks />
        </>
      )}

      {serviceBannerData?.slug === "marketing" && (
        <>
          <FiveStepBuildSprint />
          <CardStackingSection />
          {/* <ThreeStepBuildSprint /> */}
        </>
      )}

      {serviceBannerData?.slug === "cybersecurity" && (
        <>
          <CybersecurityServices />
          <CardStackingSection />
          <div className="bg-black relative security-bg-wrapper">
            {/* <img src="/Security-Stake.png" alt="" className="absolute security-pos-bg" /> */}
          <SecurityStakeholders />
          <ThreatIntelligence />
          </div>
          {/* <ComplianceExpertise /> */}
        </>
      )}

      {/* <section className="bg-gradient-to-r from-[#009DD6] to-[#0077A3] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              ref={heroTextRef}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Turn Hours into Minutes with AI Automations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Embed cutting-edge AI and automation into your business operations
              to save time, reduce costs, and unlock new capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                size="lg"
                className="bg-white text-[#009DD6] hover:bg-white/90"
              >
                Book a 15-min AI Readiness Call
              </button>
              <button
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white/10"
              >
                Get Your Free AI Readiness Scorecard
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
