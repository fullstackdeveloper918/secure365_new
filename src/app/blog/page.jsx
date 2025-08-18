"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import BlogOne from "@/components/blog/blog-one copy";
import Wrapper from "@/layouts/wrapper";

const Blog = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      <div className="awardsSec blog-main-new">
        <BlogOne />
      </div>

    </Wrapper>
  );
};

export default Blog;
