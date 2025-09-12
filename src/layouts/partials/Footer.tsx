"use client";
import Logo from "@/components/Logo";
import Social from "@/components/Social";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import config from "@/config/config.json";

const Footer = () => {
  const { copyright } = config.params;
  return (
    <footer className="bg-primary text-text-dark">
      <div className="container">
        <div className="flex items-center justify-between py-12">
            <Logo width={160} height={36} />
          <div>
            <p className="text-xs text-text-dark" dangerouslySetInnerHTML={markdownify(copyright)} />
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
