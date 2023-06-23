import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/" className="logo">camelCase Records</Link>
            <div className = "links">
                <Link to="../pages/shoppage" className="link">Products</Link>
                <button
                    className="cartbutton"
                    //onClick={openCart}
                    >
                        <ShoppingCart size = {32}/>
                    </button>
            </div>
        </div>
    );
}

