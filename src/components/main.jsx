import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { Shop } from "../pages/shoppage";
import "../css/main.css"

const Main = () => {
    return(
        <div className="main">
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="pages/shoppage" element = {<Shop />} />
            </Routes>
        </div>
    );
}

export default Main;