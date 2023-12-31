import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useParams } from 'react-router-dom';
import SearchBar from './Searchbar';
import { useNavigate } from 'react-router-dom';
import starImage from "./star_image.png";

function RatingComponent() {
  // Generate a random rating between 3 and 5
  const randomRating = Math.floor(Math.random() * 3) + 3;

  // Create an array of stars based on the rating
  const starElements = Array.from({ length: randomRating }, (_, index) => (
    <img
      key={index}
      src={starImage} // Use the imported star image
      alt="Star"
      width="20" // Adjust the width and height as needed
      height="20"
      style={{ marginRight: '3px' }}
    />
  ));

  return (
    <div>
      <strong>Rating: </strong>
      {starElements}
    </div>
  );
}



export default function GridCards({ searchTerm, sortOrder, serviceCenters }) {
const navigate = useNavigate();
const params = useParams();
console.log('Params: ', params);
const { userId } = params;
console.log('User ID: ', userId);

  console.log("Search Term in GridCards:", searchTerm); 
  console.log("Service Centers Data:", serviceCenters);
  const handleCardClick = (serviceCenters) => {
    console.log("Clicked Card:", serviceCenters);
    
  };

  // Filter the cards based on the search term
  const filteredCards = serviceCenters.filter((center) =>
    center.serviceCenterName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCards = [...filteredCards].sort((a, b) => {
    console.log('Service Centers:', serviceCenters);
    console.log('Before Parsing - Price A:', a.serviceCenterPrice);
    console.log('Before Parsing - Price B:', b.serviceCenterPrice);
    const priceA = parseFloat(a.serviceCenterPrice);
    const priceB = parseFloat(b.serviceCenterPrice);

    console.log('priceA:', priceA);
    console.log('priceB:', priceB);
    console.log('sortOrder:', sortOrder);

    if (sortOrder === 'ascending') {
      return priceA - priceB;
    } else if (sortOrder === 'descending') {
      return priceB - priceA;
    }

    return 0;
  });

  return (
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {sortedCards.map((serviceCenters) => (
              <Grid item key={serviceCenters.id} xs={12} sm={6} md={4}>
                {/* Wrap the Card with a Link component */}
                <Link
                  to={`/user/dashboard/${userId}/${serviceCenters.serviceCenterId}`} // Use string concatenation to include card.id
                  state={{ cardData: serviceCenters }}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    onClick={() => handleCardClick(serviceCenters)}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image={serviceCenters.serviceCenterImageUrl}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {serviceCenters.serviceCenterName}
                      </Typography>
                      <Typography>
                        <strong>Place: </strong>{serviceCenters.serviceCenterAddress}
                      </Typography>
                      <Typography>
                        <strong>Timing: </strong>{serviceCenters.serviceCenterTimings}
                      </Typography>
                      <Typography>
                        <strong>Price: </strong> Rs. {serviceCenters.serviceCenterPrice}
                      </Typography>
                      <RatingComponent />
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );

}