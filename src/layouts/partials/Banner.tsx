import Form from "@/components/Form";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import React from "react";
import { getMDData } from "@/helpers/mdHelper";
import { markdownify } from "@/lib/utils/textConverter";

const Banner = () => {
  const homepage = getMDData<{ banner: any; aboutme: any }>("homepage/_index.md");
  const { banner } = homepage;
  
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
            src={banner.logo || "logoimg"}
            alt="Company logo"
            priority
          />
        </header>

        {/* Banner Content */}
        <div className="row justify-center text-center mt-24">
          <div className="max-w-[960px] mb-8">
            {/* Badge */}
            <p data-aos="fade-up"
              className="flex items-center justify-center gap-2 text-xs px-4 py-2 mb-5 border-t border-primary bg-dark w-fit mx-auto rounded-full"
              role="note"
            >
              <BsStars className="text-primary" aria-hidden="true" />
              <span>{banner.highlight}</span>
            </p>

            {/* Headline */}
            <h1
            className="mb-4 text-h3 md:text-7xl font-bold lg:-tracking-[4px]"
              dangerouslySetInnerHTML={markdownify(
                banner.title.replace(/\$\d+/g, (match:string) => `<span class="text-primary">${match}</span>`)
              )} /> 
            {/* Subheading */}
            <p className="mb-8 md:text-lg text-muted-foreground" dangerouslySetInnerHTML={markdownify(banner.content)} />
            {/* CTA Form */}
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;