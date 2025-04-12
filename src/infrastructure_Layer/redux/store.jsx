import { configureStore } from '@reduxjs/toolkit';

import employeeProfileReducer from './slices/employee/employeeProfile';


const store = configureStore({
  reducer: {
  
    employeeProfileReducer,
  },
});

export default store;
