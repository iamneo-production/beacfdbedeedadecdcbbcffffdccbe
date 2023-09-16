import React, { useState } from "react";
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

const rows = [
  {
    id: 1,
    name: "John Doe",
    date: "2023-08-15",
    timings: "10:00 AM - 11:00 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2023-09-16",
    timings: "2:00 PM - 3:00 PM",
  },
  // Add more rows as needed
];

const tableContainerStyle = {
  marginTop: "50px",
  marginBottom: "20px", // If you want some margin at the bottom
  maxWidth: "90%",
  textAlign: "center",
  marginLeft: "auto", // Auto margin on the left
  marginRight: "auto", // Auto margin on the right
};

const columnWidths = {
  name: "30%", // Adjust the width of the 'Name' column
  date: "20%", // Adjust the width of the 'Date' column
  timings: "20%",
  edit: "5%",
  delete: "5%",
  billGen: "5%",
  review: "5%", // Adjust the width of the 'Timings' column
};

const handleGenerateBillClick = () => {
  // Call the generatePDF function from the BillGenerator component
  generatePDF(); // This assumes that BillGenerator has a generatePDF function
};

export default function Appointment() {
  const [open, setOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const handleOpen = () => {
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

  // Function to check if a date is greater than or equal to the current date
  const isDateValid = (dateStr) => {
    const currentDate = new Date();
    const inputDate = new Date(dateStr);
    return currentDate >= inputDate;
  };

  return (
    <div>
      <Navbar />
      <TableContainer component={Paper} style={tableContainerStyle}>
        <Table aria-label="basic table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: columnWidths.name }}>Name</TableCell>
              <TableCell style={{ width: columnWidths.date }}>Date</TableCell>
              <TableCell style={{ width: columnWidths.timings }}>
                Timings
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.timings}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    style={{ color: "black", borderColor: "black" }}
                    onClick={handleOpen} // Open the dialog on Edit button click
                  >
                    <strong>Edit</strong>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    style={{ color: "red", borderColor: "red" }}
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
                      pointerEvents: isDateValid(row.date) ? "auto" : "auto",
                      backgroundColor: isDateValid(row.date)
                        ? "white"
                        : "#c4c4c4", // Change the background color
                    }}
                    disabled={!isDateValid(row.date)}
                    title={
                      isDateValid(row.date)
                        ? "Click to Generate Bill"
                        : "Generated bill will be provided only after service"
                    }
                    onClick={handleGenerateBillClick}
                  >
                    <strong>Generate Bill</strong>
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{
                      borderColor: "#fcde32",
                      backgroundColor: isDateValid(row.date)
                        ? "#fcde32"
                        : "#c4c4c4",
                    }}
                    onClick={handleReviewOpen}
                    disabled={!isDateValid(row.date)}
                    title={
                      isDateValid(row.date)
                        ? "Click to Generate Bill"
                        : "Generated bill will be provided only after service"
                    }
                    // Open the dialog on Edit button click
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
      <EditBookingModal open={open} handleClose={handleClose} />
      <ReviewModal reviewOpen={reviewOpen} handleClose={handleReviewClose} />
    </div>
  );
}
