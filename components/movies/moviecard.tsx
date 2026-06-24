import type { Movie } from "@/types/movie"


export default function MovieCard({ movie }: { movie: Movie }) {

    const moviePosterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="rounded-xl overflow-hidden shadow-black hover:shadow-md hover:transform-[translateY(-8px)]  transition">

            <div>
                <img className="aspect-2/3"
                    src={moviePosterPath}
                    alt={movie.title}
                />

            </div>

            <div className=" text-center p-2 bg-[#373737] min-h-24">
                <h3 className="font-semibold">{movie.title}</h3>
                <p className="italic text-gray-400">{movie.release_date.split("-")[0]}</p>
            </div>


        </div>
    )
}