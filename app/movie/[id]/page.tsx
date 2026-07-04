import { getMovieDetails, getSimilarMovies } from "@/lib/api/movie";
import { notFound } from "next/navigation";
import MovieRow from "@/components/movies/movierow";
import Image from "next/image";
import Backdrop from "@/components/movie/backdrop";
import image404 from "@/public/images/Image404.png"
import FavouriteButton from "@/components/movies/favbutton";

type Genre = {
    name: string;
}


export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = await params;
    const movie = await getMovieDetails(id);
    const genreList = (movie.genres ?? []).map((genre: Genre) => genre.name).join(", ")
    return {
        title: movie.title,
        description: movie.overview,
        keywords: `${genreList}, ${movie.title}`,

    };
}




export default async function MovieIdPage({ params }: { params: { id: string } }) {

    const { id } = await params;
    let movie;
    try {
        movie = await getMovieDetails(id);
    } catch (err) {
        notFound();
    }

    const similarMovies = await getSimilarMovies(id);

    const moviePosterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null

    const movieBackdropPath = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
        : null;





    return (
        <div>

            {/* Background backdrop */}
            <div className="fixed z-0 inset-0 blur-sm animate-fadeIn">
                {movieBackdropPath && (
                    <Backdrop backdrop_path={movieBackdropPath} />

                )}
            </div>

            {/* contents: title, image, description */}
            <div className="grid grid-cols-4 justify-items-center p-5 gap-8 mb-10">

                <div className=" text-center  col-span-4  relative z-10 p-3 pb-0 mb-2 bg-black/50 rounded-md">
                    <h1 className="text-5xl font-semibold">{movie.title}</h1>
                    <h4 className="text-xl">{movie.release_date.split('-')[0]}</h4>
                </div>

                <div className="relative w-full max-w-55 md:col-span-1 col-span-4 aspect-2/3 size-full ">
                    <FavouriteButton movieID={movie.id} />
                    {moviePosterPath ?
                        <Image
                            fill
                            src={moviePosterPath}
                            alt={movie.title}
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover rounded-xl shadow-gray-700 shadow-md"
                        />
                        :
                        <Image
                            fill
                            src={image404}
                            alt={movie.title}
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover rounded-xl shadow-gray-700 shadow-md"
                        />
                    }
                </div>

                <div className="flex flex-col col-span-4 md:col-span-3 relative z-10 bg-black/50 rounded-xl shadow-gray-700 shadow-md size-full p-5 md:mr-10">

                    {/* <div> */}
                    {movie.tagline &&
                        <h3 className="italic  text-center mb-3">{movie.tagline}</h3>
                    }
                    <h3 className="font-semibold">{movie.overview}</h3>
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
            <div>
                {similarMovies?.results.length > 0 &&
                    <div className="relative z-10 p-10 border-t border-gray-400/50">
                        <MovieRow title="Similar" movies={similarMovies.results} />
                    </div>
                }
            </div>

        </div >
    );
};