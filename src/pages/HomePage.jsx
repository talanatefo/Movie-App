import React, { useState } from "react";
import MoviesGrid from "../components/MoviesGrid";

function HomePage() {
  const [movieInput, setMovieInput] = useState("");

  function searchMovies(movieInput){
    if (movieInput === "" ){return } else{<MoviesGrid movieInput={movieInput}/>}
  }

  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}}>
      <div className="bg-white w-2/5 rounded-full mx-auto text-gray-500  text-center py-2 grid grid-cols-2 gap-20 ">
     
        
         <div> <input
          className="outline-none w-80 px-2 "
          type="text"
          placeholder="Search any movie "
          onChange={(e) => setMovieInput(e.target.value)}
          value={movieInput}
        />
        </div>
        <div className="hidden sm:block ml-30">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      <div>
      
        <MoviesGrid movieInput={movieInput}/>
      </div>
      </form>

      </div>
  );
}

export default HomePage;
