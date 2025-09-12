"use client";

import config from "@/config/config.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src, width, height }: { src?: string; width?: number; height?: number }) => {
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title,
  } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // pick correct logo
  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logo_darkmode
      : logo;
  const logoPath = src ?? resolvedLogo;

  // fallback to config width/height if not passed as props
  const parsedWidth =
    width ??
    (typeof logo_width === "string"
      ? parseInt(logo_width.replace("px", ""), 10)
      : logo_width);
  const parsedHeight =
    height ??
    (typeof logo_height === "string"
      ? parseInt(logo_height.replace("px", ""), 10)
      : logo_height);

  return (
    <Link href="/" className="inline-block">
      {logoPath ? (
        <Image
          src={logoPath}
          alt={title}
          width={parsedWidth}
          height={parsedHeight}
          priority
          className="h-auto w-auto"
        />
      ) : logo_text ? (
        <span>{logo_text}</span>
      ) : (
        <span>{title}</span>
      )}
    </Link>
  );
};

export default Logo;
