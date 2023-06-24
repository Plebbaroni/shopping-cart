import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { Shop } from "../pages/shoppage";
import "../css/main.css"

const Main = (props) => {
    return(
        <div className="main">
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="pages/shoppage" element = {<Shop addToCart={props.addToCart}/>}/>
            </Routes>
        </div>
    );
}

export default Main;