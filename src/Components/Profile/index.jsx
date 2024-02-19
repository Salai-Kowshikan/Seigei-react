import React from "react";

export default function Profile({ name, img, role }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4">
        <p className="text-textc font-inter text-lg font-extrabold">{role}</p>
      </div>
      <div className="rounded-full overflow-hidden">
        <img src={img} className="rounded-full w-48 h-48"/>
      </div>
      <div className="bg-accent px-4 py-2 my-4 font-inter font-extrabold text-white rounded-lg">
        {name}
      </div>
    </div>
  );
}
