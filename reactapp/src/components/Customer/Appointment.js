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
} from "@mui/material";
import Navbar from "../Navbar";
import EditBookingModal from "./EditBookingModal";
import ReviewModal from "./ReviewModal";
import { generatePDF } from "./BillGenerator";
import { useParams } from "react-router-dom";

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
          onClick={() => handleCancelAppointment(appointment.productId)}
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
        serviceCenterName={serviceCenterName}
        />
      <ReviewModal reviewOpen={reviewOpen} handleClose={handleReviewClose} />
    </div>
  );
}
