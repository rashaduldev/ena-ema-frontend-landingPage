"use client";
import useLenis from "@/hooks/useLenis";
import { ReactNode } from "react";
// import AOS from 'aos';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis();
  // AOS.init();
  return <>{children}</>;
}
