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
          <Route index element = {<Stores/>} />
          <Route index element = {<Medicines/>} />

          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
