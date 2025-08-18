import { useEffect, useRef, useState } from "react";
import styles from "../../about/RealEstateSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";

let text = "Ready to Transform Your Business?";
export const FourthSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <div id="real-estate-section" className={styles.realEstateSection2}>

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
          zIndex: -1,
        }}
      >
        <source src="/services.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col items-center z-10">
        <h2
        data-aos="fade-up"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=" ready-head-txt text-center sm:text-4xl text-white z-[99] font-semibold tracking-tighter md:text-6xl md:leading-[4rem] flex flex-wrap justify-center xl:px-64"
        >
         {text}
        </h2>

        <motion.p
          data-aos="fade-up"
          className="text-gray-50 mt-3 text-center book-call-paraTxt"
        >
          Book a discovery call today and learn how our integrated services can
          drive growth for your business.
        </motion.p>
      </div>

          <div className="cta-project-btn service-all-btn">
                            <button className="relative z-[99] bannerbtn mt-14 mx-auto flex items-center justify-center">
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
                                    <span data-hover="Let's Talk">Book a Discovery Call</span>
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

      {/* <button  class="newBtnOne z-[10] relative bg-transparent text-white border-2 hover:bg-cyan-100 px-4 py-3 rounded-md text-lg font-medium hover:text-cyan-900 hover:bg-white border mt-4 rounded-pill">Book a Discovery Call</button> */}
    </div>
  );
};
