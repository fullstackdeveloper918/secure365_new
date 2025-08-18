import React from "react";
import Link from "next/link";
import { BallRound } from "../svg";
import { Rocket } from "lucide-react";

export default function AboutFour({ aboutResponse }) {
  return (
    <section className="tp-about-5-area bg-black text-white our-serv-main-sec relative">
      <div className="container container-1560 mx-auto px-4 relative">
        {/* Heading Section */}
        <div className="max-w-4xl mb-16 our-serv-headBox">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight relative">
            <span className="block text-[#009dd6] text-xl mb-4">
              {aboutResponse?.data?.about_our_servics_heading}
            </span>
            <span className="text-white head-servTxt">
              {aboutResponse?.data?.about_we_offer_heading_first} 
              {aboutResponse?.data?.about_we_offer_heading_second}
              <span className="inline-block mx-2 align-middle">
                <BallRound />
              </span>
              {aboutResponse?.data?.about_our_servics_heading_third}
              <span className="inline-block mx-2 align-middle">
                <BallRound />
              </span>
              {aboutResponse?.data?.about_our_servics_heading_fourth}
            </span>
          </h2>
        </div>

        {/* Cybersecurity Items + Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left List */}
          <div className="space-y-4">
            {aboutResponse?.data?.about_our_service_cybersecurity_data?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 hover:bg-gray-800 transition-colors px-5 py-4 rounded-lg shadow-md flex items-center gap-3 hov-card-serv"
              >
                <div className="w-3 h-3 bg-[#009dd6] rounded-full animate-pulse" />
                <span className="text-base md:text-lg">{item?.about_our_service_cybersecurity_loop}</span>
              </div>
            ))}
          </div>

          {/* Right Paragraphs */}
          <div className="text-white space-y-6 our-serv-cont-area">
            <p className="text-lg leading-relaxed text-white">
              {aboutResponse?.data?.about_our_service_cybersecurity_paragraph_first}
            </p>
            <p className="text-lg leading-relaxed text-white">
              {aboutResponse?.data?.about_our_service_cybersecurity_paragraph_second}
            </p>
            {/* CTA Button */}
        <div className="mt-12">
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
                                    <span className="m-0" data-hover="">Get Started</span>
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

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors text-sm font-semibold"
          >
            Get Started
          </Link>
        </div> */}
      </div>
    </section>
  );
}
