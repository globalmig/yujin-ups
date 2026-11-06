"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/products";

const navItems = [
  { name: "회사소개", href: "/company" },
  { name: "제품소개", href: "/products" },
  { name: "납품실적", href: "/projects" },
  { name: "유지보수", href: "/maintenance" },
  { name: "기술정보", href: "/tech-info" },
  { name: "고객지원", href: "/support" },
];

const ctaItem = { name: "견적문의", href: "/contact" };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleProductsEnter = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-360 mx-auto px-6 flex items-center justify-between py-4">
          {/* 로고 */}
          <Link className="flex items-center shrink-0" href="/">
            <div className="relative w-40 h-11 lg:w-48 lg:h-12">
              <Image src="/image/common/logo.png" alt="유진전원시스템 로고" fill sizes="192px" priority className="object-contain object-left" />
            </div>
          </Link>

          {/* PC 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              if (item.href === "/products") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleProductsEnter}
                    onMouseLeave={handleProductsLeave}
                  >
                    <Link
                      href={item.href}
                      className={`text-base lg:text-lg font-medium transition-colors hover:text-blue whitespace-nowrap ${pathname.startsWith(item.href) ? "text-blue font-semibold" : "text-ink"}`}
                    >
                      {item.name}
                    </Link>

                    {/* 드롭다운 */}
                    <div
                      className={`absolute top-full left-0 pt-3 transition-all duration-200 ${productsDropdownOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}
                    >
                      <ul className="bg-white shadow-lg rounded-lg overflow-hidden min-w-max border border-line">
                        {categories.map((cat) => (
                          <li key={cat.id}>
                            <Link
                              href={`/products/${cat.id}`}
                              onClick={() => setProductsDropdownOpen(false)}
                              className={`block px-6 py-3 text-base transition-colors hover:bg-surface hover:text-blue ${pathname === `/products/${cat.id}` ? "bg-surface text-blue font-semibold" : "text-ink"}`}
                            >
                              {cat.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base lg:text-lg font-medium transition-colors hover:text-blue whitespace-nowrap ${pathname.startsWith(item.href) ? "text-blue font-semibold" : "text-ink"}`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href={ctaItem.href}
              className="shrink-0 inline-flex items-center justify-center bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors hover:bg-blue-dark"
            >
              {ctaItem.name}
            </Link>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
            <span className={`block w-6 h-0.5 bg-blue transition-all duration-300 origin-center ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-blue transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-blue transition-all duration-300 origin-center ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* 모바일 풀스크린 메뉴 오버레이 */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* 상단 여백 (헤더 높이만큼) */}
        <div className="h-17 shrink-0" />

        {/* 메뉴 링크 */}
        <nav className="flex flex-col flex-1 overflow-y-auto items-center gap-1 px-8 pt-8 pb-6">
          {navItems.map((item, i) => {
            if (item.href === "/products") {
              return (
                <div key={item.href} className="w-full border-b border-line">
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full text-center py-4 text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} ${pathname.startsWith(item.href) ? "text-blue font-bold" : "text-ink"}`}
                    style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                  >
                    {item.name}
                    <span className={`text-sm transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? "max-h-screen" : "max-h-0"}`}>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products/${cat.id}`}
                        onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                        className={`block text-center py-3 text-base transition-colors hover:text-blue ${pathname === `/products/${cat.id}` ? "text-blue font-semibold" : "text-muted"}`}
                      >
                        {cat.label}
                      </Link>
                    ))}
                    <div className="pb-3" />
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center py-4 text-lg font-medium border-b border-line transition-all duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} ${
                  pathname.startsWith(item.href) ? "text-blue font-bold" : "text-ink"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href={ctaItem.href}
            onClick={() => setMenuOpen(false)}
            className={`mt-6 w-full py-4 bg-blue text-white text-center text-base font-semibold rounded transition-all duration-300 hover:bg-blue-dark ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? `${navItems.length * 50}ms` : "0ms" }}
          >
            {ctaItem.name}
          </Link>
        </nav>
      </div>
    </>
  );
}
