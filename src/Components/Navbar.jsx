import React, {useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ aboutRef }) {

    const navigate = useNavigate()
    const location = useLocation()

    const handleAboutClick = () => {
        if (location.pathname === '/') { // Assuming '/' is the path of the landing page
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/'); // Navigate to the landing page
        }
    };

    useEffect(() => {
        if (location.pathname === '/') {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="sticky top-0 z-50 bg-accent p-4 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img
                    className="w-12 h-12 object-cover"
                    alt="Seigei logo"
                    src="/Logo.png"
                />
                <span className="ml-2 font-inter text-black text-[36px] font-extrabold">
                    SeiGei
                </span>
            </div>
            <div className="font-inter font-bold flex space-x-4">
                <button onClick={() => window.open('https://indiansignlanguage.org/', '_blank')} className="text-black text-[24px] bg-inherit border-none cursor-pointer">ISL</button>
                <button className="text-black text-[24px] bg-inherit border-none cursor-pointer"
                    onClick={handleAboutClick}
                >About</button>
                <button onClick={() => navigate('/Signin')} className="text-black text-[24px] bg-inherit border-none cursor-pointer">Login</button>
            </div>
        </div>
    );
}
