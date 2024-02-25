import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ aboutRef }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleDropDownClose = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleDropDownClose);
    console.log(sessionStorage.getItem("username"));
  }, []);

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-accent flex justify-between items-center max-w-full">
      <div
        className="flex items-center justify-center cursor-pointer p-2"
        onClick={() => navigate("/")}
      >
        <img
          className="mobile:w-12 mobile:h-12 w-7 h-7 object-contain mobile:mt-2 mt-1"
          alt="Seigei logo"
          src="/Logo.png"
        />
        <span className="ml-2 font-inter text-black mobile:text-3xl text-2xl font-extrabold">
          SeiGei
        </span>
      </div>
      <div className="flex space-x-4 p-2 max-mobile:hidden">
        <button
          onClick={() => window.open("https://www.islrtc.nic.in/", "_blank")}
          className="text-black font-inter font-bold text-[24px] bg-inherit border-none cursor-pointer"
        >
          ISL
        </button>
        <button
          className="text-black font-inter font-bold text-[24px] bg-inherit border-none cursor-pointer"
          onClick={handleAboutClick}
        >
          {" "}
          {location.pathname === "/" ? "About" : "Home"}
        </button>
        {sessionStorage.getItem("username") ? (
          <button
            onClick={() => {
              sessionStorage.removeItem("username");
              navigate("/Signin");
            }}
            className="text-black font-inter font-bold text-[24px] bg-inherit border-none cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/Signin")}
            className="text-black font-inter font-bold text-xl bg-inherit border-none cursor-pointer"
          >
            Login
          </button>
        )}
      </div>
      <div ref={dropDownRef} className="mobile:hidden relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-black font-inter px-2 font-bold text-[24px] bg-inherit border-none cursor-pointer"
        >
          <img src={dropdownOpen ? "/Menu_open.svg" : "/Menu.svg"} alt="Menu" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 w-48 my-4 mx-2 rounded-md bg-accent">
            <div
              className="py-1 flex flex-col"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() =>
                  window.open("https://indiansignlanguage.org/", "_blank")
                }
                className="text-black font-inter font-bold text-xl border-0 border-b-2 border-black border-solid bg-inherit cursor-pointer"
              >
                ISL
              </button>
              <button
                className="text-black font-inter font-bold text-xl bg-inherit border-0 border-b-2 border-black border-solid cursor-pointer"
                onClick={handleAboutClick}
              >
                {" "}
                {location.pathname === "/" ? "About" : "Home"}
              </button>
              {sessionStorage.getItem("username") ? (
                <button
                  onClick={() => {
                    sessionStorage.removeItem("username");
                    setUsername("");
                    navigate("/Signin");
                  }}
                  className="text-black font-inter font-bold text-xl bg-inherit border-none cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/Signin")}
                  className="text-black font-inter font-bold text-xl bg-inherit border-none cursor-pointer"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
