import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './pages/Home/Home';
import Mahsulot from './pages/Mahsulot/Mahsulot';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mahsulot' element={<Mahsulot/>}/>
      </Routes>
    </div>
  );
}

export default App;
