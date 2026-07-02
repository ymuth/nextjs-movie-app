"use client"
import { Movie } from "@/types/movie";
import { useContext, useState, useEffect } from "react";
import { FavouritesContext } from "@/context/favcontext";


export default function FavouriteButton({ movieID }: { movieID: Movie["id"] }) {

    {/* Gets Favourites and toggle function from the context */ }
    const context = useContext(FavouritesContext);
    const [mounted, setMounted] = useState(false);
    if (!context) return null;
    
    const { favourites, toggleFavourites } = context;
    const isFavourite = favourites.includes(movieID);
    
    {/* Delays rendering until server matches the client*/ }
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null; //  prevents hydration mismatch
    
    {/* returns client side button which can toggle favourites */}
    return (

        <div>
            {/* <button
                onClick={() => toggleFavourites(movieID)}
                className="absolute flex text-2xl top-0 right-0 z-20 m-2 p-2 justify-center items-center rounded-full bg-black/50 aspect-square h-9"
            >
                {isFavourite ? "♥" : "♡"}
            </button> */}
            <button
                onClick={() => toggleFavourites(movieID)}
                className={`absolute flex text-2xl top-0 right-0 z-20 m-2 p-2 justify-center items-center rounded-full bg-black/50 aspect-square h-9 ${isFavourite && "text-red-500"}`}
            >
                ♥
            </button>
            {/* <p className="absolute flex top-0 right-0 z-20 m-2 p-2 justify-center items-center rounded-full bg-black/50 aspect-square h-8">♥</p> */}
        </div>
    )
}