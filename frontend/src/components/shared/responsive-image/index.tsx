"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ResponsiveImageProps {
  alt: string;
  srcMobile: string;
  widthMobile: number;
  heightMobile: number;
  srcDesktop: string;
  widthDesktop: number;
  heightDesktop: number;
  widthToChange: number;
}

export default function ResponsiveImage({
  alt,
  srcMobile,
  widthMobile,
  heightMobile,
  srcDesktop,
  widthDesktop,
  heightDesktop,
  widthToChange
}: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < widthToChange);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [widthToChange]);

  if (isMobile === null) return null;

  return isMobile ? (
    <Image
      src={srcMobile}
      alt={alt}
      width={widthMobile}
      height={heightMobile}
    />
  ) : (
    <Image
      src={srcDesktop}
      alt={alt}
      width={widthDesktop}
      height={heightDesktop}
    />
  );
}
