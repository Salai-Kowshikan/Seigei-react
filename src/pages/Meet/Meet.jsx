import React from "react";
import Navbar from "../../Components/Navbar/index";
import Webcam from "react-webcam";

export default function MeetPage() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center h-[80svh]">
                <div className="flex-col flex-1 h-full">
                    <div className="border-accent bg-black border-solid border-[10px] min-w-full rounded-[5px] min-h-[80%] m-3 relative">
                        <Webcam height={120} width={180} mirrored={true} className="border-accent flex-1 bg-black border-solid border-[10px] rounded-[5px] min-h-[40%] m-3 absolute bottom-0 right-0" />
                    </div>
                    <div className="flex py-2 items-center justify-around my-6">
                        <button className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3 border-none cursor-pointer">
                            <img src="/mic.png" className="h-full w-full" alt="Volume" />
                        </button>
                        <button className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3 border-none cursor-pointer">
                            <img src="/Camera.png" className="h-full w-full" alt="Camera" />
                        </button>
                        <button className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3 border-none cursor-pointer">
                            <img src="/sign.png" className="h-full w-full" alt="Logo" />
                        </button>
                        <button className="m-auto mx-2 h-[75px] w-[75px] flex justify-center items-center bg-black rounded-full p-3 border-none cursor-pointer">
                            <img src="/exit.png" className="h-full w-full" alt="Exit" />
                        </button>
                    </div>
                </div>
                <div className="flex-[0.5] flex flex-col justify-center items-center px-8">
                    <div className="min-w-[25svw] bg-black m-4 bg-opacity-60 flex flex-col rounded-lg flex-grow">
                        <div className="bg-primary rounded-t-lg">
                            <h2 className="text-white font-inter font-extrabold text-center">Meeting Chat</h2>
                        </div>
                        <div className="flex-grow">

                        </div>
                        <div className="p-4">
                            <input className="bg-black text-white border-none rounded-xl w-full py-2 px-3 placeholder-white" placeholder="Enter message to send" type="text" />
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="flex h-[80vh]">
                <div className="flex-grow flex flex-col">
                    <div className="border-accent bg-black border-solid border-[10px] w-[800px] min-h-[70%] rounded-[5px] m-3">
                    </div>
                    <div className="flex">
                        <div>
                            <Webcam height={240} width={360} mirrored={true} className="border-accent bg-black border-solid border-[10px] rounded-[5px] min-h-[50%] m-3" />
                        </div>
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
                <div className="w-[20svw] bg-black m-4 bg-opacity-60 flex flex-col rounded-lg">
                    <div className="bg-primary rounded-t-lg">
                        <h2 className="text-white font-inter font-extrabold text-center">Meeting Chat</h2>
                    </div>
                    <div className="flex-grow">

                    </div>
                    <div className="p-4">
                        <input className="bg-black text-white border-none rounded-xl w-full py-2 px-3 placeholder-white" placeholder="Enter message to send" type="text" />
                    </div>

                </div>
            </div> */}
        </>
    )
}