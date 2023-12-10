import React from "react";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-[#cbc3e3] p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    className="w-12 h-12 object-cover"
                    alt="Seigei logo"
                    src="/src/assets/Logo.png" 
                />
                <span className="ml-2 font-inter text-black text-[36px] font-extrabold">
                    SeiGei
                </span>
            </div>
            <div className="font-inter font-bold flex space-x-4">
                <button className="text-black text-[24px] bg-inherit border-none cursor-pointer">ISL</button>
                <button className="text-black text-[24px] bg-inherit border-none cursor-pointer">About</button>
                <button className="text-black text-[24px] bg-inherit border-none cursor-pointer">Login</button>
            </div>
        </div>
    );
}
