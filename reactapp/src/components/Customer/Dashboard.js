import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { cards } from '../GridCards';


const defaultTheme = createTheme();

export default function Dashboard() {
    const { cardId } = useParams();
  const cardData = cards.find((card) => card.id === cardId);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Card on the left */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  {/* Content of your card */}
                  <h2>{cardData ? cardData.title : 'No Card Selected'}</h2>
                  <p>{cardData ? cardData.description : ''}</p>
                </CardContent>
              </Card>
            </Grid>
            {/* Input fields on the right */}
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  {/* Input fields */}
                  <h2>Input Fields</h2>
                  <form>
                    <TextField
                      fullWidth
                      label="Name"
                      id="name"
                      name="name"
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      id="email"
                      name="email"
                      variant="outlined"
                      margin="normal"
                    />
                    {/* Add more input fields as needed */}
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
