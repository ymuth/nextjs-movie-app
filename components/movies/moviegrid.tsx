import MovieCard from "./moviecard";
import type { Movie } from "@/types/movie";

export default function MovieGrid({ movies }: { movies: Movie[] }) {

    return (
        <div className="grid p-5 gap-10 justify-center grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}