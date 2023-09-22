import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';
import { useParams } from "react-router-dom";


const defaultTheme = createTheme();

export default function GridCardsWithoutHero({ searchTerm, sortOrder, serviceCenters, userId}) {
  //const { userId, serviceCenterId } = useParams();
  console.log('User ID from GridCardsWithoutHero:', userId);
  console.log("Search Term in GridCards:", searchTerm); 
  const handleCardClick = (serviceCenters) => {
    console.log("Clicked Card:", serviceCenters);
  };

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
    <ThemeProvider theme={defaultTheme}>
      <Container sx={{ py: 8 }} maxWidth="lg">
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
                      <strong>Description: </strong>{serviceCenters.serviceCenterDescription}
                    </Typography>
                    <Typography>
                      <strong>Address: </strong>{serviceCenters.serviceCenterAddress}
                    </Typography>
                    <Typography>
                      <strong>Phone Number: </strong>{serviceCenters.serviceCenterPhone}
                    </Typography>
                    <Typography>
                      <strong>Timing: </strong>{serviceCenters.serviceCenterTimings}
                    </Typography>
                    <Typography>
                      <strong>Price: </strong> Rs. {serviceCenters.serviceCenterPrice}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
