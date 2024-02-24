import React from "react";
import Navbar from "../../Components/Navbar/index";
import axios from "axios";

export default function DownloadPage() {

  return (
    <>
      <Navbar />
      <div className="flex max-lg:h-full flex-col lg:gap-10 items-center justify-evenly">
        <div className="border-accent bg-black border-solid border-[10px] rounded-lg w-[80%] aspect-[16/9] max-h-[270px] max-w-[480px] mt-6"></div>
        <div className="flex max-lg:flex-col gap-4 w-full items-center justify-around py-6">
          <button className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]">
            Download Transcript as PDF
          </button>
          <button className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]" onClick={handleDownload}>
            Download Audio
          </button>
          <button className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]">
            Download video
          </button>
        </div>
      </div>
    </>
  );
}
