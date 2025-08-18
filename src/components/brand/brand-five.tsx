import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

// images
import b_1 from "@/assets/img/inner-about/brand/brand-1.png";
import b_2 from "@/assets/img/inner-about/brand/brand-2.png";
import b_3 from "@/assets/img/inner-about/brand/brand-3.png";
import b_4 from "@/assets/img/inner-about/brand/brand-4.png";
import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
import b_6 from "@/assets/img/inner-about/brand/brand-2.png";
import { Rocket } from "lucide-react";


// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6];

export default function BrandFive({}) {
  return (
    <div
      className="ab-brand-area black-bg-2 relative our-client-sec"
      style={{
        // backgroundImage:
        //   "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
        backgroundImage:
          "url(/galaxy_planets_on-galaxy1.png)",
      }}
    >
      <div className="container relative">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h2 className="ab-brand-title oc-head fw-bold">Our <span className="text-[#009dd6]">Clients</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-20">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                    >
                      <Image src={b} alt="brand" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="ab-brand-content tp_title_anim our-client-cont-box">
              <p>
                We belive in creating partnerships based on honesty and true
                connection. That is why some of the biggest companies stayed with
                us for years.
              </p>
              <div className="btn_sec flex gap-3 flex-wrap text-align-center ">
              {/* <Link href="/contact-us" className="tp-btn-white-sm border-style rounded-pill get-oc-btn">
                Get started
              </Link> */}
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
        </div>
      </div>
    </div>
  );
}
