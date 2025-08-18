import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CtaSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const stars = [];
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.2 + 0.1,
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    const updateStars = () => {
      stars.forEach(star => {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
        }
      });
    };

    const animate = () => {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="cta-wrapper" style={{ position: 'relative', padding: '40px 0 80px 0' }}>
      <style>{`
        #starfield {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .cta-container {
          position: relative;
          width: 1340px;
          max-width: 95vw;
          height: 440px;
          border: 4px solid #00adef;
          border-radius: 60px;
          display: flex;
          align-items: center;
          padding: 0 60px;
          margin: 0 auto;
          box-sizing: border-box;
          background: rgb(185 189 214 / 19%);
        }
        .content-left {
          z-index: 2;
          max-width: 50%;
        }
        .cta-heading {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 15px 0;
        }
        .highlight {
          font-weight: 900;
          display: block;
          color: #00adef;
        }
        .cta-subheading {
          font-size: 1.2rem;
          color: #565656;
          max-width: 450px;
        }
        .book-call-btn {
          position: absolute;
          left: 42%;
          top: 48%;
          width: 200px;
          height: 200px;
          background-color: #00adef;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          z-index: 3;
          transition: transform 0.5s ease;
          transform: translate(-50%, -50%) rotate(-10deg);
        }
        .book-call-btn:hover {
          transform: translate(-50%, -50%) rotate(-10deg) scale(1.1);
        }
        .book-call-btn:hover {
          transform: rotate(-10deg) !important;
        //   transform: translatex(10px) !important;
        }
        .btn-text {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;
          text-align: center;
        }
        .call-text {
          font-size: 2.5rem;
          font-weight: 900;
          display: block;
        }
        .rocket-icon {
          width: 35px;
          height: 35px;
          margin-top: 8px;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        // .book-call-btn:hover .rocket-icon {
        //   transform: translateY(-15px) rotate(45deg);
        // }
        .person-image {
          position: absolute;
          right: -20px;
          bottom: -60px;
          width: 530px;
          height: auto;
          z-index: 2;
        }
        @media (max-width: 1200px) {
          .cta-container {
            flex-direction: column;
            height: auto;
            padding: 40px;
            text-align: center;
          }
          .content-left {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .person-image {
            position: relative;
            right: auto;
            bottom: -4px;
            width: 80%;
            margin-top: 40px;
          }
          .book-call-btn {
            position: relative;
            left: auto;
            top: auto;
            transform: rotate(-10deg);
            margin: 30px 0;
            width: 180px;
            height: 180px;
          }
          .cta-heading {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <canvas id="starfield" ref={canvasRef}></canvas>

      <div className="cta-container">

        <div className="content-left" data-aos="fade-right">
          <h1 className="cta-heading">
            Wanna A Free <span className="highlight">WEBSITE AUDIT?</span>
          </h1>
          <p className="cta-subheading" data-aos-delay="200">
            Or a GTM Design Plan? Hop on a 30-min call to unlock the potential of your business.
          </p>
        </div>

        <div className="book-call-btn" data-aos="zoom-in" data-aos-delay="400">
          <div className="btn-text">
            BOOK FREE <span className="call-text">CALL</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rocket-icon"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </div>

        <img
          src="/chat-bot.png"
          alt="Robot signpost"
          className="person-image"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default CtaSection;
