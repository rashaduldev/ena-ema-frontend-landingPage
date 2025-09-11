import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import Image from "next/image";
import logoimg from "../../public/images/Logo.png"
import { BsCheck2, BsStars } from "react-icons/bs";
import Link from "next/link";
import { PiUser } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlineLock } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import AutoScrollSection from "@/partials/ScroolSection";
import WhyChooseUs from "@/partials/WhyChooseUs";
import Pricing from "@/partials/Pricing";
import PortfollioSection from "@/partials/PortfollioSection";


const Home = () => {
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta />
<section className="relative pt-5 bg-[url('/images/header-top.png')] bg-cover bg-center">
  {/* <div className="absolute inset-0 bg-dark/40"/> */}

  <div className="container relative">
    {/* Header part */}
    <div className="text-center mb-8">
      <Image
      className="mx-auto"
      height={27}
      width={120}
      src={logoimg}
      alt="logo"
      />
    </div>

    {/* Banner part */}
  <div className="row justify-center text-center mt-28">
  <div className="max-w-[960px] mb-8">
    {/* Top badge */}
    <p className="flex items-center justify-center gap-2 text-xs px-4 py-2 border-t border-primary bg-dark w-fit mx-auto rounded-full">
      <BsStars className="text-primary" />
      <span>Trusted by 30+ startups & entrepreneurs worldwide</span>
    </p>

    {/* Heading */}
    <h1 className="mb-4 text-h3 md:text-7xl font-bold -tracking-[4px]">
      Strategic Landing Pages That Convert From Just{" "}
      <span className="text-primary">$200</span>
    </h1>

    {/* Subheading */}
    <p className="mb-8 text-lg">
      Stop wasting traffic on generic pages. We deliver premium,
      conversion-focused landing pages designed, developed, and launched
      in just 5 days.
    </p>

    {/* Form */}

    <form className="p-8 md:p-9 border border-border shadow-xl shadow-[#1FFFA5]/20 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full mb-6">

        {/* Name Input */}
        <div className="relative w-full md:w-1/3">
          <PiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-border rounded-lg pl-12 pr-4 py-4
                       bg-transparent focus:outline-none focus:ring focus:ring-[#1FFFA5]/20
                       shadow-sm placeholder:text-text"
          />
        </div>

        {/* Email Input */}
        <div className="relative w-full md:w-1/3">
          <HiOutlineMail className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-border rounded-lg pl-12 pr-4 py-4
                       bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1FFFA5]/20
                       shadow-sm placeholder:text-text"
          />
        </div>

        {/* Phone Input */}
        <div className="relative w-full md:w-1/3">
          <FiPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-border rounded-lg pl-12 pr-4 py-4
                       bg-transparent focus:outline-none focus:ring focus:ring-[#1FFFA5]/20
                       shadow-sm placeholder:text-text"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Link
  href="/"
  className="btn btn-primary"
>
  Get my high-converting landing page
  <IoArrowForwardOutline />
</Link>

    </form>
    <div className="flex items-center justify-center gap-16 mt-5">
      <p className="flex items-center gap-2"><AiOutlineLock />SSL secure</p>
      <p className="flex items-center gap-2"><BsCheck2 />Money-back guaranteed</p>
      <p className="flex items-center gap-2"><CiStar />Satisfaction guaranteed</p>
    </div>
  </div>
</div>

  </div>
</section>
      <AutoScrollSection/>
      <WhyChooseUs/>
      <PortfollioSection />
      <Pricing />
      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
