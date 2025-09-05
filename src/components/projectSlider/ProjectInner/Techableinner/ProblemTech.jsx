"use client"
import React from "react"
import Link from "next/link"
import { Rocket } from "lucide-react"

export default function ProblemTech() {
    const KeyFetureProject = [
        {
            image: "/images/projects/techableslide1.png",
            title: "Get Instant Quotes",
            description: "Quickly receive accurate trade-in values for your Apple devices online."
        },
        {
            image: "/images/projects/techableslide2.jpeg",
            title: "Safe Data Wipe",
            description: "All personal data is securely erased before your device is resold or recycled."
        },
        {
            image: "/images/projects/techableslide3.png",
            title: "Fast Payment Guarantee",
            description: "Choose from multiple payment options and get paid within 24–48 hours."
        },
        {
            image: "/images/projects/techableslide4.png",
            title: "All Apple Devices Covered",
            description: "Sell or trade MacBooks, iMacs, iPads, iPhones, Apple Watches, and more."
        }
    ];


    return (
        <div className="ab-about-area ab-about-mt z-index-5 our-core-sec relative overflow-hidden bg-black">
            {/* Radial Stars Background */}
            <div className="stars-background absolute inset-0 pointer-events-none">
                <div className="stars-container">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`star star-${i + 1}`}></div>
                    ))}
                </div>
                <div className="radial-gradient"></div>
            </div>
            <div className="bg-full-about absolute">
                <img src="/galaxy-spiral.jpeg" alt="Background" />
            </div>
            <div className="container container-1480 relative z-10">
                <div id="about-info" className="about-info-wrap row">
                    <div className="about-title text-center">
                        <div className="ab-about-content p-relative">
                            <h1 className="tp_fade_bottom p-0 core-val-head fw-semibold text-white">
                                Techable Problems
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-7">
                        <div className="col-xl-12">
                            <div className="about-inner row">
                                <div className="about-category core-card-outer">
                                    <div className="row">
                                        <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                                            <ul className="md:flex gap-4 ms-0 core-value-cards">
                                                {KeyFetureProject.map((item, index) => (
                                                    <li key={index} className="relative overflow-hidden group">
                                                        <img className="core-val-img w-full h-100% object-cover" src={item.image} alt={item.title} />
                                                        <div className="core-content-box absolute bottom-0 left-0 right-0 bg-black/60 bg-opacity-40 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                                                            <h3 className="h5-title text-white">{item.title}</h3>
                                                            <p className="mb-0 text-gray-300">{item.description}</p>
                                                        </div>

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Styles */}
            <style jsx>{`
        .bg-full-about {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .bg-full-about img {
          position: absolute;
          left: 50%;
          top: 62%;
          transform: translate(-50%, -50%);
        }
        .bg-full-about::after {
          position: absolute;
          content: '';
          background: #00000095;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
        .stars-background {
          background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .radial-gradient {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.03) 30%, rgba(219, 234, 254, 0.02) 50%, transparent 70%);
          border-radius: 50%;
        }
        .star {
          position: absolute;
          background: white;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: twinkle 3s ease-in-out infinite alternate;
        }
        .star-1 { width: 12px; height: 12px; top: 20%; left: 15%; animation-delay: 0s; }
        .star-2 { width: 16px; height: 16px; top: 30%; left: 80%; animation-delay: 0.5s; }
        .star-3 { width: 8px; height: 8px; top:/60%; left: 60%; animation-delay: 1s; }
        .star-4 { width: 14px; height: 14px; top: 70%; left: 20%; animation-delay: 1.5s; }
        .star-5 { width: 12px; height: 12px; top: 80%; left: 70%; animation-delay: 2s; }
        .star-6 { width: 18px; height: 18px; top: 15%; left: 40%; animation-delay: 2.5s; }
        .star-7 { width: 8px; height: 8px; top: 60%; left: 85%; animation-delay: 0.3s; }
        .star-8 { width: 14px; height: 14px; top: 40%; left:/60%; animation-delay: 0.8s; }
        .star-9 { width: 12px; height: 12px; top: 25%; left: 90%; animation-delay: 1.3s; }
        .star-10 { width: 16px; height: 16px; top: 85%; left: 45%; animation-delay: 1.8s; }
        .star-11 { width: 8px; height: 8px; top: 5%; left: 25%; animation-delay: 2.3s; }
        .star-12 { width: 14px; height: 14px; top: 50%; left: 95%; animation-delay: 0.1s; }
        .star-13 { width: 12px; height: 12px; top: 90%; left: 15%; animation-delay: 0.6s; }
        .star-14 { width: 18px; height: 18px; top: 35%; left: 65%; animation-delay: 1.1s; }
        .star-15 { width: 8px; height: 8px; top: 75%; left: 55%; animation-delay: 1.6s; }
        .star-16 { width: 14px; height: 14px; top: 45%; left: 30%; animation-delay: 2.1s; }
        .star-17 { width: 12px; height: 12px; top: 65%; left: 5%; animation-delay: 0.4s; }
        .star-18 { width: 16px; height: 16px; top: 55%; left: 75%; animation-delay: 0.9s; }
        .star-19 { width: 8px; height: 8px; top: 95%; left: 85%; animation-delay: 1.4s; }
        .star-20 { width: 14px; height: 14px; top: 8%; left: 50%; animation-delay: 1.9s; }
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        .core-value-cards li {
          position: relative;
          overflow: hidden;
        }
        .core-val-img {
          transition: transform 0.3s ease-in-out;
        }
        .group:hover .core-val-img {
          transform: scale(1.05);
        }
        .core-content-box {
          opacity: 0;
          visibility: hidden;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        .group:hover .core-content-box {
          opacity: 1;
          visibility: visible;
        }
        @media (max-width: 768px) {
          .radial-gradient { width: 600px; height: 600px; }
          .star { transform: scale(0.8); }
        }
        @media (max-width: 480px) {
          .radial-gradient { width: 400px; height: 400px; }
          .star { transform: scale(0.6); }
        }
      `}</style>
        </div>
    )
}