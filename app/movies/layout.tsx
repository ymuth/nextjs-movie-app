import type { Metadata } from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Movies",
  description: "Movie list - sorted by category",
  keywords: "Movies popular trending top 2026 2025 currently in theatres airing",
};

const categories = ["popular", "trending", "top", "airing"];

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      <div className="relative z-10 flex items-center justify-left mb-3 border-black border p-1 bg-[#1e1e1e] border-b-white">
        <h3 className="font-bold p-1">Sort by:</h3>

        {categories.map((category) => (
          <Link
            key={category}
            href={`/movies/${category}`}
            className="p-1 px-2  no-underline hover:underline "
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
