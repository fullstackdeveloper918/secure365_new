"use client";

import { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  isHovering?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  isHovering = false,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const chars = "ACGSabcdefghijklmnopqrst";
  const maxIterations = 10;

  useEffect(() => {
    if (isHovering) {
      let iterations = 0;

      // Clear any previous interval
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setDisplayText((prevText) =>
          prevText
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < (iterations / maxIterations) * text.length) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        iterations++;
        if (iterations > maxIterations) {
          clearInterval(intervalRef.current!);
          setDisplayText(text);
        }
      }, 50);
    } else {
      // On mouse leave: instantly show final text
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(text);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, text]);

  return <h2 className={className}>{displayText}</h2>;
}
