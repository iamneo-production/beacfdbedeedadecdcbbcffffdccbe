import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation
import SearchBar from "../Searchbar";

// Define your GridCardsAdmin component
function GridCardsAdmin() {
  const location = useLocation(); // Get location
  const [cards, setCards] = useState([]); // State to hold the cards

  useEffect(() => {
    // Check if location state has cardData and add it to the cards array
    if (location.state && location.state.cardData) {
      const newCardData = location.state.cardData;
      setCards((prevCards) => [...prevCards, newCardData]);
    }
  }, [location.state]);

  return (
    <ThemeProvider>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.imageUrl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.serviceCenterName}
                    </Typography>
                    <Typography>
                      <strong>Place: </strong>
                      {card.serviceCenterAddress}
                    </Typography>
                    <Typography>
                      <strong>Timing: </strong>
                      {card.serviceCenterTimings}
                    </Typography>
                    <Typography>
                      <strong>Rating: </strong>
                      {card.rating}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div>
                      <Button
                        size="small"
                        style={{ color: "black", fontSize: "16px" }}
                      >
                        Edit
                      </Button>
                    </div>
                    <Button
                      size="small"
                      style={{
                        color: "red",
                        marginLeft: "auto",
                        fontSize: "16px",
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default GridCardsAdmin;
