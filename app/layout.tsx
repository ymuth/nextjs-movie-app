import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/navbar";
import { geistSans, geistMono } from "@/lib/fonts";
import { FavouritesProvider } from "@/context/favcontext";
import Footer from "@/components/ui/footer";



export const metadata: Metadata = {
  title: "Mugz Movies",
  description: "Modern Movie app to find your favourite movies!, search for movies, get recommendations, find trending and airing, and track your favourites all in one place!",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <FavouritesProvider>
          <main className="flex-1">
            {children}
          </main>
        </FavouritesProvider>
        <Footer />
      </body>
    </html>
  );
}
