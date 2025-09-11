"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import scrool1 from "../../../public/images/image-1.png";
import scrool2 from "../../../public/images/image-2.png";
import scrool3 from "../../../public/images/image-1.png";
import scrool4 from "../../../public/images/image-2.png";

const AutoScrollSection: React.FC = () => {
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
      const { rel } = slider.current.track.details;
      slider.current.moveToIdx(rel + 0.01); // smooth incremental movement
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [slider]);

  const images = [scrool1, scrool2, scrool3, scrool4];

  return (
    <section data-aos="fade-up"
      data-aos-duration="1000" className="pt-32" aria-label="Auto scrolling image showcase">
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, idx) => (
          <figure
            key={idx}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="relative h-[470px] w-full">
              <Image
                src={img}
                alt={`Showcase image ${idx + 1}`}
                fill
                className="rounded-lg object-cover"
                priority={idx === 0} // first image loads fast
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default AutoScrollSection;