import React from "react";
import "../css/product.css";

export const Product = (props) => {  
    const {id, productName, price, image} = props.data;

    return(
        <div>
            {productName}
        </div>
    )
}