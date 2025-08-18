'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AwardOne = ({ cls = 'pt-md-125 pb-md-125 pt-50 pb-50', abStyle = false, data }) => {

  const services = [
    { id: 1, title: 'AI‑Powered Services/ai-services', link: '/service/serversetupconfiguration', image:"/AI_services_hirunlaowisit-AlamyStockPhoto.jpg"  },
    { id: 2, title: 'App Development/app-development', link: '/service/threatdetection', image:"/mobile-application-development-guidelines-riseuplabs.webp"  },
    { id: 3, title: 'Site Design & UX/site-design', link: '/service/technicalsupport', image:"/siteux-design.png"  },
    { id: 4, title: 'Cybersecurity & Compliance/cybersecurity', link: '/service/keywordoptimization', image:"/security.jpg"  },
    { id: 5, title: 'Growth Marketing/marketing', link: '/service/contentwriting', image:"/How-to-Grow-Your-Business-with-Growth-Marketing.webp" },
  ];


  console.log("dataof", data)
  const [activeThumb, setActiveThumb] = React.useState(1);
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container-1630 mx-auto">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12" >
            <div className="tp-award-title-box">
              <span className="aboutIcon">
                <svg
                  data-v-669b4a84=""
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    data-v-669b4a84=""
                    d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                    fill="currentColor"
                    width="20"
                    height="20"
                  ></path>
                </svg>
                <span data-aos="fade-right">{data?.home_advanced_it_and_cyber_security_first_heading}</span>
              </span>
              <h4 className="tp-section-title" data-aos="fade-right">
                {data?.home_advanced_it_and_cyber_security_second} <br />
                {data?.home_advanced_it_and_cyber_security_third}
                <br /> <span> {data?.home_advanced_it_and_cyber_security_fourth}</span>
              </h4>
              <p className="awardsContent" data-aos="fade-right">{data?.home_advanced_it_and_cyber_security_paragraph}</p>
              <div className="btn_sec flex gap-3 flex-wrap">
                {/* <Link href="/contact" className="BtnOne btnWrapper">
                    Get started
                    </Link> */}

                <Link href="/contact-us" className="BtnOne btnWrapper flex gap-2" data-aos="fade-right">
                  Let's Connect
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
                {/* </button> */}
              </div>
            </div>
          </div>

<div className="col-xl-7 col-lg-7 col-md-12">
  <div className="tp-award-list-wrap">

    <div
      onMouseEnter={() => setActiveThumb(1)}
      className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
      rel="tp-award-list-thumb-1"
    >
      <div className="tp-award-list-content-left d-flex align-items-center" data-aos="fade-left">
        <a href="/service/serversetupconfiguration">AI‑Powered Services/ai-services</a>
      <div className="service-image">
        <img src="/AI_services_hirunlaowisit-AlamyStockPhoto.jpg" alt="AI Services" />
      </div>
      </div>
      <div className="tp-award-list-content-right" data-aos="fade-left">
        <a href="/service/serversetupconfiguration">See More</a>
      </div>
    </div>

    <div
      onMouseEnter={() => setActiveThumb(2)}
      className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
      rel="tp-award-list-thumb-2"
    >
      <div className="tp-award-list-content-left d-flex align-items-center" data-aos="fade-left">
        <a href="/service/threatdetection">App Development/app-development</a>
      <div className="service-image">
        <img src="/mobile-application-development-guidelines-riseuplabs.webp" alt="App Development" />
      </div>
      </div>
      <div className="tp-award-list-content-right" data-aos="fade-left">
        <a href="/service/threatdetection">See More</a>
      </div>
    </div>

    <div
      onMouseEnter={() => setActiveThumb(3)}
      className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
      rel="tp-award-list-thumb-3"
    >
      <div className="tp-award-list-content-left d-flex align-items-center" data-aos="fade-left">
        <a href="/service/technicalsupport">Site Design & UX/site-design</a>
      <div className="service-image">
        <img src="/siteux-design.png" alt="Site Design" />
      </div>
      </div>
      <div className="tp-award-list-content-right" data-aos="fade-left">
        <a href="/service/technicalsupport">See More</a>
      </div>
    </div>

    <div
      onMouseEnter={() => setActiveThumb(4)}
      className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
      rel="tp-award-list-thumb-4"
    >
      <div className="tp-award-list-content-left d-flex align-items-center" data-aos="fade-left">
        <a href="/service/keywordoptimization">Cybersecurity & Compliance/cybersecurity</a>
      <div className="service-image">
        <img src="/security.jpg" alt="Cybersecurity" />
      </div>
      </div>
      <div className="tp-award-list-content-right" data-aos="fade-left">
        <a href="/service/keywordoptimization">See More</a>
      </div>
    </div>

    <div
      onMouseEnter={() => setActiveThumb(5)}
      className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
      rel="tp-award-list-thumb-5"
    >
      <div className="tp-award-list-content-left d-flex align-items-center" data-aos="fade-left">
        <a href="/service/contentwriting">Growth Marketing/marketing</a>
      <div className="service-image">
        <img src="/How-to-Grow-Your-Business-with-Growth-Marketing.webp" alt="Growth Marketing" />
      </div>
      </div>
      <div className="tp-award-list-content-right" data-aos="fade-left">
        <a href="/service/contentwriting">See More</a>
      </div>
    </div>

  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default AwardOne;
