import React from "react";
import "../css/product.css";
import {addToCart} from "../App";
export const Product = (props) => {  
    const {id, productName, price, image} = props.data;

    return(
        <div className="productCard">
            <img className="productImage" src={image} />
            <div className="productInfo">
                <p className="productName">{productName}</p>
                <p className="price">${price}</p>
            </div>
            <button className="cartButton" onClick={() => props.addToCart(id)}>
                Add To Cart
            </button>
        </div>
    )
}