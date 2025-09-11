"use client";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaPalette } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LuRocket } from "react-icons/lu";
import { PiArrowsClockwise, PiLightning } from "react-icons/pi";

interface TrustCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: TrustCard[] = [
  {
    icon: <LuRocket className="text-primary w-8 h-8" />,
    title: "Proven Conversion Framework",
    description:
      "Designs based on 100+ tested layouts that actually convert visitors into customers.",
  },
  {
    icon: <FaPalette className="text-primary w-8 h-8" />,
    title: "Agency-Level Design",
    description:
      "Modern, premium, and tailored for your brand - without the agency price tag.",
  },
  {
    icon: <PiLightning className="text-primary w-8 h-8" />,
    title: "5-day Guaranteed Delivery",
    description:
      "With a highly professional team, we deliver on time, everytime.",
  },
  {
    icon: <BsCurrencyDollar className="text-primary w-8 h-8" />,
    title: "Transparent Pricing",
    description: "No hidden fees, just clear value. What you see is what you pay.",
  },
  {
    icon: <PiArrowsClockwise className="text-primary w-8 h-8" />,
    title: "Revisions Until You're Happy",
    description:
      "We keep working until it's right. Your satisfaction is guaranteed.",
  },
  {
    icon: <GoTrophy className="text-primary w-8 h-8" />,
    title: "Results That Speak",
    description:
      "Our pages consistently outperform industry averages for conversions.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20" aria-labelledby="why-choose-us-heading">
      <div className="container px-4 text-center">
        <header data-aos="fade-up"
      data-aos-duration="1000" className="mb-12">
          <h2
            id="why-choose-us-heading"
            className="text-5xl font-medium mb-2 tracking-[-2px]"
          >
            Why Businesses{" "}
            <span className="text-primary">Trust Us</span> With Their Designs
          </h2>
          <p>
            We combine proven conversion frameworks with agency-level design to
            deliver results that matter.
          </p>
        </header>

        <ul data-aos="fade-up"
      data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
          {cards.map((card, idx) => (
            <li
              key={idx}
              className="bg-[#192420] p-6 rounded-lg shadow hover:shadow-lg text-left"
            >
              <div className="mb-10" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="text-base font-medium mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;