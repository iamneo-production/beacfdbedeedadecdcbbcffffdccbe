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
import { Link } from 'react-router-dom';

export const cards = [
  {
    id: 'grid1',
    title: 'Vacuum Cleaner Repair',
    description: 'Diagnosis and repair of malfunctioning or damaged vacuum cleaners. This may involve fixing issues with motors, suction, hoses, filters, and other components.',
    imageUrl: 'https://source.unsplash.com/random?wallpapers1',
  },
  {
    id: 'grid2',
    title: 'Routine Maintenance',
    description: ' Regular maintenance services to ensure the proper functioning of vacuum cleaners. This can include cleaning, filter replacement, belt replacement, and lubrication.',
    imageUrl: 'https://source.unsplash.com/random?wallpapers2',
  },
  {
    id: 'grid3',
    title: 'Bag and Filter Replacement',
    description: 'Offering replacement bags and filters for various vacuum cleaner brands and models, and assisting customers with installation.',
    imageUrl: 'https://source.unsplash.com/random?wallpapers3',
  },
  {
    id: 'grid4',
    title: 'Belt Replacement',
    description: 'Replacing worn-out or broken belts in vacuum cleaners, which are essential for proper brush roll and suction operation.',
    imageUrl: 'https://source.unsplash.com/random?wallpapers4',
  },
  {
    id: 'grid5',
    title: 'Warranty Repairs',
    description: 'Handling warranty repairs for vacuum cleaner brands that offer warranty coverage. Service centers can act as authorized repair centers for these brands.',
    imageUrl: 'https://source.unsplash.com/random?wallpapers5',
  },
  {
    id: 'grid6',
    title: 'Technical Support',
    description: 'Providing customers with guidance and troubleshooting assistance over the phone or in-person to address minor issues.',
    imageUrl: 'https://source.unsplash.com/random?wallpapers6',
  },
];

const defaultTheme = createTheme();

export default function GridCards() {
  const handleCardClick = (card) => {
    console.log("Clicked Card:", card);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              VacServ - your favorite Vacuum Cleaner Services!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Don't let dirt suck the life out of your home – call us for a breath of fresh air!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" style={{ backgroundColor: 'black' }}>Go to Dashboard</Button>
              <Button variant="outlined" style={{ color: 'black', borderColor: 'black' }}>Go to Bookings</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                {/* Wrap the Card with a Link component */}
                <Link 
                  to={{
                    pathname: "/user/dashboard/",
                    state: { cardData: card } 
                  }}
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    onClick={() => handleCardClick(card)}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image={`https://source.unsplash.com/random?wallpapers${card}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>
                        {card.description}
                      </Typography>
                    </CardContent>
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