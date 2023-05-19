import React from 'react';
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import backgroundImage from "../assets/frosty_wallpaper.jpg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper"
import { Box } from '@mui/system';
import CircularProgress from "@mui/material/CircularProgress";

const ProfileView = ({ userData, isLoading }) => {

  return (
    isLoading ? <CircularProgress /> : (
      <Box
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh' }}
      >
        <ResponsiveAppBar style={{ position: 'fixed', width: '100%' }} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
              User Profile
            </Typography>
            <Typography variant="body1" gutterBottom>
              Username: {userData.username}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {userData.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              First Name: {userData.first_name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Surname: {userData.last_name}
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ marginTop: 'auto' }}>
          <Container maxWidth="lg">
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ py: 3 }}
            >
              © 2023 Playstation 5 Hunter
            </Typography>
          </Container>
        </Box>
      </Box>
    )
  );
};

export default ProfileView;
