import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-30 scroll-mt-20 bg-navy">
      <Container>
        <SectionTitle
          light
          eyebrow="DELIVERY RECORD"
          title="주요 납품 실적"
          description="유진전원시스템의 UPS는 다양한 분야에서 안정적으로 운용되고 있습니다."
        />
        <div className="flex flex-wrap justify-center -mx-1.5 md:-mx-2">
          {projects.map((p) => (
            <div key={p.name} className="w-1/2 sm:w-1/3 lg:w-1/5 px-1.5 md:px-2 mb-3 md:mb-4">
              <article className="rounded-md overflow-hidden bg-white shadow-sm">
                <div className="relative w-full aspect-square bg-surface">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
                </div>
                <div className="text-center px-3 py-4">
                  <h3 className="min-h-12 md:min-h-14 flex items-center justify-center text-lg md:text-xl font-bold text-navy mb-1.5">{p.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{p.spec}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button href="/projects" variant="white">
            납품실적 전체보기 →
          </Button>
        </div>
      </Container>
    </section>
  );
}
