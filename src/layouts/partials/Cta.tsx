import React from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { CtaData } from "@/types";
import { getMDData } from "@/helpers/mdHelper";

// Load CTA data from YAML
 const ctaData = getMDData<CtaData>("sections/cta.md");
const Cta: React.FC = () => {
  return (
    <section className="py-16" aria-labelledby="cta-heading">
      <div className="container">
        {/* Top Notice */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center gap-3"
        >
          <PiLightning className="w-9 h-9 text-primary" />
          <div>
            <p className="text-2xl tracking-[-1px] font-bold mb-2">
              {ctaData.notice.heading}
            </p>
            <p>{ctaData.notice.text}</p>
          </div>
        </div>

        {/* Offer Box */}
        <div className="mt-12 py-12 border border-border text-center rounded-2xl bg-dark">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            id="cta-heading"
            className="mb-2"
          >
            {ctaData.title}
          </h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            {ctaData.description}
          </p>
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            href={ctaData.button.url}
            className="btn btn-primary w-fit mx-auto mt-6 flex items-center"
          >
            {ctaData.button.label}
            <IoArrowForwardOutline />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
