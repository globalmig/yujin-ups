import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`w-full max-w-360 mx-auto px-6 md:px-10 ${className}`}>{children}</div>;
}
