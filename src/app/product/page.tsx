// app/product/page.tsx
import ProductClient from './ProductClient';

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  // searchParams is now async in Next.js 15
  const resolvedSearchParams = await searchParams;
  
  // searchParams comes from Next server router. Could be string or string[]; normalize to string|null
  const rawCat = resolvedSearchParams?.cat;
  let cat: string | null = null;
  if (Array.isArray(rawCat)) {
    cat = rawCat[0] ?? null;
  } else if (typeof rawCat === 'string') {
    cat = rawCat;
  }

  // Pass the single cat string down to client component.
  return <ProductClient initialCat={cat} />;
}
