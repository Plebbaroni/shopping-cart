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
  
  let backdrop;
  const [shoppingCart, setShoppingCart] = useState(resetCart());
  const [cartCondition, setCartCondition] = useState("cart");

  const addToCart = (id) =>{
    if(shoppingCart[id] === 1){
      alert("Sorry. Only one of each product can be bought at a time.");
    }else{
      setShoppingCart((shoppingCart) => ({...shoppingCart, [id]: shoppingCart[id] + 1}));
    }
    console.log(`${id}`);
  }

  const removeFromCart = (id) => {
    setShoppingCart((shoppingCart) => ({...shoppingCart, [id]: shoppingCart[id] - 1}));
  }

  const openCart = () => {
    setCartCondition(("cartOpen"));
  }

  const closeCart = () => {
    setCartCondition(("cart"));
  }

  if(cartCondition === "cartOpen"){
    backdrop = <Backdrop closeCart={closeCart}/>
  }

  return (
    <div className='appWrapper'>
        <div className="App">
          <Router>
            {backdrop}
            <Cart 
              className = {cartCondition}
              currentCart = {shoppingCart}
              removeFromCart = {removeFromCart}
            />
            <Navbar openCart = {openCart}/>
            <Main addToCart={addToCart}/>
          </Router>
      </div>
    </div>
  );
}

export default App;
