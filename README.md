This is a [Next.js](https://nextjs.org) project created with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## This Project (quick overview)

- A Next.js app that lists movies and supports favouriting.
- Favourites are stored client-side as an array of movie IDs and synced to a cookie so the server can render a SEO-friendly favourites page without exposing the TMDB API key.

## Requirements

- Node 18+ (recommended)
- A TMDB API key (see below)

## Setup

1. Install deps:

```bash
npm install
```

2. Create a local env file (do NOT commit this):

Create a file named `.env.local` in the project root and add your TMDB API key:

```
TMDB_API_KEY=your_tmdb_api_key_here
```

Note: The app calls TMDB from the server (not the browser), so the key must remain secret. Do not prefix it with `NEXT_PUBLIC_`.

3. Run the dev server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
npm start
```

## How the favourites flow works (brief architecture)

- Client: `context/favcontext.tsx` stores `favourites` as a `number[]` (movie IDs) in `localStorage`. A `FavouriteButton` toggles IDs in that array.
- Sync: The context also writes a `favourites` cookie (JSON-encoded IDs). This cookie is readable by the server during SSR.
- Server: The favourites page (`app/favourites/page.tsx`) is a server component. It uses the helper `lib/api/favourites.ts` which reads the `favourites` cookie via `next/headers` and calls the TMDB API (using `process.env.TMDB_API_KEY`) to fetch full movie objects. The page then renders `MovieGrid` with `Movie[]`.

This keeps the TMDB key on the server, preserves SEO for the favourites page, and keeps client toggling responsive.

## Resources

- TMDB API docs: https://developers.themoviedb.org/3
- Next.js docs: https://nextjs.org/docs
