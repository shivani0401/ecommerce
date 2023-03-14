import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/index';
import Products from './Components/Products/index';
//import ProductDescription from './Components/ProductDescription';
import HomeProdDesc from './Components/HomeProdDesc';
import Signin from './Components/Signin/index';
import AboutUs from './Components/AboutUs';
import Cart from './Components/Cart/Cart';

function PrivateRoute({ isLoggedin, children }) {
  if (isLoggedin) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
function PublicRoute({ isLoggedin, children }) {
  if (!isLoggedin) {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
}

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homeproddesc/:productId' element={<HomeProdDesc />} />
        <Route path='/products' element={<Products />} />
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/*" element={<h4>404 Error Occured</h4>} />
        {/* <Route path='/products/:productId' element={<ProductDescription />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;