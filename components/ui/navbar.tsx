import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { bebasNeue } from "@/lib/fonts";

export default function NavBar() {
    return (
        <nav className="bg-[#161616] relative z-20 flex justify-between align-middle py-2 px-4 border-b-2">

            <div className={`${bebasNeue.className} text-xl`}>
                <Link href={"/"}>Mugz Movies</Link>
            </div>

            <div className="flex gap-4">
                <Link href={"/movies"}>Movies</Link>
                <Link href={"/favourites"}>Favourites</Link>
                <Link href={"/about"}>About</Link>
            </div>


        </nav>
    )
}