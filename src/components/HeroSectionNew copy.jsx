"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const defaultContent = {
  home_advanced_it_and_cyber_security_first_heading: "Advanced Space",
  home_advanced_it_and_cyber_security_second: "Technology Solutions",
  home_advanced_it_and_cyber_security_third: "& Innovation",
  home_advanced_it_and_cyber_security_paragraph:
    "Discover cutting-edge technology solutions that push the boundaries of what's possible. Our innovative approach combines space-age thinking with practical applications.",
  home_advanced_it_and_cyber_security_fourth: "Start Mission",
}

export default function HeroSection({ serviceList }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const hero2Scale = useTransform(scrollYProgress, [0, 0.3], [1, 3])

  // hero_019 scales from 1 to 1.2 after hero2 reaches full scale (30% to 60%)
  const hero019Scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.2])

  // Text animations - sequential appearance after images scale
  const leftTextOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])
  const leftTextY = useTransform(scrollYProgress, [0.6, 0.7], [100, 0])

  const rightTextOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])
  const rightTextY = useTransform(scrollYProgress, [0.7, 0.8], [300, 200])

  const buttonOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])
  const buttonY = useTransform(scrollYProgress, [0.8, 0.9], [50, 0])

  return (
    <section ref={sectionRef} className="hero-sec relative min-h-[200vh] flex items-center main-secure-banner z-0">
      <motion.div className="fixed inset-0 overflow-hidden" style={{ scale: hero019Scale }}>
        <img src="/hero_019.jpg" alt="Space background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div className="fixed inset-0 overflow-hidden z-5" style={{ scale: hero2Scale }}>
        <img src="/hero2.png" alt="Airplane window view" className="w-full h-full object-cover" />
      </motion.div>

      <div className="relative z-10 w-full sticky top-0 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex gap-12 items-end min-h-screen ban-inner-wrapper">
            <div className="main-head-banner-box">
              <motion.h1
                style={{
                  opacity: leftTextOpacity,
                  y: leftTextY,
                }}
                className="main-banner-heading text-white font-semibold mb-0"
              >
                {serviceList.home_advanced_it_and_cyber_security_first_heading}
                <br />
                {serviceList.home_advanced_it_and_cyber_security_second}
                <br />
                <span className="">{serviceList.home_advanced_it_and_cyber_security_third}</span>
              </motion.h1>
            </div>

            <div className="space-y-8 ban-content-box">
              <motion.div
                style={{
                  opacity: rightTextOpacity,
                  y: rightTextY,
                }}
                className="space-y-6 main-banner-para-box"
              >
                <p className="main-banner-paraTxt text-white mb-0">
                  {serviceList.home_advanced_it_and_cyber_security_paragraph}
                </p>
                <motion.div
                  style={{
                    opacity: buttonOpacity,
                    y: buttonY,
                  }}
                >
                  <Link
                    href={"/contact-us"}
                    className="bg-[#00AEEF] hover:bg-[#0099d4] text-white rounded-lg start-mission-btn"
                  >
                    {serviceList.home_advanced_it_and_cyber_security_fourth}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="absolute z-10 scroll-down-button">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center text-white/70 cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }}
            >
              <img src="/Scroll-down-icon.svg" alt="scroll-down-icon" className="me-2" />
              <div className="text-sm text-white font-normal">Scroll Down</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
