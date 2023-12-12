import React from "react";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="flex flex-col sm:flex-row justify-around h-[70vh] w-full">
                <div className="flex-1 font-inter text-[48px] sm:text-[96px] w-full font-extrabold text-white py-6 sm:py-16 px-6">
                    Interpret <br /> with Seigei
                </div>
                <div className="flex-1 flex flex-col gap-5 sm:gap-10 items-center justify-around">
                    <div className="border-accent bg-black border-solid border-[10px] sm:border-[20px] rounded-[10px] flex justify-center items-center w-[80%] flex-1 mt-6 sm:mt-12">
                        <img src="/src/assets/upload.png" className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]" alt="Upload" />
                    </div>
                    <button className="bg-primary font-inter font-bold text-white border-none rounded-[10px] py-3 sm:py-6 text-lg sm:text-2xl w-[80%] cursor-pointer"
                    onClick={() => navigate('/Download')}
                    >
                        Upload Video
                    </button>
                </div>
            </div>
        </>
    );
}
