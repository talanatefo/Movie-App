import React from "react";
function Searchbar() {
  return (
    <>
      <div className="bg-white w-2/5 rounded-full mx-auto text-gray-500  text-center py-2 ">
        <input
          className="outline-none w-100"
          type="text"
          placeholder="Search any movie "
        />
      </div>
    </>
  );
}

export default Searchbar;
