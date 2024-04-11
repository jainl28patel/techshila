import React from "react";

function Nav() {
  return (
    <div className=" flex flex-wrap justify-between items-center py-3 px-2 md:px-4 border-b-2 h-[8vh]">
      <div className="flex items-center ">
        <img src="\images\Pill.svg" alt="Pill" />
        <span className="font-semibold text-[18px] tracking-tight ml-2">
          MIM web
        </span>
        <div className="mx-8 text-sm">400002, Mumbai</div>
      </div>
      <div className="flex items-center">
        <div className="mx-8 text-sm">Order Status</div>
        <img src="\images\Profile.svg" alt="Profile" />
      </div>
    </div>
  );
}

export default Nav;
