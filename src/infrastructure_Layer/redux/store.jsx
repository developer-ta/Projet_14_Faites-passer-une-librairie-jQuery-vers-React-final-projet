import { configureStore } from '@reduxjs/toolkit';


import UserProfileReducer from './slices/user/userProfile';


const store = configureStore({
  reducer: {
    UserProfileReducer,
  },
});

export default store;
