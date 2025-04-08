import { configureStore } from '@reduxjs/toolkit';


// import UserProfileReducer from './slices/user/userProfile';
import employeeProfileReducer from './slices/employee/employeeProfile';


const store = configureStore({
  reducer: {
    // UserProfileReducer,
    employeeProfileReducer,
  },
});

export default store;
