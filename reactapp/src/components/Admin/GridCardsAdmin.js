import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar";
import { useNavigate } from "react-router-dom";
import CenterProfile from "./CenterProfile";

const defaultTheme = createTheme();

export default function GridCardsAdmin({ searchTerm, sortOrder, serviceCenters }) {
  const navigate = useNavigate();
  console.log("Search Term in GridCards:", searchTerm);
  const handleCardClick = (serviceCenters) => {
    console.log("Clicked Card:", serviceCenters);
  };

  // Filter the cards based on the search term
  const filteredCards = serviceCenters.filter((center) =>
  center.serviceCenterName.toLowerCase().includes(searchTerm.toLowerCase())
);

  const sortedCards = [...filteredCards].sort((a, b) => {
    const priceA = parseInt(a.price);
    const priceB = parseInt(b.price);

    if (sortOrder === "ascending") {
      return priceA - priceB;
    } else if (sortOrder === "descending") {
      return priceB - priceA;
    }

    return 0;
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {sortedCards.map((serviceCenters) => (
              <Grid item key={serviceCenters.id} xs={12} sm={6} md={4}>
                {/* Wrap the Card with a Link component */}
                <Link
                  to={`/admin/editServiceCenter/${id}/${serviceCenters.serviceCenterId}`}
                  state={{ cardData: serviceCenters }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onClick={() => handleCardClick(serviceCenters)}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image={serviceCenters.serviceCenterImageUrl}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {serviceCenters.serviceCenterName}
                      </Typography>
                      <Typography>
                        <strong>Place: </strong>
                        {serviceCenters.serviceCenterAddress}
                      </Typography>
                      <Typography>
                        <strong>Timing: </strong>
                        {serviceCenters.ServiceCenterTimings}
                      </Typography>
                      <Typography>
                        <strong>Rating: </strong>
                        {serviceCenters.serviceCenterDescription}
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
