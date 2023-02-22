import bigLogo from "../assets/ps5hunter.png";
import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import CircularProgress from "@mui/material/CircularProgress";
import { flexbox } from "@mui/system";
function StarterView() {
    const [products, setProducts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
  
    useEffect(() => {
      axios
        .get("/api/product/")
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const handleClick = () => {
      setIsLoading(true);
      axios
        .get("/run_scraper/")
        .then((response) => {
          console.log(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
  
    return (
      <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <img src={bigLogo} alt="PS5 Hunter Logo" />
          <Button variant="contained" color="primary" onClick={handleClick} disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : "Run Scraper"}
          </Button>
          {isLoading ? (<Box display="flex" flexDirection="column" alignItems="center" padding={1}>Getting new data</Box>) : (<ProductTable products={products}></ProductTable>)}
        </Box>
      </div>
    );
  }
  
  export default StarterView;