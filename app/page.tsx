import { bebasNeue } from "@/lib/fonts"

export default function Home() {
  return (
    <div>

      <div className="absolute bg-fixed inset-0 z-0  bg-cover bg-center bg-[url(/images/home/hero.jpg)]" />
      <div className="z-0 absolute inset-0 bg-gradient-to-b from-transparent to-[#1e1e1e]" />

      <div className="relative z-10">
        <div className="flex flex-col text-center justify-center m-5 p-5" >

          <h1 className={`text-9xl font-semibold border-b-1 ${bebasNeue.className}`}>MUGZ Movies</h1>
          <p className="mt-5 text-xl">Welcome to <strong>MUGZ Movies</strong>.</p>
          <p className="">Where we bring the best movie recommendations straight to <strong className="underline">you!</strong></p>

        </div>

        <div className="m-5">

          <h3 className="font-semibold underline">Trending Movies.</h3>
          <span></span>
          {/*TODO: movie cards added here */}
        </div>
      </div>

    </div>
  );
}
