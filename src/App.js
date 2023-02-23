import React from "react";
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom"
import StarterView from "./view/StarterView"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<StarterView/>}/>
            </Routes>
        </div>
    );
}

export default App;