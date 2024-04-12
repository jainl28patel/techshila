import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = ({ setAuthStatus }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let userDetails = {
      email: email,
      password: password,
    };
    console.log(process.env.REACT_APP_URL);

    


    let response1 = await axios.post('/admin/login', userDetails)
    .then(function (response) {
      console.log(response);
      if(response.status == 200 ){
        localStorage.setItem("email", userDetails.email);
        navigate("/");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
    let response2 = await axios.post('/user/login', userDetails)
    .then(function (response) {
      console.log(response);
      if(response.status == 200 ){
        localStorage.setItem("email", userDetails.email);
        navigate("/user");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
    let response3 = await axios.post('/manager/login', userDetails)
    .then(function (response) {
      console.log(response);
      if(response.status == 200 ){
        localStorage.setItem("email", userDetails.email);
        navigate("/medication");
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can implement further login logic
    setAuthStatus(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleLogin(e)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Don't have an account yet?{" "}
          <span
            onClick={() => setAuthStatus(false)}
            className="cursor-pointer text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

const SignUp = ({ setAuthStatus }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  console.log("1");
  //   console.log(process.env.REACT_APP_URL, "hehlkj")
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("2");
    console.log(process.env.REACT_APP_URL, "3");
    let userDetails = {
      name: name,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      contact: phoneNumber,
    };
    let adminDetails = {
      name: name,
      email: email,
      password: password,
      contact: phoneNumber,
    };
    let managerDetails = {
      name: name,
      email: email,
      password: password,
      contact: phoneNumber,
    };

    if (role === "user") {
      let response = await axios.post('/user/signup', userDetails)
      .then(function (response) {
        console.log(response);
        if(response.status == 200 ){
          localStorage.setItem("email", userDetails.email);
          navigate("/user");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      
    } else if (role === "inventory-manager") {
      let response = await axios.post('/manager/signup', userDetails)
      .then(function (response) {
        console.log(response);
        if(response.status == 200 ){
          localStorage.setItem("email", userDetails.email);
          navigate("/medication");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    } else if (role === "store-owner") {
      let response = await axios.post('/admin/signup', userDetails)
      .then(function (response) {
        console.log(response);
        if(response.status == 200 ){
          localStorage.setItem("email", userDetails.email);
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    // Handle sign up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
    // You can implement further logic based on the selected role
    setAuthStatus(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleSignUp(e)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone-number" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="user"
                name="role"
                type="radio"
                value="user"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                checked={role === "user"}
                onChange={() => setRole("user")}
              />
              <label
                htmlFor="user"
                className="ml-2 block text-sm text-gray-900"
              >
                User
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="inventory-manager"
                name="role"
                type="radio"
                value="inventory-manager"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                checked={role === "inventory-manager"}
                onChange={() => setRole("inventory-manager")}
              />
              <label
                htmlFor="inventory-manager"
                className="ml-2 block text-sm text-gray-900"
              >
                Inventory Manager
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="store-owner"
                name="role"
                type="radio"
                value="store-owner"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                checked={role === "store-owner"}
                onChange={() => setRole("store-owner")}
              />
              <label
                htmlFor="store-owner"
                className="ml-2 block text-sm text-gray-900"
              >
                Store Owner
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <span
            onClick={() => setAuthStatus(true)}
            className="cursor-pointer text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );
};

const Signuplogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <SignUp setAuthStatus={setIsLoggedIn} />
      ) : (
        <Login setAuthStatus={setIsLoggedIn} />
      )}
    </>
  );
};

export default Signuplogin;
