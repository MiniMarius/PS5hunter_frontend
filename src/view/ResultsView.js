import React, { useEffect } from "react";
import {Box, Button} from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import ProductTable from "../components/ProductTable";
import CircularProgress from "@mui/material/CircularProgress";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import FrostyButton from '../components/FrostyButton';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import WebsiteForm from "../components/WebsiteForm";
function ResultsView({products, isLoading, handleClick}) {
  return (
    <Box style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh"}}>
      <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
        <Box marginTop={8}>
          <Grid container justifyContent="center" alignItems="center" style={{height: "100%"}} direction="row">
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
                <Grid item>
                  <Typography variant="h5" align="center" gutterBottom color="white">
                    Scraped Products
                  </Typography>
                </Grid>
                <Grid item direction="row">
                  <FrostyButton variant="contained" color="primary" onClick={handleClick} disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} /> : "Run Scraper"}
                  </FrostyButton>
                  <WebsiteForm/>
                </Grid>
                {!isLoading && (
                  <Box marginTop={4} bgcolor="background.paper" p={2} width={1} maxWidth={1000}>
                    <ProductTable products={products} />
                  </Box>
                )}
              </Box>
              
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: 'auto' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 3 }}>
            © 2023 Playstation 5 Hunter
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default ResultsView;