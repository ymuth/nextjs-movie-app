import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "About us - Mugz Movies",
    description: "About page, contact us - Modern Movie app",
    keywords: "Movies popular About Contact Favourite App cinema Heart Modern trendy trending top 2026 2025 currently in theatres airing",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            {children}
        </div>
    );
}
