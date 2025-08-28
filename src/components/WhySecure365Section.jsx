"use client";

import { motion, useScroll, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WhySecure365Section({ containerRef, serviceList }) {
  const pathRef = useRef(null);
  const rocketRef = useRef(null);
  const [totalLen, setTotalLen] = useState(1);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  console.log(serviceList, "servicelist here2");
  const dashOffset = useMotionValue(1);
  const dotX1 = useMotionValue(0);
  const dotY1 = useMotionValue(0);
  const dotX2 = useMotionValue(0);
  const dotY2 = useMotionValue(0);
  const dotX3 = useMotionValue(0);
  const dotY3 = useMotionValue(0);
  const dotX4 = useMotionValue(0);
  const dotY4 = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Screen size for responsive rocket
  const getScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, []);

  // Get total path length
  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setTotalLen(len);
      dashOffset.set(len);
    }
  }, []);

  // Stars following path
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (!pathRef.current) return;
      const total = pathRef.current.getTotalLength();
      const base = v * (total + 500) - 400;
      const clampLen = (len) => Math.max(0, Math.min(total, len));

      const stop1 = total * 0;
      const stop2 = total * 0.35;
      const stop3 = total * 0.65;
      const stop4 = total * 1;

      const revealLen1 = clampLen(Math.min(base, stop1));
      const p1 = pathRef.current.getPointAtLength(revealLen1);
      dotX1.set(p1.x);
      dotY1.set(p1.y);

      const revealLen2 = clampLen(Math.min(base, stop2));
      const p2 = pathRef.current.getPointAtLength(revealLen2);
      dotX2.set(p2.x);
      dotY2.set(p2.y);

      const revealLen3 = clampLen(Math.min(base, stop3));
      const p3 = pathRef.current.getPointAtLength(revealLen3);
      dotX3.set(p3.x);
      dotY3.set(p3.y);

      const revealLen4 = clampLen(Math.min(base, stop4));
      const p4 = pathRef.current.getPointAtLength(revealLen4);
      dotX4.set(p4.x);
      dotY4.set(p4.y);

      const maxReveal = Math.max(
        revealLen1,
        revealLen2,
        revealLen3,
        revealLen4
      );
      dashOffset.set(Math.max(0, total - maxReveal));
    });
    return () => unsub();
  }, [scrollYProgress]);

  
  

  console.log("service list on whysecure", serviceList);

  return (
    <section
      className="arrieved-destination relative rotation-timeline-sec"
      ref={containerRef}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
        />
      </div>

      <div className="relative z-10">
        {/* Marquee Heading */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block text-6xl lg:text-9xl animate-marquee">
            But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But,
            Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why
            Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?
          </div>
        </div>
        {/* Timeline */}
        <div className="container">
          <div className="relative min-h-[1300px] timeline-inner-box">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 1300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="revealMask">
                  <motion.path
                    ref={pathRef}
                    d="M150 50 C 150 500, 520 530, 580 612 C 698 700, 1000 1000, 300 1200"
                    stroke="white"
                    strokeWidth="6"
                    strokeDasharray={`${totalLen} ${totalLen}`}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                  />
                </mask>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Path */}
              <path
                d="M150 50 C 150 500, 520 530, 580 612 C 698 700, 1000 1000, 300 1200"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="10 12"
                mask="url(#revealMask)"
                opacity="0.9"
              />

              {/* Stars */}
              {[
                { x: dotX1, y: dotY1 },
                { x: dotX2, y: dotY2 },
                { x: dotX3, y: dotY3 },
                { x: dotX4, y: dotY4 },
              ].map((dot, i) => (
                <motion.g
                  key={i}
                  style={{ x: dot.x, y: dot.y }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <image
                    href="/images/Star 5.png"
                    width="40"
                    height="40"
                    x={-20}
                    y={-20}
                    filter="url(#glow)"
                  />
                </motion.g>
              ))}
            </svg>

      
            {/* Content Block 1 */}
            {serviceList?.blocks[0] && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="absolute flex top-0 max-w-full first-project-del-box"
              >
                <div className="relative text-left">
                  <div className="absolute -top-4 -right-8 text-[#00AEEF] text-2xl">
                    ✦
                  </div>
                  <div className="absolute -bottom-4 -left-4 text-[#00AEEF] text-lg">
                    ✦
                  </div>
                  <div className="num-rotate-head font-semibold text-[#00AEEF]">
                    {serviceList.blocks[0].number}
                  </div>
                  <div className="num-rotate-para text-white mb-0">
                    {serviceList.blocks[0].label}
                  </div>
                </div>
                {serviceList.blocks[0].description && (
                  <div className="project-del-contBox">
                    <p className="text-white">{serviceList.blocks[0].description}</p>
                    {serviceList.blocks[0].button && (
                      <Link
                        href={serviceList.blocks[0].button.link}
                        className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style"
                      >
                        {serviceList.blocks[0].button.text}
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Content Block 2 */}
            {serviceList?.blocks[1] && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute top-[500px] left-32"
              >
                <div className="relative text-left">
                  <div className="absolute -top-6 -left-8 text-[#00AEEF] text-xl">
                    ✦
                  </div>
                  <div className="absolute -bottom-2 right-4 text-[#00AEEF] text-lg">
                    ✦
                  </div>
                  <div className="num-rotate-head font-semibold text-[#00AEEF]">
                    {serviceList.blocks[1].number}
                  </div>
                  <div className="num-rotate-para text-white mb-0">
                    {serviceList.blocks[1].label}
                  </div>
                </div>
                {serviceList.blocks[1].description && (
                  <div className="project-del-contBox">
                    <p className="text-white">{serviceList.blocks[1].description}</p>
                    {serviceList.blocks[1].button && (
                      <Link
                        href={serviceList.blocks[1].button.link}
                        className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style"
                      >
                        {serviceList.blocks[1].button.text}
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Content Block 3 */}
            {serviceList?.blocks[2] && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-[800px] right-40 transform -translate-x-1/2"
              >
                <div className="relative text-left">
                  <div className="absolute -top-4 -right-12 text-[#00AEEF] text-2xl">
                    ✦
                  </div>
                  <div className="absolute -bottom-6 -left-8 text-[#00AEEF] text-lg">
                    ✦
                  </div>
                  <div className="num-rotate-head font-semibold text-[#00AEEF]">
                    {serviceList.blocks[2].number}
                  </div>
                  <div className="num-rotate-para text-white mb-0">
                    {serviceList.blocks[2].label}
                  </div>
                </div>
                {serviceList.blocks[2].description && (
                  <div className="project-del-contBox">
                    <p className="text-white">{serviceList.blocks[2].description}</p>
                    {serviceList.blocks[2].button && (
                      <Link
                        href={serviceList.blocks[2].button.link}
                        className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style"
                      >
                        {serviceList.blocks[2].button.text}
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {/* Content Block 4 */}
            {serviceList?.blocks[3] && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-32 transform -translate-x-1/2"
              >
                <div className="relative text-left">
                  <div className="absolute -top-2 right-8 text-[#00AEEF] text-xl">
                    ✦
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-[#00AEEF] text-lg">
                    ✦
                  </div>
                  <div className="num-rotate-head font-semibold text-[#00AEEF]">
                    {serviceList.blocks[3].number}
                  </div>
                  <div className="num-rotate-para text-white mb-0">
                    {serviceList.blocks[3].label}
                  </div>
                </div>
                {serviceList.blocks[3].description && (
                  <div className="project-del-contBox">
                    <p className="text-white">{serviceList.blocks[3].description}</p>
                    {serviceList.blocks[3].button && (
                      <Link
                        href={serviceList.blocks[3].button.link}
                        className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style"
                      >
                        {serviceList.blocks[3].button.text}
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}