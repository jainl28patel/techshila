import React, { useState } from "react";
import "./Stores.scss";
import avatar from "../../assets/Avatar.svg";
// import { Select, Space } from "antd";
import Select from "react-select";

const Stores = () => {
  const nodes = [
    {
      store_id: "0",
      store_name: "Shopping List",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "2",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "3",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "4",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "5",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "7",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "8",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "9",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "10",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "11",
      store_name: "Shopping List1",
      sales: "$90.2k",
      oderered: "$100.2k",
      store_manager: {
        img: avatar,
        name: "Rakesh Kumar",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    // Add more nodes as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Filter data based on search term
  const filteredNodes = nodes.filter((node) =>
    node.store_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNodes.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let data = { nodes: currentItems };
  console.log(currentItems, filteredNodes);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="stores">
      <h1 className="stores-header">Stores</h1>
      <div className="stores-table my-5 flex items-center justify-between pr-20">
        <span className="store-text">Stores</span>
        <input
          className="ml-3 border store-search"
          id="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span
          className=" text-white store-create "
          style={{ padding: "5px 40px", background: "#303F9F" }}
        >
          Create New Store
        </span>
      </div>
      <div className=" flex p-3 gap-10">
        <Select
          className="w-40"
          classNamePrefix="select"
          defaultValue={options[0]}
          isSearchable={true}
          name="color"
          options={options}
        />
        <Select
          className="w-40"
          classNamePrefix="select"
          defaultValue={options[0]}
          isSearchable={true}
          name="color"
          options={options}
        />
        <Select
          className="w-40"
          classNamePrefix="select"
          defaultValue={options[0]}
          isSearchable={true}
          name="color"
          options={options}
        />
      </div>
      <div className="table">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3 font-light">
                  Store ID
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Store Name
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Sales
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Ordered
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Store Manager
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Contact
                </th>
              </tr>
            </thead>
            {/* <hr style={{ width: "100%" }} /> */}
            <tbody>
              {currentItems?.map((el) => {
                return (
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-6 py-2 font-medium text-blue-700 whitespace-nowrap "
                    >
                      {el.store_id}
                    </th>
                    <td class="px-6 py-2 text-gray-800">{el.store_name}</td>
                    <td class="px-6 py-2 text-gray-800">{el.sales}</td>
                    <td class="px-6 py-2 text-gray-800">{el.oderered}</td>
                    <td class="px-6 py-2 text-gray-800">
                      <div className="flex items-center px-1">
                        <img src={el.store_manager.img} />
                        <div className="flex flex-col px-3">
                          <span>{el.store_manager.name}</span>
                          <span>{el.store_manager.team}</span>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-2 text-gray-800">{el.contact}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination UI */}
        <div className="pagination flex justify-end pr-10 py-2 stores-pagiantion absolute bottom-0 z-10 right-0 ">
          page {currentPage} of{" "}
          {nodes ? Math.floor(nodes.length / itemsPerPage) + 1 : 0}
          <button
            className=" p-1 cursor-pointer"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <button
            className=" p-1 cursor-pointer"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastItem >= filteredNodes.length}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stores;
