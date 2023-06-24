import React from "react";
import { Product } from "../components/product";
import {PRODUCTS} from "../products/products";
import "../css/shoppage.css";

export const Shop = (props) => {
    return(
        <div className="shopPage">
            <div className="shopTitle">
                <h1>OUR PRODUCTS</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} addToCart={props.addToCart}/>
                ))}
            </div>
        </div>
    );
}