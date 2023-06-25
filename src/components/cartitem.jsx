import React from "react";
import "../css/cartitem.css";

const CartItem = (props) => {
    const {id, productName, price, image} = props.data;
    return(
        <div className="currentItem">
            <img className="currentImg" src={image}/>
            <p className="currentName">{productName}</p>
            <p className="currentPrice">${price}</p>
            <button className="removeButton" onClick={() => props.removeFromCart(id)}>X</button>
        </div>
    )
}

export default CartItem;