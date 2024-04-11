import React, { useState } from "react";
import "../Stores/Stores.scss";
import red from "../../assets/redDot.svg"
import grey from "../../assets/greyDot.svg"
import yellow from "../../assets/yellowDot.svg"
import green from "../../assets/greenDot.svg"
import dots from "../../assets/DotsThreeVertical.svg"
const Inventory = () => {
    const nodes = [
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: red,
                name: "Low",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: grey,
                name: "Expired",
                name2: "Very High",
                team: "16-18 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: yellow,
                name: "Medium",
                name2: "Medium",
                team: "8-10 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        {
            store_id: "6efbdA234",
            batch_id: "6efbdA234",
            store_name: "Ecosprin 75mg Strip Of 14 Tablets",
            sales: "14x50",
            oderered: "March 2024",
            store_manager: {
                img: green,
                name: "High",
                name2: "Low",
                team: "4-5 Days",
            },
            contact: "7605216585",
        },
        // Add more nodes as needed
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [isChecked, setIsChecked] = useState(false);
    const [individualCheckboxes, setIndividualCheckboxes] = useState(
        Array(nodes.length).fill(false)
    );


    const handleMainCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        setIndividualCheckboxes(
            Array(nodes.length).fill(isChecked)
        );
    };

    // Handle checking/unchecking of individual checkboxes
    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...individualCheckboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index];
        setIndividualCheckboxes(updatedCheckboxes);
        setIsChecked(updatedCheckboxes.every((checkbox) => checkbox));
    };

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
    return (
        <div className="stores">
            <h1 className="stores-header">Medicine Inventory</h1>
            <div className="stores-table my-5 flex items-center justify-between pr-20">
                <span className="store-text">Medicines</span>
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
                    Update Inventory
                </span>
            </div>
            <div className="table">
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>

                                <th scope="col" class="px-6 py-5 font-light">
                                    <input type="checkbox" id="mainCheck" checked={isChecked}
                                        onChange={handleMainCheckboxChange} />
                                </th>
                                <th scope="col" class="px-6 py-5 font-light">
                                    Med ID
                                </th>
                                <th scope="col" class="px-6 py-3 font-light">
                                    Medicine Name
                                </th>
                                <th scope="col" class="px-6 py-3 font-light">
                                    Batch ID
                                </th>
                                <th scope="col" class="px-6 py-3 font-light">
                                    Stock Available
                                </th>
                                <th scope="col" class="px-6 py-3 font-light">
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-3 font-light">
                                    Demand/Avg Delivery
                                </th>
                                <th scope="col" class="px-6 py-3 font-light">
                                    Expiry
                                </th>
                            </tr>
                        </thead>
                        {/* <hr style={{ width: "100%" }} /> */}
                        <tbody>
                            {currentItems?.map((el, index) => {
                                return (
                                    <tr class="bg-white border-b">
                                        <th class="px-6 py-4 text-gray-800">
                                            <input type="checkbox" checked={individualCheckboxes[index]}
                                                onChange={() => handleCheckboxChange(index)}
                                            />

                                        </th>

                                        <th
                                            scope="row"
                                            class="px-6 py-2 font-medium text-blue-700 whitespace-nowrap "
                                        >
                                            {el.store_id}
                                        </th>
                                        <td class="px-6 py-2 text-gray-800">{el.store_name}</td>
                                        <td class="px-6 py-2 font-medium text-blue-700 whitespace-nowrap">{el.batch_id}</td>
                                        <td class="px-6 py-2 text-gray-800">
                                            <div className="flex items-center px-1">
                                                <img src={el.store_manager.img} />
                                                <div className="flex flex-col px-3">
                                                    <span>{el.store_manager.name}</span>
                                                    {/* <span>{el.store_manager.team}</span> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-2 text-gray-800">{el.sales}</td>
                                        <td class="px-6 py-2 text-gray-800">
                                            <div className="flex items-center px-1">
                                                <img src={el.store_manager.img} />
                                                <div className="flex flex-col px-3">
                                                    <span>{el.store_manager.name2}</span>
                                                    <span>{el.store_manager.team}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-2 text-gray-800">{el.oderered}</td>
                                        <td class="px-6 py-2 text-gray-800 cursor-pointer"><img src={dots} alt="dots" /></td>

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
    )
}

export default Inventory
