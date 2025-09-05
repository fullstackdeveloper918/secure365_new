"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import "swiper/css/navigation"

export default function SellmacGallery() {
    const KeyFetureProject = [
        {
            image: "/images/projects/sellamc02.png",
            title: "Instant Online Quotes",
            description: "Users get accurate device pricing instantly, improving user experience."
        },
        {
            image: "/images/projects/sellamc03.png",
            title: "Secure Data Handling",
            description: "Personal info wiped safely before devices are resold."
        },
        {
            image: "/sellmac.png",
            title: "Fast & Reliable Payments",
            description: "Multiple payment methods supported and processed quickly."
        },
        {
            image: "/images/projects/sellamc01.png",
            title: "Wide Device Coverage",
            description: "Supports MacBook, iPad, iPhone, iMac, Mac Mini, and Apple Watch."
        },
        {
            image: "/images/projects/sellamc03.png",
            title: "Eco-Friendly Practices",
            description: "SellMac promotes recycling and reduces electronic waste."
        }
    ]

    return (
        <div className="relative bg-black pt-12 pb-24">
            {/* Section Heading */}
            <h1 className="text-center text-5xl font-semibold text-white mb-7">
                Sellmac Gallery
            </h1>

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
                    {KeyFetureProject.map((item, index) => (
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
