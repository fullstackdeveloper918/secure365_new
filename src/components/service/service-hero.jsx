"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// image imports (keep commented or uncomment as needed)
import ser_hero from "@/assets/img/inner-service/hero/hero-3.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

export default function ServiceHero({ serviceBannerData }) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sv-hero-area sv-hero-ptb bann-p-block"
      style={{
        paddingBottom: "220px", // ensure space so no overlap
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay // camelCase
        muted // must be muted to autoplay on most browsers
        loop
        playsInline // camelCase
        preload="auto"
        className="service-banner-video" // className instead of class
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src="/Astronaut-space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-serv-main"></div>

      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              {/* Heading with parallax */}
              <h1
                className="sv-hero-title tp-char-animation main-serv-head"
                style={{
                  transform: `translateY(${Math.min(offsetY * 0.4, 40)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {serviceBannerData?.pages?.banner_data?.banner_heading}{" "}
                <span className="blueColor">
                  {serviceBannerData?.pages?.banner_data?.banner_heading_second}
                </span>
                <br />
              </h1>

              {/* Paragraph with slower parallax */}
              <p
                className="tp_fade_bottom"
                style={{
                  transform: `translateY(${Math.min(offsetY * 0.2, 40)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {serviceBannerData?.pages?.banner_data?.banner_sub_headline}
              </p>
            </div>
          </div>
        </div>

        {/* Optional image parallax (commented out)
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div
                className="sv-hero-thumb-box"
                style={{
                  transform: `translateY(${Math.min(offsetY * 0.2, 80)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ height: "auto" }}
                />
              </div>
              <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{
                  height: "auto",
                  transform: `translateY(${Math.min(offsetY * 0.15, 50)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              />
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
