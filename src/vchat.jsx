import React, { useEffect, useRef } from 'react';
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";
import Webcam from 'react-webcam';

export default function ChatPage() {

    const navigate = useNavigate()
    // const videoRef = useRef();

    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({ video: true })
    //         .then(stream => {
    //             let video = videoRef.current;
    //             video.srcObject = stream;
    //             video.play();
    //         })
    //         .catch(err => {
    //             console.log("Something went wrong!", err);
    //         });
        
    // }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col sm:flex-row justify-around items-center h-[85vh]">
                <div className="flex-1 flex justify-center w-full items-center h-full text-white font-inter font-extrabold text-[48px] px-8">
                    Video Chat <br></br>with real time ISL Interpretter
                </div>
                <div className="flex-[1] flex flex-col justify-around items-center h-full">
                        {/* <video ref={videoRef} width="100%" height="100%" /> */}
                        <Webcam audio={true} className='border-accent w-[70%] border-solid border-[10px] sm:border-[20px] rounded-[10px] flex justify-center items-center flex-[2] mt-6'></Webcam>
                    <div className="flex-[0.8] flex w-[70%] justify-around">
                        <button className="bg-greenbtn rounded-[10px] border-none flex-1 mx-1 my-4 text-white font-inter font-bold text-[20px] cursor-pointer"
                            onClick={() => navigate('/Meet')}
                        > Start Meet </button>
                        <button className="bg-primary rounded-[10px] border-none flex-1 mx-1 my-4 text-white font-inter font-bold text-[20px] cursor-pointer"> Join Meet </button>
                    </div>
                    <button className="flex-[0.6] w-[70%] border-none rounded-[10px] font-inter text-[20px] font-bold mx-1 mb-4 cursor-pointer">
                        Meet code
                    </button>

                </div>
            </div>
        </>
    )
}