import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Mahsulot from './pages/Mahsulot/Mahsulot';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mahsulot' element={<Mahsulot/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
