import React from "react";
import Navbar from "./Components/Navbar";
import Webcam from "react-webcam";

export default function MeetPage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-[70vh]">
                <div className="border-accent bg-black border-solid border-[10px] w-[60%] h-full rounded-[5px] flex-3 m-3">

                </div>
                <div className="flex-1 h-full flex-col justify-around items-center">
                    <Webcam height={240} width={360} mirrored={true} className="border-accent bg-black border-solid border-[10px] rounded-[5px] min-h-[50%] m-3" />
                    <div className="flex flex-1 py-5 items-center justify-center my-6">
                        <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                            <img src="/mic.png" className="h-full w-full" alt="Volume" />
                        </div>
                        <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                            <img src="/Camera.png" className="h-full w-full" alt="Camera" />
                        </div>
                        <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                            <img src="/sign.png" className="h-full w-full" alt="Logo" />
                        </div>
                        <div className="m-auto mx-2 h-[100px] w-[100px] flex justify-center items-center">
                            <img src="/exit.png" className="h-full w-full" alt="Exit" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}