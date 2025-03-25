import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import MoviesGrid from "../components/MoviesGrid";

function HomePage() {
  return (
    <>
      <div>
        <Searchbar />
        <MoviesGrid />
      </div>
    </>
  );
}

export default HomePage;
