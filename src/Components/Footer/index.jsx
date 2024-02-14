import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between items-center h-12 bg-black text-white">
        <div className="px-4">Part of K! Projects, An initiative by Ceg Tech Forum</div>
        <button className="mx-4 hover:underline underline-offset-2" onClick={() => navigate('/Team')}> MEET THE TEAM! </button>
      </div>
    </>
  );
}
