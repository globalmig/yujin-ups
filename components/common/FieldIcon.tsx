const fieldIcons = {
  금융기관: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M9 10v9M15 10v9M19 10v9" />
      <path d="M3 19h18" />
    </svg>
  ),
  공공기관: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 21h16" />
    </svg>
  ),
  산업현장: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 21V12l5 3V9l5 3V6l5 3v12z" />
      <path d="M3 21h18" />
    </svg>
  ),
  데이터센터: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="4" y="3" width="16" height="7" rx="1" />
      <rect x="4" y="14" width="16" height="7" rx="1" />
      <circle cx="7.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.5" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
} as const;

export type FieldIconLabel = keyof typeof fieldIcons;

export default function FieldIcon({ label }: { label: string }) {
  return fieldIcons[label as FieldIconLabel] ?? null;
}
