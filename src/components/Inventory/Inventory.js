import React, { useEffect, useState } from "react";
import "../Stores/Stores.scss";
import red from "../../assets/redDot.svg";
import grey from "../../assets/greyDot.svg";
import yellow from "../../assets/yellowDot.svg";
import green from "../../assets/greenDot.svg";
import dots from "../../assets/DotsThreeVertical.svg";
const Inventory = () => {
  function InventoryForm({ setCreate, create }) {
    const [newinventory, setnewinventory] = useState({
      email: "",
      medicine_name: "",
      quantity: "",
      batch_id: "",
      expiry_date: new Date(),
      price: "",
    });
    const handleChange = (e) => {
      setnewinventory({ ...newinventory, [e.target.name]: e.target.value });
    };
    const handleSave = async () => {
      const response = await fetch("http://10.81.25.126:4000/manager/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newinventory),
      });
      if (response.ok) {
        console.log(newinventory);
        setFormy(false);
      }
    };
    return (
      <div
        className="flex w-[100vw] h-[100vh] d-flex justify-center items-center backdrop-blur-sm"
        style={{ top: "0", left: "0", position: "fixed" }}
      >
        <div className=" rounded-[6px] border-2 px-6 py-6 bg-white">
          {" "}
          <div className=" flex justify-end">
            <img
              className="cursor-pointer"
              src="\images\X.svg"
              alt="X"
              onClick={handleFormyChange}
            />
          </div>
          <h1 className=" text-xl text-center font-extrabold">Create Inventory</h1>
          <div className="flex flex-col w-[50vw] gap-2">
            <label>Email</label>
            <input
              className=" border-2"
              name="email"
              value={newinventory.email}
              onChange={(e) => handleChange(e)}
            />
            <label>Medicine Name</label>
            <input
              name="medicine_name"
              className=" border-2"
              value={newinventory.medicine_name}
              onChange={(e) => handleChange(e)}
            />
            <label>Quantity</label>
            <input
              name="quantity"
              className=" border-2"
              value={newinventory.quantity}
              onChange={(e) => handleChange(e)}
            />
            <label>Batch ID</label>
            <input
              name="batch_id"
              className=" border-2"
              value={newinventory.batch_id}
              onChange={(e) => handleChange(e)}
            />
            <label>Expiry Date</label>
            <input
              className=" border-2"
              name="expiry_date"
              value={newinventory.expiry_date}
              onChange={(e) => handleChange(e)}
            />
            <label>Price</label>
            <input
              className=" border-2"
              name="price"
              value={newinventory.price}
              onChange={(e) => handleChange(e)}
            />
            <div className="w-full flex justify-end py-2">
              <button
                className=" bg-green-500 px-5 py-1 rounded-md text-white"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const nodes = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
      id: "6",
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
      id: "7",
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
      id: "8",
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
      id: "9",
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
      id: "10",
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
      id: "11",
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
  const med_body = { email: "bc@gmail.com" };
  useEffect(() => {
    fetch(`http://10.81.25.126:4000/manager/inventory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "bc@gmail.com" }), // Convert object to JSON string
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
  const [isChecked, setIsChecked] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState(
    Array(nodes.length).fill(false)
  );

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [modal, setModal] = useState(false);
  const [Drop, setDrop] = useState({ state: true, id: "" });
  const [formy, setFormy] = useState(false);

  const handleModalChange = () => {
    setModal(!modal);
  };

  const handleFormyChange = () => {
    setFormy(!formy);
    setModal(!modal);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setUploadedFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileUpload = (e) => {
    const files = [...e.target.files];
    setUploadedFiles(files);
  };

  const handleMainCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    setIndividualCheckboxes(Array(nodes.length).fill(isChecked));
  };

  // Handle checking/unchecking of individual checkboxes
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...individualCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setIndividualCheckboxes(updatedCheckboxes);
    setIsChecked(updatedCheckboxes.every((checkbox) => checkbox));
  };

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
  console.log(currentItems, filteredNodes);
  return (
    <div className="stores">
      <h1 className="stores-header">Medicine Inventory</h1>
      <div
        className="stores-table my-5 flex items-center justify-between pr-20"
        onClick={() => {
          setDrop({ ...Drop, ["state"]: false });
        }}
      >
        <span className="store-text">Medicines</span>
        <input
          className="ml-3 border store-search"
          id="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className=" text-white store-create "
          style={{
            padding: "5px 40px",
            background: "#303F9F",
            cursor: "pointer",
          }}
          onClick={handleModalChange}
        >
          Update Inventory
        </button>
      </div>
      <div className="table">
        <div class="relative overflow-x-auto z-0 h-[66vh]">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 h-100">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-5 font-light">
                  <input
                    type="checkbox"
                    id="mainCheck"
                    checked={isChecked}
                    onChange={handleMainCheckboxChange}
                  />
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
                    <th
                      class="px-6 py-4 text-gray-800"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={individualCheckboxes[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </th>

                    <th
                      scope="row"
                      class="px-6 py-2 font-medium text-blue-700 whitespace-nowrap "
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      {el.id}
                    </th>
                    <td
                      class="px-6 py-2 text-gray-800"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      {el.name}
                    </td>
                    <td
                      class="px-6 py-2 font-medium text-blue-700 whitespace-nowrap"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      {el.batch_id}
                    </td>
                    <td
                      class="px-6 py-2 text-gray-800"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      <div className="flex items-center px-1">
                        <img src={green} />
                        <div className="flex flex-col px-3">
                          <span>{el.available}</span>
                          {/* <span>{el.store_manager.team}</span> */}
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-6 py-2 text-gray-800"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      {el.quantity}
                    </td>
                    <td
                      class="px-6 py-2 text-gray-800"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      <div className="flex items-center px-1">
                        <img src={green} />
                        <div className="flex flex-col px-3">
                          <span>{el.quantity}</span>
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-6 py-2 w-40 text-xs text-gray-800"
                      onClick={() => {
                        setDrop({ ...Drop, ["state"]: false });
                      }}
                    >
                      {el.expiry_date.slice(0, 10)}
                    </td>
                    <td class="px-6 py-2 text-gray-800 cursor-pointer">
                      <img
                        src={dots}
                        onClick={() => {
                          setDrop({ ...Drop, ["id"]: el.id, ["state"]: true });
                        }}
                        alt="dots"
                      />
                      {Drop.id === el.id && Drop.state && (
                        <div className="flex absolute right-10 z-30">
                          <div className="flex flex-col border rounded-[6px] border-2 px-4 py-3 bg-white ">
                            <div className="flex  text-[12px]">
                              <img
                                className="mr-2"
                                src="\images\PencilSimpleLine.svg"
                                alt="pencil"
                              />
                              Edit Details
                            </div>
                            <div className="flex items-center text-[12px] my-2">
                              <img
                                className="mr-2"
                                src="\images\Phone.svg"
                                alt="phone"
                              />{" "}
                              Contact Sellers
                            </div>
                            <div className="flex items-center text-[12px] text-[#DE0D0D]">
                              <img
                                className="mr-2"
                                src="\images\Trash (2).svg"
                                alt="Trash"
                              />{" "}
                              Delete Entry
                            </div>
                          </div>
                        </div>
                      )}
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

      {modal && (
        <>
          <div
            className="flex w-[100vw] h-[100vh] d-flex justify-center items-center backdrop-blur-sm"
            style={{ top: "0", left: "0", position: "fixed" }}
          >
            <div className=" rounded-[6px] border-2 px-6 py-6 bg-white">
              <div
                className=" flex justify-end cursor-pointer"
                onClick={handleModalChange}
              >
                <img className="" src="\images\X.svg" alt="X" />
              </div>
              <div className="text-[20px] py-2">Update Inventory</div>

              <div className="text-[18px] pt-4 pb-2">
                Upload a bill or memo of your order
              </div>

              <div className="text-[18px] py-2">
                Scan bill/memo to automatically update your inventory
              </div>

              <div
                className="w-[45vw] flex flex-col py-14 justify-center items-center my-4 "
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                  border: "1px dashed black",
                }}
              >
                <div>Drag and Drop Files Here</div>
                <input type="file" onChange={handleFileUpload} multiple />
                <div className="flex justify-center items-center">
                  {uploadedFiles.map((file, index) => (
                    <div key={index}>{file.name}</div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center text-[18px] ">
                or
              </div>
              <div
                className="rounded-[6px] text-white text-[14px] bg-[#303F9F] border-2 border-[#7F56D9] py-4 my-2"
                onClick={handleFormyChange}
              >
                <div className="flex justify-center items-center">
                  Make a manual entry
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {formy && <InventoryForm />}
    </div>
  );
};

export default Inventory;
