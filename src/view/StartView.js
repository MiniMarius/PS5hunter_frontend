import React from "react";
import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Illustration from "../assets/illustration.svg";
import FrostyButton from "../components/FrostyButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
function StartView({ handleNavigate }) {
  return (
    <>
      <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <Grid item xs={12} md={6}>
          <img src={Illustration} alt="PlayStation illustration" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 2 }}>
            Find the latest Playstation
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Poppins', mb: 4 }}>
            Has the Playstation 5 been on your wishlist for a long time? Our web scraper can help you find the latest PlayStation from a variety of online stores, all in one place.
          </Typography>
          <FrostyButton variant="contained" color="primary" onClick={handleNavigate}>
            Tools
          </FrostyButton>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 'auto' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center" sx={{ py: 3 }}>
            © 2023 Playstation 5 Hunter
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default StartView;