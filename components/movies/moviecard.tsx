import type { Movie } from "@/types/movie"
import Link from "next/link"
import FavouriteButton from "./favbutton"
import Image from "next/image"
import image404 from "@/public/images/Image404.png"


export default function MovieCard({ movie }: { movie: Movie }) {

    // const moviePosterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    // let moviePosterPath
    // if (!movie.poster_path) {
    //     moviePosterPath = null;
    // } else moviePosterPath = (`https://image.tmdb.org/t/p/w500${movie.poster_path}`)

    const moviePosterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
    const moviePagePath = `/movie/${movie.id}`

    return (
        <div>
            <div className=" relative rounded-xl overflow-hidden shadow-black hover:shadow-md hover:transform-[translateY(-8px)] transition">
                <FavouriteButton movieID={movie.id} />
                <Link href={moviePagePath}>

                    <div>
                        {moviePosterPath ?
                            <Image className="aspect-2/3"
                                src={moviePosterPath}
                                alt={movie.title}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                width={500}
                                height={750}
                            />
                            :
                            <Image className="aspect-2/3"
                                src={image404}
                                alt={movie.title}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                width={500}
                                height={750}
                            />
                        }
                    </div>

                    <div className=" text-center p-2 bg-[#373737] min-h-24">
                        <h3 className="font-semibold">{movie.title}</h3>
                        <p className="italic text-gray-400">{movie.release_date.split("-")[0]}</p>
                    </div>

                </Link>
            </div>
        </div>
    )
}