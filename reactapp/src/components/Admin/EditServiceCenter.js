import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { cards } from "../GridCards";
import { useLocation } from "react-router-dom";
import { CardMedia } from "@mui/material";
import ConfirmationModal from "../Customer/ConfirmationModal";
import { useState } from "react";

const defaultTheme = createTheme();

export default function EditServiceCenter() {
  const { cardId } = useParams();
  const location = useLocation();
  const cardData = location.state.cardData;
  
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [userData, setUserData] = useState({
    enterProductName: "",
    enterModelNo: "",
    enterDateOfPurchase: "",
    enterContactNumber: "",
    enterProblem: "",
    enterAppointmentDate: "",
  });

  const [errors, setErrors] = useState({
    enterProductName: "",
    enterModelNo: "",
    enteDateOfPurchase: "",
    enterContactNumber: "",
    enterProblem: "",
    enterAppointmentDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  
   

  // Function to handle form submission and open the confirmation modal
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Basic Validation Rules
    let isValid = true;
    if (userData.enterProductName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        enterProductName: "Please Fill the Above Field",
      }));
      isValid = false;
    } 
    if (userData.enterModelNo.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        enterModelNo: "Please Fill the Above Field",
      }));
      isValid = false;
    } 
    if (userData.enterDateOfPurchase.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        enterDateOfPurchase: "Please Fill the Above Field",
      }));
      isValid = false;
    } 
    if (userData.enterContactNumber.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        enterContactNumber: "Please Fill the Above Field",
      }));
      isValid = false;
    } 
    if (userData.enterProblem.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        enterProblem: "Please Fill the Above Field",
      }));
      isValid = false;
    } 
    if (userData.enterAppointmentDate.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        enterAppointmentDate: "Please Fill the Above Field",
      }));
      isValid = false;
    } 

    if(isValid){
      setIsConfirmationModalOpen(true);
      console.log("No Errors");
    }
    
  };

  // Function to handle confirmation modal close
  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Card on the left */}
            <Grid item xs={12} md={4}>
              <Card style={{ marginTop: '40%', marginRight: '20%' }}>
                <CardMedia
                  component="img"
                  alt={cardData ? cardData.title : "No Card Selected"}
                  height="140"
                  image={cardData ? cardData.imageUrl : ""}
                />
                <CardContent>
                  {/* Content of your card */}
                  <h2>{cardData ? cardData.title : "No Card Selected"}</h2>
                  <p><strong>Description: </strong>{cardData ? cardData.description : ""}</p>
                  <p><strong>Address: </strong>{cardData ? cardData.address : ""}</p>
                  <p><strong>Phone Number: </strong>{cardData ? cardData.phoneNumber : ""}</p>
                  <p><strong>Email ID: </strong>{cardData ? cardData.emailId : ""}</p>
                  <p><strong>Timings: </strong>{cardData ? cardData.timings : ""}</p>
                  <p><strong>Rating: </strong>{cardData ? cardData.rating : ""}</p>
                </CardContent>
              </Card>
            </Grid>
            {/* Input fields on the right */}
            <Grid item xs={12} md={8}>
              <Card style={{ marginTop: '5%' }}>
                <CardContent>
                  {/* Input fields */}
                  <h2>Enter the details</h2>
                  <form>
                    <TextField
                      fullWidth
                      label="Enter the name of the Product"
                      id="enterProductName"
                      name="enterProductName"
                      variant="outlined"
                      margin="normal"
                      value={userData.enterProductName} // Bind the input value to the state
                      onChange={handleInputChange} // Handle input changes
                      error={!!errors.enterProductName}
                      helperText={errors.enterProductName}
                      autoFocus
                    />
                    <TextField
                      fullWidth
                      label="Enter the Model Number of the Product"
                      id="enterModelNo"
                      name="enterModelNo"
                      variant="outlined"
                      margin="normal"
                      value={userData.enterModelNo} // Bind the input value to the state
                      onChange={handleInputChange}
                      error={!!errors.enterModelNo}
                      helperText={errors.enterModelNo}
                    />
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      label="Enter the Date of Purchase"
                      id="enterDateOfPurchase"
                      name="enterDateOfPurchase"
                      variant="outlined"
                      margin="normal"
                      type="date"
                      value={userData.enterDateOfPurchase} // Bind the input value to the state
                      onChange={handleInputChange}
                      error={!!errors.enterDateOfPurchase}
                      helperText={errors.enterDateOfPurchase} // Set the type to "date" for a date input
                    />
                    <TextField
                      fullWidth
                      label="Enter the Contact Number"
                      id="enterContactNumber"
                      name="enterContactNumber"
                      variant="outlined"
                      margin="normal"
                      value={userData.enterContactNumber} // Bind the input value to the state
                      onChange={handleInputChange}
                      error={!!errors.enterContactNumber}
                      helperText={errors.enterContactNumber}
                    />
                    <TextField
                      fullWidth
                      label="Enter the Problem of the Product"
                      id="enterProblem"
                      name="enterProblem"
                      variant="outlined"
                      margin="normal"
                      multiline  // Enable multiline mode
                      rows={3}   // Set the number of rows
                      value={userData.enterProblem} // Bind the input value to the state
                      onChange={handleInputChange}
                      error={!!errors.enterProblem}
                      helperText={errors.enterProblem}
                    />
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      label="Select a Date for Appointment"
                      id="date"
                      name="enterAppointmentDate"
                      variant="outlined"
                      margin="normal"
                      type="date" // Set the type to "date" for a date input
                      value={userData.enterAppointmentDate} // Bind the input value to the state
                      onChange={handleInputChange}
                      error={!!errors.enterAppointmentDate}
                      helperText={errors.enterAppointmentDate}
                    />
                    {/* Add more input fields as needed */}
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      style={{ backgroundColor: "black" }}
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </Button>
                    {/* Render the confirmation modal */}
      <ConfirmationModal
        open={isConfirmationModalOpen}
        handleClose={handleConfirmationModalClose}
        userData={userData}
      />
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