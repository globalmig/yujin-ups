"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const rotate = (dir: number) => setIndex((i) => (i + dir + projects.length) % projects.length);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white scroll-mt-20">
      <Container>
        <SectionTitle eyebrow="DELIVERY RECORD" title="주요 납품 실적" description="유진전원시스템의 UPS는 다양한 분야에서 안정적으로 운용되고 있습니다." />
        <div className="relative px-7 md:px-8">
          <button
            onClick={() => rotate(-1)}
            aria-label="이전 납품 실적"
            className="absolute left-0 top-[34%] -translate-y-1/2 w-8 h-9 flex items-center justify-center text-ink hover:text-blue transition-colors"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {projects.map((p, i) => (
              <article key={p.name} className="text-center" style={{ order: (i - index + projects.length) % projects.length }}>
                <div className="relative h-28 md:h-32 rounded overflow-hidden bg-surface">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
                </div>
                <p className="mt-2 text-xs md:text-sm text-ink">
                  {p.name} <span className="text-blue font-semibold ml-1">{p.spec}</span>
                </p>
              </article>
            ))}
          </div>

          <button
            onClick={() => rotate(1)}
            aria-label="다음 납품 실적"
            className="absolute right-0 top-[34%] -translate-y-1/2 w-8 h-9 flex items-center justify-center text-ink hover:text-blue transition-colors"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
          >
            납품실적 전체보기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
