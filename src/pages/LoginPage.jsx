import React from "react";
import backdrop from "../assets/backdrop.jfif";
function LoginPage() {
  return (
    <>
      <div className="bg-black font-bold w-2/5 rounded-2xl mx-auto text-green-400  text-center py-2 ">
        <h3>Watch the latest movies till you drop!</h3>
      </div>
      <div className=" grid grid-cols-2 gap-2 mx-15 mt-15">
        <div className="bg-[#152D18] rounded-2xl  ">
          <form>
            <div className="flex-col p-10">
              <div className="bg-[#152D18] h-20">
                <h1 className="text-4xl font-bold text-center pt-5">LOGIN</h1>
              </div>
              <div className="h-20 mt-20 pt-5 bg-[#204725] rounded-2xl text-center text-xl">
                <input
                  className="outline-none w-100"
                  type="email"
                  placeholder="enter email address"
                />
              </div>
              <div className="h-20 mt-4 pt-5  bg-[#204725] rounded-2xl text-center text-xl ">
                <input
                  className="outline-none w-100"
                  type="password"
                  placeholder="enter password"
                />
              </div>
              <div className="h-20 mt-20 pt-5 bg-[#204725] rounded-2xl text-center">
                <button type="submit" className="text-2xl  ">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className=" rounded-2xl bg-[#152D18] ">
          <img className="rounded-2xl" src={backdrop} alt="" />
          {/* <div className=" h-40 w-35 p-2 bg-[#152D18] rounded-2xl "></div> */}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
