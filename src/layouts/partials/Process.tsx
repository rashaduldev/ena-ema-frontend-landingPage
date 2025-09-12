import { getMDData } from "@/helpers/mdHelper";
import { ProcessData } from "@/types";
import React from "react";
import { FaPalette } from "react-icons/fa6";
import { LuRocket } from "react-icons/lu";
import { PiUser } from "react-icons/pi";

const iconMap: Record<string, React.ReactNode> = {
  PiUser: <PiUser />,
  FaPalette: <FaPalette />,
  LuRocket: <LuRocket />,
};

const processData = getMDData<ProcessData>("sections/process.md");

const Process: React.FC = () => {
  return (
    <section
      className="section py-16 relative overflow-hidden bg-[#151E1B]"
      aria-labelledby="process-heading"
    >
      {/* Left gradient */}
      <div
        className="pointer-events-none absolute left-0 top-0 w-[46%] h-full 
                   bg-gradient-to-r from-primary/20 via-[#192420] to-transparent"
      />

      {/* Bottom fade to match next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[36%] h-32 
                   bg-gradient-to-b from-transparent to-[#151E1B]"
      />

      <div className="relative mx-auto px-4 text-center z-10">
        {/* Section heading */}
        <header data-aos="fade-up" data-aos-duration="1000">
          <h2 id="process-heading">
            <span dangerouslySetInnerHTML={{ __html: processData.heading }} />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">{processData.subheading}</p>
        </header>

        {/* Steps */}
        <div className="flex flex-wrap flex-row gap-8 mt-12 justify-center">
          {processData.steps.map((step, index) => (
            <article
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
              className="relative bg-dark p-8 border border-border rounded-lg flex flex-col items-center text-center w-[304px] mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-center bg-secondary text-primary text-2xl p-6 rounded-full">
                {iconMap[step.icon]}
              </div>
              <p className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-1 text-primary bg-dark border border-primary rounded-full">
                {step.day}
              </p>
              <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-sm">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
