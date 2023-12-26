import React from "react";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

  const navigate = useNavigate()

  return (
    <>
      <div className=" flex flex-col items-stretch pb-6">
        <Navbar />
        <div className="self-center flex max-w-screen-lg mx-auto flex-col flex-wrap items-stretch mt-36 px-px max-md:mt-10">
          <div className="px-5 max-md:max-w-full">
            <div className="flex gap-x-[96px] max-md:flex-col max-md:items-stretch max-md:gap-0">
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
                  src="/Seigei.png" />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/Arrow.png"
            className="h-[200px] w-[200px]" />
        </div>
        <div className="flex flex-col w-full sm:flex-row py-[33vh] ">
          <div className="m-auto max-md:w-full max-md:ml-0">
            <button className="text-white bg-inherit border-none cursor-pointer text-5xl font-extrabold my-auto max-md:text-4xl max-md:mt-10"
            onClick={() => navigate('/Chat')}
            >
              VIDEO CHAT
            </button>
          </div>
          <div className="m-auto max-md:w-full max-md:ml-0">
            <svg width="184" height="198" viewBox="0 0 184 198" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.159 0.294576L175.323 10.4311L32.6688 197.705L9.5046 187.569L152.159 0.294576Z" fill="#CF9FFF" />
              <path d="M16.2149 178.741L32.4298 198H0L16.2149 178.741Z" fill="#CF9FFF" />
              <path d="M167.785 19.2594L151.57 0H184L167.785 19.2594Z" fill="#CF9FFF" />
            </svg>
          </div>
          <div className="m-auto max-md:w-full max-md:ml-0">
            <button className="text-white text-5xl font-inter bg-inherit border-none cursor-pointer font-extrabold whitespace-nowrap my-auto max-md:text-4xl max-md:mt-10"
            onClick={() => navigate('/Upload')}
            >
              INTERPRETER
            </button>
          </div>
        </div>
      </div>

    </>
  )
};