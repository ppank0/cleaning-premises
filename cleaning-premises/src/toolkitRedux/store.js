import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import brigadeReducer from './brigadeSlice';
import brigadeSlice from './brigadeSlice';

const rootReducer = combineReducers({
    brigade: brigadeSlice
})
const store = configureStore({
  reducer: rootReducer,
});

export default store;