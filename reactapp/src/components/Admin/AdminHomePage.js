import React, { useState } from "react";
import SearchBar from "../Searchbar";
import { Grid, Container } from "@mui/material";
import AdminNavbar from "./AdminNavBar";
import CenterCard from "./CenterCard";
import { Route, Routes } from "react-router-dom"; 
import AddCenter from "./AddCenter";

function AdminHomePage() {
  // Step 1: Create a state variable to store the list of cards
  const [cards, setCards] = useState([]);

  // Step 2: Implement a function to add new cards to the list
  const handleCardAdd = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <AdminNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar />
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
            {/* Render the AddCenter component for card creation
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AddCenter onCardAdd={handleCardAdd} />
          </Grid> */}
          {/* Map over the list of cards and render each CenterCard */}
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <CenterCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <h1>welcome to the admin panel</h1>
    </div>
  );
}

export default AdminHomePage;
