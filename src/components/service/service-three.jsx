"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import Image from "next/image";

// internal imports
import star_icon from "@/assets/img/home-04/service/sv-star-1.png";
import sv_1 from "@/assets/img/home-04/service/sv-icon-1.png";
import sv_2 from "@/assets/img/home-04/service/sv-icon-2.png";
import sv_3 from "@/assets/img/home-04/service/sv-icon-3.png";
import sv_4 from "@/assets/img/home-04/service/sv-icon-4.png";
import sv_5 from "@/assets/img/home-04/service/sv-icon-5.png";
import sv_6 from "@/assets/img/home-04/service/sv-icon-6.png";


// slider setting
const slider_setting = {
  slidesPerView: 3,
  loop: true,
  autoplay: false,
  spaceBetween: 20,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};

export const Service_data =
{
  title: "Our Services Include",
  subtitle: "Core Services Tailored for Businesses Like Yours",
  service_data: [
    {
      id: 1,
      icon: sv_1,
      title: "Cloud Migration & Setup",
      subtitle: "Migrate securely to AWS, Azure, or GCP — optimized for performance and compliance.",
    },
    {
      id: 2,
      icon: sv_2,
      title: "Server Configuration & Optimization",
      subtitle: "Configure and optimize Linux, Windows, or cloud servers for speed, uptime, and security.",
    },
    {
      id: 3,
      icon: sv_3,
      title: "Data Security & Backup Solutions",
      subtitle: "Automated backups, encrypted data pipelines, and disaster recovery systems built for peace of mind.",
    },
    {
      id: 4,
      icon: sv_4,
      title: "Predictive Analytics & Business Intelligence",
      subtitle: "Tailored dashboards and AI analysis for smarter decisions and deeper insights.",
    },
    {
      id: 5,
      icon: sv_5,
      title: "Custom API & AI Integrations",
      subtitle: "Sync apps and systems — CRMs, ERPs, websites — with bespoke APIs and intelligent automations.",
    },
    {
      id: 6,
      icon: sv_6,
      title: "AI Automation via n8n & Make.com",
      subtitle: "Design custom workflows with no‑code/low‑code automations for tools like CRMs, Slack, and email.",
    },
  ]
}


export default function ServiceThree({ serviceBannerData }) {
  console.log("serviceBannerData", serviceBannerData)
  return (
    <div
      className="tp-service-4-area fix our-service-outer-box"
      data-background="assets/img/home-04/brand/overly.png"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-12">
              <div className="tp-service-4-title-box tp_fade_bottom">
                <h2 className="tp-service-4-title text-white text-center mb-2">
                  {/* Our Services Include */}
                  {Service_data.title}
                </h2>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="tp-service-4-shape-1 text-start text-md-end">
                <Image
                  className="tp-zoom-in-out"
                  src={star_icon}
                  alt="star"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap">
        <Swiper
          {...slider_setting}
          className="swiper-container tp-service-4-slider-active"
        >
          {Service_data?.service_data && Service_data?.service_data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="tp-service-4-item"

              >
                <div className="tp-service-4-icon">
                  <Image src={item?.icon} alt="icon" width={100} height={100} />
                </div>
                <div className="tp-service-4-content">
                  <h2 className="tp-service-4-title-sm">
                    <Link href="/service">{item?.title}</Link>
                  </h2>
                  <p>{item?.subtitle}</p>
                  <Link className="tp-service-4-link" href="/service">
                    {/* {item?.button} */}
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
