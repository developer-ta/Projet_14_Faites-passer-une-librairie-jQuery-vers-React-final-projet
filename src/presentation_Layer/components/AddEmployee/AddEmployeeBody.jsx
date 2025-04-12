import './AddEmployeeBody.scss';

import { Button, TextField } from '@mui/material';

import { AddressComponent } from './AddressComponent';
import { DepartmentSelectComponent } from './DepartmentSelectComponent';
import { DatePickerComponent } from './DatePickerComponent';
import { Save } from '@mui/icons-material';
 import { Modal } from 'tui-react-bib/src/component/index.jsx';
 import useEmployee from '../../hooks/useEmployee';
 // import Modal from '../modal/TuiReactModal';

 const textFieldStyle = {
   backgroundColor: 'whitesmoke',
   width: '85%',
   borderRadius: '4px',
   marginTop: '1rem',
 };

 export default function AddEmployeeBody() {
   const {
     setProfile,
     isVisible,
     ValideFirstNameRes,
     ValideLastNameRes,
     ValideCityRes,
     ValideZipCodeRes,
   } = useEmployee();

   return (
     <>
       <Modal visibility={isVisible} message={'Employee Created!'} />
       <main className="main-AddEmployee container">
         <h3>Create Employee</h3>
         <form
           action="#"
           id="create-employee"
           onSubmit={(e) => {
             setProfile(e);
           }}
         >
           <TextField
             error={ValideFirstNameRes?.isNoValid || false}
             helperText={ValideFirstNameRes?.message || ''}
             required
             id="first-name"
             placeholder="First Name"
             size="small"
             sx={textFieldStyle}
           />

           <TextField
             error={ValideLastNameRes?.isNoValid || false}
             helperText={ValideLastNameRes?.message || ''}
             required
             id="last-name"
             placeholder="Last Name"
             size="small"
             sx={textFieldStyle}
           />
           <DatePickerComponent />
           <AddressComponent ValideCityRes={ValideCityRes} ValideZipCodeRes={ValideZipCodeRes} />
           <DepartmentSelectComponent />

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
     </>
   );
 }
