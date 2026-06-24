import { getPopularMovies, getTrendingMovies, getTopMovies, getPlayingMovies } from "@/lib/api/movie"
import MovieGrid from "@/components/movies/moviegrid"
import Image from "next/image";
import hero from "@/public/images/movies/hero.jpeg"
import { redirect } from "next/navigation";



export default async function MoviePage({ params }: { params: { category: string } }) {
    const { category } = await params;

    const validCategories = ["popular", "trending", "top", "playing"] as const;
    if (!validCategories.includes(category as any)) {
        redirect("/movies/popular");
    }

    let data;
    let title;

    switch (category) {
        case "trending":
            data = await getTrendingMovies();
            title = "Trending Movies"
            break;

        case "top":
            data = await getTopMovies();
            title = "Top Movies"
            break;

        case "playing":
            data = await getPlayingMovies();
            title = "Movies currently in theatre"
            break;

        default:
            data = await getPopularMovies();
            title = "Popular Movies"
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
                    className="object-cover object-left "

                />
            </div>
            <div className="fixed inset-0 bg-black/45" />

            <div className="relative flex flex-col m-5">
                <h3 className="font-bold p-5 text-3xl">{title}</h3>

                <div>
                    <MovieGrid movies={data.results} />
                </div>
            </div>
        </div>
    )
}