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
import { useState } from "react";
import AdminNavbar from "./AdminNavBar";

const defaultTheme = createTheme();

export default function EditServiceCenter() {
    const { cardId } = useParams();
    const location = useLocation();
    const cardData = location.state.cardData;
  
    const [isEditConfirmationModalOpen, setIsEditConfirmationModalOpen] = useState(false);
  
    const [adminData, setAdminData] = useState({
      editCenterName: "",
      editCenterPhoneNumber: "",
      editCenterAddress: "",
      editCenterTimings: "",
      editCenterPrice: "",
      editCenterImageUrl: "",
      editCenterMailId: "",
      editCenterDescription: "",
    });
  
    const [errors, setErrors] = useState({
        editCenterName: "",
        editCenterPhoneNumber: "",
        editCenterAddress: "",
        editCenterTimings: "",
        editCenterPrice: "",
        editCenterImageUrl: "",
        editCenterMailId: "",
        edidCenterDescription: "",
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setAdminData((prevAdminData) => ({
        ...prevAdminData,
        [name]: value,
      }));
      setErrors({
        ...errors,
        [name]: "",
      });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      // Basic Validation Rules
      let isValid = true;
      if (adminData.editCenterName.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterName: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterPhoneNumber.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterPhoneNumber: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterAddress.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterAddress: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterTimings.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterTimings: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterImageUrl.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterImageUrl: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterPrice.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterPrice: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterMailId.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterMailId: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      if (adminData.editCenterDescription.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          editCenterDescription: "Please Fill the Above Field",
        }));
        isValid = false;
      }
      // Add more validation rules for other fields as needed...
  
      if (isValid) {
        setIsEditConfirmationModalOpen(true);
        console.log("No Errors");
      }
    };
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <AdminNavbar />
        <CssBaseline />
        <main>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* Card on the Left */}
              <Grid item xs={12} md={4}>
              <Card style={{ marginTop: '20%', marginLeft: '5%', marginRight: '5%' }}>
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
                  <p><strong>Price: </strong>{cardData ? cardData.price : ""}</p>
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
                    <h2><center>Edit the Details</center></h2>
                    <form onSubmit={handleFormSubmit}> {/* Added onSubmit */}
                      <TextField
                        fullWidth
                        label="Edit Name"
                        id="editCenterName"
                        name="editCenterName"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterName} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterName}
                        helperText={errors.editCenterName}
                        autoFocus
                      />
                      <TextField
                        fullWidth
                        label="Edit Phone Number"
                        id="editCenterPhoneNumber"
                        name="editCenterPhoneNumber"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterPhoneNumber} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterPhoneNumber}
                        helperText={errors.editCenterPhoneNumber}
                      />
                      <TextField
                        fullWidth
                        label="Edit Center Address"
                        id="editCenterAddress"
                        name="editCenterAddress"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterAddress} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterAddress}
                        helperText={errors.editCenterAddress}
                      />
                      <TextField
                        fullWidth
                        label="Edit Center Image URL"
                        id="editCenterImageUrl"
                        name="editCenterImageUrl"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterImageUrl} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterImageUrl}
                        helperText={errors.editCenterImageUrl}
                      />
                      <TextField
                        fullWidth
                        label="Edit Center Mail ID"
                        id="editCenterMailId"
                        name="editCenterMailId"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterMailId} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterMailId}
                        helperText={errors.editCenterMailId}
                      />
                      <TextField
                        fullWidth
                        label="Edit Center Description"
                        id="editCenterDescription"
                        name="editCenterDescription"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterDescription} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterDescription}
                        helperText={errors.editCenterDescription}
                      />
                      <TextField
                        fullWidth
                        label="Edit Center Service Price"
                        id="editCenterPrice"
                        name="editCenterPrice"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterPrice} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterPrice}
                        helperText={errors.editCenterPrice}
                      />
                      <TextField
                        fullWidth
                        label="Edit Center Timings"
                        id="editCenterTimings"
                        name="editCenterTimings"
                        variant="outlined"
                        margin="normal"
                        value={adminData.editCenterTimings} // Updated variable name
                        onChange={handleInputChange}
                        error={!!errors.editCenterTimings}
                        helperText={errors.editCenterTimings}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        style={{ backgroundColor: "black" }}
                        type="submit" /* Added type attribute */
                      >
                        Submit
                      </Button>
                    </form> {/* Closed the form */}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    );
  }
  