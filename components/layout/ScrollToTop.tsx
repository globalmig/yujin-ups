"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isQuickInquiryBarHidden } from "./quickInquiryVisibility";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  const quickInquiryBarVisible = !isQuickInquiryBarHidden(pathname);

  return (
    <button
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
      className={`fixed right-8 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-blue text-white shadow-lg hover:bg-blue-dark transition-colors ${
        quickInquiryBarVisible ? "bottom-38 sm:bottom-24" : "bottom-8"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
