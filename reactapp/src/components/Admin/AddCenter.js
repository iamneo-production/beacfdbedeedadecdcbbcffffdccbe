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

const initialCenterData = {
  addName: "",
  addPhoneNumber: "",
  addAddress: "",
  addImageUrl: "",
  addEmail: "",
  addCenterDescription: "",
};

function AddCenter() {
  const [centerData, setCenterData] = useState(initialCenterData);
  const [formErrors, setFormErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCenterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!centerData.addName) {
      errors.addName = "Name is required";
    }
    if (!centerData.addPhoneNumber) {
      errors.addPhoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(centerData.addPhoneNumber)) {
      errors.addPhoneNumber = "Invalid phone number (10 digits required)";
    }
    if (!centerData.addAddress) {
      errors.addAddress = "Address is required";
    }
    if (!centerData.addLocation) {
      errors.addLocation = "Location is required";
    }
    if (!centerData.addImageUrl) {
      errors.addImageUrl = "Image URL is required";
    }
    if (!centerData.addEmail) {
      errors.addEmail = "Email Address is required";
    } else if (!/^.+@.+\..+$/.test(centerData.addEmail)) {
      errors.addEmail = "Invalid email address";
    }
    if (!centerData.addCenterDescription) {
      errors.addCenterDescription = "Description is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Submitted Data:", centerData);
      setCenterData(initialCenterData);
      setFormErrors({});
      setOpenDialog(true);
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
          style={{ marginTop: '5%' }} // Add margin-top
        >
          Add Center
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name (Add City in Name)"
                addname="addName"
                value={centerData.addName}
                onChange={handleChange}
                required
                error={!!formErrors.addName}
                helperText={formErrors.addName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="addPhoneNumber"
                value={centerData.addPhoneNumber}
                onChange={handleChange}
                required
                error={!!formErrors.addPhoneNumber}
                helperText={formErrors.addPhoneNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                name="addAddress"
                value={centerData.addAddress}
                onChange={handleChange}
                required
                error={!!formErrors.addAddress}
                helperText={formErrors.addAddress}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                name="addLocation"
                value={centerData.addLocation}
                onChange={handleChange}
                required
                error={!!formErrors.addLocation}
                helperText={formErrors.addLocation}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="addImageUrd"
                value={centerData.addImageUrl}
                onChange={handleChange}
                required
                error={!!formErrors.addImageUrl}
                helperText={formErrors.addImageUrl}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="addEmail"
                value={centerData.addEmail}
                onChange={handleChange}
                required
                error={!!formErrors.addEmail}
                helperText={formErrors.addEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description about the service"
                name="addCenterDescription"
                multiline
                rows={3}
                value={centerData.addCenterDescription}
                onChange={handleChange}
                required
                error={!!formErrors.addCenterDescription}
                helperText={formErrors.addCenterDescription}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                id="addButton"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add
              </Button>
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
