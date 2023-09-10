import React from "react";
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import GridCardsWithoutHero from "../GridCardsWithoutHero"; // Import the modified component
import { Container } from "@mui/material"; // Import Container without destructuring it
import Footer from "../Footer";
import { Typography } from "@mui/material";

function DashboardGrid() {
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
        <GridCardsWithoutHero /> {/* Use the modified GridCardsWithoutHero component */}
      </Container>
      <Footer />
    </div>
  );
}

export default DashboardGrid;
