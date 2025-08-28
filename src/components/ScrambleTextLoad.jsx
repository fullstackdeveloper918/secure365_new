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
  const [progress, setProgress] = useState(0); // progress bar
  const intervalRef = useRef(null);
  const scrambleIterations = 10;

  // calculate total chars across all texts
  const totalChars = TEXTS.reduce((acc, t) => acc + t.length, 0);
  const charsSoFar = TEXTS.slice(0, currentLineIndex).reduce((acc, t) => acc + t.length, 0);

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

      // update progress based on chars revealed + previous lines
      const cumulativeChars = charsSoFar + scrambleProgress;
      setProgress(Math.floor((cumulativeChars / totalChars) * 100));

      iterations++;

      if (iterations > scrambleIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(fullText);
        setProgress(Math.floor(((charsSoFar + fullText.length) / totalChars) * 100));

        // wait then go to next line
        setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % TEXTS.length);
        }, 1200);
      }
    }, 60);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentLineIndex, charsSoFar, totalChars]);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className={className}>{displayText}</h1>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-[#00aeef] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-md text-gray-500">{progress}%</span>
    </div>
  );
}
