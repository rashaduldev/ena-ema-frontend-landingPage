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
        <div className="flex flex-col items-center justify-center gap-6 py-8 md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Logo width={160} height={36} />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p
              className="text-xs text-text-dark"
              dangerouslySetInnerHTML={markdownify(copyright)}
            />
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
