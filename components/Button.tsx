import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "white";

const variantClasses: Record<Variant, string> = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  outline: "border border-blue text-blue bg-white/80 hover:bg-blue/10",
  white: "bg-white text-blue hover:bg-white/90",
};

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const classes = `inline-flex items-center justify-center min-h-12 px-7 rounded font-bold text-sm transition-colors ${variantClasses[variant]} ${className}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#");

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
