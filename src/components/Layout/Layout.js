import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className=" flex flex-wrap justify-between items-center py-3 px-2 md:px-4 border-b-2 h-[8vh]">
        <div className="flex items-center ">
          <img src="\images\Pill.svg" alt="Pill" />
          <span className="font-semibold text-[18px] tracking-tight ml-2">
            MIM web
          </span>
        </div>
        <div className="flex items-center">
          <img src="\images\Profile.svg" alt="Profile" />
        </div>
      </div>
      <div className=" flex">
        <div className="  w-[15vw] py-5 px-4 border-r-2 h-[92vh]  ">
          <div className="">
            <Link to="/">
              {/* Dashboard */}
              <div className="flex px-4 py-3 rounded-[6px]  bg-[#303F9F] text-[14px] items-center text-white ">
                <img src="\images\Icon.svg" alt="" className="mr-3" />
                Dashboard
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/stores">
              {/* Dashboard */}
              <div className="flex px-4 py-3 rounded-[6px]   text-[14px] items-center ">
                <img src="\images\HardDrives.svg" alt="" className="mr-3" />
                Stores
              </div>
            </Link>
          </div>
          <div className="">
            <Link to="/medicines">
              {/* Dashboard */}
              <div className="flex px-4 py-3 rounded-[6px]   text-[14px] items-center ">
                <img src="\images\Prescription.svg" alt="" className="mr-3" />
                Medicines
              </div>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
