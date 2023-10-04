import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Partner from './Components/Partner/Partner';
import Products from './Components/Products/Products';
import Home from './pages/Home/Home';
import Mahsulot from './pages/Mahsulot/Mahsulot';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mahsulot' element={<Mahsulot/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
