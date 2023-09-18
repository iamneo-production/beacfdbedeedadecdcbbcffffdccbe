import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import { Grid, Button, TextField, MenuItem } from "@mui/material"; // Import MenuItem
import GridCardsWithoutHero from "../GridCardsWithoutHero"; // Import the modified component
import { Container } from "@mui/material"; // Import Container without destructuring it
import Footer from "../Footer";
import { Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import GridCardsAdmin from "./GridCardsAdmin";


function CenterProfile() {
  const params = useParams();
  console.log('Params:', params);
  const { userId } = params; // Use "id" instead of "userId"
  console.log('User ID:', userId);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending"); // Step 1: Add sortOrder state'
  const [serviceCenters, setServiceCenters] = useState([]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterByLocation = () => {
    setSearchTerm(filterLocation);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value); // Step 3: Update sortOrder state
  };


  useEffect(() => {
    // Make an API request to fetch service center data
    fetch('https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/editServiceCenter/${serviceCenterId}')
      .then((response) => response.json())
      .then((data) => {
        setServiceCenters(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching service centers:', error);
      });
  }, []);

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
              Center Profile
              </Typography>
              <SearchBar onSearchChange={handleSearchChange} />
              <Container maxWidth="sm" style={{ textAlign: "left", display: "flex", alignItems: "center"}}>
        {/* Center the elements */}
        <div style={{display: "inline", width:"100%"}}>
        <TextField
          select
          label="Sort Order"
          variant="outlined"
          margin="normal"
          value={sortOrder}
          onChange={handleSortChange}
          style={{ width: "100%"}}
          > 
          <MenuItem value="ascending">Ascending</MenuItem>
          <MenuItem value="descending">Descending</MenuItem>
        </TextField>
        </div>

        <TextField
          label="Filter by Location"
          variant="outlined"
          margin="normal"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          style={{ width: "100%", marginLeft: "15%" }} // Set width to 100%
        />
        <Button
          variant="contained"
          onClick={handleFilterByLocation}
           style={{ marginLeft: "10px", fontWeight: "bolder", backgroundColor: 'black', borderColor: 'black' }} // Set width to 100%
        >
          Filter
        </Button>
      </Container>
        <GridCardsAdmin searchTerm={searchTerm} sortOrder={sortOrder} serviceCenters={serviceCenters}/> {/* Use the modified GridCardsWithoutHero component */}
      </Container>
      <Footer />
    </div>
  );
}

export default CenterProfile;
