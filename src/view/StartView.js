import React from "react";
import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Illustration from "../assets/illustration.svg";
import FrostyButton from "../components/FrostyButton";
import Container from "@mui/material/Container";
function StartView({ handleNavigate }) {
  return (
    <Container maxWidth="false" style={{borderStyle: "dashed"}}>
      <Box>
      <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
        <Box display="flex">
          <Typography
            variant="h4"
            align="right"
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "1.25",
              letterSpacing: "0.01em",
              color: "#20253B",
              marginBottom: "1.5rem",
            }}
          >
            Get Your Console
          </Typography>
        </Box>
        <Box>
        <img
          src={Illustration}
          alt="PlayStation illustration"
          style={{ maxWidth: "50%", alignSelf: "center" }}
        />
        </Box>
        <Box flexDirection="column-reverse" alignItems="center">
            <FrostyButton
            variant="contained"
            color="primary"
            onClick={handleNavigate}
            >
            GO TO RESULTS
            </FrostyButton>
        </Box>
      </Box>
    </Container>
    
  );
}

export default StartView;