import React from "react";
import {Route, Routes} from "react-router-dom"
import ResultsPresenter from "./presenter/ResultsPresenter";
import StartPresenter from "./presenter/StartPresenter";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<StartPresenter/>}/>
                <Route path="/results" element={<ResultsPresenter/>}/>
            </Routes>
        </div>
    );
}

export default App;