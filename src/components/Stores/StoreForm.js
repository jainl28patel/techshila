import React, { useState } from "react";

function StoreForm({ setCreate, create }) {
  const [newStore, setNewStore] = useState({
    manager_mail: "",
    name: "",
    city: "",
    state: "",
    location_lat: "",
    location_long: "",
  });
  const handleChange = (e) => {
    setNewStore({ ...newStore, [e.target.name]: e.target.value });
  };
  const handleSave = async () => {
    const response = await fetch(
      "http://10.81.25.126:4000/admin/create-new-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStore),
      }
    );
    if (response.ok) {
      console.log(newStore);
      setCreate(false);
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
            onClick={() => setCreate(!create)}
          />
        </div>
        <h1 className=" text-xl text-center font-extrabold">Create Store</h1>
        <div className="flex flex-col w-[50vw] gap-2">
          <label>Manager Mail</label>
          <input
            className=" border-2"
            name="manager_mail"
            value={newStore.manager_mail}
            onChange={(e) => handleChange(e)}
          />
          <label>Store Name</label>
          <input
            name="name"
            className=" border-2"
            value={newStore.name}
            onChange={(e) => handleChange(e)}
          />
          <label>City</label>
          <input
            name="city"
            className=" border-2"
            value={newStore.city}
            onChange={(e) => handleChange(e)}
          />
          <label>State</label>
          <input
            name="state"
            className=" border-2"
            value={newStore.state}
            onChange={(e) => handleChange(e)}
          />
          <label>Location Latitude</label>
          <input
            className=" border-2"
            name="location_lat"
            value={newStore.location_lat}
            onChange={(e) => handleChange(e)}
          />
          <label>Location Longitude</label>
          <input
            className=" border-2"
            name="location_long"
            value={newStore.location_long}
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

export default StoreForm;
