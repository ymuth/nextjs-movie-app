"use client"
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./searchbar";


export default function DropdownNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">

            <button onClick={() => setOpen(!open)}>
                ☰
            </button>

            {open && (
                <div className="absolute right-0   bg-[#161616] border rounded-lg shadow-lg">
                    <div className="flex flex-col gap-3 p-4">
                        <SearchBar />
                        <Link href={"/movies"}>Movies</Link>
                        <Link href={"/favourites"}>Favourites</Link>
                        <Link href={"/about"}>About</Link>
                    </div>
                </div>
            )}
        </div>
    )

}