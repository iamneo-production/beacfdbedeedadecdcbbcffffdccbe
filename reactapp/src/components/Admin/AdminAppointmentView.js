import React from 'react';
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

const rows = [
    {
      id: 1,
      name: 'John Doe',
      vacuumModel: 'Model A',
      service: 'Repair',
      pricePaid: 100,
      location: 'New York',
      date: '2023-09-07',
      review: 4,
    },
    {
      id: 2,
      name: 'Alice Smith',
      vacuumModel: 'Model B',
      service: 'Maintenance',
      pricePaid: 75,
      location: 'Los Angeles',
      date: '2023-09-08',
      review: 5,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      vacuumModel: 'Model C',
      service: 'Installation',
      pricePaid: 150,
      location: 'Chicago',
      date: '2023-09-09',
      review: 3,
    },
    {
      id: 4,
      name: 'Emily Davis',
      vacuumModel: 'Model D',
      service: 'Cleaning',
      pricePaid: 80,
      location: 'Houston',
      date: '2023-09-10',
      review: 4.5,
    },
    {
      id: 5,
      name: 'James Wilson',
      vacuumModel: 'Model E',
      service: 'Repair',
      pricePaid: 120,
      location: 'Miami',
      date: '2023-09-11',
      review: 4.2,
    },
  ];
  

  const AdminAppointmentView = () => {
    return (
        <div>
            <AdminNavbar />
            <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          style={{ marginTop: '3%' }} // Add margin-top
        >
          Appointments
        </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ height: 400, width: '90%' }}>
          <DataGrid
            rows={rows}
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
