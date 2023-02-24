import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ProductTable from "../components/ProductTable";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import FrostyButton from '../components/FrostyButton';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
function ResultsView({products, isLoading, handleClick}) {
  return (
    <Box style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh"}}>
      <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
        <Box marginTop={8}>
          <Grid container justifyContent="center" alignItems="center" style={{height: "100%"}}>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                <Grid item>
                  <Typography variant="h5" align="center" gutterBottom color="white">
                    Scraped Products
                  </Typography>
                </Grid>
                <Grid item>
                  <FrostyButton variant="contained" color="primary" onClick={handleClick} disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} /> : "Run Scraper"}
                  </FrostyButton>
                </Grid>
                {!isLoading && (
                  <Box marginTop={4} bgcolor="background.paper" p={2} width={1} maxWidth={800}>
                    <ProductTable products={products} />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
    </Box>
  );
}

export default ResultsView;