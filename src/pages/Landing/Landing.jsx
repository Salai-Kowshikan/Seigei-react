import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/Components/Navbar/index";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();
  const menuRef = useRef();
  const aboutRef = useRef();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = window.sessionStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleVideoChat = () => {
    if (username) {
      navigate("/Chat");
    } else {
      alert("Sign in pandra eruma");
      navigate("/Signin");
    }
  };

  return (
    <>
      <Navbar aboutRef={aboutRef} />
      <div className="flex justify-center items-center min-h-[90svh] max-md:flex-col">
        <div className="md:pl-20 py-3 basis-1/2">
          <div className="font-inter text-textc">
            <motion.h1
              className="font-extrabold md:text-8xl text-6xl my-2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Project <br /> Seigei
            </motion.h1>
            <motion.h2
              className="font-bold text-xl"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Translating Silence
            </motion.h2>
          </div>
          <motion.img
            loading="lazy"
            src="/Arrow.png"
            className="h-[150px] w-[150px] cursor-pointer"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              type: "spring",
              stiffness: 180,
              damping: 8,
            }}
            onClick={() =>
              menuRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              })
            }
          />
        </div>
        <div className="">
          <motion.img
            className="max-md:w-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="/Seigei.png"
          />
        </div>
      </div>
      <hr className="border-accent border-8 mx-8 border-solid" />
      <div
        className="flex justify-center items-center min-h-[90svh] "
        ref={menuRef}
      >
        <div className="flex justify-around w-[90%] mx-4 max-md:flex-col items-center">
          <button
            className="text-textc bg-inherit border-none font-inter font-extrabold cursor-pointer text-5xl py-6 flex-1"
            onClick={handleVideoChat}
            // onClick={() => navigate("/Chat")}
          >
            {" "}
            VIDEO CHAT{" "}
          </button>
          <div className="flex-1 w-full flex justify-center items-center">
            <svg
              width="184"
              className="max-md:hidden"
              height="198"
              viewBox="0 0 184 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M152.159 0.294576L175.323 10.4311L32.6688 197.705L9.5046 187.569L152.159 0.294576Z"
                fill="#CF9FFF"
              />
              <path
                d="M16.2149 178.741L32.4298 198H0L16.2149 178.741Z"
                fill="#CF9FFF"
              />
              <path
                d="M167.785 19.2594L151.57 0H184L167.785 19.2594Z"
                fill="#CF9FFF"
              />
            </svg>
            <hr className="border-accent border-4 w-full md:hidden border-solid" />
          </div>
          <button
            className="text-textc bg-inherit border-none font-inter font-extrabold cursor-pointer text-5xl py-6 flex-1"
            onClick={() => navigate("/Upload")}
          >
            INTERPRETER
          </button>
        </div>
      </div>
      <hr className="border-accent border-8 mx-8 border-solid" />
      <div
        ref={aboutRef}
        className="w-full flex flex-col justify-center items-center min-h-[90svh] mobile:my-8 mobile:p-8 p-4 font-inter text-textc md:text-2xl text-lg font-bold"
      >
        <h1 className="md:text-8xl text-6xl font-extrabold text-center leading-normal my-4">
          About
        </h1>
        <div className="flex max-lg:flex-col items-center">
          <div className="flex-1 text-justify">
            <div>
              <p>
                The Indian Sign Language (ISL) remains as of yet one of the
                premier contributions of the deaf and mute community of India
              </p>
              <p>
                And despite being the most used sign-language in the world in
                terms of users, overall awareness is far too low. With barely
                300 official interpreters within India, there exists a veritable
                gap between the hearing and the deaf
              </p>
            </div>
          </div>
          <div className="flex mx-6 justify-center items-center ">
            <img loading="lazy" src="/About.png" className="max-md:w-[80%]" />
          </div>
        </div>
      </div>
      <hr className="border-accent border-8 mx-8 border-solid" />
      <div className="w-full min-h-[90svh] flex flex-col justify-center items-center mobile:my-8 mobile:p-8 p-4 font-inter text-textc md:text-2xl text-lg font-bold">
        <h1 className="md:text-8xl text-6xl font-extrabold text-center leading-normal my-4">
          Enter Project Seigei
        </h1>
        <div className="flex max-lg:flex-col items-center">
          <div className="flex-1 text-justify">
            <p>
              With technology pervading through the lives of the common person
              in India, an idea was born -- Why not have an interpreter that one
              could carry with themselves everywhere powered by the latest
              advancements in AI?
            </p>
            <p>
              This is where Project Seigei comes in. We aim to make this idea a
              reality, and 'bridge' the aforementioned gap, for anyone,
              anywhere, for the greater good of the deaf/mute people!
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <img loading="lazy" src="/Project.png" className="max-md:w-[80%]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
