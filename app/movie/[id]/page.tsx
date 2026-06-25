import { getMovieId } from "@/lib/api/movie";
import { notFound } from "next/navigation";

export default async function MovieIdPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    let movie;

    try {
        movie = await getMovieId(id);
    } catch (err) {
        notFound();
    }



    return (
        <div>

            <div className="">
                {movie.title}

            </div>
        </div >
    );
};