import { createStore } from 'redux';

// Define an initial state
const initialState = {
  itemName: '',
  bidAmount: ''
};

// Define a reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ITEM_NAME':
      return { ...state, itemName: action.payload };
    case 'SET_BID_AMOUNT':
      return { ...state, bidAmount: action.payload };
    default:
      return state;
  }
}

// Create the store
const store = createStore(reducer);

export default store;
