"use client";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);



// Scramble text function
const scrambleText = (element, finalText, duration = 1.5) => {
  if (!element) return;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const intervalMs = 40;
  const totalFrames = Math.ceil((duration * 1000) / intervalMs);
  let frame = 0;

  element.textContent = ""; // start empty

  const intervalId = setInterval(() => {
    const progress = frame / totalFrames;
    const revealCount = Math.floor(progress * finalText.length);

    element.textContent = finalText
      .split("")
      .map((ch, i) => (i < revealCount ? finalText[i] : chars[Math.floor(Math.random() * chars.length)]))
      .join("");

    frame++;
    if (frame >= totalFrames) {
      element.textContent = finalText;
      clearInterval(intervalId);
    }
  }, intervalMs);

  return intervalId;
};

const TechableProject = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const intervalsRef = useRef([]);

  const imageSectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Scramble text on banner when it enters viewport
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        if (titleRef.current) {
          const id = scrambleText(titleRef.current, "Sellmac Project", 1.5);
          if (id) intervalsRef.current.push(id);
        }
        if (spanRef.current) {
          const id = scrambleText(
            spanRef.current,
            "The Easiest Way to Sell Your MacBook Air",
            2
          );
          if (id) intervalsRef.current.push(id);
        }
      },
      once: true,
    });

    // Image scale animation on scroll
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageSectionRef.current,
        start: "top bottom", // when image enters viewport
        end: "bottom top", // when image leaves viewport
        scrub: true,
      },
      width: "100vw",
      duration: 1,
      ease: "power2.inOut",
    });

    // Cleanup intervals
    return () => {
      intervalsRef.current.forEach((id) => clearInterval(id));
      intervalsRef.current = [];
    };
  }, []);

  

  return (
    
    <>
    
 <style>{`
        h2, h3 {
          color: #00AEEF;
        }
        .card-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 8px;
        }
        .container{
          max-width: 1440px;
          margin: auto;
        }
        .single-project-section{
          padding: 100px 0 40px;
        }
        .cont-first-para{
          max-width: 90%;
          font-size: 20px;
        }
        .about-single-Projimg img{
          width: 70%;
          margin: auto;
        }
        .about-single-projectCont h2{
          font-size: 40px;
        }
        .single-project-banner h1{
          font-size: 64px;
        }
        .smain-subhead{
          font-size: 24px;
        }
        .about-ch-head{
          font-size: 20px;
        }
        @media (max-width: 768px){
          .about-single-Projimg img{
            width: 100%;
          }
          .single-project-banner h1{
            font-size: 40px;
          }
          .smain-subhead{
            font-size: 18px;
          }
          .about-single-projectCont h2{
            font-size: 28px;
          }
        }
      `}</style>
      {/* Banner with scramble text */}
      <div
        ref={sectionRef}
        className="h-screen flex flex-col justify-center items-center text-center bg-[#3eaced] px-4"
      >
        <h1 ref={titleRef} className="text-8xl font-bold mb-4 text-white"></h1>
        <span ref={spanRef} className="text-3xl"></span>
      </div>

      {/* Image Section */}
      <div
        ref={imageSectionRef}
        className="flex justify-center items-center bg-white min-h-screen"
      >
        <img
          ref={imageRef}
          src="/images/projects/sellamc01banner.png"
          alt="techable slide"
          className="object-contain transition-all duration-300 ease-in-out"
          style={{ width: "50vw" }}
          width={2000}
        />
      </div>

      {/* Following Section */}
      <div className="text-white pt-8 pb-12 w-full bg-[#3eaced] textAnimation">
        <p className="mt-20 text-5xl text-white font-bold text-center px-20 max-w-[50rem]">
          SELL YOUR MAC EASILY WITH SELLMAC FOR THE MOST CASH
        </p>
        <div className="overflow-hidden relative h-[800px] mt-12 flex justify-center items-center rounded-2xl">
          <img
            src="/images/projects/sellamc01.png"
            alt="techable slide"
            className="object-contain transition-all duration-300 ease-in-out w-[60%] h-screen rounded-2xl"
          />
        </div>
      </div>
      <section className="single-project-section bg-cover bg-center" data-aos="fade-up">
        <div className="container">
          <div className="single-project-banner text-center">
            <h1 className="text-5xl font-bold mb-4">SellMac</h1>
            <p className="mb-4 smain-subhead">
              Secure, Fast, and Efficient Apple Device Reselling
            </p>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Secure365 partnered with SellMac to enhance platform security, optimize payments, and ensure user trust.
            </p>
          </div>
          <img
            src="Sellmac-Banner-image.png"
            alt="SellMac Dashboard"
            className="mx-auto rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
      </section>

      {/* About Project */}
      <section className="py-16 px-6" data-aos="fade-up">
        <div className="container">
          <div className="about-proj-wrapper flex flex-col md:flex-row items-center gap-5">
            <div className="about-single-projectCont">
              <h2 className="text-3xl font-semibold mb-4">About SellMac</h2>
              <p className="text-gray-300 mb-4 cont-first-para">
                SellMac is a platform for buying and selling used Apple devices, ensuring competitive pricing and environmental responsibility.
              </p>
              <p className="text-white mb-4 about-ch-head">
                Challenges faced before Secure365:
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Handling secure user data</li>
                <li>Fast payment processing</li>
                <li>Scaling operations safely</li>
              </ul>
            </div>
            <div className="about-single-Projimg mt-6 md:mt-0">
              <img src="About-Sellmac-image.png" alt="Devices" className="rounded-lg shadow-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Secure365 Contribution */}
      <section className="py-16 px-6 bg-gray-900" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">How Secure365 Helped</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Secure Data Handling",
              desc: "End-to-end encryption and GDPR-compliant storage for user data safety.",
              icon: "https://via.placeholder.com/40",
            },
            {
              title: "Fast Payments",
              desc: "Optimized payment gateways for PayPal, check, and gift cards.",
              icon: "https://via.placeholder.com/40",
              delay: 100,
            },
            {
              title: "System Reliability",
              desc: "Real-time monitoring to avoid downtime and ensure smooth operations.",
              icon: "https://via.placeholder.com/40",
              delay: 200,
            },
            {
              title: "Compliance & Trust",
              desc: "Ensured all operations met industry security standards.",
              icon: "https://via.placeholder.com/40",
              delay: 300,
            },
            {
              title: "Scalability",
              desc: "Supported growing traffic and device intake securely.",
              icon: "https://via.placeholder.com/40",
              delay: 400,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow text-center"
              data-aos="fade-up"
              data-aos-delay={item.delay || 0}
            >
              <img src={item.icon} className="card-icon mx-auto" alt={item.title} />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Instant Online Quotes",
              desc: "Users get accurate device pricing instantly, improving user experience.",
            },
            {
              title: "Secure Data Handling",
              desc: "Personal info wiped safely before devices are resold.",
              delay: 100,
            },
            {
              title: "Fast & Reliable Payments",
              desc: "Multiple payment methods supported and processed quickly.",
              delay: 200,
            },
            {
              title: "Wide Device Coverage",
              desc: "Supports MacBook, iPad, iPhone, iMac, Mac Mini, and Apple Watch.",
              delay: 300,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow"
              data-aos="fade-up"
              data-aos-delay={feature.delay || 0}
            >
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 px-6 bg-gray-900" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Before & After / Impact</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-lg shadow" data-aos="fade-up">
            <h3 className="font-bold mb-2">Before Secure365</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Manual data handling</li>
              <li>Slow payment processing</li>
              <li>Security concerns</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="font-bold mb-2">After Secure365</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Automated secure workflows</li>
              <li>Instant payment processing</li>
              <li>Enhanced user trust & compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 italic mb-4">
            “Secure365’s solutions allowed us to focus on growing our business while keeping our users’ data safe and payments fast.”
          </p>
          <p className="text-gray-500 font-semibold">– SellMac CEO</p>
          <img
            src="https://via.placeholder.com/600x200"
            alt="Client Screenshot"
            className="mx-auto mt-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={200}
          />
        </div>
      </section>

      {/* Technology & Tools */}
      <section className="py-16 px-6 bg-gray-900" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Technology & Tools Used</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Secure365 Platform",
              desc: "Encryption, Data Security, Payment APIs",
              icon: "https://via.placeholder.com/40",
            },
            {
              title: "SellMac Backend",
              desc: "Shopify, Custom APIs, Device Management",
              icon: "https://via.placeholder.com/40",
              delay: 100,
            },
            {
              title: "Infrastructure",
              desc: "Cloud Hosting, Monitoring, Scalable Systems",
              icon: "https://via.placeholder.com/40",
              delay: 200,
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-lg shadow"
              data-aos="fade-up"
              data-aos-delay={tool.delay || 0}
            >
              <img src={tool.icon} className="card-icon mx-auto" alt={tool.title} />
              <h3 className="font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-300">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-4">Explore More</h2>
        <p className="text-gray-300 mb-6">Visit SellMac or learn about Secure365 solutions</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://sellmac.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:bg-blue-500"
          >
            Visit SellMac
          </a>
          <a
            href="/solutions"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600"
          >
            Learn About Secure365
          </a>
        </div>
      </section>
    </>
  );
};

export default TechableProject;
