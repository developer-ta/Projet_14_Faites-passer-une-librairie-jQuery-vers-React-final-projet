import './ListEmployeesBody.scss';

import Paper from '@mui/material/Paper';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EmployeeProfile from '../../../domain_Layer/employee';
import { useCallback, useMemo } from 'react';
import { Box, Typography } from '@mui/material';

const columns = [
  // { field: 'id', headerName: 'index', width:70, headerAlign: 'center-header', type: 'number' },
  { field: 'firstName', headerName: 'First name', type: 'string' },
  { field: 'lastName', headerName: 'Last name', type: 'string' },
  {
    field: 'startDate',
    headerName: 'Start Date',
    type: 'number',
   
  },
  {
    field: 'department',
    headerName: 'Department',
    type: 'string',
  
    
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of Birth',
    type: 'number',
   
  },

  {
    field: 'street',
    headerName: 'Street',
    type: 'number',
   
  },
  {
    field: 'city',
    headerName: 'City',
    type: 'string',

  },
  {
    field: 'state',
    headerName: 'State',
    type: 'number',
    width: 90,
  },
  {
    field: 'Zip Code',
    headerName: 'zipCode',
    type: 'number',
    
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    startDate: 35,
    department: 'dd',
    street: '1 mail de Savoie',
    city: 'Thiais',
    state: 112,
    zipCode: 94320,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const rowsConstructor = useCallback((list) =>
    list.map(
      (el, index) =>
        new EmployeeProfile(
          index,
          el.lastName,
          el.firstName,
          el.startDate,
          el.department,
          el.dateOfBirth,
          el.street,
          el.city,
          el.state,
          el.zipCode
        )
    )
  );
  return (
    // <main className="container">
    //   {' '}
    //   <Paper sx={{ height: 500, width: '85%' }}>
    //     <DataGrid
    //       rows={rowsConstructor(rows)}
    //       columns={columns}
    //       initialState={{ pagination: { paginationModel } }}
    //       pageSizeOptions={[5, 10]}
    //       slots={{ toolbar: GridToolbar }}
    //       slotProps={{
    //         toolbar: {
    //           showQuickFilter: true,
    //         },
    //       }}
    //       sx={{ border: 0, textAlign: 'center' }}
    //     />
    //   </Paper>
    // </main>
    <main className="container">
      {' '}
      <Box sx={{ height: 500, width: '95%' }}>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
          Current Employees
        </Typography>
        <DataGrid
          rows={rowsConstructor(rows)}
          columns={columns}
          // checkboxSelection
           initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          getRowId={(row) => row.id}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          sx={{ boxShadow: '0 0px 8px 0  rgb(209, 212, 212);', textAlign: 'center' ,background:'rgba(238, 239, 239, 0.62)'}}
        />
      </Box>
    </main>
  );
}
