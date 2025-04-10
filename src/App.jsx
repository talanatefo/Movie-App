import React, { useState } from "react"; 
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Favourites from "./pages/Favourites.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { createContext } from "react";
import MovieDetails from "./pages/MovieDetails.jsx";

export const AppContext = createContext();

function App() {
  const [likedMovies, setLikedMovies]=useState([])


  return (
    <div className=" w-screen bg-gradient-to-b from-[#204725] to-[#030b07] text-white">
      <AppContext.Provider value={{likedMovies, setLikedMovies}
    }>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
      <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
