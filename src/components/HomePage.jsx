import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import MoviesGrid from "./MoviesGrid";

function HomePage() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#204725] to-[#030b07] text-white">
        <Navbar />
        <Searchbar />
        <MoviesGrid />
        <Footer />
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default HomePage;
