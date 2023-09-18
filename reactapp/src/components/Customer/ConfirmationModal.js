import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ConfirmationModal({
  open,
  handleClose,
  userData, // This should be an object containing the user's entered data
  userId 
}) {
  const navigate = useNavigate(); // Initialize useHistory

  // Function to handle the confirmation and navigation
  const handleConfirmation = () => {
    const requestData = {
      productName: userData.enterProductName,
      productModelNo: userData.enterModelNo,
      dateOfPurchase: userData.enterDateOfPurchase,
      mobileNumber: userData.enterContactNumber,
      productDescription: userData.enterProblem,
      availableSlots: userData.enterAppointmentDate,
    };
    console.log("User ID inside confirmation:", userId);
    console.log(requestData);
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/user/appointment?userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product Appointment created successfully");
          handleClose(); // Close the confirmation modal
          navigate(`/user/appointment/${userId}`);
        } else {
          console.error("Error creating product appointment");
        }
      })
      .catch((error) => {
        console.error("Error creating product appointment:", error);
      });
    // Handle appointment confirmation and bill generation here
    handleClose();
    // Navigate to the appointments page
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <strong>Confirm Appointment</strong> - Upon Service, Bill will be available in the My Bookings Section.
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">Confirmation Details:</Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {userData.enterProductName}
        </Typography>
        <Typography variant="body1">
          <strong>Model Number:</strong> {userData.enterModelNo}
        </Typography>
        <Typography variant="body1">
          <strong>Date of Purchase:</strong> {userData.enterDateOfPurchase}
        </Typography>
        <Typography variant="body1">
          <strong>Contact Number:</strong> {userData.enterContactNumber}
        </Typography>
        <Typography variant="body1">
          <strong>Problem:</strong> {userData.enterProblem}
        </Typography>
        <Typography variant="body1">
          <strong>Appointment Date:</strong> {userData.enterAppointmentDate}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
          <Button color="primary" onClick={handleConfirmation}> {/* Correct the placement */}
            Confirm
          </Button>
      </DialogActions>
    </Dialog>
  );
}
