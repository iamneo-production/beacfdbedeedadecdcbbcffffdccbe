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



export default AdminHomePage;
