
import React, { useState, useEffect } from "react";
import Nav from "../user_nav/Nav";
import axios from "axios";
import demomed from "../../assets/image2.png"
import Select from "react-select";
import "../Stores/Stores.scss";

function User() {


const [showSecondPage, setShowSecondPage] = useState(false);


const RightPart = () => {
    const options = [
        { value: "Gopal Pharma and Labs", label: "Gopal Pharma and Labs" },
        { value: "Laal Pathology", label: "Laal Pathology" },
        { value: "Jain Pharma", label: "Jain Pharma" },
    ];
    return (
        <div className="bg-cyan-50 h-[full] w-[98vw]">
            <div className=' w-[38vw] height-[100vh] right-[0] bg-white' style={{ position: "absolute", right: "0", top: "8vh" }}>
                <div className='w-[100%] px-5 py-5 cursor-pointer' onClick={() => setShowSecondPage(false)}>
                    <img src="/images/X.svg" alt="close_button" />
                </div>

                <div className='flex flex-row gap-x-5 justify-center'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='border-2 rounded-xl border-slate-500 w-[15vw] h-[30vh] flex justify-center items-center'>
                            <img className='rounded-xl w-[8.5vw]' src={demomed} alt="demomed" />
                        </div>
                        <div className='flex gap-x-3.5'>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'> <img className='rounded w-[2vw]' src={demomed} alt="demomed" /></div>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'><img className='rounded w-[2vw]' src={demomed} alt="demomed" /></div>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'><img className='rounded w-[2vw]' src={demomed} alt="demomed" /></div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <div>Ecosprin 75mg Strip Of 14 Tablets</div>
                        <div>
                            BY MICRO LEVELS
                        </div>
                        <div>
                            15 Tablet(s) in Strip
                        </div>
                        <div>
                            MRP: <span style={{ textDecoration: "line-through" }}>&#8377;33.6</span>
                        </div>
                        <div>
                            &#8377;28.90 <span className='text-red-600'>14% OFF</span>
                        </div>
                        <div>
                            Inclusive of all taxes
                        </div>
                        <div>
                            Quantity : <input type="number" className="border-2 rounded border-slate-500"></input>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-5 pt-5'>
                    <div className='font-bold px-5'>Dolo 650 MG Description</div>
                    <div className='px-5 pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </div>

                <div className='flex flex-col px-5 pt-5'>
                    <div className='px-5 font-bold'>
                    Select Seller Store
                    </div>
                    <div className='px-5'>
                        nearest store selected by default
                    </div>
                    <div className='px-5'>
                    <Select
          className="w-40"
          classNamePrefix="select py-0 px-0"
          defaultValue={options[0]}
          isSearchable={true}
          name="color"
          options={options}
        />
                    </div>
                </div>

            </div>
        </div>
    )
}











  const toggleSecondPage = () => {
    setShowSecondPage(true);
    // console.log("sho")
  };




  const orderedProducts = [
    {
      id: 1,
      name: "Sugar Free Gold",
      imageUrl: "/images/Screenshot 2024-04-11 181121.png",
      description:
        "Sweetneer Poweder dslfjsldjfljsosdfhkjshdfkhdksdsfhsdjfhkhiwehi lorem djfsoifefdljfoisefjjofhki",
      mrp: 100,
    
    },
    {
      id: 2,
      name: "Sud Good Medicine",
      imageUrl: "/images/Screenshot 2024-04-11 181140.png",
      description: "Gives you all the energy you want",
      mrp: 120,

    },
    // Add more sample products as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Filter data based on search term
  const filteredNodes = orderedProducts.filter((orderedProduct) =>
    orderedProduct.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const [orderedProducts, setOrderedProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch previously ordered products from the backend API
  //   axios.get('https://your-backend-server.com/api/ordered-products', {
  //     // Add authentication token if required by your backend
  //     // headers: {
  //     //   Authorization: `Bearer ${token}`
  //     // }
  //   })
  //   .then(response => {
  //     // Set the fetched products in state
  //     setOrderedProducts(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching ordered products:', error);
  //   });
  // }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <Nav />
      <div
        
        className={showSecondPage ?"flex flex-col w-[40vw] ml-[10vw]":"flex flex-col  w-[50vw] ml-[25vw] "}
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
        {searchTerm === "" ? (
          <div className="my-4 py-2 ">
            <div>
              <div className="text-[24px] px-2">Previously bought</div>
              {/* <img src="\images\image 8.svg" alt="" /> */}

              <div className="flex  text-[10px] py-2" onClick={toggleSecondPage}>
                {/* Render the sample ordered products */}
                {orderedProducts.map((product) => (
                  <div key={product.id} className="w-[8vw] mx-2">
                    <img
                      className="w-[8vw]"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <h3 className="font-bold">{product.name}</h3>
                    <p
                      style={{
                        width: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.description}
                    </p>
                    <p className="text-[8px]">
                      MRP:{" "}
                      <span className="line-through">Rs. {product.mrp}</span>
                    </p>
                     
                  </div>
                ))}
              </div>
            </div>
            <div className="py-2">
              <div className="text-[24px] px-2">Trending near you</div>
              {/* <img src="\images\image 6.svg" alt="" /> */}
              <div className="flex  text-[10px] py-2">
                {/* Render the sample ordered products */}
                {orderedProducts.map((product) => (
                  <div key={product.id} className="w-[8vw] mx-2">
                    <img
                      className="w-[8vw]"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <h3 className="font-bold">{product.name}</h3>
                    <p
                      style={{
                        width: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.description}
                    </p>
                    <p className="text-[8px]">
                      MRP:{" "}
                      <span className="line-through">Rs. {product.mrp}</span>
                    </p>
                     
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[24px] px-2">Essentials</div>
              {/* <img src="\images\image 7.svg" alt="" /> */}
              <div className="flex  text-[10px] py-2">
                {/* Render the sample ordered products */}
                {orderedProducts.map((product) => (
                  <div key={product.id} className="w-[8vw] mx-2">
                    <img
                      className="w-[8vw]"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <h3 className="font-bold">{product.name}</h3>
                    <p
                      style={{
                        width: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.description}
                    </p>
                    <p className="text-[8px]">
                      MRP:{" "}
                      <span className="line-through">Rs. {product.mrp}</span>
                    </p>
                     
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex  text-[10px] py-2 " onClick={toggleSecondPage}>
                {/* Render the sample ordered products */}
                {filteredNodes.map((product) => (
                  <div key={product.id} className="w-[8vw] mx-2">
                    <img
                      className="w-[8vw]"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                    <h3 className="font-bold">{product.name}</h3>
                    <p
                      style={{
                        width: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.description}
                    </p>
                    <p className="text-[8px]">
                      MRP:{" "}
                      <span className="line-through">Rs. {product.mrp}</span>
                    </p>
                     
                  </div>
                ))}
              </div>
        )}

      </div>
      {showSecondPage&&<RightPart/>}
    </div>
  );
}

export default User;

