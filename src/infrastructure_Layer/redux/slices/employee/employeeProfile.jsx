import { createSlice } from '@reduxjs/toolkit';
import EmployeeProfile from '../../../../domain_Layer/employee';

const employeeProfileSlice = createSlice({
  name: 'employeeProfile',
  initialState: { employeeProfile: [] },
  reducers: {
 
    addEmployee: function (state, action) {
      const { payload } = action;

      state.employeeProfile.push(payload);
      console.log('stateyyyyyy: ', state.employeeProfile);
    },
  },
});

export const { addEmployee } = employeeProfileSlice.actions;

const profileReducer = employeeProfileSlice.reducer;
export default profileReducer;
