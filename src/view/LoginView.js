import React from 'react';
import TextField from '@mui/material/TextField';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import FrostyButton from '../components/FrostyButton';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper"
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';



const LoginView = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    onSubmit(username.value, password.value);
  };

  return (
    <Box style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh"}}>
      <ResponsiveAppBar style={{ position: "fixed", width: "100%" }} />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        <Paper elevation={3} style={{ padding: "2rem" }}>
        <FormControl component="form" onSubmit={handleSubmit}>
            <TextField
              id="username"
              name="username"
              label="Username"
              type="username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FrostyButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </FrostyButton>
            </FormControl>
        </Paper>
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
};

export default LoginView;