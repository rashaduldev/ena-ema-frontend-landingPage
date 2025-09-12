import React from "react";
import {
  BsCurrencyDollar,
} from "react-icons/bs";
import { FaPalette } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { LuRocket } from "react-icons/lu";
import { PiArrowsClockwise, PiLightning } from "react-icons/pi";
import { getMDData } from "@/helpers/mdHelper";
import { WhyChooseUsData } from "@/types";

const iconMap: { [key: string]: any } = {
  LuRocket,
  FaPalette,
  PiLightning,
  BsCurrencyDollar,
  PiArrowsClockwise,
  GoTrophy,
};

const WhyChooseUs: React.FC = () => {
const data = getMDData<WhyChooseUsData>("sections/whychoseus.md");
  return (
    <section className="py-32 bg-dark" aria-labelledby="why-choose-us-heading">
      <div className="container px-4 text-center">
        {/* Header */}
        <header data-aos="fade-up" data-aos-duration="1000" className="mb-12">
          <h2
            id="why-choose-us-heading"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p>{data.subtitle}</p>
        </header>

        {/* Cards */}
        <ul
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9"
        >
          {data.cards.map((card, idx) => {
            const Icon = iconMap[card.icon];
            return (
              <li
                key={idx}
                className="relative overflow-hidden bg-[#192420] p-6 rounded-lg shadow text-left cursor-pointer border border-transparent hover:border-primary group"
              >
                {/* Hover Background */}
                <div className="absolute bottom-0 left-0 w-full h-52 bg-[url('/images/header-top.png')] rotate-180 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="mb-10" aria-hidden="true">
                    <Icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-base font-medium mb-2">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
