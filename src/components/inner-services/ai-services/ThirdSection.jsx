"use client";
import React, { useEffect } from "react";
import { UilCheck } from "@iconscout/react-unicons";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const PricingCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 150,
    });
  }, []);


  const Pricing_Tier =
  {
    title: "Plans That Power Every Stage of Growth",
    intro: "All plans include Automated Workflows, Secure Infrastructure, and Daily AI Enhancements.",
    PricingTier: [
      {
        price: "0",
        label: "Free plan",
        title: "Basic",
        icon: "/assets/img/inner-service/service/Basic-plan-icon-main.png",
        features: [
          "3 user request",
          "10 downloads per day",
          "Daily content updates",
          "Fully editable files",
        ],
      },
      {
        price: "19",
        label: "Most popular",
        title: "Professional",
        icon: "/assets/img/inner-service/service/Professional-icon.png",
        features: [
          "Best for SMBs — full feature access",
          "unlimited runs",
          "and priority support",

        ],
      },
      {
        price: "49",
        label: "For agencies",
        title: "Enterprise",
        icon: "/assets/img/inner-service/service/Enterprise-icon.png",
        features: [
          "Tailored AI workflows",
          "custom integrations",
          "and dedicated onboarding",
        ],
      },
    ]

  }

  return (
    <div className="relative pricing-card-sec">
      <h2
        className="price-top-head text-white text-center text-uppercase fw-semibold"
        data-aos="fade-up"
      >
        {/* Pricing tiers */}
        {Pricing_Tier.title}
      </h2>

      <section className="container relative mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-8 pricing-serv-tier">
        {Pricing_Tier?.PricingTier?.map((card, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col items-center text-center price-serv-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="card__pricing">
              <div className="card__pricing-number">
                <span className="card__pricing-symbol">$</span>
                {card.price}
              </div>
              <span className="card__pricing-month">/month</span>
            </div>

            <div className="price-wrap-content w-full h-full">
              <header className="card__header d-block w-100 text-start">
                <div className="mb-3 w-20 h-20 rounded-full grid place-items-center bg-gray-100">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-14 h-14"
                  />
                </div>
                <span className="block text-sm text-[#9ba6b0] font-medium mb-1 text-uppercase">
                  {card.label}
                </span>
                <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
              </header>

              <ul className="space-y-3 text-left w-full mx-0">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 mb-2">
                    <UilCheck className="text-green-500 text-xl" />
                    <p className="m-0 ms-2">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <button className="text-white px-6 py-3 rounded-pill transition w-full price-btn">
              Choose this plan
            </button> */}
            <Link href={"/contact-us"} className="text-white px-6 py-3 rounded-pill transition w-full price-btn">
              Choose this plan
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PricingCards;
