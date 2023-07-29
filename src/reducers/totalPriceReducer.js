// store/totalPriceReducer.js

const initialState = 0;

const totalPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOTAL_PRICE':
      return action.payload;
    default:
      return state;
  }
};

export default totalPriceReducer;
