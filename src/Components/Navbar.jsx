import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate()

    return (
        <div className="sticky top-0 z-50 bg-accent p-4 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
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
                <button onClick={() => navigate('/Signin')} className="text-black text-[24px] bg-inherit border-none cursor-pointer">Login</button>
            </div>
        </div>
    );
}
