import React, { useEffect, useRef } from 'react';

const StarfieldHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, stars;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random() * 360,
        v: Math.random() * 0.2 + 0.05,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#FFFFFF';
      stars.forEach((s) => {
        s.x += Math.cos(s.a) * s.v;
        s.y += Math.sin(s.a) * s.v;
        if (s.x < 0 || s.x > w || s.y < 0 || s.y > h) {
          s.x = Math.random() * w;
          s.y = Math.random() * h;
        }
        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center text-center px-6 text-gray-200 antialiased tracking-wide" style={{ background: 'radial-gradient(#0D0B2E 0%, #050113 70%)' }}>
      <canvas
        id="starfield"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>
      {/* Add content here if needed */}
    </header>
  );
};

export default StarfieldHero;
