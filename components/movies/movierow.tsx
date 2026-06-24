import MovieCard from "./moviecard";
import type { Movie } from "@/types/movie";

type Props = {
    title: string;
    movies: Movie[];
}

export default function MovieRow({ title, movies }: Props) {

    return (
        <div className="mb-10">

            {/* header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold p-1">{title}</h3>

                <a
                    href="/movies"
                    className="p-1 px-2 border-2 border-[#575757] rounded-3xl bg-gray-800/50 no-underline hover:underline hover:shadow-sm shadow-white"
                >
                    Explore more
                </a>
            </div>

            {/* Movie Row */}
            <div className="flex gap-4 overflow-x-auto pb-3  scrollbar-thumb-black">
                {
                    movies.map((movie) => (
                        <div key={movie.id} className="min-w-40 ">
                            <MovieCard movie={movie}/>
                        </div>))
                }
            </div>

        </div>
    )
}