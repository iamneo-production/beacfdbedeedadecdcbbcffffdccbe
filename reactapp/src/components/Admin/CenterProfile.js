import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavBar';
import { Container, Typography, Box } from '@mui/material';
import GridCardsAdmin from './GridCardsAdmin';
import Searchbar from '../Searchbar';

function CenterProfile() {
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceCenters, setServiceCenters] = useState([]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    // Make an API request to fetch service center data
    fetch('https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/service-center')
      .then((response) => response.json())
      .then((data) => {
        setServiceCenters(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching service centers:', error);
      });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <Box
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            style={{ marginTop: '10%' }} // Add margin-top
          >
            Center Profiles
          </Typography>
        </Container>
      </Box>
      <Searchbar onSearchChange={handleSearchChange} />
      <GridCardsAdmin serviceCenters={serviceCenters} searchTerm={searchTerm} />
    </div>
  );
}

export default CenterProfile;
