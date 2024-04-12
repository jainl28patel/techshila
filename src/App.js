import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Mainpage from "./components/Mainpage/Mainpage";
import Stores from "./components/Stores/Stores";
import Medicines from "./components/Medicines/Medicines";
import Inventory from "./components/Inventory/Inventory";
import Medication from "./components/Medication/Medication";
import User from "./components/user/User";
import Signuplogin from "./components/Signuplogin/Signuplogin";
import Layout2 from "./components/Layout2/Layout2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="/dashboard/stores" element={<Stores />} />
          <Route path="/dashboard/medicines" element={<Medicines />} />
        </Route>
        <Route path="/manager/" element={<Layout2 />}>
          <Route path="/manager/medication" element={<Medication />} />
          <Route path="/manager/inventory" element={<Inventory />} />
        </Route>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Signuplogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
