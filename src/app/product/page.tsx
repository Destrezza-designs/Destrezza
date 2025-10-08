// app/product/page.tsx
import ProductClient from './ProductClient';

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  // searchParams is async in Next.js 15
  const resolvedSearchParams = await searchParams;

  // normalize cat param (string | null)
  const rawCat = resolvedSearchParams?.cat;
  let cat: string | null = null;
  if (Array.isArray(rawCat)) {
    cat = rawCat[0] ?? null;
  } else if (typeof rawCat === 'string') {
    cat = rawCat;
  }

  // normalize type param (string | null)
  const rawType = resolvedSearchParams?.type;
  let typeParam: string | null = null;
  if (Array.isArray(rawType)) {
    typeParam = rawType[0] ?? null;
  } else if (typeof rawType === 'string') {
    typeParam = rawType;
  }

  // Pass both down to client component
  return <ProductClient initialCat={cat} initialType={typeParam} />;
}
