import React from "react";
import background from "../assets/background.png";
import { useNavigate } from 'react-router-dom'


function LoginPage() {

  const navigate = useNavigate();


  function goToHome(e){
    e.preventDefault();
    navigate('/homepage')
  }
  return (
    <div className="py-15"
    style={{ backgroundImage: `url(${background})` }}
  >
      <div className="bg-black font-bold w-2/5 rounded-2xl mx-auto  text-green-400  text-center py-2 ">
        <h3>Login to watch the latest movies!</h3>
      </div>
      <div className=" mt-15 w-2/5 text-center mx-auto ">
        <div className="bg-[#152D18] rounded-2xl  ">
          <form onSubmit={goToHome}>
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
      
        
          {/* <div className=" h-40 w-35 p-2 bg-[#152D18] rounded-2xl "></div> */}
        
      </div>
      </div>
    
  );
}

export default LoginPage;
