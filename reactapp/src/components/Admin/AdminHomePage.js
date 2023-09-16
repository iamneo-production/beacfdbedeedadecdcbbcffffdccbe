import React from "react";
import { Grid, Container, Typography, Box, Paper } from "@mui/material";
import AdminNavbar from "./AdminNavBar";
import CenterCard from "./CenterProfile";
import { Route, Routes } from "react-router-dom"; 
import AddCenter from "./AddCenter";
import { useParams } from "react-router-dom";


const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontFamily: "Poppins, sans-serif",
    marginTop: "13%" // Apply Poppins font
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    flex: "1",
    padding: "20px",
    textAlign: "center",
    margin: "10px"
  },
  number: {
    fontSize: "2.5rem", // Adjust the font size as needed
  },
};


function AdminHomePage() {
  const params = useParams();
console.log('Params:', params);
  const { userId } = useParams();
  console.log('User ID:', userId);
  const numberOfCustomers = 100; // Replace with your actual data
  const numberOfServices = 50; // Replace with your actual data

  return (
    <div>
      <AdminNavbar />
      <Container maxWidth="lg" style={styles.container}>
      <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          style={{ marginTop: '5%' }} // Add margin-top
        >
          Welcome to the Admin Dashboard
        </Typography>
        <div style={styles.boxContainer}>
          <Paper elevation={3} style={styles.box}>
            <Typography variant="h6">
              No. of proud customers we've had
            </Typography>
            <Typography variant="h4" style={styles.number}>
              {numberOfCustomers}
            </Typography>
          </Paper>
          <Paper elevation={3} style={styles.box}>
            <Typography variant="h6">No. of services we have</Typography>
            <Typography variant="h4" style={styles.number}>
              {numberOfServices}
            </Typography>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default AdminHomePage