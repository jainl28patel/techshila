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
    <div style={{ width: "100vw" }}>
      <Nav />
      <div
        style={{ width: "50vw", marginLeft: "25vw" }}
        className="flex flex-col"
      >
        <div className=" font-bold flex justify-between mt-5">
          <span>What are you looking for?</span>
          <span>Upload priscription {">"}</span>
        </div>
        <input
          className="ml-3 border store-search  my-2 p-2 rounded-xl"
          id="search"
          type="text"
          placeholder="Search for a medicine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default User;
