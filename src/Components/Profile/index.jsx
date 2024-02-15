import React from "react";

export default function Profile({ name, img, role }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4">
        <p className="text-white font-inter text-lg font-extrabold">{role}</p>
      </div>
      <div className="rounded-full overflow-hidden">
        <img src={img} className="rounded-full w-48 h-48"/>
      </div>
      {/* <svg
        width="274px"
        height="274px"
        viewBox="0 0 400.00 400.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(0)"
        className=" translate-y-[-70px]"
      >
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0"
          transform="translate(52,52), scale(0.74)"
        ></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="20"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M53.3506 238.839C53.4096 238.617 79.7163 201.805 79.7163 200.388C79.7163 199.005 50.9893 163.43 51 163.186C51.0161 162.771 51.0625 162.355 51.1095 161.94C51.1313 161.732 51.1376 161.522 51.1572 161.313C52.7645 161.273 54.383 161.261 55.9896 161.214C57.8158 161.161 59.6385 161.099 61.462 161.047C65.1355 160.939 68.807 161.041 72.4721 161.116C76.1738 161.192 79.8691 161.238 83.5763 161.257C87.4773 161.275 91.3817 161.287 95.2827 161.257C102.491 161.202 131.676 161.334 133.474 161.298C135.152 161.265 136.822 161.226 138.502 161.213C141.932 161.187 333.699 161.186 337.129 161.215C339.158 161.231 341.183 161.237 343.213 161.236C344.12 161.236 345.03 161.228 345.941 161.217C346.256 161.213 346.572 161.205 346.889 161.198C346.979 161.351 347.057 161.505 347.144 161.654C347.267 161.864 347.367 162.074 347.464 162.284C347.645 162.874 318.473 199.655 318.598 200.947C318.713 202.159 349.48 235.357 349.694 236.167C349.851 236.776 350.026 237.615 349.941 238.227C348.193 238.288 346.555 238.301 344.91 238.334C344.011 238.352 288.127 236.052 229.098 236.167C156.344 236.309 77.5561 238.874 75.8919 238.913C74.3779 238.95 72.8647 238.984 71.3487 239"
            stroke="#657CD5"
            stroke-opacity="0.9"
            stroke-width="13.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <text
            x="200"
            y="210"
            text-anchor="middle"
            fill="white"
            className="font-inter text-lg font-extrabold"
          >
            {name}
          </text>
        </g>
      </svg> */}
      <div className="bg-primary px-4 py-2 my-4 font-inter font-extrabold text-white rounded-lg">
        {name}
      </div>
    </div>
  );
}
