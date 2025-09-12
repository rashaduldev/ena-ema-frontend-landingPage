import React from "react";
import { getMDData } from "@/helpers/mdHelper";
import { FAQData } from "@/types";

const faqData = getMDData<FAQData>("sections/faq.md");

const FAQ: React.FC = () => {
  return (
    <section className="relative pb-32 bg-dark -mt-10">
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-light/10 via-light/5 to-transparent"></div>

      <div className="max-w-[960px] mx-auto my-10 space-y-6 relative z-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-12 text-center"
        >
          <span dangerouslySetInnerHTML={{ __html: faqData.title }} />
        </h2>

        {faqData.faqs.map((faq, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative group bg-[#192420] rounded-xl text-left overflow-hidden z-10"
          >
            <div className="flex justify-start pl-6 mt-4">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
            </div>

            <div className="w-full text-left px-6 py-4">
              <span className="font-bold text-2xl tracking-[-1px]">
                {faq.question}
              </span>
            </div>

            <div className="px-8 pb-6 text-lg text-text">{faq.answer}</div>

            <div className="absolute bottom-0 left-0 w-full h-52 bg-[url('/images/header-top.png')] rotate-180 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
