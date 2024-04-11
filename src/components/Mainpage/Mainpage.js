import React, { useState } from "react";

const Mainpage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

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

  return (
    <div className=" py-6 px-6 bg-[#E2E8F0] w-[85vw]">
      <div className=" my-2">
        <div className="flex flex-col">
          <div className="text-[24px] flex">
            {" "}
            <span className="font-bold">Welcome, </span>
            <span>Nalin</span>{" "}
            <img className="ml-4" src="\images\Handwave.svg" alt="Handwave" />
          </div>
          <div className="text-[16px]">
            Manage and track your store's sales and orders!
          </div>
        </div>
      </div>
      <div className="my-2 border-2 rounded-[6px] bg-[#ffffff] py-6 px-4">
        <div className="justify-between flex">
          <div className="flex  justify-between">
            <div className="font-bold text-[20px]">Stores</div>
            <div className="flex justify-between ml-10">
              <div className="border-2 rounded-[6px] flex items-center justify-center px-2 py-1 mx-2">
                United States{" "}
                <img className="ml-2" src="\images\Vector.svg" alt="vector" />
              </div>
              <div className="border-2 rounded-[6px] flex items-center justify-center px-2 py-1 mx-2">
                01 Feb - 28 Feb, 2023{" "}
                <img className="ml-2" src="\images\Vector.svg" alt="vector" />
              </div>
            </div>
          </div>
          <div className="flex text-[#283593] items-center justify-center">
            Go to stores page{" "}
            <img className="ml-2 h-[2vh]" src="\images\Path.svg" alt="path " />
          </div>
        </div>

        <div className="flex items-center my-4">
          <input className="" type="radio" name="" id="" />
          <label className="mx-2" htmlFor="">
            {" "}
            Sales value
          </label>
          <input className="ml-6" type="radio" name="" id="" />
          <label className="mx-2" htmlFor="">
            {" "}
            Order value
          </label>
          <input className="ml-6" type="radio" name="" id="" />
          <label className="mx-2" htmlFor="">
            {" "}
            Profitabilty
          </label>
          <input className="ml-6" type="radio" name="" id="" />
          <label className="mx-2" htmlFor="">
            {" "}
            Number of Stores
          </label>
        </div>
        <div className="my-2">
          <img src="\images\Group.svg" alt=" image" />
        </div>
        <div className="mt-4 ">
          <div className="flex text-[16px]"> Texas Region</div>
          <div className="flex my-2">
            <div className="flex border-2 rounded-[6px] items-center justify-center">
              <div className="border-r-2 py-8 pl-10 px-14">
                <div className="text-[16px]"> No. of Stones</div>
                <div className="text-[24px] font-bold">15</div>
              </div>
              <div className="py-8 px-8">
                <div className="text-[16px]">Sales</div>
                <div className="my-2 text-[20px] font-bold">145K</div>
                <div className="text-[#43A047] text-[14px]">
                  +0.1% Last month
                </div>
              </div>
              <div className="py-8 px-8">
                <div className="text-[16px]">Orders</div>
                <div className="my-2 text-[20px] font-bold">160K</div>
                <div className="text-[#E53935] text-[14px]">
                  -0.2% Last month
                </div>
              </div>
              <div className="py-8 px-8">
                <div className="text-[16px]">Sales</div>
                <div className="my-2 text-[20px] font-bold">9.375%</div>
                <div className="text-[#43A047] text-[14px]">+2% Last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 border-2 rounded-[6px] bg-[#ffffff] py-6 px-4">
        <div className="justify-between flex">
          <div className="flex  justify-between">
            <div className="font-bold text-[20px]">Top Medicinal Insights</div>
            <div className="flex justify-between ml-10">
              <div className="border-2 rounded-[6px] flex items-center justify-center px-2 py-1 mx-2">
                United States{" "}
                <img className="ml-2" src="\images\Vector.svg" alt="vector" />
              </div>
              <div className="border-2 rounded-[6px] flex items-center justify-center px-2 py-1 mx-2">
                01 Feb - 28 Feb, 2023{" "}
                <img className="ml-2" src="\images\Vector.svg" alt="vector" />
              </div>
            </div>
          </div>
          <div className="flex text-[#283593] items-center justify-center">
            Go to medicines page{" "}
            <img className="ml-2 h-[2vh]" src="\images\Path.svg" alt="path " />
          </div>
        </div>
        <div className="flex items-center my-4 border-b-2 pb-8">
          <div className="border-b-2 border-[#303F9F] text-[#303F9F] text-[16px] py-2 px-4">
            Symptoms
          </div>
          <div className=" text-[16px] py-2 px-4">Medicine</div>
        </div>
        <div className="py-4">
          <img src="\images\Frame 1244832715.svg" alt="graph" />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col border rounded-[6px] border-2  px-4 py-3 bg-white ">
          <div className="flex  text-[12px]">
            <img
              className="mr-2"
              src="\images\PencilSimpleLine.svg"
              alt="pencil"
            />
            Edit Details
          </div>
          <div className="flex items-center text-[12px] my-2">
            <img className="mr-2" src="\images\Phone.svg" alt="phone" /> Contact
            Sellers
          </div>
          <div className="flex items-center text-[12px] text-[#DE0D0D]">
            <img className="mr-2" src="\images\Trash (2).svg" alt="Trash" />{" "}
            Delete Entry
          </div>
        </div>
      </div>

      <div className="flex">
        <div className=" rounded-[6px] border-2 px-6 py-6 bg-white">
          <div className=" flex justify-end ">
            <img className="" src="\images\X.svg" alt="X" />
          </div>
          <div className="text-[20px] py-2">Update Inventory</div>

          <div className="text-[18px] pt-4 pb-2">Upload a bill or memo of your order</div>

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
          <div className="rounded-[6px] text-white text-[14px] bg-[#303F9F] border-2 border-[#7F56D9] py-4 my-2">
            <div className="flex justify-center items-center">Make a manual entry</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mainpage;
