"use client";
import React, { useEffect, useRef, useState } from "react";

const FullscreenVideoSection = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [hideVideoSection, setHideVideoSection] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);

      // After overlay has finished animating up (1s), fade out the video section
      setTimeout(() => {
        setHideVideoSection(true);
      }, 1000);
    }, 6500); // 9 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative h-screen w-full overflow-hidden transition-opacity duration-1000 ${
        hideVideoSection
          ? "opacity-0 hidden pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Fullscreen Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/preloadedvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Optional content on top of video */}
      {/* <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Welcome to Our Vision</h1>
      </div> */}

      {/* Black overlay that slides up */}
      <div
        ref={overlayRef}
        className={`absolute bottom-0 left-0 w-full h-full bg-black z-20 transition-transform duration-1000 ${
          showOverlay ? "translate-y-0" : "translate-y-full"
        }`}
      ></div>
    </div>
  );
};

export default FullscreenVideoSection;
