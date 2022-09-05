const servicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SERVICES':
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default servicesReducer;
