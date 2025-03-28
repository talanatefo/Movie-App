import React from "react";
import MoviesGrid from "../components/MoviesGrid";

function Favourites() {
  return (
    <>
      <div>
        <div className="bg-[#152D18] w-2/5 rounded-2xl mx-auto text-white  text-center py-2 ">
          Find all your favourite movies here
        </div>

        <MoviesGrid />
      </div>
    </>
  );
}

export default Favourites;
