import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <div className="w-screen bg-black h-20 grid sm:grid-cols-2  md:grid-cols-3 xs:grid-cols-2 justify-between mt-10 px-20 py-5 ">
      <div className="md:block hidden">
        <h1 className="text-3xl font-bold pt-4 ">MOVIES</h1>
      </div>
      <div className="bg-white rounded-full mx-auto w-50 h-12 flex justify-between py-2 px-3">
        <div>
          <img className="w-10 " src={facebook} alt="" />
        </div>
        <div>
          <img className="w-8 mt-1" src={instagram} alt="" />
        </div>
        <div>
          <img className=" mt-1" src={twitter} alt="" />
        </div>
      </div>
      <div className="pt-6 ml-20 xs:block ">
        <p>&copy; 2025 Talana Tefo</p>
      </div>
    </div>
  );
}

export default Footer;
