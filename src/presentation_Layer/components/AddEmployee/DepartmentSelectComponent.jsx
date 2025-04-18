import { useState } from 'react';

import 'dayjs/locale/fr';
import { Autocomplete, Box, TextField } from '@mui/material';
import { InputLabel } from '@mui/material';

const department = ['Sales', 'Marketing', 'Engineering', 'Human ResourcesLegal', 'Legal'];

export const DepartmentSelectComponent = () => {

  const [selectedData, setSelectedData] = useState(department[0]);
  return (
    <Box
      display={'flex'}
      justifyContent={'space-around'}
      width={'100%'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <InputLabel className={'inputLabel'}>Department</InputLabel>{' '}
      <Autocomplete
        id="department"
        size="small"
        options={department}
        sx={{
          backgroundColor: 'whitesmoke',
          width: '85%',
          borderRadius: '4px',
        }}
        renderInput={(params) => <TextField {...params} />}
        value={selectedData}
        onChange={(e, newValue) => {
          setSelectedData(newValue);
        }}
      />
    </Box>
  );
};
