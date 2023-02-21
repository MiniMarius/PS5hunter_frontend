import bigLogo from "../assets/ps5hunter.png";
import React from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import TableOfData from "../components/TableOfData";
function StarterView() {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box display="flex" flexDirection="column" alignItems="stretch">
                <TableOfData></TableOfData>
            </Box>
        </div>
    )
}

export default StarterView;