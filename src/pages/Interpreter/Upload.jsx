import React, {useRef, useState} from "react";
import Navbar from "../../Components/Navbar/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UploadPage() {
  const navigate = useNavigate()
  const fileInput = useRef()
  const [loader,setLoader] = useState(false)
  let text = ""

  const url = import.meta.env.VITE_APP_API_URL;

  const uploadVideo = async () => {
    setLoader(true)
    const file = fileInput.current.files[0]
    const formData = new FormData()
    formData.append('video', file)

    try{
        const response = await axios.post(`${url}/upload`, formData)
        console.log(response)
        text = response.data.data
    } catch(error){
        console.log("Deiii file la prachana: " + error)
    } finally {
      setLoader(false)
      navigate(`/download?text=${text}`)
    }

  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around h-full md:h-[80svh] w-full">
        <div className="md:flex-1 flex-[7] flex justify-center items-center font-inter lg:text-8xl text-6xl w-full font-extrabold text-textc py-6 md:py-16 px-6 flex-shrink-[2]">
          Interpret <br /> with Seigei
        </div>
        <div
          className="md:flex-1 flex-[11] flex flex-col md:gap-10 items-center justify-evenly md:justify-around"
        >
          <div className="border-accent bg-black border-solid border-[10px] rounded-lg flex justify-center items-center aspect-[16/9] w-[80%] md:mt-12">
            <img
              src="/upload.png"
              className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]"
              alt="Upload"
            />
          </div>
          <div>
            <input type="file" accept="video/*" ref={fileInput}></input>
            <button
              className="bg-accent font-inter font-bold text-white border-none rounded-lg py-3 md:py-6 text-lg md:text-2xl w-[80%] cursor-pointer"
              onClick={uploadVideo}
              disabled={loader}
            >
              {loader ? "Processing" : "Upload video"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
