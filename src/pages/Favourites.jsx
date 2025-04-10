import MoviesGrid from "../components/MoviesGrid";
import React, { useEffect, useState } from "react";
import greenheart from "../assets/greenheart.png";
import { Link } from "react-router-dom";


function Favourites() {
  const [movies, setMovies] = useState([]);
  const[likedMovies, setLikedMovies] = useState(()=>{
    const saved = localStorage.getItem("likedMovies");
    return saved ? JSON.parse(saved) : {};
  })

  useEffect(() => {
      let url ="https://api.themoviedb.org/3/movie/popular?api_key=d93715c6e63a832323f7558c63304a39"; 
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.error("Error fetching data", error)); 
    }, []);

  return (
    <div className="mx-20 mt-5 text-white">
      <h2 className="text-3xl font-bold mb-5">Your Favourite Movies</h2>
      {movies.length > 0 ? (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {movies.map((movie) => (
            (likedMovies[movie.id] ) &&
             (<div
                className="bg-[#152D18] p-2 rounded-2xl"

                key={movie.id}
              >
                
                <Link to={`/movie/${movie.id}`}>
                  <img 
                    className="rounded-2xl "
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={movie.title} 
                  />
                </Link>
                <div className="flex justify-between mt-2">
                  <div>
                    <p>{movie.title}</p>
                    <p>{movie.release_date?.split("-")[0]}</p>
                  </div>
                  <img className="w-12 h-12" src={greenheart} alt="Liked" />
                </div>
              </div> )
          ))}
        </div>
      ) : (
        <div className="h-700">You haven't liked any movies yet.</div>
      )}
    </div>
  );
}

export default Favourites;