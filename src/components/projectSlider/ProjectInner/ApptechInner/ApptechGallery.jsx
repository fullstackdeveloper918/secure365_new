"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"

export default function AppletechGallery() {
    const KeyFeatureProject = [
        {
            image: "/images/projects/appletech01.png",
            title: "Effortless Content Creation with AI Tools",
            description: "Leverage built-in AI features like Curriculum Generator, Quiz Generator, and Subtitle & Translation Generator for fast, smart content development."
        },
        {
            image: "/images/projects/appletechslide01.png",
            title: "Automated Sales and E-commerce Management",
            description: "Scale your offerings with tools like Buy Now, Pay Later, abandoned cart recovery, upsells, and creator referrals to boost conversions."
        },
        {
            image: "/images/projects/appletechslide02.png",
            title: "Powerful Sales & Marketing Toolkit",
            description: "Drive enrolments with subscriptions, bundles, order bumps, coupons, tracking pixels, and affiliate marketing—all in one platform."
        },
        {
            image: "/images/projects/appletechslide03.png",
            title: "Full Course Builder & Mobile Experience",
            description: "Create courses intuitively using a flexible builder, and offer a seamless learning journey through custom branding and a top-notch mobile app."
        },
        {
            image: "/images/projects/appletechslide04.png",
            title: "Custom Branding & Integrations",
            description: "Elevate your brand with custom domains, code snippets, advanced theme control, and seamless integrations via App Hub."
        }
    ];


    return (
        <div className="relative bg-black pt-12 pb-24">
            {/* Section Heading */}
            {/* <div className="text-white w-full mx-auto"> */}
            <h1 className="text-center text-5xl font-semibold text-white mb-7">
                Appletech Gallery
            </h1>
            {/* <p className="text-white">Secure365 empowered our lookup tools to deliver precise Apple specs reliably and rapidly—making purchase decisions much easier.</p> */}

            {/* </div> */}
            {/* Slider */}
            <div className="relative container mx-auto px-4">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next"
                    }}
                    spaceBetween={20}
                    loop={true} // Infinite loop
                    breakpoints={{
                        320: { slidesPerView: 1 },     // 📱 Mobile
                        640: { slidesPerView: 2 },     // 📱+ Landscape
                        768: { slidesPerView: 2 },     // 📱 Tablets
                        1024: { slidesPerView: 3 },    // 💻 Laptops
                        1280: { slidesPerView: 4 },    // 🖥️ Large desktops
                    }}
                >
                    {KeyFeatureProject.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative overflow-hidden group rounded-lg shadow-lg">
                                {/* Image */}
                                <img
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={item.image}
                                    alt={item.title}
                                />

                                {/* 🔥 Black Fade Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 
                    opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 
                    transition-all duration-500 ease-in-out">
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <button className="custom-prev absolute top-1/2 -left-4 md:-left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-10">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="custom-next absolute top-1/2 -right-4 md:-right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-10">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
