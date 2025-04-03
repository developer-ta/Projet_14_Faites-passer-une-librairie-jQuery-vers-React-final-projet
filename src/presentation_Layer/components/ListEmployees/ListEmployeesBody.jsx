import './ListEmployeesBody.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { Box, Button, Container } from '@mui/material';
import { useState } from 'react';

export default function ListEmployeesBody() {
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(null);

  return (
    <main className="main-ListEmployeesBody">
 
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
    </main>
  );
}
