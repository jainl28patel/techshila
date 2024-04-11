import React, { useState } from "react";

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlelogout = () => {
      localStorage.clear();
      window.location.href = '/signuplogin';
  
  }

  return (
    <div className="flex flex-wrap justify-between items-center py-3 px-2 md:px-4 border-b-2 h-[8vh]">
      <div className="flex items-center">
        <img src="\images\Pill.svg" alt="Pill" />
        <span className="font-semibold text-[18px] tracking-tight ml-2">
          MIM web
        </span>
        <div className="mx-8 text-sm">400002, Mumbai</div>
      </div>
      <div className="flex items-center">
        <div className="mx-8 text-sm">Order Status</div>
        <img
          src="\images\Profile.svg"
          alt="Profile"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />
      </div>
      {isModalOpen && (
        <div className="absolute top-10 right-5  flex  justify-end items-start">
          <div className="bg-slate-200 p-4 rounded-md flex flex-col items-center justify-center" >
            <p> John Doe</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handlelogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
