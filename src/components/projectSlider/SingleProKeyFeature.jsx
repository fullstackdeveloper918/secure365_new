"use client"
import React from "react"
import Link from "next/link"
import { Rocket } from "lucide-react"
export default function SingleProKeyFeature() {
  const KeyFetureProject = [
    {
      image: "/images/about-us.png",
      title: "Instant Online Quotes",
      description: "Users get accurate device pricing instantly, improving user experience."
    },
    {
      image: "/images/Ab-Card2.jpg",
      title: "Secure Data Handling",
      description: "Personal info wiped safely before devices are resold."
    },
    {
      image: "/images/Ab-Card3.jpg",
      title: "Fast & Reliable Payments",
      description: "Multiple payment methods supported and processed quickly."
    },
    {
      image: "/images/Ab-Card4.jpg",
      title: "Wide Device Coverage",
      description: "Supports MacBook, iPad, iPhone, iMac, Mac Mini, and Apple Watch."
    }
  ];
  return (
    <div className="ab-about-area ab-about-mt z-index-5 our-core-sec relative overflow-hidden bg-black">
      {/* Radial Stars Background */}
      <div className="stars-background absolute inset-0 pointer-events-none">
        <div className="stars-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`star star-${i+1}`}></div>
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
              <p className="tp_fade_bottom p-0 core-val-head fw-semibold text-white">
                Key Feature
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="about-inner row">
                <div className="about-category core-card-outer">
                  <div className="row">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul className="md:flex gap-4 ms-0 core-value-cards">
                        {KeyFetureProject.map((item, index) => (
                          <li key={index}>
                            <img className="core-val-img" src={item.image} alt={item.title} />
                            <div className="core-content-box">
                              <h3 className="h5-title">{item.title}</h3>
                              <p className="mb-0">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {/* <div className="text-center mt-6">
                        <Link href={"/contact-us"} className="bg-[#00AEEF] hover:bg-[#0099D4] text-white rounded-lg global-primary-btn px-6 py-3 inline-block">
                          Learn More
                        </Link>
                      </div> */}
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
        .star-3 { width: 8px; height: 8px; top: 10%; left: 60%; animation-delay: 1s; }
        .star-4 { width: 14px; height: 14px; top: 70%; left: 20%; animation-delay: 1.5s; }
        .star-5 { width: 12px; height: 12px; top: 80%; left: 70%; animation-delay: 2s; }
        .star-6 { width: 18px; height: 18px; top: 15%; left: 40%; animation-delay: 2.5s; }
        .star-7 { width: 8px; height: 8px; top: 60%; left: 85%; animation-delay: 0.3s; }
        .star-8 { width: 14px; height: 14px; top: 40%; left: 10%; animation-delay: 0.8s; }
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






