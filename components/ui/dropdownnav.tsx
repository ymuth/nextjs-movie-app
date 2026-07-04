"use client"
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./searchbar";
import { bebasNeue } from "@/lib/fonts";


export default function DropdownNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-[#161616] w-full border-b-2">

            {/* Top Bar */}
            <div className="flex w-full justify-between items-center py-2 px-4">

                <div className={`${bebasNeue.className} text-xl`}>
                    <Link href={"/"} onClick={() => setOpen(false)}>Mugz Movies</Link>
                </div>

                {/* Toggle */}
                <button className="text-xl p-2" onClick={() => setOpen(!open)}>
                    {open ? "✕" : "☰"}
                </button>

            </div>

            {/* Expandable Menu */}
            {open && (
                <div className="w-full bg-[#121212] border-t transition-all">
                    <div className="flex flex-col p-4 gap-4">
                        <SearchBar />
                        <Link className="hover:underline" href="/movies" onClick={() => setOpen(false)}>Movies</Link>
                        <Link className="hover:underline" href="/favourites" onClick={() => setOpen(false)}>Favourites</Link>
                        <Link className="hover:underline" href="/about" onClick={() => setOpen(false)}>About</Link>
                    </div>
                </div>
            )}
        </div>
    )

}