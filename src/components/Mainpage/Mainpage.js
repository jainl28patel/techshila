import React from "react";

const Mainpage = () => {
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
          <div className="border-b-2 border-[#303F9F] text-[#303F9F] text-[16px] py-2 px-4">Symptoms</div>
          <div className=" text-[16px] py-2 px-4">Medicine</div>
        </div>
        <div className="py-4" >
          <img src="\images\Frame 1244832715.svg" alt="graph" />
        </div>
      </div>
      
    </div>
  );
};

export default Mainpage;
