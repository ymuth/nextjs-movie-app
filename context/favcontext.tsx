"use client"

import { createContext, useEffect, useState } from "react";

type FavouritesContextType = {
    favourites: number[];
    toggleFavourites: (movieID: number) => void;
}

export const FavouritesContext = createContext<FavouritesContextType | null>(null);

export function FavouritesProvider({ children, }: { children: React.ReactNode }) {
    const [favourites, setFavourites] = useState<number[]>(() => {
        if (typeof window === "undefined") return [];

        const stored = localStorage.getItem("favourites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    function toggleFavourites(movieID: number) {
        setFavourites((prev) => {
            if (prev.includes(movieID)) {
                return prev.filter((id) => id !== movieID);
            } else {
                return [...prev, movieID]
            }
        })
    }

    return (
        <FavouritesContext.Provider value={{ favourites, toggleFavourites }}>
            {children}
        </FavouritesContext.Provider>
    )
}
