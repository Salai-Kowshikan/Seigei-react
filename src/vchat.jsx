import React from "react";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {

    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className="flex flex-col sm:flex-row justify-around items-center h-[85vh]">
                <div className="flex-1 flex justify-center w-full items-center h-full text-white font-inter font-extrabold text-[48px] px-8">
                    Video Chat <br></br>with real time ISL Interpretter
                </div>
                <div className="flex-[1] flex flex-col justify-around items-center h-full">
                    <div className="border-accent w-[70%] bg-black border-solid border-[10px] sm:border-[20px] rounded-[10px] flex justify-center items-center flex-[2] mt-6">
                    </div>
                    <div className="flex-[0.8] flex w-[70%] justify-around">
                        <button className="bg-greenbtn rounded-[10px] border-none flex-1 mx-1 my-4 text-white font-inter font-bold text-[20px] cursor-pointer"
                        onClick={()=> navigate('/Meet') }
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