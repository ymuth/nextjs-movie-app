import { getMovieId } from "@/lib/api/movie";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function MovieIdPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    let movie;

    try {
        movie = await getMovieId(id);
    } catch (err) {
        notFound();
    }

    const moviePosterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const movieBackdropPath = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`




    return (
        <div>

            {/* Background backdrop */}
            <div className="fixed z-0 inset-0 blur-lg">
                <Image
                    src={movieBackdropPath}
                    alt="background"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    fill
                    priority
                    className="object-cover "
                />
            </div>

            {/* contents: title, image, description */}
            <div className="grid grid-cols-4 justify-items-center p-5 gap-8">

                <div className="w-full text-center  col-span-4  relative z-10 m-5">
                    <h1 className="text-5xl font-semibold">{movie.title}</h1>
                    <h4 className="text-xl">{movie.release_date}</h4>
                </div>

                <div className="relative w-full  max-w-[220px] aspect-[2/3] size-full ">
                    <Image
                        fill
                        src={moviePosterPath}
                        alt={movie.title}
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover rounded-xl shadow-gray-700 shadow-md"
                    />
                </div>

                <div className="col-span-3 relative z-10 bg-black/50 rounded-xl shadow-gray-700 shadow-md size-full p-5 mr-10">
                    <h3>{movie.overview}</h3>

                </div>

            </div>

            {/* recommendations */}
            <div>
                
            </div>

        </div >
    );
};