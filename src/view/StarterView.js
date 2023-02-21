import bigLogo from "../assets/ps5hunter.png";
import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import TableOfData from "../components/TableOfData";
import axios from "axios";
function StarterView() {

    const [product, setProduct] = React.useState(null)
    function handleClick() {
        axios.get("/api/product/")
        .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    }

    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Box display="flex" flexDirection="column" alignItems="stretch">
                <TableOfData></TableOfData>
                <Button onClick={handleClick}>Fetch product</Button>
            </Box>
        </div>
    )
}

export default StarterView;