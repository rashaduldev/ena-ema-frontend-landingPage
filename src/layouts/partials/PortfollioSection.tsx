"use client";
import React from "react";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

interface Portfolio {
  image: string;
  title: string;
  points: string[];
}

const portfolio: Portfolio[] = [
  {
    image: "/images/slide4.png",
    title: "Flowpilot",
    points: [
      "20% higher conversion than average in first week",
      "Clean and modern design with clear CTA",
    ],
  },
  {
    image: "/images/slide1.png",
    title: "Fintrack",
    points: [
      "User engagement increased by 30%",
      "Easy onboarding and intuitive layout",
    ],
  },
  {
    image: "/images/slide3.png",
    title: "Shopwise",
    points: [
      "Reduced bounce rate by 25%",
      "Visually appealing and responsive design",
    ],
  },
  {
    image: "/images/slide4.png",
    title: "Shopwise",
    points: [
      "Reduced bounce rate by 25%",
      "Visually appealing and responsive design",
    ],
  },
  {
    image: "/images/slide3.png",
    title: "Shopwise",
    points: [
      "Reduced bounce rate by 25%",
      "Visually appealing and responsive design",
    ],
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="py-20 bg-black" aria-labelledby="portfolio-heading">
      <div className="mx-auto px-4">
        <header data-aos="fade-up"
      data-aos-duration="1000" className="text-center mb-12">
          <h2
            id="portfolio-heading"
            className="text-4xl font-bold mb-4 tracking-tight"
          >
            Case Studies
          </h2>
          <p className="text-gray-300">
            See the designs that delivered results
          </p>
        </header>

        {/* Desktop horizontal scroll */}
        <div data-aos="fade-up"
      data-aos-duration="1000" className="hidden md:block">
          <ScrollArea.Root className="w-full">
            <ScrollArea.Viewport className="w-full h-full overflow-x-auto">
              <ul className="flex gap-6">
                {portfolio.map((cs, idx) => (
                  <li
                    key={idx}
                    className="w-[583px] rounded-xl p-3 flex flex-col gap-4 bg-dark border border-border"
                  >
                    <figure className="relative rounded-lg overflow-hidden h-[250px] w-full md:h-[372px] md:w-[560px]">
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        className="object-cover"
                      />
                    </figure>
                    <div className="p-3 flex justify-between">
                      <h3 className="text-xl font-semibold">{cs.title}</h3>
                      <ul className="flex flex-col gap-2">
                        {cs.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <BsCheck2 className="text-primary" aria-hidden />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea.Viewport>

            {/* Hidden scrollbar */}
            <ScrollArea.Scrollbar orientation="horizontal" className="bg-transparent">
              <ScrollArea.Thumb className="bg-transparent" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>

        {/* Mobile stacked layout */}
        <div data-aos="fade-up"
      data-aos-duration="1000" className="md:hidden grid grid-cols-1 gap-6">
          {portfolio.map((cs, idx) => (
            <article
              key={idx}
              className="bg-dark rounded-xl shadow p-6 flex flex-col gap-4"
            >
              <figure className="relative h-[200px] w-full">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </figure>
              <h3 className="text-2xl font-bold">{cs.title}</h3>
              <ul className="flex flex-col gap-2">
                {cs.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs p-3 bg-red-500"
                  >
                    <BsCheck2 className="text-primary" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div data-aos="fade-up"
      data-aos-duration="1000" className="flex justify-center">
        <Link href="/" className="btn btn-primary w-fit mt-10 flex items-center gap-2">
          I want similar results
          <IoArrowForwardOutline />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;