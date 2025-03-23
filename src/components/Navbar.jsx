import React from "react";
function Navbar() {
  return (
    <>
      <div className="flex mx-20 mr-10 py-2 ">
        <div>
          <h1 className="font-bold text-2xl">MOVIES</h1>
        </div>
        <div className="flex justify-between ml-auto ">
          <p
            className="px-5 py-2 
font-bold"
          >
            home
          </p>
          <p className="px-5 py-2">favourites</p>
          <p className="px-5 py-2">login</p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
