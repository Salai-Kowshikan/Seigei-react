import React, { useRef, useState } from "react";
import Navbar from "../../Components/Navbar/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UploadPage() {
  const navigate = useNavigate();
  const fileInput = useRef();
  const [loader, setLoader] = useState(false);
  const [thumbnail, setThumbnail] = useState("/upload.svg");
  let text = "";

  const url = import.meta.env.VITE_APP_API_URL;

  const uploadVideo = async () => {
    setLoader(true);
    const file = fileInput.current.files[0];
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axios.post(`${url}/upload`, formData);
      console.log(response);
      text = response.data.content;
    } catch (error) {
      console.log("Deiii file la prachana: " + error);
    } finally {
      setLoader(false);
      navigate(`/download?text=${text}`);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("file changed");
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleDownloadAudio = async () => {
    setLoader(true);
    const file = fileInput.current.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("video", file);
      try {

        console.log("response poguthu")
        const response = await axios.post(`${url}/audio_convert`, formData,{
          responseType: "blob",
        });
        const blob = new Blob([response.data], { type: "video/mp4" });
        const downloadURL = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = downloadURL;
        link.download = 'audio.mp3';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        console.log("Audio la prachanaaa" + err);
      }
    } else {
      alert("Video upload pandra panda");
    }
  };
  const handleDownloadVideo = async () => {
    setLoader(true);
    const file = fileInput.current.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("video", file);
      try {
        console.log("response poguthu")
        const response = await axios.post(`${url}/download-video`, formData, {
          responseType: "blob",
        }
        );
        const blob = new Blob([response.data], { type: "video/mp4" })
        const downloadURL = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadURL;
        link.download = 'video.mp4'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(response.data)
      } catch (err) {
        console.log("video la prachanaaa: " + err);
      }
    } else {
      alert("Video upload pandra panda");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around h-full md:h-[80svh] w-full">
        <div className="md:flex-1 flex-[7] flex justify-center items-center font-inter lg:text-8xl text-6xl w-full font-extrabold text-textc py-6 md:py-16 px-6 flex-shrink-[2]">
          Interpret <br /> with Seigei
        </div>
        <div className="md:flex-1 flex-[11] flex flex-col md:gap-10 items-center justify-evenly md:justify-around">
          <div className="border-accent bg-black border-solid border-[10px] rounded-lg flex justify-center items-center aspect-[16/9] w-[80%] md:mt-12">
            <img
              src={thumbnail}
              className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]"
              alt="Upload"
            />
          </div>
          <div>
            <input
              type="file"
              accept="video/*"
              ref={fileInput}
              onChange={handleFileChange}
            ></input>
            {/* <button
              className="bg-accent font-inter font-bold text-white border-none rounded-lg py-3 md:py-6 text-lg md:text-2xl w-[80%] cursor-pointer"
              onClick={uploadVideo}
              disabled={loader}
            >
              {loader ? "Processing" : "Upload video"}
            </button> */}
            <button className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]">
              Download Transcript as PDF
            </button>
            <button
              className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]"
              onClick={handleDownloadAudio}
            >
              Download Audio
            </button>
            <button
              className="text-white font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]"
              onClick={handleDownloadVideo}
            >
              Download video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
