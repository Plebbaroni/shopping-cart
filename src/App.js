import './css/App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Homepage } from "./pages/homepage";
import Main from "./components/main";
import { Cart } from "./components/cart";
import {PRODUCTS} from "./products/products";
import {Backdrop} from "./components/backdrop";

function App(){
  const resetCart = () => {
    let cart = {};
    for(let i = 0; i < PRODUCTS.length; i++){
      cart[i] = 0;
    }
    return cart;
  }
  
  const [shoppingCart, setShoppingCart] = useState(resetCart());
  const [cartOpen, setCartOpen] = useState("false");

  const addToCart = (id) =>{
    setShoppingCart((shoppingCart) => ({...shoppingCart, [id]: shoppingCart[id] + 1}));
    console.log(`${id}`);
  }

  const removeFromCart = (id) => {
    setShoppingCart(shoppingCart.filter((product) => product.id !== id));
  }

  return (
    <div className='appWrapper'>
        <div className="App">
          <Router>
            <Cart 
              currentCart = {shoppingCart}
            />
            <Navbar />
            <Main addToCart={addToCart}/>
          </Router>
      </div>
    </div>
  );
}

export default App;
