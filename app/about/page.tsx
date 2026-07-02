export default function AboutPage() {
    return (
        <div className="m-10 text-center flex justify-between h-full flex-col flex-1">
            <h1 className="text-3xl p-2 mb-3">
                About us.
            </h1>
            <p className="p-2">
                Fully built in nextJS and react using the TMDB api
            </p>
            <p className="p-2">
                Github: https://github.com/ymuth/nextjs-movie-app
            </p>
            <p className="p-2">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
            </p>
        </div>
    )
}