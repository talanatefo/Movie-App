import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import MoviesGrid from "../components/MoviesGrid";

function Favourites() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#204725] to-[#030b07] text-white">
        <Navbar />
        <div className="bg-[#152D18] w-2/5 rounded-2xl mx-auto text-white  text-center py-2 ">
          Find all your favourite movies here
        </div>

        <MoviesGrid />
        <Footer />
      </div>
    </>
  );
}

export default Favourites;
