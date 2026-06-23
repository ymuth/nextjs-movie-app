import type { Movie } from "@/types/movie"


export default function MovieCard({ movie }: { movie: Movie }) {

    const moviePosterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className=" rounded-lg overflow-hidden ">

            <div>
                <img className="aspect-2/3"
                    src={moviePosterPath}
                    alt={movie.title}
                />

            </div>

            <div className=" text-center p-2 bg-[#575757]">
                <h3 className="font-semibold">{movie.title}</h3>
                <p className="italic text-gray-400">{movie.release_date.split("-")[0]}</p>
            </div>


        </div>
    )
}