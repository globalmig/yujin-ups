import Container from "@/components/layout/Container";
import { productContentMap } from "@/data/products/product-content";

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 20 9 4 6 12 2 12" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="7" rx="1.5" />
      <rect x="2" y="14" width="20" height="7" rx="1.5" />
      <path d="M6 6.5h.01M6 17.5h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

const icons = { shield: ShieldIcon, activity: ActivityIcon, server: ServerIcon, clock: ClockIcon } as const;

export default function ProductFeatureBar({ categoryId }: { categoryId: string }) {
  const items = productContentMap[categoryId].featureBar;

  return (
    <section className="bg-navy-dark text-white">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 py-10 md:py-12">
        {items.map(({ icon, title, desc }, i) => {
          const Icon = icons[icon];
          return (
            <div
              key={title}
              className={`flex items-start gap-4 px-2 ${i < items.length - 1 ? "lg:border-r lg:border-white/15" : ""}`}
            >
              <span className="text-white shrink-0">
                <Icon />
              </span>
              <div>
                <h3 className="text-sm md:text-base font-bold mb-1.5">{title}</h3>
                <p className="text-xs text-white/65 leading-relaxed">{desc}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
