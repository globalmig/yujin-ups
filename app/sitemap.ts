import type { MetadataRoute } from "next";
import { categories } from "@/lib/products";
import { serverUpsModels } from "@/data/products/server-ups-models";

const BASE_URL = "https://www.upscom.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    cat.children
      ? cat.children.map((child) => ({
          url: `${BASE_URL}/products/${child.id}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
      : [{ url: `${BASE_URL}/products/${cat.id}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }]
  );

  const serverUpsModelPages: MetadataRoute.Sitemap = serverUpsModels.map((model) => ({
    url: `${BASE_URL}${model.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/company`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,         lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    ...productPages,
    ...serverUpsModelPages,
  ];
}
