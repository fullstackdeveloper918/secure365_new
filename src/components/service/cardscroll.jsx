"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { Rocket } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    subtitle: "User Experience & Interface",
    description: "Creating intuitive and engaging user experiences",
    image: "https://www.lumina-design.co/images/i_service_card_1.svg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Frontend & Backend Solutions",
    description: "Building modern and scalable web applications",
    image: "https://www.lumina-design.co/images/i_service_card_2.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Brand Identity",
    subtitle: "Visual Identity & Branding",
    description: "Crafting memorable brand experiences",
    image: "https://www.lumina-design.co/images/i_service_card_3.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description: "Driving results through digital channels",
    image: "https://www.lumina-design.co/images/i_service_card_4.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Mobile Apps",
    subtitle: "iOS & Android Development",
    description: "Native and cross-platform mobile solutions",
    image: "https://www.lumina-design.co/images/i_service_card_5.png",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ServicescardSection() {
const containerRef = useRef(null)
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

const triggers = []

    // Create one main scroll trigger that handles all services
    const mainTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${services.length * window.innerHeight}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const totalProgress = self.progress
        const exactIndex = totalProgress * (services.length - 1) // 0 to 4 for 5 services
        const currentIndex = Math.floor(exactIndex)
        const nextIndex = Math.min(currentIndex + 1, services.length - 1)
        const transitionProgress = exactIndex - currentIndex

        // Update current service state
        setCurrentService(currentIndex)

        // Animate all services
        services.forEach((_, index) => {
          const imageElement = document.querySelector(`[data-service-image="${index}"]`)
          const textElement = document.querySelector(`[data-text="${index}"]`)

          let imageX = 0,
            imageOpacity = 0.3,
            imageScale = 0.8,
            imageZIndex = 1
          let textOpacity = 0,
            textY = 50,
            textScale = 0.9

          if (index === currentIndex) {
            // Current service
            if (currentIndex === services.length - 1) {
              // Last service - keep it fully visible
              imageX = 0
              imageOpacity = 1
              imageScale = 1
              imageZIndex = 10
              textOpacity = 1
              textY = 0
              textScale = 1
            } else {
              // Transitioning out
              imageX = -transitionProgress * 250
              imageOpacity = 1 - transitionProgress * 0.7
              imageScale = 1 - transitionProgress * 0.2
              imageZIndex = 10
              textOpacity = 1 - transitionProgress
              textY = -transitionProgress * 50
              textScale = 1 - transitionProgress * 0.1
            }
          } else if (index === nextIndex && currentIndex < services.length - 1) {
            // Next service coming in
            imageX = (1 - transitionProgress) * 250
            imageOpacity = 0.3 + transitionProgress * 0.7
            imageScale = 0.8 + transitionProgress * 0.2
            imageZIndex = 9
            textOpacity = transitionProgress
            textY = (1 - transitionProgress) * 50
            textScale = 0.9 + transitionProgress * 0.1
          } else if (index < currentIndex) {
            // Past services
            imageX = -250
            imageOpacity = 0.2
            imageScale = 0.7
            imageZIndex = 1
            textOpacity = 0
            textY = -50
            textScale = 0.9
          } else {
            // Future services
            imageX = 250
            imageOpacity = 0.3
            imageScale = 0.8
            imageZIndex = services.length - index
            textOpacity = 0
            textY = 50
            textScale = 0.9
          }

          // Apply animations
          if (imageElement) {
            gsap.set(imageElement, {
              x: imageX,
              opacity: imageOpacity,
              scale: imageScale,
              zIndex: imageZIndex,
            })
          }

          if (textElement) {
            gsap.set(textElement, {
              opacity: textOpacity,
              y: textY,
              scale: textScale,
            })
          }
        })
      },
    })

    triggers.push(mainTrigger)

    // Set initial positions
    services.forEach((_, index) => {
      const imageElement = document.querySelector(`[data-service-image="${index}"]`)
      const textElement = document.querySelector(`[data-text="${index}"]`)

      if (imageElement) {
        gsap.set(imageElement, {
          x: index === 0 ? 0 : 250,
          opacity: index === 0 ? 1 : 0.3,
          scale: index === 0 ? 1 : 0.8,
          zIndex: index === 0 ? 10 : services.length - index,
        })
      }

      if (textElement) {
        gsap.set(textElement, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 50,
          scale: index === 0 ? 1 : 0.9,
        })
      }
    })

    return () => {
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen bg-black text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 border border-white rotate-45"></div>
        <div className="absolute top-20 right-20 w-6 h-6 border border-orange-500 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-orange-500 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 border border-white rotate-45"></div>
      </div>

      <div className="h-full flex">
        {/* Left Side - All Service Images */}
        <div className="w-1/2 relative p-8 flex items-center justify-center">
          <div className="relative w-full h-full max-w-2xl">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-service-image={index}
                className="absolute inset-0 cursor-pointer"
                style={{
                  transform: `translate(${index * 15}px, ${index * 20}px)`,
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>

                  {/* Service Number */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  {/* Interactive Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 border-2 border-orange-500 rotate-45"></div>
              </div>
            ))}
          </div>

          {/* Interactive Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-500 rounded-full animate-ping"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + i * 8}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: "4s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Side - Service Title */}
        <div className="w-1/2 flex items-center justify-center p-16 relative">
          <div className="text-center relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-text={index}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div className="space-y-8">
                  {/* Main Title */}
                  <div className="relative">
                    <h1 className="text-7xl md:text-8xl font-semibold leading-none tracking-tight">
                      {service.title.split(" ").map((word, wordIndex) => (
                        <div key={wordIndex} className="block">
                          <span className="inline-block text-white duration-300 cursor-default">
                            {word}
                          </span>
                        </div>
                      ))}
                    </h1>

                    {/* Animated Underline */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r bg-[#01aaeb] rounded-full"></div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-2xl text-gray-400 font-light tracking-wide">{service.subtitle}</p>

                  {/* Description */}
                  <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed text-center w-full">{service.description}</p>

                  {/* Interactive Button */}
                  {/* <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-500 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                    <span className="relative z-10">Explore Service</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button> */}

                     <button
          className="relative z-[9999] mt-6 bannerbtn"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link className="header-button ajax-link" href="/contact-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <Rocket className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Let's Talk">Explore Service</span>
              </div>
            </div>
          </Link>
        </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Progress Indicator */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-6">
        {services.map((service, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div
              className={`w-3 h-12 rounded-full transition-all duration-500 ${
                index === currentService
                  ? "bg-gradient-to-b from-orange-500 to-pink-500 shadow-lg shadow-orange-500/50"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            />

            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-gray-400 text-sm mb-4 tracking-widest">SCROLL TO EXPLORE</div>
        <div className="relative">
          <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent mx-auto"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Service Counter */}
      <div className="absolute top-8 left-8 text-white">
        <div className="text-4xl font-bold">
          {String(currentService + 1).padStart(2, "0")}
          <span className="text-gray-500">/{String(services.length).padStart(2, "0")}</span>
        </div>
        <div className="text-sm text-gray-400 tracking-widest mt-1">SERVICES</div>
      </div>
    </div>
  )
}
