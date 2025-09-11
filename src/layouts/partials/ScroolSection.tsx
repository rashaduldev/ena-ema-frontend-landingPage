"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import scrool1 from "../../../public/images/image-1.png";
import scrool2 from "../../../public/images/image-2.png";
import scrool3 from "../../../public/images/image-1.png";
import scrool4 from "../../../public/images/image-2.png";

const AutoScrollSection = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
    drag: false,
  });

  useEffect(() => {
    if (!slider) return;
    let raf: number;

    const step = () => {
      if (!slider.current) return;

      // Get the current translate value
      const track = slider.current.track;
      // Move slider by a small fraction
      slider.current.moveToIdx(track.details.rel + 0.01); // incrementally move

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [slider]);

  const images = [scrool1, scrool2, scrool3, scrool4];

  return (
    <section className="pt-32">
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center">
            <div className="h-[470px] w-full relative">
              <Image
                src={img}
                alt={`scrool${idx + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoScrollSection;
