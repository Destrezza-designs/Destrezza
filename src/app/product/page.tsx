// app/product/page.tsx
import ProductClient from './ProductClient';

type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Page({ searchParams }: PageProps) {
  // searchParams comes from Next server router. Could be string or string[]; normalize to string|null
  const rawCat =  searchParams?.cat;
  let cat: string | null = null;
  if (Array.isArray(rawCat)) {
    cat = rawCat[0] ?? null;
  } else if (typeof rawCat === 'string') {
    cat = rawCat;
  }

  // Pass the single cat string down to client component.
  return <ProductClient initialCat={cat} />;
}
