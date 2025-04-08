import { createSlice } from '@reduxjs/toolkit';
import EmployeeProfile from '../../../../domain_Layer/employee';

const employeeProfileSlice = createSlice({
  name: 'employeeProfile',
  initialState: { employees: [] },
  reducers: {
    // setProfile: function (state, action) {
    //   const { payload } = action;

    //   state.employees = payload;
    // },
    // updateProfile: function (state, action) {
    //   const { firstName, lastName,dateOfBirth} = action.payload;

    //   state.employees.firstName = firstName;
    //   state.employees.lastName = lastName;
    //   state.employees.id = id;
    // },
    addEmployee: function (state, action) {
      const { payload } = action;

      state.employees.push(payload);
    },
  },
});

export const { addEmployee } = employeeProfileSlice.actions;

const profileReducer = employeeProfileSlice.reducer;
export default profileReducer;
