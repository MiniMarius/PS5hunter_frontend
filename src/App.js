import React from "react";
import {Route, Routes} from "react-router-dom"
import StartView from "./view/StartView"
import ResultsView from "./view/ResultsView"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<StartView/>}/>
                <Route path="/results" element={<ResultsView/>}/>
            </Routes>
        </div>
    );
}

export default App;