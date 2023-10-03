import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const PageNotFound = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        textAlign="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Box>
    </Container>
  );
}

export default PageNotFound;
