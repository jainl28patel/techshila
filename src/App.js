import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Mainpage from './components/Mainpage/Mainpage';
import Stores from './components/Stores/Stores';
import Medicines from './components/Medicines/Medicines';
import Inventory from './components/Inventory/Inventory';
import Medication from './components/Medication/Medication';
import User from "./components/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element = {<Mainpage/>} />
          <Route path="/stores" element = {<Stores/>} />
          <Route path="/medicines" element = {<Medicines/>} />
          <Route path="/medication" element={<Medication/>}/>
          <Route path="/inventory" element={<Inventory/>}/>

          

        </Route>
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
