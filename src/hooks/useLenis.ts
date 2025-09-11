"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis(config?: any) {
  useEffect(() => {
    const lenis = new Lenis(config || { autoRaf: true });
    // lenis.on("scroll", (e: any) => {
    //   console.log("Lenis scroll:", e);
    // });
    return () => {
      lenis.destroy();
    };
  }, [config]);
}
