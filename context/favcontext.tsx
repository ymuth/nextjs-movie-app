"use client"

import { createContext, useEffect, useState } from "react";

type FavouritesContextType = {
    favourites: number[];
    toggleFavourites: (movieID: number) => void;
}

function readStoredFavourites() {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem("favourites");
    if (stored) {
        try {
            return JSON.parse(stored) as number[];
        } catch {
            return [];
        }
    }

    const cookieValue = document.cookie
        .split("; ")
        .find((item) => item.startsWith("favourites="));

    if (!cookieValue) return [];

    try {
        return JSON.parse(decodeURIComponent(cookieValue.split("=")[1])) as number[];
    } catch {
        return [];
    }
}

function saveFavouritesCookie(favourites: number[]) {
    if (typeof window === "undefined") return;

    localStorage.setItem("favourites", JSON.stringify(favourites));

    const cookieValue = encodeURIComponent(JSON.stringify(favourites));
    if (favourites.length === 0) {
        document.cookie = "favourites=; path=/; max-age=0";
        return;
    }

    document.cookie = `favourites=${cookieValue}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export const FavouritesContext = createContext<FavouritesContextType | null>(null);

export function FavouritesProvider({ children, }: { children: React.ReactNode }) {
    const [favourites, setFavourites] = useState<number[]>(() => readStoredFavourites());

    useEffect(() => {
        saveFavouritesCookie(favourites);
    }, [favourites]);

    function toggleFavourites(movieID: number) {
        setFavourites((prev) => {
            if (prev.includes(movieID)) {
                return prev.filter((id) => id !== movieID);
            }

            return [...prev, movieID];
        });
    }

    return (
        <FavouritesContext.Provider value={{ favourites, toggleFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
}
