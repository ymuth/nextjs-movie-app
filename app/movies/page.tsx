import {getMovies} from "@/lib/api/movie"
import MovieGrid from "@/components/movies/moviegrid"

export default async function MoviePage() {
    const data = await getMovies();


    return (
        <div>
            <div className="absolute bg-fixed inset-0 bg-cover bg-left bg-[url(/images/movies/hero.jpeg)]" />
            <div className="absolute inset-0 bg-black/45"/>

            <div className="relative flex flex-col m-5">
                <h3 className="font-bold pl-5 pt-5">Popular Movies</h3>

                <div>
                    <MovieGrid movies={data.results}/>
                </div>
            </div>
        </div>
    )
}