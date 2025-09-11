"use client";

import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Book Your Project",
    description: "Fill out a short form and we will get started immediately.",
    icon: <FaRegUserCircle className="p-6 bg-primary text-text-light rounded-full border border-border text-3xl" />,
  },
  {
    title: "Project Planning",
    description: "We plan the workflow, design, and development timeline.",
    icon: <FaRegUserCircle className="p-6 bg-primary text-text-light rounded-full border border-border text-3xl" />,
  },
  {
    title: "Go Live",
    description: "Your landing page is deployed and live in just 5 days.",
    icon: <FaRegUserCircle className="p-6 bg-primary text-text-light rounded-full border border-border text-3xl" />,
  },
];

const Process: React.FC = () => {
  return (
    <section className="section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          From Idea to Live Landing Page in{" "}
          <span className="text-primary">Just 5 Days</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Our streamlined process ensures fast delivery without compromising quality.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-dark p-8 border border-border rounded-lg flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="mt-6 text-xl font-medium text-white">{step.title}</h3>
              <p className="mt-3 text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
