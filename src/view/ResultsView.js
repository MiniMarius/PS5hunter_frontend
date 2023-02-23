import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ProductTable from "../components/ProductTable";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import FrostyButton from '../components/FrostyButton';

function ResultsView({products, isLoading, handleClick}) {
    return (
      <Box style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh"}}>
        <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
          <Box display="flex" flexDirection="column" alignItems="stretch" padding={2} marginTop={8}>
            <Box flexDirection="column-reverse" alignItems="center">
            <FrostyButton variant="contained" color="primary" onClick={handleClick} disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : "Run Scraper"}
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
  
  export default ResultsView;