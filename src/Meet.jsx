import React from "react";
import Navbar from "./Components/Navbar";

export default function MeetPage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-[85vh]">
                <div className="border-accent bg-black border-solid border-[10px] w-[90%] ml-10 h-full sm:border-[20px] rounded-[10px] flex justify-center items-center flex-3 mt-6">

                </div>
                <div className="flex-1 h-full flex-col flex justify-around items-center">
                    <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                        <img src="/Volume.png" className="h-full w-full" alt="Volume" />
                    </div>
                    <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                        <img src="/Camera.png" className="h-full w-full" alt="Volume" />
                    </div>
                    <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                        <img src="/Logo.png" className="h-full w-full" alt="Volume" />
                    </div>
                    <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                        <img src="/Logout.svg" className="h-full w-full" alt="Volume" />
                    </div>
                </div>
            </div>
        </>
    )
}