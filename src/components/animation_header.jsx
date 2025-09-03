"use client"; // Client-side component

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrambleText from "./ScrambleText";
import { usePathname } from "next/navigation";
import { config } from "../../config";
import { ChevronDown } from "lucide-react"; // 👈 import added

// Typing Effect Component
const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [text, index]);

  return <span>{displayedText}</span>;
};

const AnimationHeader = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [homePage, setHomePage] = useState(false);
  const [active, setActive] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // 👈 for mobile/tablet submenu

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    const checkSectionColor = () => {
      const section = document.querySelector(".white-section");
      if (!section) return setIsLightSection(false);

      const bgColor = window.getComputedStyle(section).backgroundColor;
      if (bgColor === "rgb(255, 255, 255)" || bgColor === "#fff") {
        setIsLightSection(true);
      } else {
        setIsLightSection(false);
      }
    };

    checkSectionColor();
    window.addEventListener("scroll", checkSectionColor);
    window.addEventListener("resize", checkSectionColor);

    return () => {
      window.removeEventListener("scroll", checkSectionColor);
      window.removeEventListener("resize", checkSectionColor);
    };
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setIsDesktop(true);
        setIsSubmenuOpen(false); // 👈 close mobile submenu when desktop
      } else {
        setIsDesktop(false);
        setIsSubmenuOpen(false); // 👈 also reset when mobile
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktop, setIsSubmenuOpen]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${config.APP_URL}/secure-plugin/v1/home`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setServiceList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (text) => {
    setActiveItem(text);
    setActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setHomePage(true);
      } else {
        setScrolled(false);
        setHomePage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = ["About Us", "Our Services", "Our Projects", "Why Choose Us", "Contact Us"];

  const isHomePage = pathname === "/";

  // console.log("isSubmenuOpen", isSubmenuOpen); // 👈 for debugging

  return (
    <>
      <header
        className={`clapat-header classic-menu invert-header ${!isHomePage && scrolled ? "scrolled" : homePage ? "backdrop-blur-md" : ""
          }`}
        data-menucolor="#0c0c0c"
      >
        <div className="header-gradient"></div>

        <div id="header-container">
          {/* Logo */}
          <div id="clapat-logo" className="hide-ball">
            <Link className="ajax-link" href="/">
              <Image
                className="black-logo"
                src="/images/secure365-logo-black.png"
                alt="ClaPat Logo"
                width={210}
                height={21}
              />
              <Image
                className="white-logo"
                src="/images/secure365-logo.png"
                alt="ClaPat Logo"
                width={210}
                height={21}
              />
            </Link>
          </div>

          <div className="menu-link-call-action">
            <nav className={active ? "clapat-nav-wrapper-show" : "clapat-nav-wrapper"}>
              <ul
                data-breakpoint="1025"
                className={active ? "flexnav flexnav-show" : "flexnav"}
              >
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`menu-timeline link header-link ${activeItem === item ? "active text-[#01b0ec]" : "text-white"
                      }`}
                    onMouseEnter={() => isDesktop && setHoveredItem(item)}
                    onMouseLeave={() => isDesktop && setHoveredItem(null)}
                  >
                    <div className="flex items-center menuMobile">
                      <Link
                        className="ajax-link"
                        href={
                          item === "Home"
                            ? "/"
                            : item === "Why Choose Us"
                              ? "/why-choose"
                              : item === "Free Audit"
                                ? "/analyzer"
                                : item === "Our Projects"
                                  ? "/project"
                                  // : item === "Web Analyzer"
                                  //   ? "/web-analyzer"
                                  : item === "Our Services"
                                    ? "/service"
                                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                        }
                        onClick={() => handleClick(item)}
                      >
                        {item}
                        <ScrambleText text={item} />
                      </Link>

                      {/* 👇 ChevronDown button only for Our Services on mobile/tablet */}
                      {item === "Our Services" && (
                        <button
                          type="button"
                          className="ml-2"
                          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform text-white ${isSubmenuOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Submenu Desktop (hover) */}
                    {item === "Our Services" &&
                      isDesktop &&
                      hoveredItem === "Our Services" && (
                        <div className="sub-menu">
                          {serviceList?.home_page_service_section_loop_data?.map(
                            (service, index) => (
                              <Link
                                key={index}
                                href={`/service/${service.home_page_service_section_loop.substring(
                                  service.home_page_service_section_loop.lastIndexOf("/") + 1
                                )}`}
                              >
                                {
                                  service.home_page_service_section_loop.split(
                                    "/"
                                  )[0]
                                }
                              </Link>
                            )
                          )}
                        </div>
                      )}

                    {/* Submenu Mobile/Tablet (ChevronDown click) */}
                    {!isDesktop && item === "Our Services" && isSubmenuOpen && (
                      <div className="sub-menu">
                        {serviceList?.home_page_service_section_loop_data?.map(
                          (service, index) => (
                            <Link
                              key={index}
                              href={`/service/${service.home_page_service_section_loop.substring(
                                service.home_page_service_section_loop.lastIndexOf("/") + 1
                              )}`}
                            >
                              {
                                service.home_page_service_section_loop.split(
                                  "/"
                                )[0]
                              }
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </li>
                ))}

                {!isDesktop && (
                  <li className="lets-talk-btn-inner">
                    <Link href="/contact-us" className="let-talk-btn">
                      <img src="/Call-btn.svg" alt="call-icon" />
                      <span>Let's Talk</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            {isDesktop && (
              <div className="lets-talk-btn-inner">
                <Link href="/contact-us" className="let-talk-btn">
                  <img src="/Call-btn.svg" alt="call-icon" />
                  <span>Let's Talk</span>
                </Link>
              </div>
            )}
          </div>

          {/* Burger Menu */}
          <div className="button-wrap right menu burger-lines d-none mobile-menu">
            <div
              className="icon-wrap parallax-wrap"
              onClick={() => setActive((prev) => !prev)}
            >
              <div className="button-icon parallax-element">
                <div className="sticky right"></div>
                <div id="burger-wrapper">
                  {active ? (
                    // Close Icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line
                        x1="4"
                        y1="4"
                        x2="20"
                        y2="20"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <line
                        x1="20"
                        y1="4"
                        x2="4"
                        y2="20"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  ) : (
                    // Burger Icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="6" width="18" height="2" fill="white" />
                      <rect x="3" y="11" width="18" height="2" fill="white" />
                      <rect x="3" y="16" width="18" height="2" fill="white" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AnimationHeader;