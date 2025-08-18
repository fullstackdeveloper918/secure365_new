import React, { useState, useEffect } from "react";
import ScrambleSequence from "./ScrambleTextLoad";

const TEXTS = [
  "Brewing some cool things",
  "Hang tight, magic is happening",
  "Loading your adventure",
  "Loading ... ",
];

const PreLoader = () => {
  const [hide, setHide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < TEXTS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // All texts shown, hide loader
      setTimeout(() => {
        setHide(true);
      }, 1500);
    }
  };

  return (
    <div
      className={`pre-load-main transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <ScrambleSequence
        text={TEXTS[currentIndex]}
        onComplete={handleNext}
        className="text-white font-bold text-1xl text-center"
      />
    </div>
  );
};

export default PreLoader;
