import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ProductSidebar from "../../_components/ProductSidebar";
import { categories, findCategory, getImageSrc, productDisplayImageMap } from "@/lib/products";

interface Props {
  params: Promise<{ categoryId: string }>;
}

export async function generateStaticParams() {
  return categories
    .filter((cat) => cat.children?.some((c) => c.href === `/products/${cat.id}/display`))
    .map((cat) => ({ categoryId: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const category = findCategory(categoryId);
  if (!category || !productDisplayImageMap[categoryId]) return {};

  const title = `${category.label} 디스플레이 상세`;
  const description = `유진전원시스템의 ${category.label} 디스플레이 상세 정보를 확인하세요. 30년 기술력의 고품질 전원장치.`;
  const url = `https://www.upscom.co.kr/products/${categoryId}/display`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | 유진전원시스템`, description, url },
  };
}

export default async function ProductDisplayPage({ params }: Props) {
  const { categoryId } = await params;
  const category = findCategory(categoryId);
  const displayImage = productDisplayImageMap[categoryId];
  if (!category || !displayImage) notFound();

  return (
    <>
      <PageHero
        imageSrc="/image/products/bg-hero.jpg"
        imageAlt="제품 배경"
        eyebrow="PRODUCTS"
        title={`${category.label} 디스플레이 상세`}
        description="유진전원시스템의 제품 디스플레이 상세 정보를 확인하세요."
      />

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
        <ProductSidebar />

        <div className="flex-1">
          <div className="flex flex-col">
            <Image
              src={getImageSrc(displayImage.folder, displayImage.filename)}
              alt={displayImage.alt}
              width={1100}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              style={{ width: "100%", height: "auto" }}
              className="block"
              priority
            />
            <Link
              href="/contact"
              className="w-full py-5 bg-blue text-white text-center font-semibold text-base hover:bg-blue-dark transition-colors block"
            >
              견적문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
