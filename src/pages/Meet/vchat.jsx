import React, { useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

export default function ChatPage() {
  const navigate = useNavigate();
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
      <div className="flex flex-col lg:flex-row justify-evenly items-center my-6 lg:max-h-[85svh]">
        <div className="flex-1 flex justify-center items-center text-white font-inter font-extrabold text-5xl px-8 flex-shrink-[2]">
          Video Chat <br></br>with real time ISL Interpreter
        </div>
        <div className="flex-[2] flex flex-col justify-around items-center h-full w-full min-h-[60vh]">
          <div className="flex-[2] w-full flex justify-center items-center">
              <Webcam
                mirrored={true}
                className="border-accent aspect-[16/9] w-[70%] max-h-[270px] max-w-[480px] border-solid border-[10px] rounded-lg flex justify-center items-center mt-6"
              ></Webcam>
          </div>
          <div className="flex w-[70%] justify-around max-w-[480px]">
            <button
              className="bg-greenbtn rounded-[10px] border-none flex-1 mx-1 my-4 py-4 text-white font-inter font-bold text-[20px] cursor-pointer"
              onClick={() => navigate("/Meet")}
            >
              {" "}
              Start Meet{" "}
            </button>
            <button className="bg-primary rounded-[10px] border-none flex-1 mx-1 my-4 py-4 text-white font-inter font-bold text-[20px] cursor-pointer">
              {" "}
              Join Meet{" "}
            </button>
          </div>
          <button className="w-[70%] max-w-[480px] border-none rounded-[10px] font-inter text-[20px] font-bold mx-1 py-4 cursor-pointer">
            Meet code
          </button>
        </div>
      </div>
    </>
  );
}
