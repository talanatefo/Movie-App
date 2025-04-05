import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex mx-20 mr-10 py-2 ">
     
      
      <Link to="/" className="font-bold text-3xl">
          MOVIES
        </Link>
        <div className="flex justify-between ml-auto ">
      <Link to="/" className="px-5 py-2 font-bold">
          home
        </Link>
        <Link to="/favourites" className="px-5 py-2 font-bold">
        favourites
        </Link>
        <Link to="/login" className="px-5 py-2 font-bold">
        login
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
