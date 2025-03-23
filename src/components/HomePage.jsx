import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#204725] to-[#2A1010] text-white">
        <Navbar />
        <Searchbar />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
