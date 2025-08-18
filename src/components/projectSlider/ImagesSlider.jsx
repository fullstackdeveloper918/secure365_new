'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const images = [
  '/Showcase1_2.jpg',
  '/Showcase1_1.jpg',
  '/Showcase2.jpg',
  '/Showcase1_2.jpg',
  '/Showcase1_1.jpg',
  '/Showcase2.jpg',
];

const ImageSlider = () => {
  const containerRef = useRef(null);
  const proxyRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const proxy = proxyRef.current;

    let scrollWidth = container.scrollWidth - container.clientWidth;

    const draggable = Draggable.create(proxy, {
      type: 'x',
      trigger: container,
      inertia: true,
      bounds: { minX: -scrollWidth, maxX: 0 },
      onPress() {
        this.startX = container.scrollLeft;
      },
      onDrag() {
        container.scrollLeft = this.startX - this.x;
      },
      onThrowUpdate() {
        container.scrollLeft = this.startX - this.x;
      },
    })[0];

    const handleResize = () => {
      scrollWidth = container.scrollWidth - container.clientWidth;
      draggable.applyBounds({ minX: -scrollWidth, maxX: 0 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      draggable.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-gray-100 py-10 visual-sec">
      <h2 className="font-semibold text-center text-gray-800 text-2xl mb-6">
        Visual Showcase
      </h2>
      <div className="relative overflow-hidden">
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar"
          style={{ cursor: 'grab' }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[95vw] sm:w-80 md:w-[22rem] lg:w-[26rem] h-64 sm:h-72 md:h-80 lg:h-96 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Invisible proxy element */}
        <div
          ref={proxyRef}
          style={{ position: 'absolute', visibility: 'hidden' }}
        />
      </div>
    </section>
  );
};

export default ImageSlider;
