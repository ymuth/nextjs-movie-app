import MovieCard from "./moviecard";
import type { Movie } from "@/types/movie";

export default function MovieGrid({ movies }: { movies: Movie[] }) {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}