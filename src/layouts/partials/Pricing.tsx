"use client";

import React from "react";

interface Package {
  title: string;
  price: string;
  features: string[];
  note: string;
  popular?: boolean;
}

const packages: Package[] = [
  {
    title: "Basic",
    price: "$200",
    features: [
      "1 Landing Page (Design + Development)",
      "Hosting Deployment",
      "5-Day Delivery",
    ],
    note: "Perfect for solopreneurs",
  },
  {
    title: "Standard",
    price: "$300",
    features: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Hosting Setup",
      "Free Consultation Call",
    ],
    note: "Best balance of value & features",
    popular: true,
  },
  {
    title: "Premium",
    price: "$500",
    features: [
      "Everything in Standard",
      "Advanced Animations",
      "Priority Delivery (3 Days)",
      "6 Months Free Support",
    ],
    note: 'For brands & agencies wanting "wow"',
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple, Transparent Pricing — <span>Choose Your Plan</span>
        </h2>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex-1 border rounded-xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-105 ${
                pkg.popular ? "border-primary bg-primary/10" : "bg-white"
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    pkg.popular ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {pkg.title} {pkg.popular && "— Most Popular"}
                </h3>
                <p className="text-3xl font-bold mb-6">{pkg.price}</p>

                <ul className="flex flex-col gap-3 mb-6">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500 font-bold">✔</span> {feat}
                    </li>
                  ))}
                </ul>

                <p className="italic text-gray-500">{pkg.note}</p>
              </div>

              <a
                href="#"
                className="mt-6 inline-block text-center bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition"
              >
                Start My Project →
              </a>
            </div>
          ))}
        </div>

        {/* Scarcity Banner */}
        <div className="mt-12 text-center bg-yellow-100 text-yellow-900 font-semibold py-4 rounded-lg">
          ⚡ We only onboard 5 new clients per month. 2 spots left for this month — secure
          yours today.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
