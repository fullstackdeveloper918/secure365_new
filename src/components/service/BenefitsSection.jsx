"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initialCards = [
  {
    id: "rad",
    number: "01",
    title: "RAD",
    subtitle: "Radiotherapy",
    description:
      "Proprietary shielding for linear accelerators, ensuring optimal safety and flexibility.",
    image: "/images/projects/kouch00.jpg?height=150&width=200",
    ctaText: "Explore RAD Vault",
    bgColor: "bg-white",
  },
  {
    id: "vault",
    number: "02",
    title: "Vault",
    subtitle: "Radiotherapy",
    description:
      "Complete radiation therapy center includes RAD Vaults and clinic space customized to your program requirements.",
    image: "/images/projects/kouch00.jpg?height=150&width=200",
    ctaText: "Explore RAD Center",
    bgColor: "bg-gray-200",
  },
  {
    id: "center",
    number: "03",
    title: "Center",
    subtitle: "Radiotherapy",
    description:
      "RAD Temp is a self-contained radiotherapy facility for lease, crafted to integrate with your current department.",
    image: "/images/projects/kouch00.jpg?height=150&width=200",
    ctaText: "Explore RAD Temp",
    bgColor: "bg-gray-500",
  },
  {
    id: "mmf",
    number: "04",
    title: "MMF",
    subtitle: "Specialty",
    description:
      "Flexible design for diverse medical applications, ensuring adaptability and efficiency in specialized healthcare.",
    image: "/images/projects/kouch00.jpg?height=150&width=200",
    ctaText: "Explore Specialty",
    bgColor: "bg-black",
  },
];

export default function CardGallery() {
  const [cards, setCards] = useState(initialCards);
  const cardRefs = useRef({});

  useEffect(() => {
    // Animate card positions when `cards` order changes
    cards.forEach((card, index) => {
      const el = cardRefs.current[card.id];
      if (el) {
        gsap.to(el, {
          x: index * 100, // 100px or percentage spacing
          scale: index === 0 ? 1.05 : 1,
          zIndex: 40 - index * 10,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });
  }, [cards]);

  const handleCardClick = (clickedId) => {
    setCards((prevCards) => {
      const cardIndex = prevCards.findIndex((card) => card.id === clickedId);
      if (cardIndex === 0) return prevCards;
      const newCards = [...prevCards];
      const [clickedCard] = newCards.splice(cardIndex, 1);
      return [clickedCard, ...newCards];
    });
  };

  return (
    <section className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-gray-600 uppercase tracking-wider">
            Products Suite
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-8">
            Built to grow with <br /> your facility's needs
          </h1>
        </div>

        {/* Relative wrapper for absolute-positioned cards */}
        <div className="relative">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[card.id] = el)}
              onClick={() => handleCardClick(card.id)}
              className={cn(
                "absolute border transition-all duration-500 ease-in-out transform cursor-pointer rounded-lg overflow-hidden",
                card.bgColor === "bg-white"
                  ? "text-black border"
                  : card.bgColor === "bg-black"
                    ? "text-white"
                    : card.bgColor === "bg-gray-500"
                      ? "text-white"
                      : "text-black"
              )}
              style={{
                left: 0,
                top: 0,
                // width: "500px",
              }}
            >
              <div
                className={cn(
                  "p-6 h-full w-[500px] flex flex-col",
                  card.bgColor
                )}
              >
                <div className="text-xs opacity-70 mb-2">{card.number}</div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="text-sm opacity-80">{card.subtitle}</p>
                </div>

                <div className="flex-grow my-6">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <p className="text-sm mb-6">{card.description}</p>

                <div className="mt-auto">
                  <button className="flex items-center text-sm font-medium group">
                    {card.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-12">
          <button className="flex items-center text-sm font-medium group">
            Explore All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
