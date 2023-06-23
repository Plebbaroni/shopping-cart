import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import "../css/main.css"

const Main = () => {
    return(
        <div className="main">
            <Routes>
                <Route index element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default Main;