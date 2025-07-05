"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ResponsiveHeaderImage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? (
    <Image
      src="/images/header/iphone-header-mobile.png"
      alt="iPhone mobile"
      width={343}
      height={289}
    />
  ) : (
    <Image
      src="/images/header/iphone-header-desktop.png"
      alt="iPhone desktop"
      width={400}
      height={632}
    />
  );
}
