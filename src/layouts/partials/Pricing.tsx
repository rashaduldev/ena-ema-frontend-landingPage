import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { getMDData } from "@/helpers/mdHelper";
import { PricingData } from "@/types";

const Pricing: React.FC = () => {
  const data = getMDData<PricingData>("sections/pricing.md");

  return (
    <section className="py-16" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <header data-aos="fade-up" data-aos-duration="1000" className="mb-12">
          <h2
            id="pricing-heading"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="mt-2">{data.subtitle}</p>
        </header>

        {/* Pricing Cards */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col lg:flex-row gap-6 md:gap-12 justify-center"
        >
          {data.packages.map((pkg, idx) => (
            <article
              key={idx}
              className={`flex-1 rounded-xl shadow-lg p-9 flex flex-col justify-between bg-dark text-text-light relative ${
                pkg.popular ? "border-2 border-primary" : "border-border"
              }`}
            >
              {pkg.popular && (
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-xs absolute py-[6px] px-3 text-primary border border-primary rounded-full bg-dark -top-4"
                >
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

              <Link
                href="#"
                className={`mt-6 btn ${
                  pkg.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Start My Project
                <IoArrowForwardOutline />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
