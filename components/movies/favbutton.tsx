"use client"
import { Movie } from "@/types/movie";
import { useContext } from "react";
import { FavouritesContext } from "@/context/favcontext";


export default function FavouriteButton({ movieID }: { movieID: Movie["id"] }) {

    const context = useContext(FavouritesContext);
    if (!context) return null;

    const { favourites, toggleFavourites } = context;
    const isFavourite = favourites.includes(movieID);

    return (

        <div>
            <button
                onClick={() => toggleFavourites(movieID)}
                className="absolute flex text-2xl top-0 right-0 z-20 m-2 p-2 justify-center items-center rounded-full bg-black/50 aspect-square h-9"
            >
                {isFavourite ? "♥" : "♡"}
            </button>
            {/* <p className="absolute flex top-0 right-0 z-20 m-2 p-2 justify-center items-center rounded-full bg-black/50 aspect-square h-8">♥</p> */}
        </div>
    )
}