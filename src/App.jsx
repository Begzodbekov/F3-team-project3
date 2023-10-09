import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
// import Partner from "./Components/Partner/Partner";
// import Products from "./Components/Products/Products";
import Home from "./pages/Home/Home";
import Mahsulot from "./pages/Mahsulot/Mahsulot";
import Tavar from "./pages/Tavar/Tavar";
import Services from "./pages/Services/Services";
import Contactpage from "./pages/Contactpage/Contactpage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mahsulot' element={<Mahsulot/>}/>
        <Route path='/tavar' element={<Tavar/>}/>
        <Route path='/services'element={<Services/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
