import './css/App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Homepage } from "./pages/homepage";
import Main from "./components/main";
import { Cart } from "./components/cart";
import {PRODUCTS} from "./products/products";


function App(){
  const resetCart = () => {
    let cart = {};
    for(let i = 0; i < PRODUCTS.length; i++){
      cart[i] = 0;
    }
    return cart;
  }
  
  const [shoppingCart, setShoppingCart] = useState(resetCart());

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
            <Navbar />
            <Main addToCart={addToCart}/>
            <Cart 
              currentCart = {shoppingCart}
            />
          </Router>
      </div>
    </div>
  );
}

export default App;
