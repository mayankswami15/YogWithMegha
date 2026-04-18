"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const frameCount = 108;
const currentFrame = (index: number) =>
  `/assets/sequence/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

export default function BackgroundAnimator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();

    const images: HTMLImageElement[] = [];
    const airpods = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    function render() {
      if (!canvas || !images[airpods.frame]) return;
      
      const img = images[airpods.frame];
      if (!img.complete) return; // avoid drawing before image is loaded

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const scaledWidth = img.width * ratio;
      const scaledHeight = img.height * ratio;
      
      // Focus the crop on the girl based on screen size
      // Girl is at ~65% from left of the original image
      const isSmall = canvas.width < 768;
      const isTablet = canvas.width >= 768 && canvas.width < 1024;
      let centerShift_x: number;
      if (isSmall) {
        // Mobile: center directly on the girl
        const focusInScaled = 0.65 * scaledWidth;
        centerShift_x = (canvas.width / 2) - focusInScaled;
      } else if (isTablet) {
        // Tablet: slight shift to keep girl visible
        const focusInScaled = 0.55 * scaledWidth;
        centerShift_x = (canvas.width / 2) - focusInScaled;
      } else {
        // Desktop: standard center crop
        centerShift_x = (canvas.width - scaledWidth) / 2;
      }
      const centerShift_y = (canvas.height - scaledHeight) / 2;
      
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        scaledWidth,
        scaledHeight
      );
    }

    images[0].onload = render;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-sequence-container",
        start: "top top",
        end: "+=1300", 
        scrub: 0.5, 
      },
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        // If image not loaded, wait for it
        if (!images[airpods.frame].complete) {
            images[airpods.frame].onload = render;
        } else {
            render();
        }
      },
    });

    const handleResize = () => {
      setCanvasSize();
      render();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full object-cover"></canvas>
    </div>
  );
}
