import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AdminNavbar from './AdminNavBar';
import { Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'Unique Id', width: 150 },
  { field: 'name', headerName: 'Name of Customer', width: 200 },
  { field: 'vacuumModel', headerName: 'Vacuum Model', width: 150 },
  { field: 'service', headerName: 'Service Sought', width: 200 },
  { field: 'pricePaid', headerName: 'Price Paid', width: 150 },
  { field: 'location', headerName: 'Location', width: 150 },
  { field: 'date', headerName: 'Date of Appointment', width: 200 },
  { field: 'review', headerName: 'Review (out of 5)', width: 150 },
];

const AdminAppointmentView = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data from your API
    fetch(`https://8080-beacfdbedeedadecdcbbcffffdccbe.premiumproject.examly.io/admin/appointment`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of appointment objects
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
