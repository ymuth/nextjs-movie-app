"use client"

import { useState } from "react";
import Image from "next/image"

type Props = {
    backdrop_path: string;
}

export default function Backdrop({ backdrop_path }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Image
            src={backdrop_path}
            alt="background"
            fill
            priority
            sizes="100vw"
            onLoad={() => setLoaded(true)}
            className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"
                }`}
        />
    )
}