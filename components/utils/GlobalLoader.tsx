"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
    }, 300); // small delay to feel smooth

    return () => clearTimeout(t);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
