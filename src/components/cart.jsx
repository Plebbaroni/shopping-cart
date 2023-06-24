import React from "react";
import CartItem from "./cartitem";
import {PRODUCTS} from "../products/products";
export const Cart = (
    props
) => {
    
    return(
        <div className="cart">
            <div className="cartTitle">
                <h1>Your Cart</h1>
            </div>
            <div className="currentItems">
                {PRODUCTS.map((product) => {
                    console.log(`${props.currentCart[product.id]}`)
                    if(props.currentCart[product.id] !== 0){
                        return <CartItem data={product}/>
                    }
                })}
            </div>
        </div>
    );
}