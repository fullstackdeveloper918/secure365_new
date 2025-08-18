import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WhatMakesUsDifferent = () => {
    const differences = [
        {
            icon: "/Security-icon.svg",
            title: "Information Security Solutions",
            desc: "Protect your business from threats with advanced security measures, real-time monitoring, and threat intelligence.",
        },
        {
            icon: "/Solution-icon.svg",
            title: "Comprehensive Solutions",
            desc: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing technology strategies.",
        },
        {
            icon: "/Victim-icon.svg",
            title: "Victim Approach",
            desc: "Secure365 is built on years of battling cybercrime, managing e-commerce platforms, and developing real-world strategies.",
        },
        {
            icon: "/Protection-icon.svg",
            title: "Advanced Protection",
            desc: "Secure365 provides innovative approaches to combat threats, ensuring the highest security standards.",
        },
    ];

    const sectionRef = useRef(null);



    return (
        <section className="relative overflow-hidden what-make-different-sec" ref={sectionRef}>
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
                    style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="flex gap-5 items-start justify-between what-make-outer-box">
                    <motion.div
                        className="what-make-heading-left-box"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="what-make-heading font-semibold text-white">
                            What Make<br />
                            Us Different?
                        </h2>
                        <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white primary-btn-style">
                            Start Your Mission
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 what-make-card-box-inner"
                    >
                        {differences.map((item, index) => (
                            <div
                                key={index}
                                className="what-make-card-box flex items-start space-x-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors"
                            >
                                <div className="flex items-center flex-shrink-0 what-icon-head-txt">
                                    <img src={item.icon} alt={`${item.title.toLowerCase()}-icon`} />
                                    <h3 className="text-white mb-0 what-make-card-head font-anta">
                                        {item.title.split(" ").map((word, i) => (
                                            <span key={i}>
                                                {word}
                                                {i < item.title.split(" ").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </h3>
                                </div>
                                <div>
                                    <p className="what-make-para m-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default WhatMakesUsDifferent;
