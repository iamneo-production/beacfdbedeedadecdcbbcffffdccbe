import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AdminNavbar from './AdminNavBar';
import { Typography } from '@mui/material';

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
          />
        </div>
      </div>
    </div>
  );
};

export default AdminAppointmentView;
