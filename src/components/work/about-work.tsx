import React from "react";
import Image from "next/image";
import Link from "next/link";
import shape from '@/assets/img/inner-about/about/shape-1.png';
import { Rocket } from "lucide-react";

const work_data = [
  {
    id: 1,
    title: "Real-World Experience",
    // subtitle: "Design Studio",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
  {
    id: 2,
    title: "Comprehensive Solutions",
    // subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 3,
    title: "Victim-Centric Approach",
    // subtitle: "Design Studio",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
  {
    id: 4,
    title: "Expert Team",
    // subtitle: "Design Studio",
    text: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies that work in real-world scenarios.",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-5">
            <div className="ab-2-work-title-box p-relative text-left w-full">
              <h2 className="ab-2-work-title tp_title_anim text-left why-choose-top-head">
              Why Choose <span className="blueColor">Secure365?</span>
              </h2>
              {/* <span className="ab-2-work-subtitle tp_title_anim">
                About My Biography
              </span> */}
              <Image
                className="ab-2-work-shape d-none d-lg-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-7 row pt-20 grid grid-cols-2 gap-5">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom col-xl-12 col-lg-12 col-md-12">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      {/* {item.subtitle} */}
                    </span>
                    <h2 className="sv-service-title">{item.title}</h2>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="btn_sec flex gap-3 flex-wrap text-align-center justify-content-center">
                      <Link href="/contact-us" className="BtnTwo btnWrapper why-btn rounded-pill">
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
                      <div className="cta-project-btn service-all-btn mt-3">
                                                <button className="relative z-[99] bannerbtn flex items-center justify-content-center w-full">
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
  );
}
