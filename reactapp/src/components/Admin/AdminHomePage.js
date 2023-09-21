import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Box, Paper } from "@mui/material";
import AdminNavbar from "./AdminNavBar";
import CenterCard from "./CenterProfile";
import { Route, Routes } from "react-router-dom"; 
import AddCenter from "./AddCenter";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontFamily: "Poppins, sans-serif",
    marginTop: '5%', // Add margin-top
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
    boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.35)",
  },
  number: {
    fontSize: "3rem", // Increase the font size for the numbers
    fontWeight: "bold", // Make the numbers bold
    // Adjust the font size as needed
  },
};

function AdminHomePage() {
  const params = useParams();
  const { userId } = params;

  const [numberOfCustomers, setNumberOfCustomers] = useState(0);
  const [numberOfServices, setNumberOfServices] = useState(0);
  const [numberOfAppointments, setNumberOfAppointments] = useState(0);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/total-customers`)
      .then((response) => response.json())
      .then((data) => setNumberOfCustomers(data.numberOfCustomers));

    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/total-service-centers`)
      .then((response) => response.json())
      .then((data) => setNumberOfServices(data.numberOfServices));

    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/total-products`)
      .then((response) => response.json())
      .then((data) => setNumberOfAppointments(data.numberOfAppointments));
  }, []);

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
          style={{ marginTop: '5%' }}
        >
          Welcome to the Admin Dashboard
        </Typography>
        {numberOfCustomers !== 0 && numberOfServices !== 0 && numberOfAppointments !== 0 ? (
          <div style={styles.boxContainer}>
            <Paper elevation={3} style={styles.box}>
              <Typography variant="h6">
                No. of proud customers we've had
              </Typography>
              <Typography variant="h4" style={styles.number}>
                {console.log("number of numberOfCustomer: ", numberOfCustomers)}
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
              <Typography variant="h6">No. of Sucessful Appointments</Typography>
              <Typography variant="h4" style={styles.number}>
                {numberOfAppointments}
              </Typography>
            </Paper>
          </div>
        ) : (
          // Optionally, you can show a loading message or spinner here while data is being fetched
          <Typography variant="h6" align="center">
            Loading...
          </Typography>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default AdminHomePage;
