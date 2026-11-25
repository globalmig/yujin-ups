import { Suspense } from "react";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        imageSrc="/image/contact/bg-hero.jpg"
        imageAlt="문의 배경"
        eyebrow="QUOTE REQUEST"
        title="견적문의"
        description="제품 사양과 요구 조건을 남겨주시면 담당자가 신속하게 답변드립니다."
      />

      {/* form section */}
      <section className="py-20 bg-white">
        <div className="max-w-275 mx-auto px-6">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
