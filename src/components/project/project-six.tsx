import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSix({ data }: any) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1); // Default expanded item (second one)

  return (
    <section
      className="showcasePportfolio"
      onMouseLeave={() => setHoveredIndex(1)}
    >
      <div className="bg-[#fff]">
        <h2 className="main_heading font-bold pt-10 latest-project-head">
          {data?.featured_section_heading}
        </h2>
        <p className="project-subheading">
          Take a closer look at our recent work that speaks volumes about our
          capabilities and vision. These projects are a testament to our passion
          for building with purpose and precision.
        </p>

        <div className="showcase-portfolio expand-grid filp-grid flip-completed">
          {data?.home_page_featured_section_data?.map(
            (project: any, index: number) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className={`clapat-item ${
                  hoveredIndex === index ? "expanded" : ""
                } ${index === 1 ? "default-expanded" : ""}`}
              >
                <div
                  className="slide-inner trigger-item"
                  data-centerline="OPEN"
                >
                  <div className="img-mask pixels-cover animated">
                    <Link
                      className="slide-link"
                      href={project.link || "/project"}
                    >
                      <div
                        className="flip-thumb-inner"
                        data-flip-id={`auto-${index + 1}`}
                      >
                        <div className="flip-thumb-effects">
                          <img
                            src={project.home_page_feature_project_image}
                            className="item-image grid__item-img"
                            alt={project.home_page_feature_project_name}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="slide-caption trigger-item-link-secondary">
                    <div className="slide-title">
                      <span data-text={project.home_page_feature_project_name}>
                        {project.home_page_feature_project_name}
                      </span>
                    </div>
                    <div className="slide-date">
                      <span>{project.home_page_feature_project_date}</span>
                    </div>
                    <div className="slide-cat">
                      <span data-text={project.description}>
                        {project.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="btn_sec flex gap-3 flex-wrap justify-center mt-0 mb-10">
          <Link href="/contact-us" className="Btnthree btnWrapper">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
