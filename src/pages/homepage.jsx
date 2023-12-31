import React from "react";
import { Router, Routes, Link } from "react-router-dom";
import "../css/homepage.css"

export const Homepage = () => {
    return(
        <div className="homepage">
            <div className="homepagecontent">
                <p className="text">The best music, from our site to your door.</p>
                <Link to="../pages/shoppage" className="homepagebutton">Buy Now</Link>
            </div>
        </div>
    );
}