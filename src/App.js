import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Mainpage from './components/Mainpage/Mainpage';
import Stores from './components/Stores/Stores';
import Medicines from './components/Medicines/Medicines';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element = {<Mainpage/>} />
          <Route path="/stores" element = {<Stores/>} />
          <Route path="/medicines" element = {<Medicines/>} />

          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
