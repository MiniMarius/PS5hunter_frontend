import React from "react";
import { styled } from '@mui/system';
import { Button } from "@mui/material";

const StyledButton = styled(Button)({
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

const FrostyButton = ({ children, onClick }) => {
  return (
    <StyledButton type="submit" variant="contained" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default FrostyButton;