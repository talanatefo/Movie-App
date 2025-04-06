import React, { useState } from "react";
import { Link } from "react-router-dom"
import menu from "../assets/menu.svg";

function Navbar() {
  const[menubar, setMenubar]=useState(true)

  function displayMenu(){
    setMenubar(!menubar)
  }
  return (
    <div className="flex mx-20 mr-10 py-2 ">
      
      <Link to="/homepage" className="font-bold text-3xl">
          MOVIES
        </Link>
        <div className="ml-auto mt-1 block md:hidden sm:block ">
      <img onClick={displayMenu} className="w-8 h-8 " src={menu} alt="" />
      </div>
        {menubar? (
           <div className="
           flex justify-between ml-auto hidden md:block
           "
           >
         <Link to="/homepage" className="px-5 py-2 font-bold">
             home
           </Link>
           <Link to="/favourites" className="px-5 py-2 font-bold">
           favourites
           </Link>
           <Link to="/" className="px-5 py-2 font-bold">
           login
           </Link>
         </div>
        ): <div>
          
           <div className="
        flex flex-col justify-between ml-auto block md:hidden
        "
        >
      <Link to="/homepage" className="px-5 py-2 font-bold">
          home
        </Link>
        <Link to="/favourites" className="px-5 py-2 font-bold">
        favourites
        </Link>
        <Link to="/" className="px-5 py-2 font-bold">
        login
        </Link>
      </div>
        </div>  }
       
     
    </div>
  );
}
export default Navbar;
