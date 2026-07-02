import { cookies } from "next/headers";
import type { Movie } from "@/types/movie";
import { getMovieDetails } from "@/lib/api/movie";

export async function getFavouriteMovies(): Promise<Movie[]> {
    const cookieStore = await cookies();
    const favouritesCookie = cookieStore.get("favourites")?.value;

    if (!favouritesCookie) return [];

    try {
        const favouriteIds = JSON.parse(decodeURIComponent(favouritesCookie)) as number[];

        if (!Array.isArray(favouriteIds) || favouriteIds.length === 0) return [];

        const movies = await Promise.all(
            favouriteIds.map((id) => getMovieDetails(String(id)))
        );

        return movies.filter(Boolean);
    } catch {
        return [];
    }
}
