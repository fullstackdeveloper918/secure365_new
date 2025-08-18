"use client";
import "./CardStack.css";

const cardsData = [
  { id: "card-1", title: "AI‑Powered Services", image: "/images/astronaut-video.mp4", content : "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget." },
  { id: "card-2", title: "App Development", image: "/images/012hero.jpg", content : "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget." },
  { id: "card-3", title: "Site Design & UX", image: "/images/013hero.jpg", content : "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget." },
  { id: "card-4", title: "Cybersecurity & Compliance", image: "/images/016hero.jpg", content : "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget." },
  { id: "card-5", title: "Growth Marketing", image: "/images/015hero.jpg", content : "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget." },
];

export default function CardStack() {
  return (
    <section className="card-stack-container">
      <div className="maincontent">
      <h2 className="stack-title">OUR 6-STAGE AI SERVICE DELIVERY PROCESS</h2>
      <p className="arrowDown">(↓)</p>
      </div>

      <ul className="cards">
        {cardsData.map((card) => (
          <li key={card.id} className="card">
            <div className="counting">(01)</div>
            <div className="card-inner">
              <h2>{card.title}</h2>
              <img src={card.image} alt={card.title} />
              <p>{card.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
