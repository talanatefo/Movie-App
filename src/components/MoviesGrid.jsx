import React from "react";
import MovieCard from "./MovieCard";
function MoviesGrid() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4 h-92 mx-20 mt-5 ">
      <MovieCard />
    </div>
  );
}

export default MoviesGrid;
