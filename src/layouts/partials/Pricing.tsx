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
      "Basic Support",
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
      "Priority Support",
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
      "Performance Optimization",
    ],
    note: 'For brands & agencies wanting "wow"',
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-black" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <header data-aos="fade-up"
      data-aos-duration="1000" className="mb-12">
          <h2
            id="pricing-heading"
            className="text-3xl md:text-5xl font-medium lg:tracking-[-2px]"
          >
            Simple, Transparent Pricing —{" "}
            <span className="text-primary">Choose Your Plan</span>
          </h2>
          <p className="mt-2 text-gray-300">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </header>

        {/* Pricing Cards */}
        <div data-aos="fade-up"
      data-aos-duration="1000" className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center">
          {packages.map((pkg, idx) => (
            <article
              key={idx}
              className={`flex-1 border rounded-xl shadow-lg p-9 flex flex-col justify-between transition-transform duration-500 hover:scale-105 bg-dark text-text-light relative ${
                pkg.popular ? "border-2 border-primary" : "border-border"
              }`}
            >
              {pkg.popular && (
                <p data-aos="fade-up"
      data-aos-duration="1000" className="text-xs absolute py-[6px] px-3 text-primary border border-primary rounded-full bg-dark -top-4">
                  Most popular
                </p>
              )}

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-1px]">
                      {pkg.title}
                    </h3>
                    <p className="text-sm mt-2">{pkg.note}</p>
                  </div>
                  <p className="text-2xl font-bold tracking-[-1px] text-primary">
                    {pkg.price}
                  </p>
                </div>

                <hr className="my-10 text-primary/10" />

                <ul className="list-disc pl-5 space-y-2 marker:text-primary marker:text-lg">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="text-sm text-text">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-6 btn ${
                  pkg.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Start My Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;