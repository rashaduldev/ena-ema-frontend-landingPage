import Form from '@/components/Form';
import React from 'react';

const FCta = () => {
  return (
    <section className="relative py-20 bg-dark ">
      {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-dark to-secondary/20"></div>
{/* <div className="bg-[url('/images/header-top.png')] absolute bottom-0 bg-red-500 h-32"></div> */}
      <div className="container relative z-10 text-center">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-[950px] text-3xl md:text-5xl lg:text-7xl mx-auto md:tracking-[-4px] font-bold"
        >
          Ready to Turn Visitors Into{' '}
          <span className="text-primary">Real Customers?</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-lg mt-4 leading-relaxed"
        >
          Do not settle for an average page. Get a premium, conversion-focused <br />
          landing page that pays for itself.
        </p>

        <div className="max-w-[794px] mx-auto mt-10">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default FCta;
