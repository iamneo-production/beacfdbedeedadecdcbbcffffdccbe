import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import Navbar from "../Navbar";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import EditBookingModal from "./EditBookingModal";
import ReviewModal from "./ReviewModal";
import { generatePDF } from "./BillGenerator";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";


const tableContainerStyle = {
  marginTop: "50px",
  marginBottom: "20px", // If you want some margin at the bottom
  maxWidth: "90%",
  textAlign: "center",
  marginLeft: "auto", // Auto margin on the left
  marginRight: "auto", // Auto margin on the right
};

const columnWidths = {
  productId: "10%",
  name: "30%", // Adjust the width of the 'Name' column
  date: "20%", // Adjust the width of the 'Date' column
  timings: "20%",
  edit: "5%",
  delete: "5%",
  billGen: "5%",
  review: "5%", // Adjust the width of the 'Timings' column
};

const handleGenerateBillClick = (appointmentDetails) => {
  // Call the generatePDF function from the BillGenerator component
  generatePDF(appointmentDetails); // This assumes that BillGenerator has a generatePDF function
};

export default function Appointment() {
  const params= useParams();
  const { userId, serviceCenterId } = useParams();
  console.log('User ID:', userId);
  const [open, setOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [userAppointments, setUserAppointments] = useState([]);
  const [editProductId, setEditProductId] = useState(null);

  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [refreshSnackbarOpen, setRefreshSnackbarOpen] = useState(false);

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState(null);


  const showSuccessSnackbar = () => {
    setSuccessSnackbarOpen(true);
  };

  // Function to hide success snackbar
  const hideSuccessSnackbar = () => {
    setSuccessSnackbarOpen(false);
  };

  const handleOpenDeleteConfirmation = (productId) => {
    setDeletingProductId(productId);
    setDeleteConfirmationOpen(true);
  };
  
  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
    setDeletingProductId(null);
  };

  const handleOpen = (appointment) => {
    setEditProductId(appointment.productId); // Set the productId in state
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReviewOpen = () => {
    setReviewOpen(true);
  };

  const handleReviewClose = () => {
    setReviewOpen(false);
  };

  useEffect(() => {
    // Fetch appointments by userId
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/user/getappointments/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch appointments');
        }
      })
      .then((data) => {
        console.log(data);
        setUserAppointments(data); // Set the fetched appointments in state
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, [userId]); // Add userId as a dependency

  const handleCancelAppointment = (productId) => {
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/user/cancelappointment/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful cancellation (e.g., show a success message, refresh the appointment list)
          console.log("Appointment canceled successfully");
          // You can update the userAppointments state or fetch the appointments again to reflect the changes
          // Remove the deleted appointment from the userAppointments state
        setUserAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.productId !== productId)
      );
        } else {
          // Handle errors (e.g., show an error message)
          console.error("Failed to cancel appointment");
        }
      })
      .catch((error) => {
        console.error("Error canceling appointment:", error);
      });
  };

  const updateAppointments = (productId, updatedAppointment) => {
    setUserAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.productId === productId ? updatedAppointment : appointment
      )
    );
  };
  
 // Replace 'appointment' with the actual variable containing the appointment data


  // Function to check if a date is greater than or equal to the current date
  const isDateValid = (dateStr) => {
    const currentDate = new Date();
    const inputDate = new Date(dateStr);
    return currentDate >= inputDate;
  };

  return (
    <div>
      <Navbar userId={userId}/>
      <TableContainer component={Paper} style={tableContainerStyle}>
        <Table aria-label="basic table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: columnWidths.productId}}>Appointment ID</TableCell>
              <TableCell style={{ width: columnWidths.name }}>Name</TableCell>
              <TableCell style={{ width: columnWidths.date }}>Service Center</TableCell>
              <TableCell style={{ width: columnWidths.timings }}>
                Date of Appointment
              </TableCell>
              <TableCell style={{ width: columnWidths.edit }}>Edit</TableCell>
              <TableCell style={{ width: columnWidths.delete }}>
                Delete
              </TableCell>
              <TableCell style={{ width: columnWidths.billGen }}>
                Generated Bill
              </TableCell>
              <TableCell style={{ width: columnWidths.review }}>
                Review
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {userAppointments.map((appointment) => (
    <TableRow key={appointment.id}>
      <TableCell>{appointment.productId}</TableCell>
      <TableCell>{appointment.productName}</TableCell>
      <TableCell>{appointment.serviceCenterName}</TableCell>
      <TableCell>{appointment.availableSlots}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
          onClick={() => handleOpen(appointment)} // Pass the productId when opening the modal
        >
          <strong>Edit</strong>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="outlined"
          style={{ color: "red", borderColor: "red" }}
          onClick={() => handleOpenDeleteConfirmation(appointment.productId)} // Open confirmation dialog
        >
          <strong>Delete</strong>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="outlined"
          style={{
            color: "black",
            borderColor: "black",
            pointerEvents: isDateValid(appointment.date) ? "auto" : "auto",
            backgroundColor: isDateValid(appointment.date)
              ? "white"
              : "#c4c4c4",
          }}
          disabled={!isDateValid(appointment.date)}
          title={
            isDateValid(appointment.date)
              ? "Click to Generate Bill"
              : "Generated bill will be provided only after service"
          }
          onClick={() => handleGenerateBillClick([appointment])}
        >
          <strong>Generate Bill</strong>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          style={{
            borderColor: "#fcde32",
            backgroundColor: isDateValid(appointment.date)
              ? "#fcde32"
              : "#c4c4c4",
          }}
          onClick={handleReviewOpen}
          disabled={!isDateValid(appointment.date)}
          title={
            isDateValid(appointment.date)
              ? "Click to Generate Bill"
              : "Generated bill will be provided only after service"
          }
        >
          <strong>Review</strong>
        </Button>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
      {/* Render the Dialog component */}
      <EditBookingModal 
        open={open} 
        handleClose={handleClose} 
        productId={editProductId} 
        setUserAppointments={setUserAppointments}
        updateAppointments={updateAppointments}
        serviceCenterName={Appointment.serviceCenterName}
        showSuccessSnackbar={showSuccessSnackbar}
        hideSuccessSnackbar={hideSuccessSnackbar}
        />
        {/* Snackbar for "Edited successfully!" */}
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={6000}
        onClose={hideSuccessSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={hideSuccessSnackbar} severity="success" style={{ backgroundColor: "#5EBA7D", color: "white" }}>
          Edited successfully! Kindly refresh page.
        </Alert>
      </Snackbar>

      {/* Snackbar for "Kindly refresh page" */}
      <ReviewModal reviewOpen={reviewOpen} handleClose={handleReviewClose} />
      <Dialog
  open={deleteConfirmationOpen}
  onClose={handleCloseDeleteConfirmation}
>
  <DialogTitle>Confirm Deletion</DialogTitle>
  <DialogContent>
    Are you sure you want to delete this appointment?
  </DialogContent>
  <DialogActions>
    <Button
      onClick={handleCloseDeleteConfirmation}
      color="primary"
    >
      Cancel
    </Button>
    <Button
      onClick={() => {
        handleCancelAppointment(deletingProductId); // Perform the delete action
        handleCloseDeleteConfirmation(); // Close the confirmation Dialog
      }}
      color="primary"
      variant="contained"
      style={{ backgroundColor: "red", color: "white" }}
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>

    </div>
  );
}
