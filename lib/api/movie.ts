
const apiKey = process.env.TMDB_API_KEY;
const popularMoviesLink = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
 

export async function getMovies() {
    const res = await fetch(
        popularMoviesLink
    ) 

    if (!res.ok) throw new Error("Failed to fetch Movies");

    return res.json();
}