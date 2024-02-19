import React, { useState } from "react";
import Navbar from "../../Components/Navbar/index";
import LoginCard from "../../Components/Login/index";
import Footer from "@/Components/Footer";


export default function SignIn() {

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center md:h-[80svh] my-6">
        <div className="flex flex-col flex-1 justify-center ml-10 flex-shrink-[2]">
          <div className="font-inter text-textc font-extrabold lg:text-7xl text-5xl py-8">
            Log-In Or
            <br />
            Sign-Up For
            <br />
            An Account
          </div>
          <div className="font-inter text-textc font-bold lg:text-xl text-lg">
            Registered users have access to real-time translation
          </div>
        </div>
        <div className="flex-1 mx-4 my-10 flex-shrink-0 min-w-[360px]">
          <LoginCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
