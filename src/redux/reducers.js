const initialState = {
  someData: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        someData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
