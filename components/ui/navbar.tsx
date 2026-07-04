import Link from "next/link";
import { bebasNeue } from "@/lib/fonts";
import SearchBar from "./searchbar";
import DropdownNav from "./dropdownnav";

export default function NavBar() {
    return (
        <nav className="relative z-20">

            {/* Desktop */}
            <div className="hidden md:flex w-full bg-[#161616] relative z-20  align-middle py-2 px-4 border-b-2">

                <div className={`${bebasNeue.className} text-xl`}>
                    <Link href={"/"}>Mugz Movies</Link>
                </div>

                <div className=" flex items-center gap-4 ml-auto">
                    <div className=""><SearchBar /></div>
                    <Link className="hover:underline" href={"/movies"}>Movies</Link>
                    <Link className="hover:underline" href={"/favourites"}>Favourites</Link>
                    <Link className="hover:underline" href={"/about"}>About</Link>
                </div>

            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <DropdownNav />
            </div>


        </nav>
    )
}