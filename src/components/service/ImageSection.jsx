"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const ImageSection = ({ leftImage, rightImage }) => {
  const sectionRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("down")
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (!sectionRef.current) return

    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        // Trigger animation when section enters viewport
        if (entry.isIntersecting) {
          setIsAnimating(true)
          setHasAnimated(true)
        } else {
          // Reset animation when section is out of view
          setIsAnimating(false)
          setHasAnimated(false)
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: "-100px 0px", // Adjust trigger point slightly
      },
    )

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={sectionRef} className="flex items-end gap-0">
      {/* Left Image */}
      <motion.div
        className="w-1/2 relative overflow-hidden"
        style={{
          aspectRatio: "3/2",
          transformOrigin: "bottom center",
        }}
        animate={{
          scale: isAnimating ? 0.5 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom bezier curve for smoother animation
        }}
      >
        <Image src={leftImage || "/placeholder.svg"} alt="Left Image" fill style={{ objectFit: "cover" }} />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-1/2 relative overflow-hidden"
        style={{
          aspectRatio: "3/2",
          transformOrigin: "bottom center",
        }}
        animate={{
          scale: isAnimating ? 1 : 0.5,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom bezier curve for smoother animation
        }}
      >
        <Image src={rightImage || "/placeholder.svg"} alt="Right Image" fill style={{ objectFit: "cover" }} />
      </motion.div>
    </div>
  )
}

export default ImageSection
