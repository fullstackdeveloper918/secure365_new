"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ProjectTextLine = ({ data }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  // Get scroll progress relative to container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"], // when container enters viewport till it leaves
  });

  // The horizontal shift based on scroll progress, adjust the range for speed/distance
  const rawX = useTransform(scrollYProgress, [0, 1], ["100%", "-40%"]);

  // smooth and slow down the animation by wrapping it with useSpring
  const x = useSpring(rawX, {
    stiffness: 50000, // zyada stiffness = tezi se movement
    damping: 1000,
    mass: 1,
  });

  // For seamless repeat, duplicate the text 3 times inside the scroll area
  const renderText = () => (
    <>
      <span className="mr-10 inline-block whitespace-nowrap">
        Solutions 
        {/* {data?.home_page_project_colest_section_heading_second}{" "}
        {data?.home_page_project_coles_section_heading_third} */}
      </span>
      <span className="mr-10 inline-block whitespace-nowrap">
        {/* {data?.home_page_project_colest_section_heading_first} */}
        We Provide
      </span>
    </>
  );

  return (
    <div
      ref={containerRef}
      className="tp-project-textline overflow-hidden whitespace-nowrap w-full py-10"
      style={{ position: "relative" }}
    >
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap text-[2rem] font-bold will-change-transform proj-text-sc"
      >
        {renderText()}
        {renderText()}
        {renderText()}
      </motion.div>
    </div>
  );
};

export default ProjectTextLine;
