"use client";
import React from "react";
import Image from "next/image";

import scrool1 from "../../../public/images/image-1.png";
import scrool2 from "../../../public/images/image-2.png";
import scrool3 from "../../../public/images/image-1.png";
import scrool4 from "../../../public/images/image-2.png";

const AutoScrollSection: React.FC = () => {
  const images = [scrool1, scrool2, scrool3, scrool4];
  const loopImages = [...images, ...images];

  return (
    <section
      className="pt-32 overflow-hidden"
      aria-label="Auto scrolling image showcase"
    >
      <div className="flex w-max animate-scroll gap-4">
        {loopImages.map((img, idx) => (
          <div
            key={idx}
            className="relative w-[735px] h-[470px] flex-shrink-0"
          >
            <Image
              src={img}
              alt={`Showcase image ${idx + 1}`}
              fill
              className="rounded-lg object-cover"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 735px"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AutoScrollSection;
