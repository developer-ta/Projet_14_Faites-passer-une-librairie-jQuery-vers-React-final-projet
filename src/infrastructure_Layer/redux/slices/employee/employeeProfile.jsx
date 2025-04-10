import { createSlice } from '@reduxjs/toolkit';


const employeeProfileSlice = createSlice({
  name: 'employee',
  initialState: { employeeProfile: [] },
  reducers: {
 
    addEmployee: function (state, action) {
      const { payload } = action;

      state.employeeProfile.push(payload);
    
    },
  },
});

export const { addEmployee } = employeeProfileSlice.actions;

const profileReducer = employeeProfileSlice.reducer;
export default profileReducer;
