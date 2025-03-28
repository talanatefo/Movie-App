import React, { useEffect } from "react";

import MovieCard from "./MovieCard";

function MoviesGrid() {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    let url =
      " https://api.themoviedb.org/3/discover/movie?api_key=d93715c6e63a832323f7558c63304a39";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("error fetching data"));
  });

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4  mx-20 mt-5 text-gray-500 ">
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />
          <p>
            {movie.title} {movie.year}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
