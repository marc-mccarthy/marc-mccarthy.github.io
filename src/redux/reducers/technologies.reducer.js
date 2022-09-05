const technologiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TECHNOLOGIES':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default technologiesReducer;
