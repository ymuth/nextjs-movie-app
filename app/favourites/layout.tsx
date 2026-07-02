import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "My Favourites - Mugz Movies",
    description: "Favourites page, Heart your favourite movies - Modern Movie app",
    keywords: "Movies popular Favourite App cinema Heart Modern trendy trending top 2026 2025 currently in theatres airing",

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}
