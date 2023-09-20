import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

export default function EditBookingModal({ open, handleClose, productId }) {
  const [editData, setEditData] = useState({
    editProductName: "",
    editModelNo: "",
    editDateOfPurchase: "",
    editContactNumber: "",
    editProblem: "",
    editAppointmentDate: "",
  });

  const [errors, setErrors] = useState({
    editProductName: "",
    editModelNo: "",
    editateOfPurchase: "",
    editContactNumber: "",
    editProblem: "",
    editAppointmentDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();

    //Basic Validations
    let isValid = true;
    if (editData.editProductName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        editProductName: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (editData.editModelNo.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        editModelNo: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (editData.editDateOfPurchase.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        editDateOfPurchase: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (editData.editContactNumber.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        editContactNumber: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (editData.editProblem.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        editProblem: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (editData.editAppointmentDate.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        editAppointmentDate: "Please Fill the Above Field",
      }));
      isValid = false;
    }
    if (isValid) {
      console.log("No Errors");
      const updatedAppointment = {
        // Create an object with the updated appointment data
        productName: editData.editProductName,
        productModelNo: editData.editModelNo,
        dateOfPurchase: editData.editDateOfPurchase,
        mobileNumber: editData.editContactNumber,
        productDescription: editData.editProblem,
        availableSlots: editData.editAppointmentDate,
      };

      setUserAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.productId === productId ? updatedAppointment : appointment
      )
    );

      fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/user/editappointment/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAppointment),
    })
    .then((response) => {
      if (response.ok) {
        // Handle successful update (e.g., show a success message, close the modal)
        console.log("Appointment updated successfully");
        handleClose();
        // Call the callback to update the appointments in the parent component
        updateAppointments(updatedAppointment);
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Failed to update appointment");
      }
    })
    .catch((error) => {
      console.error("Error updating appointment:", error);
    });


      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Appointment</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Enter the name of the Product"
          id="editProductName"
          name="editProductName"
          variant="outlined"
          margin="normal"
          value={editData.editProductName} // Bind the input value to the state
          onChange={handleInputChange} // Handle input changes
          error={!!errors.editProductName}
          helperText={errors.editProductName}
          autoFocus
        />
        <TextField
          fullWidth
          label="Enter the Model Number of the Product"
          id="editModelNo"
          name="editModelNo"
          variant="outlined"
          margin="normal"
          value={editData.editModelNo} // Bind the input value to the state
          onChange={handleInputChange}
          error={!!errors.editModelNo}
          helperText={errors.editModelNo}
        />
        <TextField
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Enter the Date of Purchase"
          id="editDateOfPurchase"
          name="editDateOfPurchase"
          variant="outlined"
          margin="normal"
          type="date"
          value={editData.editDateOfPurchase} // Bind the input value to the state
          onChange={handleInputChange}
          error={!!errors.editDateOfPurchase}
          helperText={errors.editDateOfPurchase} // Set the type to "date" for a date input
        />
        <TextField
          fullWidth
          label="Enter the Contact Number"
          id="editContactNumber"
          name="editContactNumber"
          variant="outlined"
          margin="normal"
          value={editData.editContactNumber} // Bind the input value to the state
          onChange={handleInputChange}
          error={!!errors.editContactNumber}
          helperText={errors.editContactNumber}
        />
        <TextField
          fullWidth
          label="Enter the Problem of the Product"
          id="editProblem"
          name="editProblem"
          variant="outlined"
          margin="normal"
          multiline // Enable multiline mode
          rows={3} // Set the number of rows
          value={editData.editProblem} // Bind the input value to the state
          onChange={handleInputChange}
          error={!!errors.editProblem}
          helperText={errors.editProblem}
        />
        <TextField
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Select a Date for Appointment"
          id="date"
          name="editAppointmentDate"
          variant="outlined"
          margin="normal"
          type="date" // Set the type to "date" for a date input
          value={editData.editAppointmentDate} // Bind the input value to the state
          onChange={handleInputChange}
          error={!!errors.editAppointmentDate}
          helperText={errors.editAppointmentDate}
        />

        {/* Other fields with validations */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleModalSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
