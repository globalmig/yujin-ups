const HIDDEN_PREFIXES = ["/support", "/contact", "/admin"];

export function isQuickInquiryBarHidden(pathname: string): boolean {
  return HIDDEN_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}
