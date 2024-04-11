
import React, { useState, useEffect } from "react";
import Nav from "../user_nav/Nav";
import axios from "axios";

function User() {
  const orderedProducts = [
    {
      id: 1,
      name: "Sugar Free Gold",
      imageUrl: "/images/Screenshot 2024-04-11 181121.png",
      description:
        "Sweetneer Poweder dslfjsldjfljsosdfhkjshdfkhdksdsfhsdjfhkhiwehi lorem djfsoifefdljfoisefjjofhki",
      mrp: 100,
      discountedPrice: 80,
      discount: 20,
    },
    {
      id: 2,
      name: "Sud Good Medicine",
      imageUrl: "/images/Screenshot 2024-04-11 181140.png",
      description: "Gives you all the energy you want",
      mrp: 120,
      discountedPrice: 100,
      discount: 16.67,
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
        {searchTerm === "" ? (
          <div className="my-4 py-2 ">
            <div>
              <div className="text-[24px] px-2">Previously bought</div>
              {/* <img src="\images\image 8.svg" alt="" /> */}

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
                    <p>
                      Discounted Price: Rs. {product.discountedPrice}{" "}
                      <span className="text-[#D01717]">
                        ({product.discount}%)
                      </span>
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
                    <p>
                      Discounted Price: Rs. {product.discountedPrice}{" "}
                      <span className="text-[#D01717]">
                        ({product.discount}%)
                      </span>
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
                    <p>
                      Discounted Price: Rs. {product.discountedPrice}{" "}
                      <span className="text-[#D01717]">
                        ({product.discount}%)
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex  text-[10px] py-2">
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
                    <p>
                      Discounted Price: Rs. {product.discountedPrice}{" "}
                      <span className="text-[#D01717]">
                        ({product.discount}%)
                      </span>
                    </p>
                  </div>
                ))}
              </div>
        )}

      </div>
    </div>
  );
}

export default User;

