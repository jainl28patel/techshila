import React, { useState } from "react";
import Nav from "../user_nav/Nav";

function User() {
  const nodes = [
    {
      med: "pcm",
    },
    {
      med: "crosine",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Filter data based on search term
  const filteredNodes = nodes.filter((node) =>
    node.med.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div >
      <Nav />
      <div
        style={{ width: "50vw", marginLeft: "25vw" }}
        className="flex flex-col"
      >
        <div className=" font-bold flex justify-between mt-5">
          <span>What are you looking for?</span>
            <span className="text-[#283593]">Upload priscription {">"}</span>
        </div>
        <input
          className="mx-1 border store-search  my-2 p-2 rounded-xl"
          id="search"
          type="text"
          placeholder="Search for a medicine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="my-4 py-2 ">
          <div >
            <div className="text-[24px] px-2">Previously bought</div>
            <img src="\images\image 8.svg" alt="" />
          </div>
          <div >
            <div className="text-[24px] px-2">Trending near you</div>
            <img src="\images\image 6.svg" alt="" />
          </div>
          <div >
            <div className="text-[24px] px-2">Essentials</div>
            <img src="\images\image 7.svg" alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default User;
