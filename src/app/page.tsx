import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import Image from "next/image";
import logoimg from "../../public/images/Logo.png"
import AutoScrollSection from "@/partials/ScroolSection";
import WhyChooseUs from "@/partials/WhyChooseUs";
import Pricing from "@/partials/Pricing";
import PortfollioSection from "@/partials/PortfollioSection";
import Cta from "@/partials/Cta";
import Form from "@/components/Form";
import { BsStars } from "react-icons/bs";
import FCta from "@/partials/FCta";
import FAQ from "@/partials/FAQ";
import Process from "@/partials/Process";


const Home = () => {
  const testimonial = getListPage("sections/testimonial.md");

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
    <p className="flex items-center justify-center gap-2 text-xs px-4 py-2 mb-5 md:mt-0 border-t border-primary bg-dark w-fit mx-auto rounded-full">
      <BsStars className="text-primary" />
      <span>Trusted by 30+ startups & entrepreneurs worldwide</span>
    </p>

    {/* Heading */}
    <h1 className="mb-4 text-h3 md:text-7xl font-bold lg:-tracking-[4px]">
      Strategic Landing Pages That Convert From Just{" "}
      <span className="text-primary">$200</span>
    </h1>

    {/* Subheading */}
    <p className="mb-8 md:text-lg">
      Stop wasting traffic on generic pages. We deliver premium,
      conversion-focused landing pages designed, developed, and launched
      in just 5 days.
    </p>

    {/* Form */}
    <Form/>
  </div>
</div>
  </div>
</section>
      <AutoScrollSection/>
      <WhyChooseUs/>
      <PortfollioSection />
      <Pricing />
      <Cta/>
      <Process />
      <Testimonials data={testimonial} />
      <FAQ/>
      <FCta/>
    </>
  );
};

export default Home;
