import React from "react";
import Navbar from "../Navbar";
import SearchBar from "../Searchbar";
import GridCard from "../GridCards";
import { Grid, Container } from "@mui/material"; // Import Container without destructuring it
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //minHeight: "calc(100vh - 64px)", // Adjust the height based on your Navbar height
        }}
      >
        <div>
        <SearchBar />
        <GridCard />
      </div>
      </div>
      <div>

      </div>
      
      <h1>hello world</h1>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
