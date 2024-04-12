
import React, { useState, useEffect } from "react";
import Nav from "../user_nav/Nav";
import axios from "axios";
import demomed from "../../assets/image2.png"
import Select from "react-select";
import "../Stores/Stores.scss";
import { useGeolocated } from "react-geolocated";

function User() {


const [showSecondPage, setShowSecondPage] = useState(false); 
const [item, setCurrItem] = useState({}); 
const [stores, setStores] = useState([]); 

const RightPart = () => {


    const options = [
        { value: "Gopal Pharma and Labs", label: "Gopal Pharma and Labs" },
        { value: "Laal Pathology", label: "Laal Pathology" },
        { value: "Jain Pharma", label: "Jain Pharma" },
    ];

    const [quantity, setquantity] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const changequantity = (e) => {
      setquantity(e.target.value);
    }

    const handelOrder = (med_id, quantity)=>{
      axios.post("/user/place-order", {
        med_id : med_id,
        quantity:quantity,
        store_id: selectedOption.id
      })
    }
    const handleChange = (option) => {
      setSelectedOption(option);  // Update the state to the selected option
      console.log('Option selected:', option);
    };

    return (
        <div className="bg-cyan-50 h-[full] w-[98vw]">
            <div className=' w-[38vw] height-[100vh] right-[0] bg-white' style={{ position: "absolute", right: "0", top: "8vh" }}>
                <div className='w-[100%] px-5 py-5 cursor-pointer' onClick={() => setShowSecondPage(false)}>
                    <img src="/images/X.svg" alt="close_button" />
                </div>

                <div className='flex flex-row gap-x-5 justify-center'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='border-2 rounded-xl border-slate-500 w-[15vw] h-[30vh] flex justify-center items-center'>
                            <img className='rounded-xl w-[8.5vw]' src={item.image_url} alt="demomed" />
                        </div>
                        <div className='flex gap-x-3.5'>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'> <img className='rounded w-[2vw]' src={item.image_url} alt="demomed" /></div>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'><img className='rounded w-[2vw]' src={item.image_url} alt="demomed" /></div>
                            <div className='border-2 rounded-xl border-slate-500 w-[4.5vw] h-[10vh] flex justify-center items-center'><img className='rounded w-[2vw]' src={item.image_url} alt="demomed" /></div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-1 w-[15vw]'>
                        <div className="font-bold text-[24px]">{item.name}</div>
                        <p className="whitespace-normal break-words" >
                            {item.desc}
                        </p>
                        {/* <div>
                            15 Tablet(s) in Strip
                        </div> */}
                        <div className="font-bold">
                            Price: <span >&#8377;{item.price}</span>
                        </div>
                        {/* <div>
                            &#8377;28.90 <span className='text-red-600'>14% OFF</span>
                        </div> */}
                        <div>
                            Inclusive of all taxes
                        </div>
                        <div>
                            Quantity : <input type="number" className="border-2 rounded border-slate-500" value={quantity} onChange={changequantity}></input>
                        </div>
                        <button
                          type="submit"
                          onClick={()=>handelOrder(item._id, quantity)}
                          className="group relative w-3/4 flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Order
                        </button>
                    </div>
                </div>
                <div className='flex flex-col px-5 pt-5 mx-5'>
                  <div >
                    Quantity available:  {item.qty_available}
                  </div>
                  <div>
                    Expiry Date : {item.expiry_date.substring(0 , item.expiry_date.indexOf('T'))}
                  </div>
                    {/* <div className='font-bold px-5'>Dolo 650 MG Description</div>
                    <div className='px-5 pt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div> */}
                </div>

                <div className='flex flex-col px-5 pt-5'>
                    <div className='px-5 font-bold'>
                    Select Seller Store
                    </div>
                    <div className='px-5'>
                        Nearest store is at top by default
                    </div>
                    <div className='px-5'>
                    <Select
          className="w-40"
          classNamePrefix="select py-0 px-0"
          defaultValue={stores[0]}
          isSearchable={true}
          name="color"
          options={stores}
          onChange={handleChange}  // Set the onChange handler
          value={selectedOption}   // Set the selected option
        />
                    </div>
                </div>

            </div>
        </div>
    )
}











  const toggleSecondPage = (pro) => {
    setShowSecondPage(true);
    setCurrItem(pro)
    // console.log("sho")
  };




  // const orderedProducts = [
  //   {
  //     id: 1,
  //     name: "Sugar Free Gold",
  //     imageUrl: "/images/Screenshot 2024-04-11 181121.png",
  //     description:
  //       "Sweetneer Poweder dslfjsldjfljsosdfhkjshdfkhdksdsfhsdjfhkhiwehi lorem djfsoifefdljfoisefjjofhki",
  //     mrp: 100,
    
  //   },
  //   {
  //     id: 2,
  //     name: "Sud Good Medicine",
  //     imageUrl: "/images/Screenshot 2024-04-11 181140.png",
  //     description: "Gives you all the energy you want",
  //     mrp: 120,

  //   },
  //   // Add more sample products as needed
  // ];

  const [searchTerm, setSearchTerm] = useState("");


 
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [loc, setLoc] = useState("Searching Location...");
  const [userDetails, setUserDetails] = useState("");
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 1000,
        });

  const updateLoc = (lat,long) =>{
    axios.post("/user/update-location", {
      latitude:lat,
      longitude:long
    })
  }

  const updateStores = () =>{
    axios.get("/user/store-details")
    .then((res) => {
      if(res){
        let store_list = []
        res.data.map((item)=>[
          store_list.push({
            value: item.name,
            label: item.name,
            id: item._id
          })
        ])
      setStores(store_list)
      }


    })
  }

  const setupdetails = () =>{
    axios.get('/user/user-details' , {
    })
    .then(response => {
      // console.log("response data",response.data)
      console.log("details ",response)
      setUserDetails(response.data)
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userDetails.latitude},${userDetails.longitude}&key=AIzaSyBB5VtbYNkoqHZD9uPohGNszVQnSsCo5ko`)
      .then((response) =>{
        console.log("res", response)
        let str = response.data.plus_code.compound_code
        setLoc(str.substring(str.indexOf(' ') + 1))
      }).catch((err)=>{
        console.log(err)
      })
    })
    .catch(error => {
      console.error('Error fetching ordered products:', error);
    });
  }

  useEffect(() => {
    axios.get("/user/order-history")
    .then(response => {
      console.log("response data: ",response.data)
      setOrderedProducts(response.data);
    })
    .catch(error => {
      console.error('Error fetching ordered products:', error);
      // console.log("hekjhekj")
    });
  }, []); 
  
  const [nearProducts, setnearProducts] = useState([]);
  const filteredNodes = nearProducts.filter((nearProduct) =>
    nearProduct.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios.get("/user/search" , {
    })
    .then(response => {
      // console.log("response data",response.data)
      setnearProducts(response.data);
    })
    .catch(error => {
      console.error('Error fetching ordered products:', error);
    });
  }, []); 

  useEffect(() => {
    setupdetails()
    updateStores()
    if(coords){
      updateLoc(coords.latitude, coords.longitude)
    }
  }, [coords]); 



  return (
    <div>
      <Nav props={ {name: userDetails.name, email: userDetails.email, loc: loc}} />
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
              { orderedProducts === "no-order-history" ? <h1 style={{padding:"1rem 0 0 1rem", marginBottom: "3rem"}}>No order history</h1>:  <div className="flex  text-[10px] py-2" style={{marginBottom: "3rem"}} >
                {/* Render the sample ordered products */}
                {orderedProducts.map((product) => (
                  <div key={product._id} className="w-[8vw] mx-2" onClick={() => toggleSecondPage(product)}>
                    <img
                      className="w-[8vw]"
                      src={product.image_url}
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
                      {product.desc}
                    </p>
                    <p className="text-[8px]">
                       Price:{" "}
                      <span className="">Rs. {product.price}</span>
                    </p>
                     
                  </div>
                ))}
              </div>}
            </div>
            <div className="py-2">
              <div className="text-[24px] px-2">Available at your Location</div>
              {/* <img src="\images\image 6.svg" alt="" /> */}
              <div className="flex  text-[10px] py-2">
                {/* Render the sample ordered products */}
                {nearProducts.map((product) => (
                  <div key={product._id} className="w-[8vw] mx-2" onClick={() => toggleSecondPage(product)}>
                    <img
                      className="w-[8vw]"
                      src={product.image_url}
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
                      {product.desc}
                    </p>
                    <p className="text-[8px]">
                       Price:{" "}
                      <span className="">Rs. {product.price}</span>
                    </p>
                     
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        ) : (
          <div className="flex  text-[10px] py-2 " >
                {/* Render the sample ordered products */}
                {filteredNodes.map((product) => (
                  <div key={product._id} className="w-[8vw] mx-2" onClick={()=>toggleSecondPage(product)}>
                    <img
                      className="w-[8vw]"
                      src={product.image_url}
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
                      {product.desc}
                    </p>
                    <p className="text-[8px]">
                       Price:{" "}
                      <span className="">Rs. {product.price}</span>
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
