 import './ListEmployeesBody.scss';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const columns = [
  // { field: 'id', headerName: 'index', width:70, headerAlign: 'center-header', type: 'number' },
  // { field: 'id', headerName: 'Id', type: 'number' },
  { field: 'firstName', headerName: 'First name', type: 'string', width: 100 },
  { field: 'lastName', headerName: 'Last name', type: 'string', width: 100 },
  {
    field: 'startDate',
    headerName: 'Start Date',
    type: 'number',
    width: 100,
  },
  {
    field: 'department',
    headerName: 'Department',
    type: 'string',
    width: 100,
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of Birth',
    type: 'number',
    width: 100,
  },

  {
    field: 'street',
    headerName: 'Street',
    type: 'number',
    width: 100,
  },
  {
    field: 'city',
    headerName: 'City',
    type: 'string',
    width: 100,
  },
  {
    field: 'state',
    headerName: 'State',
    type: 'number',
    width: 100,
    // width: 90,
  },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    type: 'number',
    width: 100,
  },
];

export default function DataTable() {

  const { employeeProfile } = useSelector((state) => state.employeeProfileReducer);

  const rowsConstructor = useCallback(
    (list) =>
      list.map((el, index) => {
        return { ...el, id: `${index}-${el.firstName}-${el.lastName}-(${el.state})` };
      }),
    []
  );


  return (
    <main className="container">
      {' '}
      <Box sx={{ height: 500, width: '95%' }}>
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
          Current Employees
        </Typography>

        <DataGrid
          rows={rowsConstructor(employeeProfile)}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          getRowId={(row, index) => `${index}-${row.firstName}-${row.lastName}-(${row.state})`}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          sx={{
            boxShadow: '0 0px 8px 0  rgb(209, 212, 212);',
            textAlign: 'center',
            background: 'rgba(238, 239, 239, 0.62)',
          }}
        />
      </Box>
    </main>
  );
}
