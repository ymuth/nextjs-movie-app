
const apiKey = process.env.TMDB_API_KEY;
// const searchMoviesURL = `https://api.themoviedb.org/3/movie?api_key=${apiKey}&query=${query}`;
// const similarMoviesURL = `https://api.themoviedb.org/3/movie/${movie_id}/similar`
// const movieDetailsURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`


export async function getPopularMovies() {
    const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    const res = await fetch(popularMoviesURL)

    if (!res.ok) throw new Error("Failed to fetch Movies");

    return res.json();
}

export async function getTrendingMovies() {
    const trendingWeeklyURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    const res = await fetch(trendingWeeklyURL)

    if (!res.ok) throw new Error("Failed to fetch Movies");

    return res.json();
}

export async function getUpcomingMovies() {
    const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    const res = await fetch(upcomingMoviesURL)

    if (!res.ok) throw new Error("Failed to fetch Movies");

    return res.json();
}

export async function getTopMovies() {
    const topMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    const res = await fetch(topMoviesURL)

    if (!res.ok) throw new Error("Failed to fetch Movies");

    return res.json();
}

export async function getPlayingMovies() {
    const nowPlayingMoviesURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    const res = await fetch(nowPlayingMoviesURL)

    if (!res.ok) throw new Error("Failed the fetch Movies");

    return res.json();
}

