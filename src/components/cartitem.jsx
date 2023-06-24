import React from "react";

const CartItem = (props) => {
    const {id, productName, price, image} = props.data;
    return(
        <div className="currentItem">
            <img className="currentImg" src="{image}" />
            <p>{productName}</p>
            <p>${price}</p>
        </div>
    )
}

export default CartItem;