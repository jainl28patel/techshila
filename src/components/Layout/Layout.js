import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className={
        "mt-0 fixed container z-10 flex flex-wrap justify-between items-center w-[100%] lg:min-w-[95vw] bg-transparent h-14"
      }>
        <div className=" lg:min-w-[95vw] container flex flex-wrap justify-between items-center sticky">
        <div className="text-white ">
          {/* <img src="\images\Logo (1).png" className="h-14 "></img> */}
          lol
        </div>

        <div
          className={
            "pr-5 hidden md:block inline float-right  justify-items space-x-12 text-[16px]"
          }
        >
          {/* {showButton && <Login id="hiddenButton"></Login>} */}
        </div>

        <button
          id="hiddenButton"
          className="float-right block md:hidden"

        >

        </button>
      </div>

      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/medicines">Medicines</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
