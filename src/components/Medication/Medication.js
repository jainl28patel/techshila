import React, { useEffect, useState } from "react";
import avatar from "../../assets/Avatar.svg";
import "../Stores/Stores.scss";
import red from "../../assets/redDot.svg";
import grey from "../../assets/greyDot.svg";
import yellow from "../../assets/yellowDot.svg";
import green from "../../assets/greenDot.svg";

const Medication = () => {
  const nodes = [
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: red,
        name: "Low",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: grey,
        name: "Expired",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: yellow,
        name: "Medium",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    {
      store_id: "6efbdA234",
      store_name: "Ecosprin 75mg Strip Of 14 Tablets",
      sales: "$9.2k",
      oderered: "$10.2k",
      store_manager: {
        img: green,
        name: "High",
        team: "Rakesh Team",
      },
      contact: "7605216585",
    },
    // Add more nodes as needed
  ];
  useEffect(() => {
    fetch(`http://10.81.25.126:4000/manager/medicines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.email }), // Convert object to JSON string
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData1(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const [data1, setData1] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Filter data based on search term
  const filteredNodes = data1.filter((node) =>
    node.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNodes.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let data = { nodes: currentItems };
  // console.log(currentItems, filteredNodes);
  return (
    <div className="stores">
      <h1 className="stores-header">Medicines Overview</h1>
      <div className="stores-table my-5 flex items-center gap-20">
        <span className="store-text">Medicines</span>
        <input
          className="ml-3 border store-search"
          id="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-5 font-light">
                  Med ID
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Medicine Name
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Sales
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Ordered
                </th>
                <th scope="col" class="px-6 py-3 font-light">
                  Stock Available
                </th>
                {/* <th scope="col" class="px-6 py-3 font-light">
                      Contact
                    </th> */}
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
                      {el.id}
                    </th>
                    <td class="px-6 py-4 text-gray-800">{el.name}</td>
                    <td class="px-6 py-4 text-gray-800">{el.sales}</td>
                    <td class="px-6 py-4 text-gray-800">{el.ordered}</td>
                    <td class="px-6 py-4 text-gray-800">
                      <div className="flex items-center px-1">
                        <img src={green} />
                        <div className="flex flex-col px-3">
                          <span>{el.available}</span>
                          {/* <span>{el.store_manager.team}</span> */}
                        </div>
                      </div>
                    </td>
                    {/* <td class="px-6 py-2 text-gray-800">{el.contact}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination UI */}
        <div className="pagination flex justify-end pr-10 py-2 stores-pagiantion absolute bottom-0 z-10 right-0 ">
          page {currentPage} of{" "}
          {nodes ? Math.floor(nodes.length / itemsPerPage) : 0}
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

export default Medication;
