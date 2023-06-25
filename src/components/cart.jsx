import React from "react";
import CartItem from "./cartitem";
import {PRODUCTS} from "../products/products";
import "../css/cart.css";
export const Cart = (
    props
) => {
    
    return(
        <div className={props.className}>
            <div className="cartTitle">
                <p className="yourproducts">Your Products</p>
            </div>
            <div className="currentItems">
                {PRODUCTS.map((product) => {
                    if(props.currentCart[product.id] !== 0){
                        return <CartItem data={product} removeFromCart={props.removeFromCart}/>
                    }
                })}
            </div>
        </div>
    );
}