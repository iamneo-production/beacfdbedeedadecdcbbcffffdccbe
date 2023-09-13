import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AdminNavbar from "./AdminNavBar";
import { Link, useNavigate } from "react-router-dom";

function AddCenter() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const [centerData, setCenterData] = useState({
    addName: "",
    addPhoneNumber: "",
    addAddress: "",
    addImageUrl: "",
    addEmail: "",
    addDescription: "",
    addPrice: "",
  });
  const [errors, setErrors] = useState({
    addName: "",
    addPhoneNumber: "",
    addAddress: "",
    addImageUrl: "",
    addEmail: "",
    addDescription: "",
    addPrice: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCenterData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleDateChange = (name, newValue) => {
    setCenterData((prevUserData) => ({
      ...prevUserData,
      [name]: newValue,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Basic Validation Rules
    let isValid = true;
    if (centerData.addName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addName: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (centerData.addPhoneNumber.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addPhoneNumber: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (centerData.addAddress.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addAddress: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (centerData.addPrice.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addPrice: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (centerData.addImageUrl.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addImageUrl: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (centerData.addEmail.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addEmail: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (centerData.addDescription.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        addDescription: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (isValid) {
      console.log("No Errors");
      navigate("/admin/AdminHomePage");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <AdminNavbar />
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          style={{ marginTop: "5%" }} // Add margin-top
        >
          Add Center
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name (Add City in Name)"
                name="addName"
                value={centerData.addName}
                onChange={handleInputChange}
                required
                error={!!errors.addName}
                helperText={errors.addName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="addPhoneNumber"
                value={centerData.addPhoneNumber}
                onChange={handleInputChange}
                required
                error={!!errors.addPhoneNumber}
                helperText={errors.addPhoneNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="addAddress"
                value={centerData.addAddress}
                onChange={handleInputChange}
                required
                error={!!errors.addAddress}
                helperText={errors.addAddress}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Price"
                name="addPrice"
                value={centerData.addPrice}
                onChange={handleInputChange}
                required
                error={!!errors.addPrice}
                helperText={errors.addPrice}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="addImageUrl"
                value={centerData.addImageUrl}
                onChange={handleInputChange}
                required
                error={!!errors.addImageUrl}
                helperText={errors.addImageUrl}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="addEmail"
                value={centerData.addEmail}
                onChange={handleInputChange}
                required
                error={!!errors.addEmail}
                helperText={errors.addEmail}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Timings"
                name="addTimings" // Provide a unique name
                value={centerData.addTimings} // Use the appropriate value from your state
                onChange={(newValue) =>
                  handleDateChange("addTimings", newValue)
                } // Handle date and time changes
                // Add any other properties you need
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description about the service"
                name="addDescription"
                multiline
                rows={3}
                value={centerData.addDescription}
                onChange={handleInputChange}
                required
                error={!!errors.addDescription}
                helperText={errors.addDescription}
              />
            </Grid>
            <Grid item xs={12}>
              <Link to="/admin/AdminHomePage" className="nav-link">
                <Button
                  type="submit"
                  id="addButton"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleFormSubmit}
                >
                  Add
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Success!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            The center has been added successfully.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCenter;
