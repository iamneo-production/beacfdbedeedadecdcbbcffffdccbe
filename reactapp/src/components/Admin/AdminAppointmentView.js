import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AdminNavbar from './AdminNavBar';
import { Typography, Fab } from '@mui/material';
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: 'productId', headerName: 'Product ID', width: 150 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'productModelNo', headerName: 'Product Model No', width: 200 },
  { field: 'dateOfPurchase', headerName: 'Date of Purchase', width: 200 },
  { field: 'mobileNumber', headerName: 'Mobile Number', width: 150 },
  { field: 'productDescription', headerName: 'Product Description', width: 200 },
  { field: 'availableSlots', headerName: 'Available Slots', width: 200 },
];

const AdminAppointmentView = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from your API
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/appointment`) // Update the URL
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of product objects
        console.log('API Response:', data);
        setAppointments(data);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const getRowId = (row) => row.productId;

  const createPdf = () => {
    const pdf = new jsPDF();

    pdf.text("Appointments", 10, 10);

    appointments.forEach((appointment, index) => {
      const yOffset = 20 + index * 10;
      pdf.text(`Product ID: ${appointment.productId}`, 10, yOffset);
      pdf.text(`Product Name: ${appointment.productName}`, 10, yOffset + 5);
      pdf.text(`Model No: ${appointment.productModelNo}`, 10, yOffset + 10);
      pdf.text(`Date of Purchase: ${appointment.dateOfPurchase}`, 10, yOffset + 15);
      pdf.text(`Mobile Number: ${appointment.mobileNumber}`, 10, yOffset + 20);
      pdf.text(`Description: ${appointment.productDescription}`, 10, yOffset + 25);
      pdf.text(`Available Slots: ${appointment.availableSlots}`, 10, yOffset + 30);
    });

    pdf.save("appointments.pdf");
  };

  return (
    <div>
      <AdminNavbar />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
        style={{ marginTop: '3%' }}
      >
        Appointments
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ height: 400, width: '90%' }}>
          <DataGrid
            rows={appointments} // Use the fetched data for rows
            columns={columns}
            pageSize={5}
            checkboxSelection
            getRowId={getRowId}
          />
        </div>
        <Fab
          color="primary"
          aria-label="Generate PDF"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
          onClick={createPdf}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default AdminAppointmentView;
