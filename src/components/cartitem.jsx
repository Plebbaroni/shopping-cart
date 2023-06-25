import React from "react";
import "../css/cartitem.css";

const CartItem = (props) => {
    const {id, productName, price, image} = props.data;
    return(
        <div className="currentItem">
            <img className="currentImg" src={image}/>
            <p>{productName}</p>
            <p>${price}</p>
            <button>X</button>
        </div>
    )
}

export default CartItem;