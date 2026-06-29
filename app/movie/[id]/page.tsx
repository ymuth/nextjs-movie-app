import { getMovieId, getSimilarMovies } from "@/lib/api/movie";
import { notFound } from "next/navigation";
import MovieRow from "@/components/movies/movierow";
import Image from "next/image";
import Backdrop from "@/components/movie/backdrop";

type Genre = {
    name: string;
}


export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = await params;
    const movie = await getMovieId(id);
    const genreList = (movie.genres ?? []).map((genre: Genre) => genre.name).join(", ")
    return {
        title: movie.title,
        description: movie.overview,
        keywords: genreList,

    };
}




export default async function MovieIdPage({ params }: { params: { id: string } }) {

    const { id } = await params;
    let movie;
    try {
        movie = await getMovieId(id);
    } catch (err) {
        notFound();
    }

    const moviePosterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null

    const movieBackdropPath = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
        : null;

    const similarMovies = await getSimilarMovies(id);




    return (
        <div>

            {/* Background backdrop */}
            <div className="fixed z-0 inset-0 blur-md animate-fadeIn">
                {movieBackdropPath && (
                    <Backdrop backdrop_path={movieBackdropPath} />

                )}
            </div>

            {/* contents: title, image, description */}
            <div className="grid grid-cols-4 justify-items-center p-5 gap-8 mb-10">

                <div className="w-full text-center  col-span-4  relative z-10 m-5">
                    <h1 className="text-5xl font-semibold">{movie.title}</h1>
                    <h4 className="text-xl">{movie.release_date.split('-')[0]}</h4>
                </div>

                <div className="relative w-full  max-w-[220px] aspect-[2/3] size-full ">
                {moviePosterPath &&
                    <Image
                        fill
                        src={moviePosterPath}
                        alt={movie.title}
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover rounded-xl shadow-gray-700 shadow-md"
                    />
                    }
                </div>

                <div className="flex flex-col col-span-3 relative z-10 bg-black/50 rounded-xl shadow-gray-700 shadow-md size-full p-5 mr-10">

                    {/* <div> */}
                    <h3 className="italic  text-center">{movie.tagline}</h3>
                    <h3 className="font-semibold my-3">{movie.overview}</h3>
                    {/* </div> */}

                    <ul className="mt-auto">
                        <li>Status — {movie.status}</li>
                        <li>Runtime — {movie.runtime} minutes</li>
                        <li>Origin Country — {movie.origin_country}</li>
                        <li>Release Date — {movie.release_date}</li>
                        <li>Genres — {movie.genres?.map((genre: Genre) => genre.name).join(", ")}</li>
                    </ul>

                </div>

            </div>

            {/* recommendations */}
            <div className="relative z-10 p-10 border-t-1 border-gray-400/50">
                <MovieRow title="Similar" movies={similarMovies.results} />
            </div>

        </div >
    );
};