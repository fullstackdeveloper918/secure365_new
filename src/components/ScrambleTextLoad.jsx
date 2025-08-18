"use client";

import { useState, useEffect, useRef } from "react";

const TEXTS = [
  "Brewing some cool things",
  "Hang tight, magic is happening",
  "Loading your adventure",
  "Loading ... ",
];

const chars = "lmnopq";

export default function ScrambleSequence({ className = "" }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TEXTS[0]);
  const intervalRef = useRef(null);
  const scrambleIterations = 10;

  useEffect(() => {
    const fullText = TEXTS[currentLineIndex];
    let iterations = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambleProgress =
        (iterations / scrambleIterations) * fullText.length;

      const scrambled = fullText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < scrambleProgress) {
            return fullText[i]; // lock correct char
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);
      iterations++;

      if (iterations > scrambleIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(fullText);

        // wait then go to next line
        setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % TEXTS.length);
        }, 1200);
      }
    }, 60);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentLineIndex]);

  return <h1 className={className}>{displayText}</h1>;
}
