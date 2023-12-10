import React from "react";
import Navbar from "./Components/Navbar";

export default function LandingPage() {
  return (
    <>
      <div className=" flex flex-col items-stretch pb-6 h-screen">
        <Navbar className="!absolute !left-0 !top-0" />
        <div className="self-center flex max-w-screen-lg mx-auto flex-col flex-wrap items-stretch mt-36 px-px max-md:mt-10">
          <div className="px-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                <h2 className="text-white text-5xl font-inter font-extrabold my-auto max-md:text-4xl max-md:mt-10">
                  <span className=" text-[96px]">Project <br /> Seigei </span>
                  <br /> <br />
                  <span className="text-[20px]"> Translating Silence.</span>
                </h2>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="/src/assets/Seigei.png" />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/src/assets/arrow.png"
            className="h-[200px] w-[200px]" />
        </div>
      </div>
    </>
  )
};