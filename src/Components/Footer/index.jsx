import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center min-h-[48px] bg-black text-white p-2">
        <div className="px-4">
          Part of{" "}
          <a
            className="hover:underline underline-offset-2"
            href="https://kurukshetraceg.org.in/ctfprojects"
            target="_blank"
            rel="noopener noreferrer"
          >
            K! Projects
          </a>
          , An initiative by{" "}
          <a
            className="hover:underline underline-offset-2"
            href="https://cegtechforum.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ceg Tech Forum
          </a>
        </div>
        <button
          className="mx-4 hover:underline underline-offset-2"
          onClick={() => navigate("/Team")}
        >
          {" "}
          MEET THE TEAM!{" "}
        </button>
      </div>
    </>
  );
}
