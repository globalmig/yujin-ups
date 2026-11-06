import Image from "next/image";
import Container from "@/components/layout/Container";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-dark via-navy/95 to-navy/10 md:from-navy-dark md:via-navy/85 md:to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl pt-16 pb-10 md:pt-24 md:pb-16">
          <p className="text-sm font-bold text-blue-light mb-3">{eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white/70">{description}</p>
        </div>
      </Container>
    </section>
  );
}
