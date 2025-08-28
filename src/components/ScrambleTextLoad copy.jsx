"use client";

import { useState, useEffect, useRef } from "react";

const TEXTS = [
  "Brewing some cool things",
  "Hang tight, magic is happening",
  "Loading your adventure",
  "Loading ... ",
];

const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function ScrambleSequence({ className = "" }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState(TEXTS[0]);
  const [totalProgress, setTotalProgress] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const cumulativeCharCountRef = useRef(0); // total chars revealed so far

  const totalChars = TEXTS.reduce((acc, t) => acc + t.length, 0); // total chars for all lines

  useEffect(() => {
    const fullText = TEXTS[currentLineIndex];
    const duration = 1200; // 1.2s per line
    const scramble = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const percent = Math.min(elapsed / duration, 1);

      const lockedCount = Math.floor(fullText.length * percent);

      const scrambled = fullText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          return i < lockedCount
            ? char
            : chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);

      // update cumulative progress
      const cumulativeChars = cumulativeCharCountRef.current + lockedCount;
      setTotalProgress(Math.floor((cumulativeChars / totalChars) * 100));

      if (percent < 1) {
        requestRef.current = requestAnimationFrame(scramble);
      } else {
        cumulativeCharCountRef.current += fullText.length; // add fully revealed line
        setTimeout(() => {
          setCurrentLineIndex((prev) => (prev + 1) % TEXTS.length);
          startTimeRef.current = null;
        }, 800);
      }
    };

    requestRef.current = requestAnimationFrame(scramble);

    return () => cancelAnimationFrame(requestRef.current);
  }, [currentLineIndex, totalChars]);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className={`text-2xl font-bold ${className}`}>{displayText}</h1>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${totalProgress}%` }}
        />
      </div>
      <span className="text-sm text-gray-500">{totalProgress}%</span>
    </div>
  );
}
