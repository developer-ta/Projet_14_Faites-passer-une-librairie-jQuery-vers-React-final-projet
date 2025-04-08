import { useState } from 'react';
import 'dayjs/locale/fr';
import { Autocomplete, Box, Button, Container, InputBase, TextField } from '@mui/material';
import {  InputLabel, Input } from '@mui/material';


const states = [
  {
    label: 'Alabama',
    abbreviation: 'AL',
  },
  {
    label: 'Alaska',
    abbreviation: 'AK',
  },
  {
    label: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    label: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    label: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    label: 'California',
    abbreviation: 'CA',
  },
  {
    label: 'Colorado',
    abbreviation: 'CO',
  },
  {
    label: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    label: 'Delaware',
    abbreviation: 'DE',
  },
  {
    label: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    label: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    label: 'Florida',
    abbreviation: 'FL',
  },
  {
    label: 'Georgia',
    abbreviation: 'GA',
  },
  {
    label: 'Guam',
    abbreviation: 'GU',
  },
  {
    label: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    label: 'Idaho',
    abbreviation: 'ID',
  },
  {
    label: 'Illinois',
    abbreviation: 'IL',
  },
  {
    label: 'Indiana',
    abbreviation: 'IN',
  },
  {
    label: 'Iowa',
    abbreviation: 'IA',
  },
  {
    label: 'Kansas',
    abbreviation: 'KS',
  },
  {
    label: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    label: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    label: 'Maine',
    abbreviation: 'ME',
  },
  {
    label: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    label: 'Maryland',
    abbreviation: 'MD',
  },
  {
    label: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    label: 'Michigan',
    abbreviation: 'MI',
  },
  {
    label: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    label: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    label: 'Missouri',
    abbreviation: 'MO',
  },
  {
    label: 'Montana',
    abbreviation: 'MT',
  },
  {
    label: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    label: 'Nevada',
    abbreviation: 'NV',
  },
  {
    label: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    label: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    label: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    label: 'New York',
    abbreviation: 'NY',
  },
  {
    label: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    label: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    label: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    label: 'Ohio',
    abbreviation: 'OH',
  },
  {
    label: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    label: 'Oregon',
    abbreviation: 'OR',
  },
  {
    label: 'Palau',
    abbreviation: 'PW',
  },
  {
    label: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    label: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    label: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    label: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    label: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    label: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    label: 'Texas',
    abbreviation: 'TX',
  },
  {
    label: 'Utah',
    abbreviation: 'UT',
  },
  {
    label: 'Vermont',
    abbreviation: 'VT',
  },
  {
    label: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    label: 'Virginia',
    abbreviation: 'VA',
  },
  {
    label: 'Washington',
    abbreviation: 'WA',
  },
  {
    label: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    label: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    label: 'Wyoming',
    abbreviation: 'WY',
  },
];
const textFieldStyle = {
  backgroundColor: 'whitesmoke',
  width: '85%',
  borderRadius: '4px',
  marginTop: '1rem',
};

export const AddressComponent = () => {
  const [selectedData, setSelectedData] = useState(states[0]);
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <TextField id="street" placeholder="Street" size="small" sx={textFieldStyle} />
      <TextField id="city" placeholder="City" size="small" sx={textFieldStyle} />
      <Box
        display={'flex'}
        justifyContent={'space-around'}
        width={'100%'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <InputLabel className={'inputLabel'}>State</InputLabel>{' '}
        <Autocomplete
          id="state"
          size="small"
          options={states}
          sx={{
            backgroundColor: 'whitesmoke',
            width: '85%',
            borderRadius: '4px',
          }}
          renderInput={(params) => <TextField {...params} />}
          onChange={(e, newValue) => {
            setSelectedData(newValue.label);
          }}
          value={selectedData}
        />
        <InputLabel className={'inputLabel'}>Zip Code</InputLabel>{' '}
        <Input
          id="zip-code"
          type="number"
          placeholder="94320"
          disableUnderline="false"
          sx={{
            backgroundColor: 'whitesmoke',
            width: '65%',
            borderRadius: '4px',
          }}
        ></Input>
      </Box>
    </fieldset>
  );
};
