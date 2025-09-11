import Form from "@/components/Form";
import Image from "next/image";
import logoimg from "../../../public/images/Logo.png";
import { BsStars } from "react-icons/bs";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative pt-5 bg-[url('/images/header-top.png')] bg-cover bg-center"
      aria-label="Hero section"
    >
      <div data-aos="fade-up"
      data-aos-duration="1000" className="container relative">
        {/* Logo */}
        <header className="text-center mb-8">
          <Image
            className="mx-auto"
            height={27}
            width={120}
            src={logoimg}
            alt="Company logo"
            priority
          />
        </header>

        {/* Banner Content */}
        <div className="row justify-center text-center mt-28">
          <div className="max-w-[960px] mb-8">
            {/* Badge */}
            <p data-aos="fade-up"
              className="flex items-center justify-center gap-2 text-xs px-4 py-2 mb-5 border-t border-primary bg-dark w-fit mx-auto rounded-full"
              role="note"
            >
              <BsStars className="text-primary" aria-hidden="true" />
              <span>Trusted by 30+ startups & entrepreneurs worldwide</span>
            </p>

            {/* Headline */}
            <h1 data-aos="fade-up" className="mb-4 text-h3 md:text-7xl font-bold lg:-tracking-[4px]">
              Strategic Landing Pages That Convert From Just{" "}
              <strong className="text-primary font-bold">$200</strong>
            </h1>

            {/* Subheading */}
            <p className="mb-8 md:text-lg text-muted-foreground">
              Stop wasting traffic on generic pages. We deliver premium,
              conversion-focused landing pages designed, developed, and launched
              in just 5 days.
            </p>

            {/* CTA Form */}
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;