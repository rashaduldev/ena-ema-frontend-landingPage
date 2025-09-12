import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import AutoScrollSection from "@/partials/ScroolSection";
import WhyChooseUs from "@/partials/WhyChooseUs";
import Pricing from "@/partials/Pricing";
import PortfollioSection from "@/partials/PortfollioSection";
import Cta from "@/partials/Cta";
import FCta from "@/partials/FCta";
import FAQ from "@/partials/FAQ";
import Process from "@/partials/Process";
import Banner from "@/partials/Banner";


const Home = () => {
  const testimonial = getListPage("sections/testimonial.md");

  return (
    <>
      <SeoMeta />
      <Banner/>
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
