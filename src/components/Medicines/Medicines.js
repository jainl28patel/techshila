import React, { useEffect, useState } from "react";
import "../Stores/Stores.scss";
import Select from "react-select";

const Medicines = () => {
  const nodes = [
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    {
      med_id: "6efbdA234",
      Medicine_name: "Ecosprin 75mg Strip Of 14 Tablets",
      Sales: "$9.2K",
      Ordered: "$10.2K",
    },
    // Add more nodes as needed
  ];
  useEffect(() => {
    fetch(`http://10.81.25.126:4000/admin/medicines`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData1(data);
      });
  }, []);
  const [data1, setData1] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Filter data based on search term
  const filteredNodes = data1.filter((node) =>
    node?.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      <h1 className="stores-header">Medicines Page</h1>
      <div className="stores-table my-5 flex items-center justify-start gap-10">
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
                <th scope="col" class="px-6 py-3 font-light">
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
              </tr>
            </thead>
            {/* <hr style={{ width: "100%" }} /> */}
            <tbody>
              {currentItems?.map((el) => {
                return (
                  <tr class="bg-white border-b">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-blue-700 whitespace-nowrap "
                    >
                      {el.id}
                    </th>
                    <td class="px-6 py-4 text-gray-800">{el.name}</td>
                    <td class="px-6 py-4 text-gray-800">{el.sales}</td>
                    <td class="px-6 py-4 text-gray-800">{el.ordered}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination UI */}
        <div className="pagination flex justify-end pr-10 py-4 stores-pagiantion absolute bottom-0 z-10 right-0 ">
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
export default Medicines;
