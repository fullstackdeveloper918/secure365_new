"use client";

import { useState, useEffect } from "react";
import "../app/preloader.css";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
 const interval = setInterval(() => {
  setProgress(prev => {
    if (prev >= 100) {
      clearInterval(interval);
      setHide(true);
      setTimeout(() => onComplete && onComplete(), 1000);
      return 100;
    }
    return prev + 1; // smaller increment
  });
}, 70); // keep interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`preloader ${hide ? "preloader-hide" : ""}`}>
      {/* Stars */}
      <div className="stars stars-layer1"></div>
      <div className="stars stars-layer2"></div>
      <div className="stars stars-layer3"></div>

      {/* Content */}
      <div className="preloader-content">
        <h1>Your Experience is Loading</h1>
        <div className="fancy-progress-bar">
          <div
            className="fancy-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
}
