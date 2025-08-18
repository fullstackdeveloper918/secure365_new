"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rocket } from "lucide-react";

interface NewsProps {
  id: number;
  title: string;
  date: string;
  content: string;
  external_link: string;
  featured_image: string;
  link: string;
}

export default function BlogOne() {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [newsLink, setNewsLink] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/news"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data.news);
        setNewsLink(data.link);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
        console.log("new changes")
      }
    };
    fetchBlogData();
  }, []);

  return (
    <>
      <section className="blog-main-new ">
        <div className="blog-container">
          {/* Blog Header with AOS */}
          <div className="blog-header p-0 blog-head-box" data-aos="fade-up">
            <h1 className="blog-home-head">Our Blog</h1>
            <p className="blog-home-para">
              Check the best marketing resources and the latest blogs about our company.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="blog-grid">
            {newsData.slice(0, 4).map((item, index) => (
              <article
                key={item.id}
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="blog-image">
                  <img src={item.featured_image} alt={item.title} />
                  <div className="blog-date">{item.date}</div>
                </div>
                <div className="blog-content">
                  <h2>{item.title}</h2>
                  <p>{item.content.slice(0, 150)}...</p>
                  <a href={item.external_link} className="read-more" target="_blank" rel="noopener noreferrer">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Read All Button */}
          {/* <div className="load-more" data-aos="fade-up" data-aos-delay="600">
            <button className="connect-btn">
              <a href="https://news.techable.com/" target="_blank" rel="noopener noreferrer">
                Read All Articles <i className="fas fa-arrow-right"></i>
              </a>
            </button>
          </div> */}

          <div className="cta-project-btn">
                      <button className="relative z-[99] bannerbtn mt-14 mx-auto flex items-center justify-center">
                        <Link className="header-button ajax-link" href="/contact-us">
                          <div className="button-icon-link right">
                            <div className="icon-wrap-scale">
                              <div className="icon-wrap parallax-wrap">
                                <div className="button-icon parallax-element">
                                  {/* <i className="fa-solid fa-arrow-right"></i> */}
                                  <Rocket className="ml-2 h-5 w-5" />
                                </div>
                              </div>
                            </div>
                            <div className="button-text sticky right">
                              {/* <span data-hover="Let's Talk">Start Your Mission <Rocket className="ml-2 h-5 w-5" /></span> */}
                              <span data-hover="Let's Talk">Read all article</span>
                            </div>
                          </div>
                        </Link>
                        {/* <Link
                                href="/contact-us"
                                id="btnTwo"
                                className="BtnTwo btnWrapper rounded-[50px] text-white px-6 py-3 flex items-center justify-center"
                              >
                                Start Your Mission <Rocket className="ml-2 h-5 w-5" />
                              </Link> */}
                      </button>
                    </div>
        </div>
      </section>
    </>
  );
}
