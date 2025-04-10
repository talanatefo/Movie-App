import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d93715c6e63a832323f7558c63304a39`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Failed to fetch movie details:", error));
  }, [id]);

  if (!movie) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="text-white p-10 bg-[#0F1C14] min-h-screen rounded-2xl xs:mx-2 md:mx-10">

      <div className="flex flex-col md:flex-row gap-10">
        <img
          className="rounded-2xl w-full md:w-1/3"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 italic">{movie.tagline}</p>
          <p><span className="font-semibold">Release Date:</span> {movie.release_date}</p>
          <p><span className="font-semibold">Runtime:</span> {movie.runtime} min</p>
          <p><span className="font-semibold">Rating:</span> {movie.vote_average} / 10</p>
          <p><span className="font-semibold">Genres:</span> {movie.genres.map(g => g.name).join(", ")}</p>
          <div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Overview:</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;