import React from "react";
import Navbar from "../../Components/Navbar/index";

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <div className="flex max-lg:h-full flex-col lg:gap-10 items-center justify-evenly">
        <div className="border-accent bg-black border-solid border-[10px] rounded-lg w-[80%] aspect-[16/9] max-h-[270px] max-w-[480px] mt-6"></div>
        <div className="flex max-lg:flex-col gap-4 w-full items-center justify-around py-6">
          <button className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]">
            Download Subtitled Video
          </button>
          <div>
            <svg
              width="120"
              height="120"
              viewBox="0 0 184 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-lg:hidden"
            >
              <path
                d="M152.159 0.294576L175.323 10.4311L32.6688 197.705L9.5046 187.569L152.159 0.294576Z"
                fill="#CF9FFF"
              />
              <path
                d="M16.2149 178.741L32.4298 198H0L16.2149 178.741Z"
                fill="#CF9FFF"
              />
              <path
                d="M167.785 19.2594L151.57 0H184L167.785 19.2594Z"
                fill="#CF9FFF"
              />
            </svg>
          </div>
          <button className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]">
            Download Video Transcript
          </button>
        </div>
      </div>
    </>
  );
}
