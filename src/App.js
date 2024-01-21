import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Shop from './pages/shop';
import Product from './pages/product';
import Cart from './pages/cart/cart';
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
