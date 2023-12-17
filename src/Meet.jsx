import React from "react";
import Navbar from "./Components/Navbar";

export default function MeetPage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center flex-col h-[85vh]">
                <div className="border-accent bg-black border-solid border-[10px] h-full sm:border-[20px] rounded-[10px] flex justify-center items-center w-[50%] flex-3 mt-6">

                </div>
                <div className="flex-1 h-full">
                    <img src="public\Volume.png" className="h-[150px] w-[150px]" alt="Volume" />
                    <img src="public\Volume.png" className="h-[150px] w-[150px]" alt="Volume" />
                    <img src="public\Volume.png" className="h-[150px] w-[150px]" alt="Volume" />
                    <img src="public\Volume.png" className="h-[150px] w-[150px]" alt="Volume" />
                </div>
            </div>
        </>
    )
}