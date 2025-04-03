import './AddEmployeeBody.scss';

import { Button, IconButton, TextField } from '@mui/material';
import { FormControl, InputLabel, Input } from '@mui/material';
import { AddressComponent } from './AddressComponent';
import { DepartmentSelectComponent } from './DepartmentSelectComponent';
import { DatePickerComponent } from './DatePickerComponent';
import { Save } from '@mui/icons-material';

const textFieldStyle = {
  backgroundColor: 'whitesmoke',
  width: '85%',
  borderRadius: '4px',
  marginTop: '1rem',
};

export default function AddEmployeeBody() {
  return (
    <main className="main-AddEmployee container">
      <h3>Create Employee</h3>
      <form action="#" id="create-employee">
        <TextField id="first-name" placeholder="First Name" size="small" sx={textFieldStyle} />
        <TextField id="last-name" placeholder="Last Name" size="small" sx={textFieldStyle} />
        <DatePickerComponent />
        <AddressComponent />
        <DepartmentSelectComponent />
      </form>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
      <Button
        variant="contained"
        onClick={() => {}}
        sx={{ marginTop: '10px',width:'130px', fontSize:'19px'}}
        startIcon={<Save></Save>}
      >
        Save
      </Button>
    </main>
  );
}
