import React from "react"; // Import React
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favourites from "./pages/Favourites";

import Navbar from "./components/Navbar";
//import Searchbar from "../components/Searchbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#204725] to-[#030b07] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
