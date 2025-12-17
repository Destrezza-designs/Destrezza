"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Ensure loader shows for minimum 2 seconds
    const minDurationTimer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(minDurationTimer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
