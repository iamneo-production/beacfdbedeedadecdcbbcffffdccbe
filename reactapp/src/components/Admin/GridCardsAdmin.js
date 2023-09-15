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

export const cards = [
  {
    id: "1",
    title: "Vacuum Services - Chennai",
    place: "Chennai",
    description:
      "Diagnosis and repair of malfunctioning or damaged vacuum cleaners. This may involve fixing issues with motors, suction, hoses, filters, and other components.",
    timings: "13:00 - 15:00",
    phoneNumber: "12345 67891",
    price: "300",
    emailId: "xyz@gmail.com",
    rating: "★★★★",
    address: "123 Elm Street, Pleasantville, Make-Believe County, MB 56789",
    imageUrl:
      "https://media.istockphoto.com/id/1480800137/photo/industrial-powerful-vacuum-cleaner-construction-cleaning-service.jpg?s=612x612&w=0&k=20&c=REyp-Mbh5qF-aipyENecd3yDVnAkIsVvAy2eBSqk2uo=",
  },
  {
    id: "2",
    title: "Forbes Service - Bangalore",
    place: "Bangalore",
    timings: "13:00 - 15:00",
    phoneNumber: "12345 67891",
    emailId: "xyz@gmail.com",
    price: "200",
    rating: "★★★★",
    address: "1010 Willow Road, Storybook Village, Fable County, FC 54321",
    description:
      " Regular maintenance services to ensure the proper functioning of vacuum cleaners. This can include cleaning, filter replacement, belt replacement, and lubrication.",
    imageUrl:
      "https://media.istockphoto.com/id/980796094/photo/canister-vacuum-cleaner-for-home-use-on-the-floor.jpg?s=612x612&w=0&k=20&c=6L6cARCiC7gG4yJpMyOO1JCuTxIiNPENhsx7AKjBCLA=",
  },
  {
    id: "3",
    title: "Vanity Vacuum Services - Kochi",
    place: "Kochi",
    timings: "13:00 - 15:00",
    phoneNumber: "12345 67891",
    emailId: "xyz@gmail.com",
    price: "2000",
    rating: "★★★★",
    address: "123 Elm Street, Pleasantville, Make-Believe County, MB 56789",
    description:
      "Offering replacement bags and filters for various vacuum cleaner brands and models, and assisting customers with installation.",
    imageUrl:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "4",
    title: "Belt Replacement - Chennai",
    place: "Chennai",
    timings: "13:00 - 15:00",
    phoneNumber: "12345 67891",
    emailId: "xyz@gmail.com",
    price: "12",
    rating: "★★★★",
    address: "123 Elm Street, Pleasantville, Make-Believe County, MB 56789",
    description:
      "Replacing worn-out or broken belts in vacuum cleaners, which are essential for proper brush roll and suction operation.",
    imageUrl:
      "https://media.istockphoto.com/id/184735733/photo/at-work.jpg?s=612x612&w=0&k=20&c=81kuJAa6-va1N5Oy8HiePunVt6h4O4nNqLMUVL5w5Bo=",
  },
  {
    id: "5",
    title: "Warranty Repairs - Bangalore",
    place: "Bangalore",
    timings: "13:00 - 15:00",
    phoneNumber: "12345 67891",
    emailId: "xyz@gmail.com",
    price: "13",
    rating: "★★★★",
    address: "123 Elm Street, Pleasantville, Make-Believe County, MB 56789",
    description:
      "Handling warranty repairs for vacuum cleaner brands that offer warranty coverage. Service centers can act as authorized repair centers for these brands.",
    imageUrl:
      "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdW1lbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: "6",
    title: "Technical Support - Chennai",
    place: "Chennai",
    timings: "13:00 - 15:00",
    phoneNumber: "12345 67891",
    price: "200",
    emailId: "xyz@gmail.com",
    rating: "★★★★",
    address: "123 Elm Street, Pleasantville, Make-Believe County, MB 56789",
    description:
      "Providing customers with guidance and troubleshooting assistance over the phone or in-person to address minor issues.",
    imageUrl:
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5pY2FsJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  },
];

const defaultTheme = createTheme();

export default function GridCardsAdmin({ searchTerm, sortOrder }) {
  const navigate = useNavigate();
  console.log("Search Term in GridCards:", searchTerm);
  const handleCardClick = (card) => {
    console.log("Clicked Card:", card);
  };

  // Filter the cards based on the search term
  const filteredCards = serviceCenters.filter((center) =>
  center.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            {sortedCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                {/* Wrap the Card with a Link component */}
                <Link
                  to={`/admin/editServiceCenter/${card.id}`} // Use string concatenation to include card.id
                  state={{ cardData: card }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onClick={() => handleCardClick(card)}
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
                        {card.title}
                      </Typography>
                      <Typography>
                        <strong>Place: </strong>
                        {card.place}
                      </Typography>
                      <Typography>
                        <strong>Timing: </strong>
                        {card.timings}
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
