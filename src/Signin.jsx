import React, { useState } from "react";
import Navbar from "./Components/Navbar/index";
import LoginCard from "./Components/Login/index";

export default function SignIn() {

    const [login, setLogin] = useState(true)

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-center items-center h-[80svh]">
                <div className="flex flex-col flex-1 justify-center ml-10 flex-shrink-1">
                    <div className="font-inter text-white font-extrabold text-[72px] py-8">
                        Log-In Or<br />Sign-Up For<br />An Account
                    </div>
                    <div className="font-inter text-white font-bold text-xl">
                        Registered users have access to real-time translation
                    </div>
                </div>
                <div className="flex-1 mx-4 my-10 flex-shrink-0 min-w-[360px]">
                    {login ? <LoginCard setLogin={setLogin} /> : <SignUpCard setLogin={setLogin} />}
                </div>
            </div>
        </>
    )
}