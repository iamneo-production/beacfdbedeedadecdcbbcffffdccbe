import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AdminNavbar from './AdminNavBar';
import { Typography, Fab } from '@mui/material';
import { saveAs } from "file-saver";
import 'jspdf-autotable'; // Import the autoTable plugin
import jsPDF from "jspdf";
import AddIcon from '@mui/icons-material/Add';
import Footer from '../Footer';

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

    const headers = columns.map((column) => column.headerName);

    const tableData = appointments.map((appointment) =>
      columns.map((column) => appointment[column.field])
    );

    pdf.autoTable({
      head: [headers],
      body: tableData,
      startY: 20,
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
            style={{ marginBottom: "60px" }}
          />
        </div>
        <Fab
          color="primary"
          aria-label="Generate Report"
          style={{
            position: 'fixed',
            backgroundColor: 'black',
            bottom: '20px',
            right: '20px',
            width: '100px',
            height: '90px',
            borderRadius: '10px',
            transition: 'transform 0.2s, font-size 0.2s',
            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.8)', // Add drop shadow
          }}
          onClick={createPdf}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Enlarge the button on hover
            e.currentTarget.style.fontSize = '14px'; // Enlarge the font size on hover
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.fontSize = '14px'; // Restore the original font size on hover out
          }}
        >
          Generate Report
        </Fab>
      </div>
      {/* <Footer style={{ marginBottom: '30px' }} /> */}
    </div>
  );
};

export default AdminAppointmentView;
