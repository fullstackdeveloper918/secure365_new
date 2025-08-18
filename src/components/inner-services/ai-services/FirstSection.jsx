import { useEffect, useRef, useState } from "react";
import styles from "../../about/RealEstateSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";

let text = "Turn Hours into Minutes with AI Automation";
export const FirstSection = ({ serviceBannerData }) => {
  console.log(serviceBannerData?.banner, "bannerdata");
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
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center text-4xl text-white font-bold tracking-tighter 2xl:text-6xl md:leading-[4rem] flex flex-wrap justify-center xl:px-64"
        >
          {serviceBannerData?.banner?.title?.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          data-aos="fade-up"
          className="text-gray-50 text-sm md:text-lg text-center pb-3 max-w-3xl mx-auto"
        >
          {serviceBannerData?.banner?.description}
        </motion.p>
      </div>

      <div className="flex gap-6 justify-center">
        <button
          size="lg"
          className="newBtnOne bg-transparent text-white border-1 hover:bg-cyan-100 px-4 py-2 rounded-md text-lg font-medium hover:text-cyan-900 hover:bg-white"
        >
          {serviceBannerData?.banner?.button1}
        </button>

        <button
          size="lg"
          className="newBtnTwo bg-white text-cyan-900 hover:bg-cyan-100 px-4 py-2 rounded-md text-lg font-medium hover:text-cyan-900 hover:bg-transparent"
        >
          {serviceBannerData?.banner?.button2}
        </button>
      </div>
    </div>
  );
};
