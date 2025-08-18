"use client"; // Client-side component

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrambleText from "./ScrambleText";
import { usePathname } from "next/navigation";
import { config } from "../../config";
// Typing Effect Component
const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text && index < text.length) {
      // Start typing the text one character at a time
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 100); // Typing speed (100ms per letter)

      return () => clearTimeout(timer);
    }
  }, [text, index]);

  return <span>{displayedText}</span>;
};

const AnimationHeader = () => {
  // const [hoveredText, setHoveredText] = useState(null);
  const [activeItem, setActiveItem] = useState(null); // Track the active menu item
  const [scrolled, setScrolled] = useState(false); // Track if the page has been scrolled
  const [active, setActive] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1025);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        console.log("data of home page", data);
        setServiceList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract the route name after the last '/'
  const routeName = pathname
    ? pathname.substring(pathname.lastIndexOf("/") + 1)
    : "";

  console.log(routeName, "currentRoute");

  const handleMouseEnter = (text) => {
    // setHoveredText(text); // Set the hovered text to show typing effect
  };

  const handleMouseLeave = () => {
    // setHoveredText(null); // Reset the hovered text when hover ends
  };

  const handleClick = (text) => {
    setActiveItem(text); // Set the clicked item as active
    setActive(false);
  };

  // Detect scroll and add/remove class based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change the threshold to your preference
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the menu items
  const menuItems = [
    // "Home",
    "About Us",
    "Our Services",
    "Why Choose Us",
    "Contact Us",
  ];

  const handleClickActive = (active) => {
    setActive(!active);
  };

  console.log(active, "active enhe");
  console.log(serviceList, "serviceList");
  return (
    <>
      {/* <div className="word"></div> */}

      <header
        className={`clapat-header classic-menu invert-header ${
          routeName == "about-us" ||
          routeName == "contact-us" ||
          routeName == ""
            ? ""
            : "scrolled"
        } ${scrolled ? "scrolled" : ""}`}
        data-menucolor="#0c0c0c"
      >
        <div className="header-gradient"></div>

        <div id="header-container">
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
            <nav
            className={
              active ? "clapat-nav-wrapper-show" : "clapat-nav-wrapper"
            }
          >
            <ul
              data-breakpoint="1025"
              className={active ? "flexnav flexnav-show" : "flexnav"}
            >
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`menu-timeline link header-link ${
                    activeItem === item ? "active" : ""
                  }`}
                  onMouseEnter={() => isDesktop && setHoveredItem(item)}
                  onMouseLeave={() => isDesktop && setHoveredItem(null)}
                >
                <Link
                    className="ajax-link"
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Why Choose Us"
                        ? "/why-choose" : item === "Free Audit"
                        ? "/analyzer" 
                         : item === "Our Services"
                        ? "/service"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    onClick={() => handleClick(item)}
                  >
                    {item}
                    <ScrambleText text={item} />
                  </Link>

                  {/* Show submenu on hover */}
                  {item === "Service" &&
                    isDesktop &&
                    hoveredItem === "Service" && (
                      <div className="sub-menu">
                        {serviceList?.home_page_service_section_loop_data?.map(
                          (service, index) => (
                            <Link
                              key={index}
                              href={`/service/${service.home_page_service_section_loop.substring(
                                service.home_page_service_section_loop.lastIndexOf(
                                  "/"
                                ) + 1
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
            </ul>
          </nav>
            <div className="lets-talk-btn-inner">
            <Link href="/contact-us" className="let-talk-btn"><img src="/Call-btn.svg" alt="call-icon" /><span>Let's Talk</span></Link>
          </div>
          </div>

          {/* <Link className="header-button ajax-link" href="/contact-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky right ">
                <span data-hover="Let's Talk">Let's Talk</span>
              </div>
            </div>
          </Link>

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
          </div> */}
        </div>
      </header>
    </>
  );
};

export default AnimationHeader;
