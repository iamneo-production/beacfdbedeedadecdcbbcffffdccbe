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
    marginTop: "13%", // Apply Poppins font
  },
  boxContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    width: "30%", // Set the width to 30% to create three boxes in a row
    padding: "20px",
    textAlign: "center",
    margin: "10px",
    aspectRatio: "1/1", // Maintain a 1:1 aspect ratio to make them square
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
      fontSize: "3rem", // Increase the font size for the numbers
      fontWeight: "bold", // Make the numbers bold// Adjust the font size as needed
  },
};

function AdminHomePage() {
  const params = useParams();
  console.log('Params:', params);
  const { userId } = params; // Use "id" instead of "userId"
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
          <Paper elevation={3} style={styles.box}>
            <Typography variant="h6">Another Metric</Typography>
            <Typography variant="h4" style={styles.number}>
              {/* Replace with the data for the third box */}
              {123} {/* Example data */}
            </Typography>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

export default AdminHomePage;
