import React from "react";
import "../css/backdrop.css";


export const Backdrop = (props) => {
    return(
        <div className="backdrop" onClick={props.closeCart}/>
    );
}

