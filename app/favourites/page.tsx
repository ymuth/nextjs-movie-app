import { getFavouriteMovies } from "@/lib/api/favourites";
import MovieGrid from "@/components/movies/moviegrid";
import hero from "@/public/images/favourites/hero.jpg";
import Image from "next/image";

export default async function FavouritesPage() {
    const favouriteMovies = await getFavouriteMovies();

    if (favouriteMovies.length === 0) {
        return (
            // <div className="p-5">
            //     No favourite movies yet.
            // </div>
            <div>
                <div className="fixed z-0 inset-0">
                    <Image
                        src={hero}
                        alt="background"
                        fill
                        priority
                        placeholder="blur"
                        className="object-fill"

                    />
                </div>
                <div className="fixed inset-0 bg-black/45" />

                <div className="relative m-5 p-5 bg-black/50 rounded-2xl border-gray-400 border w-[50%] ">
                    <h3 className="font-bold text-2xl pb-5">No favourite movies yet.</h3>
                    <p className="text-xl">Heart your favourite movies to see them here!</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="fixed z-0 inset-0">
                <Image
                    src={hero}
                    alt="background"
                    fill
                    priority
                    placeholder="blur"
                    className="object-fill"

                />
            </div>
            <div className="fixed inset-0 bg-black/45" />

            <div className="relative flex flex-col m-5">
                <h3 className="font-bold p-5 text-3xl">Favourites</h3>

                <div>
                    <MovieGrid movies={favouriteMovies} />
                </div>
            </div>
        </div>
    );
}