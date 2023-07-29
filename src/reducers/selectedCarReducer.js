// store/selectedCarReducer.js

const initialState = null;

const selectedCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CAR':
      return action.payload;
    default:
      return state;
  }
};

export default selectedCarReducer;
