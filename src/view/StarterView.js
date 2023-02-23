import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import Grid from "@mui/material/Grid";
function StarterView() {
    const [products, setProducts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
  
    useEffect(() => {
      let retries = 3;
    
      const fetchData = async () => {
        try {
          const res = await axios.get("/api/product/");
          setProducts(res.data);
          setIsLoading(false);
        } catch (err) {
          if (retries > 0) {
            console.log(`Error fetching data. Retrying... ${retries} retries left.`);
            retries--;
            fetchData();
          } else {
            console.log("Error fetching data. Max retries exceeded.");
          }
        }
      };
    
      fetchData();
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
      <Box style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh"}}>
        <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
          <Box display="flex" flexDirection="column" alignItems="stretch" padding={2}>
            <Button variant="contained" color="primary" onClick={handleClick} disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : "Run Scraper"}
            </Button>
            {isLoading ? (
              <Box display="flex" flexDirection="column" alignItems="center" padding={1}>
                Getting new data
              </Box>
            ) : (
              <Box marginLeft="auto" bgcolor="background.paper" p={2}>
                <ProductTable products={products} />
              </Box>
            )}
          </Box>
      </Box>
    );
  }
  
  export default StarterView;