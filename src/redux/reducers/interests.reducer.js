const interestsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'INTERESTS_REDUCER':
      console.log(action.payload);
      return action.payload;
    case 'RESET_FORM':
      return state = {};
    default:
      return state;
  }
};

export default interestsReducer;
