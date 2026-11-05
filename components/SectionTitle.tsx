export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-10 md:mb-14">
      {eyebrow && (
        <p className={`text-xs font-bold tracking-[0.25em] uppercase mb-3 ${light ? "text-white/70" : "text-blue"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {description && (
        <p className={`text-sm md:text-base ${light ? "text-white/70" : "text-muted"}`}>{description}</p>
      )}
    </div>
  );
}
