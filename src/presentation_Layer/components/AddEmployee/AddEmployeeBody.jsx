import './AddEmployeeBody.scss';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerComponent } from './DatePickerComponent';

import { TextField } from '@mui/material';
import { FormControl, InputLabel, Input } from '@mui/material';
import { AddressComponent } from './AddressComponent';
import { DepartmentSelectComponent } from './DepartmentSelectComponent';


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
    </main>
  );
}
