import React from "react";
import Navbar from "./Components/Navbar/index";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-around h-[80svh] w-full">
                <div className="md:flex-1 font-inter text-[48px] md:text-[96px] w-full font-extrabold text-white py-6 md:py-16 px-6 text-center">
                    Interpret <br /> with Seigei
                </div>
                <div className="flex-1 flex flex-col gap-5 md:gap-10 items-center justify-around">
                    <div className="border-accent bg-black border-solid border-[10px] rounded-[10px] flex justify-center items-center w-[80%] flex-1 mt-6 md:mt-12">
                        <img src="/upload.png" className="h-[80px] w-[80px] md:h-[120px] md:w-[120px]" alt="Upload" />
                    </div>
                    <button className="bg-primary font-inter font-bold text-white border-none rounded-[10px] py-3 md:py-6 text-lg md:text-2xl w-[80%] cursor-pointer"
                    onClick={() => navigate('/Download')}
                    >
                        Upload Video
                    </button>
                </div>
            </div>
        </>
    );
}
