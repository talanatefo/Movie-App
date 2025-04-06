import React from "react";
import MoviesGrid from "../components/MoviesGrid";

function Favourites() {
  return (
  
      <div className="h-screen"> 
        <div className="bg-[#152D18] w-2/5 rounded-2xl mx-auto text-white  text-center py-2 ">
          Find all your favourite movies here
        </div>
        <div
              className="flex flex-col justify-between p-2 bg-[#152D18] rounded-2xl h-120 mx-20 mt-10"
              
            >
              <p className="align-center"> Save your favourite movies here.</p>
     
              </div>
        
      </div>
    
  );
}

export default Favourites;
