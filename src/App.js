import React from "react";
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom"
import StarterView from "./view/StarterView"

function App() {
    return (
        <Container maxWidth="lg" sx={{width: "100%"}}>
            <Routes>
                <Route path="/" element={<StarterView/>}/>
            </Routes>
        </Container>
    );
}

export default App;