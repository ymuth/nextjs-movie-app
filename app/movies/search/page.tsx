import MovieGrid from "@/components/movies/moviegrid"
import Image from "next/image";
import hero from "@/public/images/movies/hero.jpeg"
import { redirect } from "next/navigation";
import { getSearchMovies } from "@/lib/api/movie";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const { q } = await searchParams;
    let movieSearch;

    if (!q) {
        redirect("/movies")
    }

    movieSearch = await getSearchMovies(q);



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

            {movieSearch.results.length > 0 ?

                <div className="relative flex flex-col m-5">
                    <h3 className="font-bold p-5 text-3xl">Search for: {q}</h3>

                    <div>
                        <MovieGrid movies={movieSearch.results} />
                    </div>
                </div>
                :
                <div className=" text-center text-3xl relative z-10 mt-20">No movies found ): </div>
            }
        </div>
    )
}