import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { v4 as uuidv4 } from "uuid";

export default function ChatPage() {
  const navigate = useNavigate();
  const [inviteLink, setInviteLink] = useState(null);

  const createRoom = () => {
    const newUUID = uuidv4();
    setInviteLink(newUUID);
  };

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
              onClick={createRoom}
            >
              Create a new room
            </button>
            <button className="bg-primary rounded-[10px] border-none flex-1 mx-1 my-4 py-4 text-white font-inter font-bold text-[20px] cursor-pointer">
              Join an existing room
            </button>
          </div>
          {inviteLink && (
            <a
              href={`https://salai-kowshikan.github.io/seigei-webrtc/index.html?room=${inviteLink}`}
              target="blank"
            >
              Your invite link:{" "}
              {`https://salai-kowshikan.github.io/seigei-webrtc/index.html?room=${inviteLink}`}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
