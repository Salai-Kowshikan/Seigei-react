import React, { useRef, useState } from "react";
import Navbar from "../../Components/Navbar/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "@/Components/Footer";
import { Button } from "@/Components/ui/button";
import { jsPDF } from "jspdf";

export default function UploadPage() {
  const navigate = useNavigate();
  const fileInput = useRef();
  const [loader, setLoader] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  let text = "";

  const url = import.meta.env.VITE_APP_API_URL;

  const handleDownloadAudio = async () => {
    setLoader(true);
    const file = fileInput.current.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("video", file);
      try {
        const response = await axios.post(`${url}/audio_convert`, formData, {
          responseType: "blob",
        });
        const blob = new Blob([response.data], { type: "video/mp4" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "audio.mp3";
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
        });
        const blob = new Blob([response.data], { type: "video/mp4" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "video.mp4";
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
  const handleDownloadPDF = async () => {
    setLoader(true)
    const file = fileInput.current.files[0]
    if (file) {
      const formData = new FormData();
      formData.append("video", file);
      try {
        const response = await axios.post(`${url}/upload`, formData)
        const doc = new jsPDF();
        doc.text(response.data.content, 10, 10);
        doc.save("download.pdf");
        console.log(response.data);
      } catch (err) {
        console.log("pdf la prachanaaa"+ err);
      }
    } else {
      alert("Video upload pandra panda");
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoSource(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around min-h-[95svh] w-full">
        <div className="md:flex-1 flex-[7] flex justify-center items-center font-inter lg:text-8xl text-6xl w-full font-extrabold text-textc py-6 md:py-16 px-6 flex-shrink-[2]">
          {loader ? "Processing" :"Interpret with Seigei"}
        </div>
        <div className="md:flex-1 flex-[11] flex flex-col md:gap-10 items-center">
          <div className="border-accent bg-black border-solid border-[10px] rounded-lg flex justify-center items-center aspect-[16/9] w-[80%] md:mt-12">
            {videoSource ? (
              <video src={videoSource} controls />
            ) : (
              <img
                src="/upload.png"
                className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]"
                alt="Upload"
              />
            )}
          </div>
          <div className="flex w-full flex-col p-4 gap-5 mb-4 items-center">
            <div className="w-full text-center">
              <input
                type="file"
                accept="video/*"
                id="fileInput"
                ref={fileInput}
                onChange={handleFileChange}
                className="hidden"
              ></input>
              <label
                htmlFor="fileInput"
                className="cursor-pointer font-inter font-bold bg-accent text-white px-4 py-2 rounded-lg"
              >
                {videoSource ? "CHANGE FILE " : "CHOOSE A FILE TO UPLOAD "}
              </label>
            </div>
            {videoSource && (
              <>
                <Button className="text-white w-[70%] font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]" onClick={handleDownloadPDF}>
                  Download Transcript as PDF
                </Button>
                <Button
                  className="text-white font-inter w-[70%] font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]"
                  onClick={handleDownloadAudio}
                >
                  Download Audio
                </Button>
                <Button
                  className="text-white w-[70%] font-inter font-bold border-none py-4 px-[96px] bg-greenbtn rounded-[10px]"
                  onClick={handleDownloadVideo}
                >
                  Download video
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
