import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket } from "lucide-react";
// internal imports
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo,FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree({aboutResponse}) {

  return (
    <div className="tp-about-3-area our-story">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom ms-0">
                {/* <span>
                  <FirstBracket />
                </span> */}
                <span className="tp-subtitle-text tp_text_invert p-0 text-[#009dd6] fw-bold">
              {/* {aboutResponse?.data?.about_our_story_section_heading} */}Our <span>Story</span>
                </span>
                {/* <span>
                  <FirstBracketTwo />
                </span> */}
              </span>
              <h2 className="tp-section-title-90 tp_text_invert tp_fade_bottom our-story-head text-uppercase">
             {aboutResponse?.data?.about_our_story_section_experienced_heading}
                {/* <span>
                 
                  <br />{aboutResponse?.data?.about_our_story_experienced_heading_second}
                </span> */}
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className=" about-img story-img">
            <Image src="/images/about-us.png"  alt="shape" width={500} height={300} style={{ width: "auto", height: "auto" }} 
/>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content story-content-box">
              <h4>
                 {aboutResponse?.data?.about_our_story_experienced_heading_second}
                </h4>
              <p className="mb-0 tp_fade_bottom">
             {aboutResponse?.data?.about_our_story_section_paragraph}
              </p>
              <p className="mb-45 tp_fade_bottom">
            {aboutResponse?.data?.about_our_story_section_paragraph_second}
              </p>
              {/* <div className="btn_sec flex gap-3 flex-wrap text-align-center">
                      <Link href="/contact-us" className="BtnTwo btnWrapper rounded-pill">
                      Learn More
                    <span>
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.35008 3.5972C8.46253 3.25663 8.2776 2.8894 7.93704 2.77695L2.38722 0.944577C2.04665 0.832133 1.67942 1.01706 1.56697 1.35763C1.45453 1.69819 1.63946 2.06543 1.98002 2.17787L6.91319 3.80665L5.28441 8.73982C5.17197 9.08039 5.3569 9.44762 5.69746 9.56006C6.03803 9.67251 6.40526 9.48758 6.51771 9.14702L8.35008 3.5972ZM1.06551 7.47844L8.02551 3.9736L7.44137 2.8136L0.481368 6.31844L1.06551 7.47844Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    </Link>
              </div> */}
               <div className="cta-project-btn service-all-btn">
                            <button className="relative z-[99] bannerbtn flex items-center justify-content-center justify-content-lg-start w-full">
                              <Link className="header-button ajax-link" href="/contact-us">
                                <div className="button-icon-link right white-hovBtn">
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
                                    <span className="m-0" data-hover="">Learn More</span>
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
  );
}
