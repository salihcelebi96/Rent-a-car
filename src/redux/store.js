import { configureStore, combineReducers } from '@reduxjs/toolkit';
import selectedCarReducer from '../reducers/selectedCarReducer';
import totalPriceReducer from '../reducers/totalPriceReducer';
import paymentReducer from '../reducers/paymentReducer';

const rootReducer = combineReducers({
  selectedCar: selectedCarReducer,
  totalPrice: totalPriceReducer,
  paymentReducer:paymentReducer
});


const store = configureStore({
  reducer: rootReducer,
  
});

export default store;
