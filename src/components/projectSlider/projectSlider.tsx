'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'
import './projectslider.css'

const images = [
  '/images/projects/techableslide1.png',
  '/images/projects/techableslide2.png',
  '/images/projects/techableslide3.png',
  '/images/projects/techableslide4.png',
]

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 1.5,
      spacing: 30, // space between slides
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div style={{ width: '100%', padding: '60px 0', overflow: 'hidden' }}>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{
          overflow: 'visible',
          display: 'flex',
          alignItems: 'center',
          touchAction: 'pan-y',
        }}
      >
        {images.map((src, idx) => {
          const isActive = idx === currentSlide
          return (
            <div
              key={idx}
              className="keen-slider__slide"
              style={{
                width: '60vw',
                flexShrink: 0,
                opacity: isActive ? 1 : '',
                transform: `scale(${isActive ? 1 : 1})`,
                transition: 'all 0.5s ease',
                cursor: 'grab',
              }}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={1000}
                height={600}
                style={{
                  width: '100%',
                  height: '560px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  boxShadow: isActive
                    ? '0 8px 20px rgba(0,0,0,0.3)'
                    : '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
