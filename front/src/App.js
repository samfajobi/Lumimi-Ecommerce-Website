import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import SignupScreen from "./screens/SignUpScreen";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getError } from './utils';


function App() {
  return (
    <Router>

      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductsPage />} /> 
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

 // <div>
    //   {/* <Login /> */}
    // <Cart />
    // {/* <Register /> */}
    //  <ProductsPage />
    // {/* <ProductPage />  */}
    // {/* <Home/> */}
    // </div>

export default App;
