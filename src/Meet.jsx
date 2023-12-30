import React from "react";
import Navbar from "./Components/Navbar";
import Webcam from "react-webcam";

export default function MeetPage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-[80svh]">
                <div className="flex-col flex-1 h-full">
                    <div className="border-accent bg-black border-solid border-[10px] min-w-full rounded-[5px] min-h-[80%] m-3">
                    </div>
                    <div className="flex py-2 items-center justify-around my-6">
                        <div className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3">
                            <img src="/mic.png" className="h-full w-full" alt="Volume" />
                        </div>
                        <div className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3">
                            <img src="/Camera.png" className="h-full w-full" alt="Camera" />
                        </div>
                        <div className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3">
                            <img src="/sign.png" className="h-full w-full" alt="Logo" />
                        </div>
                        <div className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3">
                            <img src="/exit.png" className="h-full w-full" alt="Exit" />
                        </div>
                    </div>
                </div>
                <div className="flex-[0.5] flex flex-col justify-center items-center">
                    <Webcam height={240} width={360} mirrored={true} className="border-accent bg-black border-solid border-[10px] rounded-[5px] min-h-[50%] m-3" />
                </div>
            </div>
        </>
    )
}