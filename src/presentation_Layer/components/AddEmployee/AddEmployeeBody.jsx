import './AddEmployeeBody.scss';

import { Button, TextField } from '@mui/material';

import { AddressComponent } from './AddressComponent';
import { DepartmentSelectComponent } from './DepartmentSelectComponent';
import { DatePickerComponent } from './DatePickerComponent';
import { Save } from '@mui/icons-material';
import { Modal } from 'tui-react-bib/src/component/index.jsx';
import useEmployee from '../../hooks/useEmployee';

const textFieldStyle = {
  backgroundColor: 'whitesmoke',
  width: '85%',
  borderRadius: '4px',
  marginTop: '1rem',
};

export default function AddEmployeeBody() {
  const { setProfile, isFirstNameValid } = useEmployee();
  return (
    <main className="main-AddEmployee container">
      <h3>Create Employee</h3>
      <form
        action="#"
        id="create-employee"
        onSubmit={(e) => {
          console.log(' e.target.elements: ', e.target.elements);
          console.log(' e.target.elements[15]: ', e.target.elements[15].value);
          console.log(' e.target.elements[1]: ', e.target.elements[1].validity.valid);
        }}
      >
        <TextField
          error={isFirstNameValid}
          helperText
          required
          id="first-name"
          placeholder="First Name"
          size="small"
          sx={textFieldStyle}
          onChange={(val) => console.log(val.target.value)}
        />
        <TextField
          required
          error
          id="last-name"
          placeholder="Last Name"
          size="small"
          sx={textFieldStyle}
        />
        <DatePickerComponent />
        <AddressComponent />
        <DepartmentSelectComponent />
        <Modal></Modal>

        <Button
          variant="contained"
          type="submit"
          onClick={() => {}}
          sx={{ marginTop: '10px', width: '130px', fontSize: '19px' }}
          startIcon={<Save />}
        >
          Save
        </Button>
      </form>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
    </main>
  );
}
