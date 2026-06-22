import {bebasNeue} from "@/lib/fonts"

export default function Home() {
  return (
    <div className="flex flex-col text-center justify-center m-5 p-5" >
      <h1 className={`text-9xl font-semibold border-b-1 ${bebasNeue.className}`}>MUGZ Movies</h1>
      <p className="mt-5 text-xl">Welcome to <strong>MUGZ Movies</strong>.</p>
      <p className="">Where we bring the best movie recommendations to <strong className="underline">you!</strong></p>
    </div>
  );
}
