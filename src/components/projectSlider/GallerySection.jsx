import React from 'react';

const images = [
  '/action-work1.jpg', // Developer on laptop
  '/Code-editor-closeup.jpg', // Code editor closeup
  '/Admin dashboard.jpg', // Admin dashboard
  '/Wireframe-sketch.jpg', // Wireframe sketch
  'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80', // Web designer workspace
  '/Security-lock.jpg', // Security lock on screen
];



const GallerySection = () => (
  <section className="gallery-sec">
    <h2 className="font-semibold text-center text-gray-800 relative">
      Our Work in Action
    </h2>
    <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-all"
        >
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default GallerySection;
