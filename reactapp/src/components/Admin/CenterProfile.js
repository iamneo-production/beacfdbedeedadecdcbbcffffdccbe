import React, { useState } from 'react'
import AdminNavbar from './AdminNavBar'
import { Container, Typography, Stack, Link, Button, Box } from '@mui/material'
import GridCardsAdmin from './GridCardsAdmin'
import Searchbar from '../Searchbar'



function CenterProfile() {
    const [searchTerm, setSearchTerm] = useState("");
    const [serviceCenters, setServiceCenters] = useState([]);


    const handleSearchChange = (value) => {
        setSearchTerm(value);
      };
  return (
    <div>
        <AdminNavbar />
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
        ><Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          style={{ marginTop: '10%' }} // Add margin-top
        >
          Center Profiles
        </Typography>
      </Container>
      </Box>
      <Searchbar onSearchChange={handleSearchChange} />
      <GridCardsAdmin searchTerm={searchTerm} /> {/* Pass the sortOrder */}
      
    </div>
  )
}

export default CenterProfile
