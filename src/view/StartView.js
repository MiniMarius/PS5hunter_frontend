import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import illustration from "../assets/illustration.svg";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
function StartView() {
    const [products, setProducts] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const navigate = useNavigate();

    const FrostyButton = styled(Button)({
      backgroundColor: "#e0e0e0",
      borderRadius: 30,
      boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.4)",
      color: "#4d4d4d",
      height: 60,
      margin: "20px",
      minWidth: 200,
      transition: "background-color 0.3s ease-out",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      "&:hover": {
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.8)",
      },
    });
  
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

    const handleClickResults = () => {
      navigate("/results");
    };
  
    return (
      <Box style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh"}}>
        <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
          <Box display="flex" flexDirection="column" alignItems="stretch" padding={2} marginTop={8}>
            <Box flexDirection="column-reverse" alignItems="center">
            <FrostyButton variant="contained" color="primary" onClick={handleClick} disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : "Run Scraper"}
            </FrostyButton>
            <FrostyButton variant="contained" color="primary" onClick={handleClickResults} disabled={isLoading}>Scraped data
            </FrostyButton>

            </Box>
            {isLoading ? (
              <Box display="flex" flexDirection="column" alignItems="center" padding={1}>
                Getting new data
              </Box>
            ) : (
              <Box marginLeft="auto" bgcolor="background.paper" p={2} width={1} maxWidth={500}>
                <ProductTable products={products} />
              </Box>
            )}
          </Box>
      </Box>
    );
  }
  
  export default StartView;