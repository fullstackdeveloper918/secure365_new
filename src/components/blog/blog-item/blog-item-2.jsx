import React from "react";
import Image from "next/image";

import Link from "next/link";

export default function BlogItemTwo({ item }) {
  
  return (
    <div className="tp-blog-item tp_fade_bottom w-full">
      <Link href={item.external_link}>
        <div className="tp-blog-thumb fix p-relative blog-image mb-0">
          <Image
            width={500}
            height={500}
            src={item?.featured_image}
            alt="blog-img"
            className="w-full object-cover"
          />
          {/* <div className="tp-blog-meta"> */}
            <span className="blog-date">
              {new Date(item.date)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short", // "Feb"
                  year: "numeric",
                })
                .replace(" ", ".")
                .replace(",", ".")}
            </span>
          {/* </div> */}
        </div>
      </Link>
      <div className="tp-blog-content blog-content">
        <div className="b-cont-box">
          <h6 className="">{item.title}</h6>
          <p className="text-gray-700 mt-2 line-clamp-2 text-sm">
            {item.content}
          </p>
        </div>
        <Link
          href={item.external_link}
          // target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 textBlue font-medium read-more"
        >
          Read More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}