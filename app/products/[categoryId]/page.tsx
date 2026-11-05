import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ProductDetailHero from "@/components/ProductDetailHero";
import ProductFeatureBar from "@/components/ProductFeatureBar";
import ProductWhyUsSection from "@/components/ProductWhyUsSection";
import ProductFieldsSection from "@/components/ProductFieldsSection";
import ProductLineupSection from "@/components/ProductLineupSection";
import { categories, findCategory } from "@/lib/products";

interface Props {
  params: Promise<{ categoryId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const category = findCategory(categoryId);
  if (!category) return {};

  const title = `${category.label} 제품소개`;
  const description = `유진전원시스템의 ${category.label} 제품을 소개합니다. 30년 기술력의 고품질 전원장치.`;
  const url = `https://upscom.co.kr/products/${categoryId}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | 유진전원시스템`, description, url },
  };
}

export async function generateStaticParams() {
  return categories.flatMap((cat) => {
    if (cat.children) {
      const childParams = cat.children.filter((c) => !c.href).map((c) => ({ categoryId: c.id }));
      return cat.selfPage ? [{ categoryId: cat.id }, ...childParams] : childParams;
    }
    return [{ categoryId: cat.id }];
  });
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;

  // 부모 카테고리 접근 시 첫 번째 하위 카테고리로 리다이렉트
  const topLevel = categories.find((c) => c.id === categoryId);
  if (topLevel?.children && !topLevel.selfPage) {
    redirect(`/products/${topLevel.children[0].id}`);
  }

  const category = findCategory(categoryId);
  if (!category) notFound();

  return (
    <>
      <ProductDetailHero />
      <ProductFeatureBar />
      <ProductWhyUsSection />
      <ProductFieldsSection />
      <ProductLineupSection />
    </>
  );
}
