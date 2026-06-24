import { bebasNeue } from "@/lib/fonts"
import Image from "next/image";
import hero from "@/public/images/home/hero.jpg"
import MovieRow from "@/components/movies/movierow";
import { getTrendingMovies } from "@/lib/api/movie";

export default async function Home() {
  const data = await getTrendingMovies();
  return (
    <div>

      {/* background and fade */}

      <div className="fixed inset-0 z-0">
        <Image
          src={hero}
          alt="background"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
      </div>
      <div className="z-0 fixed absolute inset-0 bg-gradient-to-b from-transparent to-[#1e1e1e]" />

      {/* Title and desc */}
      <div className="relative z-10">
        <div className="flex flex-col text-center justify-center m-5 p-5" >

          <h1 className={`text-9xl font-semibold border-b-1 ${bebasNeue.className}`}>MUGZ Movies</h1>
          <p className="mt-5 text-xl">Welcome to <strong>MUGZ Movies</strong>.</p>
          <p className="">Where we bring the best movie recommendations straight to <strong className="underline">you!</strong></p>

        </div>

        <div className="m-5">

          <MovieRow title="Trending Movies" movies={data.results}/>
        </div>
      </div>

    </div>
  );
}
