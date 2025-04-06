import React, { useEffect, useState } from "react";
import MovieDetails from "../pages/MovieDetails";
import greenheart from "../assets/greenheart.png";
import unfilledheart from "../assets/unfilledheart.png";

function MoviesGrid({ movieInput }) {
  const [movies, setMovies] = useState([]);
  const[likeMovie, setLikeMovie] =useState(true)

  function favouriteMovie(){
    setLikeMovie(!likeMovie)
  }

  useEffect(() => {
    let url ="https://api.themoviedb.org/3/movie/popular?api_key=d93715c6e63a832323f7558c63304a39"; 
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data", error)); 
  }, []);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-1 grid-rows-2 gap-4 mx-20 mt-5 text-white ">
      {movies.length > 0 ? (
        movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(movieInput.toLowerCase())
          )
          .map((movie, idx) => (
            <div
              className="flex flex-col justify-between p-2 bg-[#152D18] rounded-2xl"
              key={idx}
            >
              <img 
                className="rounded-2xl"
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie.title} 
              />
              <div className="flex justify-between mt-2">
                <div>
                  <p>
                    {movie.title} 
                  </p>
                  <p>{movie.release_date.split('-')[0]}</p>
                </div>
                <div>
                  <button onClick={favouriteMovie}>
                  <img className="w-12 h-12"src={likeMovie?unfilledheart:greenheart} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p>Movies were not found</p> 
      )}
    </div>
  );
}

export default MoviesGrid;
