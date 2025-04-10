import { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import 'dayjs/locale/fr';
import { TextField } from '@mui/material';
import useEmployee from '../../hooks/useEmployee';

const textFieldStyle = {
  backgroundColor: 'whitesmoke',
  width: '85%',
  borderRadius: '4px',
  marginTop: '1rem',
};
const datePickerStyle = {
  ...textFieldStyle,
};

export const DatePickerComponent = () => {
  const { ValideDateOfBirthRes, ValideStartDateRes } = useEmployee();

  const [date, setDate] = useState(null);
  const [value, setValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <DatePicker
        // label="Dash separator"
        // value={date}
        format="DD/MM/YYYY"
        // defaultValue={dayjs(new Date())}
        onChange={(newDate) => setDate((d) => (d = newDate))}
        sx={datePickerStyle}
        slotProps={{
          textField: {
            placeholder: 'Date of Birth',
            color: 'black',
            required: true,
            error: ValideDateOfBirthRes?.isNoValid || false,
            helperText: ValideDateOfBirthRes?.message || '',
          },
        }}
      />
      <DatePicker
        // label="Dash separator"
        // value={date}

        renderInput={(params) => <TextField {...params} required />}
        format="DD/MM/YYYY"
        // defaultValue={dayjs(new Date())}
        onChange={(newDate) => setDate((d) => (d = newDate))}
        sx={datePickerStyle}
        slotProps={{
          textField: {
            placeholder: 'start-date',
            color: 'black',
            required: true,
            error: ValideStartDateRes?.isNoValid || false,
            helperText: ValideStartDateRes?.message || '',
          },
        }}
      />
    </LocalizationProvider>
  );
};
