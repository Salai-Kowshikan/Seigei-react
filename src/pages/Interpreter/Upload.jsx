import React from "react";
import Navbar from "../../Components/Navbar/index";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-around h-full md:h-[80svh] w-full">
                <div className="md:flex-1 flex-[7] flex justify-center items-center font-inter lg:text-8xl text-6xl w-full font-extrabold text-white py-6 md:py-16 px-6 flex-shrink-[2]">
                    Interpret <br /> with Seigei
                </div>
                <div className="md:flex-1 flex-[11] flex flex-col md:gap-10 items-center justify-evenly md:justify-around">
                    <div className="border-accent bg-black border-solid border-[10px] rounded-lg flex justify-center items-center aspect-[16/9] w-[80%] md:mt-12">
                        <img src="/upload.png" className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]" alt="Upload" />
                    </div>
                    <button className="bg-primary font-inter font-bold text-white border-none rounded-lg py-3 md:py-6 text-lg md:text-2xl w-[80%] cursor-pointer"
                    onClick={() => navigate('/Download')}
                    >
                        Upload Video
                    </button>
                </div>
            </div>
        </>
    );
}
