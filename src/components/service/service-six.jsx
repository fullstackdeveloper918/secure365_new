"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { RightArrow } from "../svg"
import Link from "next/link"
import Image from "next/image"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function ServiceSix({ serviceData }) {
  const containerRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !containerRef.current ||
      !serviceData?.data?.service_page_all_services_image_data
    ) {
      console.log("[v0] ServiceSix: Missing requirements for animation")
      return
    }

    const items = itemsRef.current.filter(Boolean)
    const totalItems = serviceData.data.service_page_all_services_image_data.length

    console.log("[v0] ServiceSix: Initializing animation with", totalItems, "items")

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    const viewportHeight = window.innerHeight

    // items.forEach((item, index) => {
    //   gsap.set(item, {
    //     zIndex: totalItems - index,
    //     y: index * viewportHeight, // Each item starts one viewport height below the previous
    //   })
    //   console.log("[v0] ServiceSix: Set item", index, "initial y:", index * viewportHeight)
    // })

    items.forEach((item, index) => {
      if (index > 0) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `top+=${(index - 1) * viewportHeight} top`,
          end: `top+=${index * viewportHeight} top`,
          scrub: 1,
          animation: gsap.fromTo(
            item,
            {
              y: viewportHeight,
            },
            {
              y: 0,
              ease: "none",
            },
          ),
          onUpdate: (self) => {
            console.log(`[v0] ServiceSix: Item ${index} progress:`, self.progress)
          },
        })
      }
    })

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${totalItems * viewportHeight}px`,
      pin: true,
      anticipatePin: 1,
      refreshPriority: -1,
    })

    const handleResize = () => {
      const newViewportHeight = window.innerHeight
      items.forEach((item, index) => {
        gsap.set(item, { y: index * newViewportHeight })
      })
      ScrollTrigger.refresh()
      console.log("[v0] ServiceSix: Resized, new viewport height:", newViewportHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener("resize", handleResize)
      console.log("[v0] ServiceSix: Cleanup completed")
    }
  }, [serviceData])

  return (
    <div ref={containerRef} className="relative overflow-hidden h-screen bg-slate-900">
      <div className="h-full">
        {serviceData?.data?.service_page_all_services_image_data?.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el
            }}
            className="absolute inset-0 w-full h-screen"
          >
            <div className="flex h-full max-ser-slide-card">
              {/* Left side - Image */}
              <div className="w-1/2 relative overflow-hidden max-slide-image-wrap">
                <Image
                  src={
                    item?.service_page_all_services_image ||
                    "/placeholder.svg?height=800&width=800&query=AI brain with neural networks and circuit patterns" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  width={800}
                  height={800}
                  alt="AI service illustration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Content */}
              <div className="w-1/2 bg-slate-900 flex items-center justify-center p-16 max-rightSlide-wrap">
                <div className="max-w-lg text-white">
                  <div className="mb-8 head-num-wrap">
                    <div className="flex items-center gap-4 mb-4 top-num-wrap">
                      <span className="text-4xl font-light text-gray-400">
                        {index < 9 ? "0" + (index + 1) : index + 1}
                      </span>
                      <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                        {item?.service_page_all_sub_heading}
                      </span>
                    </div>
                    <h2 className="text-4xl font-semibold leading-tight mb-6 text-white">{item?.service_page_all_heading}</h2>
                  </div>

                  <div className="space-y-8">
                    <p className="text-gray-300 text-lg leading-relaxed max-cont-slide-para">{item?.service_page_all_paragraph}</p>

                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                        {item?.service_page_servive_name_first}
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                        {item?.service_page_servive_name_second}
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                        {item?.service_page_servive_name_third}
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                        {item?.service_page_servive_name_fourth}
                      </li>
                    </ul>

                    <Link
                      href={`/service/${item?.service_page_servive_slug}`}
                      className="inline-flex items-center gap-3 text-white hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <span className="text-lg font-medium">{item?.service_page_servive_button}</span>
                      <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                        <RightArrow clr="currentColor" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
