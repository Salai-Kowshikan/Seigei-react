import React from "react";

export default function SignUpCard({setLogin}) {
    return (
        <>
            <div className="flex flex-col items-center justify-around content-stretch flex-1 rounded-[20px] bg-primary mx-16 my-10">
                <div className="bg-accent w-full  text-black flex justify-center py-10 rounded-[20px] text-[48px]"> Sign Up </div>
                <div className="w-full">
                    <label htmlFor="name" className="block px-7 py-3">
                        Name:
                    </label>
                    <input type="text" name="name" className="w-[85%] ml-7 rounded-[10px] py-2 px-1 border-none bg-[#D9D9D9] font-inter font-extrabold" />
                    <label htmlFor="email" className="block px-7 py-3">
                        Email:
                    </label>
                    <input type="email" name="email" className="w-[85%] ml-7 rounded-[10px] py-2 px-1 border-none bg-[#D9D9D9] font-inter font-extrabold">
                    </input>
                    <label htmlFor="password" className="block px-7 py-3">
                        Password:
                    </label>
                    <input type="password" name="password" className="w-[85%] ml-7 rounded-[10px] py-2 px-1 border-none bg-[#D9D9D9] font-inter font-extrabold">
                    </input>
                </div>
                <button className="bg-secondary w-[85%] my-5 py-[10px] rounded-[10px] cursor-pointer border-none  text-white font-inter font-extrabold text-[24px]">
                    Sign up
                </button>
                <button className="bg-secondary w-[85%] py-[10px] rounded-[10px] cursor-pointer border-none text-white font-inter font-extrabold text-[24px]"
                onClick={() => setLogin(true)}>
                    Log in
                </button>
            </div>
        </>
    )
}