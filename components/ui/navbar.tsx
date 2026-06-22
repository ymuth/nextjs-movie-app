import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between align-center py-2 px-4 border-b-2">

            <div>
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