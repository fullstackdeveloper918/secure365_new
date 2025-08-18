import React from "react";

const logos = [
  "/brand-1.png",
  "/brand-2.png",
  "/brand-3.png",
  "/brand-4.png",
  "/brand-5.png",
  "/brand-6.png",
  "/brand-7.png",
  "/brand-8.png"
];

const BrandLogos = () => {
  return (
    <section className="logo-brand-service bg-black">
    <div className="container">
    <div className="serv-logo-outerBox">  
      {logos.map((logo, index) => (
        <div className="serv-img-box" key={index}>
          <img src={logo} alt={`Brand ${index + 1}`} />
        </div>
      ))}
      </div>
    </div>
    </section>
  );
};

export default BrandLogos;
