import React from "react";
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import GridCard from "../GridCards";
import { Grid, Container } from "@mui/material"; // Import Container without destructuring it

function HomePage() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //minHeight: "calc(100vh - 64px)", // Adjust the height based on your Navbar height
        }}
      >
        <SearchBar />
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* First Card */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <GridCard
              imageUrl="https://example.com/image1.jpg"
              title="Card 1"
              description1="Description 1 for Card 1"
              description2="Description 2 for Card 1"
            />
          </Grid>
          {/* Second Card */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <GridCard
              imageUrl="https://example.com/image2.jpg"
              title="Card 2"
              description1="Description 1 for Card 2"
              description2="Description 2 for Card 2"
            />
          </Grid>
          {/* Third Card */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <GridCard
              imageUrl="https://example.com/image3.jpg"
              title="Card 3"
              description1="Description 1 for Card 3"
              description2="Description 2 for Card 3"
            />
          </Grid>
        </Grid>
      </Container>
      <h1>hello world</h1>
    </div>
  );
}

export default HomePage;
