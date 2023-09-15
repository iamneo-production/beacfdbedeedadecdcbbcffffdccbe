import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import GridCardsWithoutHero from "../GridCardsWithoutHero"; // Import the modified component
import { Container } from "@mui/material"; // Import Container without destructuring it
import Footer from "../Footer";
import { Typography } from "@mui/material";


function DashboardGrid() {
  const [serviceCenters, setServiceCenters] = useState([]);

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
      <Navbar />
      <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to the Dashboard
              </Typography>
        <GridCardsWithoutHero serviceCenters={serviceCenters}/> {/* Use the modified GridCardsWithoutHero component */}
      </Container>
      <Footer />
    </div>
  );
}

export default DashboardGrid;
