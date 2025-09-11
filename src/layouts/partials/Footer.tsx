"use client";
import Social from "@/components/Social";
import social from "@/config/social.json";

const Footer = () => {

  return (
    <footer className="bg-primary text-text-dark">
      <div className="container">
        <div className="flex items-center justify-between py-12">
          <div className="">
            {/* <Logo /> */}
            <p>logo</p>
          </div>
          <div>
            <p>© All rights reserved to Ena Ema Technologies</p>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
