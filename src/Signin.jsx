import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import LoginCard from "./Components/Login";
import SignUpCard from "./Components/SignUp";

export default function SignIn() {

    const [login, setLogin] = useState(true)

    return (
        <>
            <Navbar>

            </Navbar>
            <div className="flex h-full max-md:flex-col justify-around content-center font-inter font-extrabold  text-white">
                <div className=" mt-16 px-5 text-[64px] md:text-[96px] w-1/2">
                    Log-In OR <br /> Sign-Up For <br /> An Account<br />
                    <span className="text-[24px]"> Registered users have access to real-time translation</span>
                </div>
                {login ? <LoginCard setLogin={setLogin} /> : <SignUpCard setLogin={setLogin} />}

            </div>
        </>
    )
}