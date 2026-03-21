"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/profile1.jpg",
  "/images/profile4.jpg",
  "/images/profile5.jpg",
  "/images/profile6.jpg",
  "/images/profile7.jpg",
  "/images/profile8.jpg",
  "/images/profile9.jpg",
];

export default function HeroImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative col-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <Image
        src={images[currentIndex]}
        alt={`Profile ${currentIndex + 1}`}
        width={900}
        height={700}
        className="w-full h-[420px] object-cover transition duration-300"
        priority
      />

      {/* Left arrow */}
      <button
        onClick={prevImage}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center border border-white/20 transition"
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center border border-white/20 transition"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              currentIndex === index ? "bg-cyan-300" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}