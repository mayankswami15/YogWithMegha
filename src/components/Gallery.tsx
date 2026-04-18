"use client";

import { useState, useEffect, useCallback } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "Screenshot 2026-04-18 043554.png",
  "Screenshot 2026-04-18 043714.png",
  "Screenshot 2026-04-18 043734.png",
  "Screenshot 2026-04-18 043811.png",
  "WhatsApp Image 2026-04-18 at 1.56.11 PM.jpeg",
  "WhatsApp Image 2026-04-18 at 1.57.45 PM.jpeg",
  "WhatsApp Image 2026-04-18 at 1.59.05 PM.jpeg",
  "WhatsApp Image 2026-04-18 at 2.11.45 PM.jpeg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((imgSrc, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="aspect-square bg-accent rounded-xl md:rounded-2xl overflow-hidden relative group block w-full text-left focus:outline-none focus:ring-4 focus:ring-primary/50"
            aria-label={`View image ${idx + 1} full size`}
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
              <Camera className="text-white" size={32} />
            </div>
            <img
              src={`/gallery/${imgSrc}`}
              alt={`Megha Swami yoga pose ${idx + 1}`}
              loading="lazy"
              className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                idx === 7 ? "object-bottom" : "object-center"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/_yogwithme_gha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
        >
          <Camera size={20} /> Follow me on Instagram
        </a>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full z-20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/50 p-3 rounded-full z-20"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <img
            // Add key to force re-render/animation on source change
            key={images[selectedIndex]}
            src={`/gallery/${images[selectedIndex]}`}
            alt={`Expanded yoga pose ${selectedIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 relative z-10"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          />

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/50 p-3 rounded-full z-20"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}
