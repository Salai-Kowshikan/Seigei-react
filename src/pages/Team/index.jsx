import Navbar from "@/Components/Navbar";
import Profile from "@/Components/Profile";
import React from "react";
import { members } from "@/constants";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold my-6 text-white font-inter">
          {" "}
          MEET THE TEAM!
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {members.map((member, index) => (
            <Profile
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </>
  );
}
