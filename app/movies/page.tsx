import {getMovies} from "@/lib/api/movie"
import MovieGrid from "@/components/movies/moviegrid"
import Image from "next/image";
import hero from "@/public/images/movies/hero.jpeg"


export default async function MoviePage() {
    const data = await getMovies();


    return (
        <div>
            <div className="fixed z-0 inset-0">
            <Image
                src={hero}
                alt="background"
                fill
                priority
                placeholder="blur"
                className="object-cover object-left "
            
            />
            </div>
            <div className="fixed inset-0 bg-black/45"/>

            <div className="relative flex flex-col m-5">
                <h3 className="font-bold p-5 text-3xl">Popular Movies</h3>

                <div>
                    <MovieGrid movies={data.results}/>
                </div>
            </div>
        </div>
    )
}