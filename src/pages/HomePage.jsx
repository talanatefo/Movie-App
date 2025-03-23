import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import MoviesGrid from "../components/MoviesGrid";

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
