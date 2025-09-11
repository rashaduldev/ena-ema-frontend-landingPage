"use client";
import React from "react";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

interface Portfollio {
  image: string;
  title: string;
  points: string[];
}

const portfollio: Portfollio[] = [
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

const PortfollioSection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Case Studies</h2>
        <p className="text-center mb-12">See the designs that delivered results</p>

        {/* Desktop horizontal scroll using Radix ScrollArea */}
        <div className="hidden md:block">
          <ScrollArea.Root className="w-full">
            <ScrollArea.Viewport className="w-full h-full overflow-x-auto">
              <div className="flex gap-6">
                {portfollio.map((cs, idx) => (
                  <div
                    key={idx}
                    className="w-[583px] border-border rounded-xl p-3 flex flex-col gap-4 bg-dark"
                  >
                   <div className="relative rounded-lg overflow-hidden h-[250px] w-full md:h-[372px] md:w-[560px]">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                    <div className="p-3 flex justify-between">
                      <h3 className="text-xl font-semibold">{cs.title}</h3>
                    <div className="flex flex-col gap-2">
                      {cs.points.map((point, i) => (
                        <p key={i} className="flex items-center gap-2 text-gray-600">
                          <BsCheck2 className="text-primary" /> {point}
                        </p>
                      ))}
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea.Viewport>

            {/* Hidden scrollbar */}
            <ScrollArea.Scrollbar orientation="horizontal" className="bg-transparent">
              <ScrollArea.Thumb className="bg-transparent" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>

        {/* Mobile stacked layout */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {portfollio.map((cs, idx) => (
            <div
              key={idx}
              className="bg-dark rounded-xl shadow p-6 flex flex-col gap-4"
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">{cs.title}</h3>
              <div className="flex flex-col gap-2">
                {cs.points.map((point, i) => (
                  <p key={i} className="flex items-center gap-2 bg-red-500 text-xs p-3">
                    <BsCheck2 className="text-primary" /> {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
          <Link
            href="/"
            className="btn btn-primary w-fit mx-auto mt-10"
          >I want similar results
            <IoArrowForwardOutline />
          </Link>
    </section>
  );
};

export default PortfollioSection;