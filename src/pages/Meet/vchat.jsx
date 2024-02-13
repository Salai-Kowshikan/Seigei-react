import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Webcam from "react-webcam";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../Components/ui/dialog";

export default function ChatPage() {
  const [inviteLink, setInviteLink] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");
  const [exit, setExit] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://salai-kowshikan.github.io/seigei-webrtc/index.html?room=${inviteLink}`
      );
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy text");
    }
  };

  const createRoom = () => {
    const newUUID = uuidv4();
    setInviteLink(newUUID);
  };

  const urlParams = new URLSearchParams(window.location.search);
  setExit(urlParams.get("exit") === "true")

  useEffect(() => {
    if (exit){
      alert("Thank you for using our service. Have a great day!")
    }
  })

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
            <Dialog>
              <DialogTrigger
                className="bg-greenbtn rounded-[10px] border-none flex-1 mx-1 my-4 py-4 text-white font-inter font-bold text-[20px]"
                onClick={createRoom}
              >
                Create a new room
              </DialogTrigger>
              <DialogContent className="bg-accent">
                <DialogHeader className="p-4">
                  <DialogTitle className="my-2">
                    {" "}
                    Share the meeting link with the other participant and then
                    click on the link to open it in a new window{" "}
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex w-full justify-evenly m-4">
                      <button
                        onClick={copyToClipboard}
                        className="bg-primary text-white px-4 py-2 rounded-lg font-extrabold"
                      >
                        Copy to clipboard
                      </button>
                      <button
                        className="bg-primary text-white px-4 py-2 rounded-lg font-extrabold"
                        onClick={() =>
                          (window.location.href = `https://salai-kowshikan.github.io/seigei-webrtc/index.html?room=${inviteLink}`)
                        }
                      >
                        Open in new tab
                      </button>
                    </div>
                    <div className="w-full text-center">{copySuccess}</div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
