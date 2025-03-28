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
    <div className="grid grid-cols-6 grid-rows-2 gap-4  mx-20 mt-5 text-white ">
      {movies.map((movie) => (
        <div
          className="flex flex-col justify-between  p-2 bg-[#152D18] rounded-2xl "
          key={movie.id}
        >
          <img
            className="rounded-2xl"
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          />
          <div className="flex justify-between">
            <div>
              <p>
                {movie.title} {movie.year}
              </p>
            </div>
            <div>
              <button className="btn">
                <svg
                  className="mx-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
